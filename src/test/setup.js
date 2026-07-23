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
