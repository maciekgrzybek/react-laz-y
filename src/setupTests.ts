window.IntersectionObserver = jest.fn(() => ({
  observe: jest.fn(),
  disconnect: jest.fn(),
  root: null,
  rootMargin: '0',
  thresholds: [1],
  takeRecords: jest.fn(),
  unobserve: jest.fn()
}));
