/**
 * Schema Validation Script
 * Validates Event structured data to ensure all required properties are present
 * Run: node scripts/validate-schema.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(__dirname, '../src');

// Required Event schema properties per Google guidelines
const REQUIRED_EVENT_PROPS = ['name', 'startDate', 'location'];
const RECOMMENDED_EVENT_PROPS = ['endDate', 'image', 'description', 'eventStatus', 'eventAttendanceMode', 'organizer', 'offers'];

// Required Location properties
const REQUIRED_LOCATION_PROPS = ['name'];
const RECOMMENDED_LOCATION_PROPS = ['address'];

// Required Address properties
const RECOMMENDED_ADDRESS_PROPS = ['addressLocality', 'addressCountry'];

let hasErrors = false;
let hasWarnings = false;

function logError(message) {
  console.error(`\x1b[31m❌ ERROR: ${message}\x1b[0m`);
  hasErrors = true;
}

function logWarning(message) {
  console.warn(`\x1b[33m⚠️  WARNING: ${message}\x1b[0m`);
  hasWarnings = true;
}

function logSuccess(message) {
  console.log(`\x1b[32m✅ ${message}\x1b[0m`);
}

function logInfo(message) {
  console.log(`\x1b[36mℹ️  ${message}\x1b[0m`);
}

// Find all TypeScript/JavaScript files that might contain Event data
function findEventFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      files.push(...findEventFiles(fullPath));
    } else if (item.name.endsWith('.tsx') || item.name.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Extract event data from file content using regex
function extractEventData(content, filePath) {
  const events = [];
  
  // Look for eventsData arrays
  const eventsDataMatch = content.match(/const\s+eventsData[^=]*=\s*\[([\s\S]*?)\];/);
  if (eventsDataMatch) {
    // Parse individual event objects
    const eventsBlock = eventsDataMatch[1];
    const eventMatches = eventsBlock.matchAll(/\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g);
    
    for (const match of eventMatches) {
      const eventStr = match[0];
      events.push({
        raw: eventStr,
        file: filePath,
        hasName: /name:\s*['"`]/.test(eventStr),
        hasStartDate: /startDate:\s*['"`]/.test(eventStr),
        hasEndDate: /endDate:\s*['"`]/.test(eventStr),
        hasLocation: /location:\s*\{/.test(eventStr) || /location:\s*['"`]/.test(eventStr),
        hasStructuredLocation: /location:\s*\{/.test(eventStr),
        hasImage: /image:\s*['"`]/.test(eventStr),
        hasDescription: /description:\s*['"`]/.test(eventStr),
        hasOrganizer: /organizer:\s*['"`]/.test(eventStr),
        hasPrice: /price:\s*['"`]/.test(eventStr),
        hasAddressLocality: /addressLocality:\s*['"`]/.test(eventStr),
        hasAddressCountry: /addressCountry:\s*['"`]/.test(eventStr),
      });
    }
  }
  
  // Look for EventSchema usage
  const schemaMatches = content.matchAll(/<EventSchema\s+([\s\S]*?)\/>/g);
  for (const match of schemaMatches) {
    const propsStr = match[1];
    // Check if location references an event object (e.g., event.location) which is validated separately
    const referencesEventLocation = /location=\{event\.location\}/.test(propsStr);
    events.push({
      raw: propsStr,
      file: filePath,
      isComponent: true,
      hasName: /name=/.test(propsStr),
      hasStartDate: /startDate=/.test(propsStr),
      hasEndDate: /endDate=/.test(propsStr),
      hasLocation: /location=/.test(propsStr),
      hasStructuredLocation: /location=\{\{/.test(propsStr) || referencesEventLocation,
      hasImage: /image=/.test(propsStr),
      hasDescription: /description=/.test(propsStr),
      hasOrganizer: /organizer=/.test(propsStr),
      hasOffers: /offers=/.test(propsStr),
      hasEventStatus: /eventStatus=/.test(propsStr),
      hasAddressLocality: /addressLocality/.test(propsStr) || referencesEventLocation,
      hasAddressCountry: /addressCountry/.test(propsStr) || referencesEventLocation,
    });
  }
  
  return events;
}

// Validate extracted events
function validateEvents(events) {
  let eventCount = 0;
  
  for (const event of events) {
    eventCount++;
    const label = event.isComponent ? 'EventSchema component' : 'Event data';
    const fileRef = path.relative(srcDir, event.file);
    
    logInfo(`Validating ${label} in ${fileRef}`);
    
    // Check required fields
    if (!event.hasName) {
      logError(`Missing required field 'name' in ${fileRef}`);
    }
    if (!event.hasStartDate) {
      logError(`Missing required field 'startDate' in ${fileRef}`);
    }
    if (!event.hasLocation) {
      logError(`Missing required field 'location' in ${fileRef}`);
    }
    
    // Check recommended fields
    if (!event.hasEndDate) {
      logWarning(`Missing recommended field 'endDate' in ${fileRef}`);
    }
    if (!event.hasImage) {
      logWarning(`Missing recommended field 'image' in ${fileRef}`);
    }
    if (!event.hasDescription) {
      logWarning(`Missing recommended field 'description' in ${fileRef}`);
    }
    if (!event.hasOrganizer) {
      logWarning(`Missing recommended field 'organizer' in ${fileRef}`);
    }
    
    // Check location structure
    if (event.hasLocation && !event.hasStructuredLocation) {
      logWarning(`Location should be a structured object with 'name' and 'address' in ${fileRef}`);
    }
    
    if (event.hasStructuredLocation) {
      if (!event.hasAddressLocality) {
        logWarning(`Missing recommended 'addressLocality' in location in ${fileRef}`);
      }
      if (!event.hasAddressCountry) {
        logWarning(`Missing recommended 'addressCountry' in location in ${fileRef}`);
      }
    }
    
    // Check for offers/price
    if (!event.hasOffers && !event.hasPrice) {
      logWarning(`Consider adding 'offers' with price information in ${fileRef}`);
    }
  }
  
  return eventCount;
}

// Main execution
console.log('\n🔍 Schema Validation - Checking Event Structured Data\n');
console.log('=' .repeat(60) + '\n');

const files = findEventFiles(srcDir);
let totalEvents = 0;

for (const file of files) {
  const content = fs.readFileSync(file, 'utf-8');
  
  // Skip files that don't contain event-related content
  if (!content.includes('EventSchema') && !content.includes('eventsData')) {
    continue;
  }
  
  const events = extractEventData(content, file);
  totalEvents += validateEvents(events);
}

console.log('\n' + '=' .repeat(60));
console.log(`\n📊 Summary: Validated ${totalEvents} event(s)\n`);

if (hasErrors) {
  logError('Schema validation failed - fix errors before publishing');
  process.exit(1);
} else if (hasWarnings) {
  logWarning('Schema validation passed with warnings - consider addressing them for better SEO');
  console.log('\n');
  process.exit(0);
} else {
  logSuccess('All event schemas are valid!');
  console.log('\n');
  process.exit(0);
}
