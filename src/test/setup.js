import '@testing-library/jest-dom/vitest'

// jsdom does not implement IntersectionObserver, which Framer Motion's
// whileInView animations require. Minimal no-op polyfill so components using
// it can mount in tests without crashing; real intersection behavior is
// covered by manual/e2e browser testing, not unit tests.
if (typeof globalThis.IntersectionObserver === 'undefined') {
  globalThis.IntersectionObserver = class IntersectionObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
}

// jsdom does not implement Element.scrollIntoView, used by the Contact page's
// error-alert-focus behavior. Minimal no-op polyfill so components using it
// can mount and run in tests without crashing; real scroll behavior is
// covered by manual/e2e browser testing, not unit tests.
if (typeof Element !== 'undefined' && !Element.prototype.scrollIntoView) {
  Element.prototype.scrollIntoView = function scrollIntoView() {}
}
