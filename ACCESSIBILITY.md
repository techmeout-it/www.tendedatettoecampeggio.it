# Accessibility Guidelines Implementation (WCAG 2.2)

This website has been designed and developed following the latest Web Content Accessibility Guidelines (WCAG 2.2) at Level AA compliance.

## Implemented Features

### 1. Keyboard Navigation ⌨️

- **Skip Link**: A "Skip to main content" link appears at the top of the page when using Tab key, allowing keyboard users to bypass navigation
- **Focus Indicators**: All interactive elements have visible focus indicators (3px outline with 2px offset)
- **Logical Tab Order**: All interactive elements follow a logical reading and navigation order

### 2. Semantic HTML & ARIA Labels 🏷️

- **Semantic Landmarks**: Proper use of `<header>`, `<main>`, `<nav>`, `<section>`, and `<footer>` elements
- **ARIA Labels**: All interactive elements have descriptive ARIA labels:
  - Navigation: `aria-label="Navigazione principale"`
  - Mobile menu: `aria-label="Apri menu di navigazione"` with `aria-expanded` state
  - Form inputs: `aria-describedby` and `aria-required` attributes
  - Sections: Descriptive `aria-label` for each major section
- **Decorative Icons**: Icons used for decoration have `aria-hidden="true"`

### 3. Forms Accessibility 📝

- **Visible Labels**: All form inputs have associated `<label>` elements
- **Screen Reader Support**: Hidden labels using `.sr-only` class for inputs with placeholder-based labels
- **Required Fields**: Properly marked with `required` and `aria-required="true"`
- **Error Handling**: Form validation with clear error messages
- **Descriptive Text**: Using `aria-describedby` to associate descriptions with form fields

### 4. Images & Media 🖼️

- **Alt Text**: All images have descriptive alt text
- **Lazy Loading**: Images use `loading="lazy"` for performance
- **Responsive Images**: Images adapt to different screen sizes
- **Decorative Images**: Background images for decoration only

### 5. Color & Contrast 🎨

- **Color Contrast**: All text meets WCAG AA standards (minimum 4.5:1 for normal text, 3:1 for large text)
- **Not Color Alone**: Information is not conveyed by color alone
- **Theme Color**: Meta theme-color for mobile browsers

### 6. Motion & Animation 🎬

- **Reduced Motion**: Respects user's `prefers-reduced-motion` setting
- **Smooth Scrolling**: Enabled for users who don't prefer reduced motion
- **Animation Control**: All animations can be disabled via OS settings

### 7. Screen Reader Support 📢

- **Descriptive Links**: Link text is descriptive ("Leggi l'articolo: [Title]" instead of "Click here")
- **Landmark Regions**: Proper use of semantic HTML5 landmarks
- **Hidden Content**: Screen reader-only content using `.sr-only` class
- **Live Regions**: Toast notifications for form submissions

### 8. Language & Text 📖

- **Language Declaration**: HTML `lang="it"` attribute set
- **Readable Text**: Sufficient line height and font sizes
- **Heading Hierarchy**: Proper H1-H6 structure throughout

### 9. Interactive Elements 🖱️

- **Touch Targets**: All interactive elements meet minimum size requirements (44x44px)
- **Hover & Focus**: Consistent visual feedback for both mouse and keyboard users
- **Button Labels**: All buttons have clear, descriptive text or ARIA labels

### 10. Document Structure 📄

- **Page Title**: Unique, descriptive titles for each page via react-helmet-async
- **Meta Information**: Proper meta tags for screen readers and assistive technology
- **Skip Navigation**: Quick access to main content area

## Testing Recommendations

### Manual Testing
1. **Keyboard Navigation**: Tab through entire site without using mouse
2. **Screen Reader**: Test with NVDA (Windows), JAWS (Windows), or VoiceOver (Mac/iOS)
3. **Zoom**: Test at 200% zoom level
4. **Color Blindness**: Use color blindness simulators

### Automated Testing Tools
- [axe DevTools](https://www.deque.com/axe/devtools/) - Browser extension
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Chrome DevTools
- [WAVE](https://wave.webaim.org/) - Web accessibility evaluation tool
- [Pa11y](https://pa11y.org/) - Automated accessibility testing

## Accessibility Features by Page Section

### Header
- Skip link to main content
- Keyboard-accessible navigation
- Mobile menu with ARIA labels
- Logo link with descriptive label

### Main Content
- ID attribute for skip link target
- Semantic section elements
- Descriptive headings

### Forms (Newsletter)
- Label association with inputs
- Required field indicators
- Success/error messages
- ARIA descriptions

### Footer
- Social media links with descriptive labels
- Keyboard-accessible navigation
- Proper link text

## CSS Accessibility Features

```css
/* Skip Link - Hidden until focused */
.skip-link:focus {
  top: 0;
  outline: 3px solid hsl(var(--accent));
}

/* Screen Reader Only Content */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  clip: rect(0, 0, 0, 0);
}

/* Enhanced Focus Indicators */
*:focus-visible {
  outline: 3px solid hsl(var(--ring));
  outline-offset: 2px;
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Browser & Assistive Technology Support

### Browsers
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile Safari (iOS)
- ✅ Chrome Mobile (Android)

### Screen Readers
- ✅ NVDA (Windows)
- ✅ JAWS (Windows)
- ✅ VoiceOver (macOS/iOS)
- ✅ TalkBack (Android)

## Compliance Level

This website aims to meet **WCAG 2.2 Level AA** compliance, which includes:

- ✅ **Perceivable**: Information presented in ways users can perceive
- ✅ **Operable**: UI components and navigation are operable
- ✅ **Understandable**: Information and UI operation is understandable
- ✅ **Robust**: Content works with current and future technologies

## Reporting Accessibility Issues

If you encounter any accessibility barriers while using this website, please contact us at:
- Email: info@tendedatettoecampeggio.it
- Facebook: [Community Group](https://www.facebook.com/groups/375926353544064)

We are committed to providing an accessible experience for all users.

## Resources

- [WCAG 2.2 Guidelines](https://www.w3.org/WAI/WCAG22/quickref/)
- [WebAIM Articles](https://webaim.org/articles/)
- [A11y Project](https://www.a11yproject.com/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

## Continuous Improvement

Accessibility is an ongoing process. We regularly:
- Review and update content for accessibility
- Test with real users and assistive technologies
- Stay updated with latest WCAG guidelines
- Fix reported accessibility issues promptly

Last Updated: January 2026
