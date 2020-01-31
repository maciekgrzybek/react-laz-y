import { render as rtlRender } from '@testing-library/react';
import React from 'react';
import ReactLazy from '../src';

const ChildComponent = () => <div>I am child component.</div>;

const render = (props = {}) =>
  rtlRender(
    <div style={{ height: 300 }}>
      <ReactLazy>
        <ChildComponent {...props} data-testid="child-component" />
      </ReactLazy>
    </div>
  );

describe('children element', () => {
  test("doesn't show the children element, when state is set to not-visible", () => {
    const { queryByTestId } = render();
    expect(queryByTestId('child-component')).toBeNull();
  });
  test('shows the children element, when state is set to visible', () => {});
  test('pass the props to the children component', () => {});
});

describe('intersection observer', () => {
  test('observer is being called with config passed from props', () => {
    console.log(window.IntersectionObserver);
  });
  test('callback function is being called, when state is set to visible', () => {});
});

describe('fallback', () => {
  test('renders default fallback element, when no fallback is passed by props', () => {});
  test('renders fallback passed in props', () => {});
});

describe('error handling', () => {
  test('returns correct error message when children is not passed', () => {
    // const { container } = rtlRender(<ReactLazy />);
    // expect(container).toThrowError();
  });
  test('returns correct error message when more than one child is passed', () => {});
});
