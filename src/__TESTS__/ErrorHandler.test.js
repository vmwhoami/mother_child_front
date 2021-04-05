import React from 'react';
import renderer from 'react-test-renderer';
import ErrorHandler from '../components/component/ErrorHandler';

const errors = ['First error', 'Second error'];

it('renders Error correctly', () => {
  const tree = renderer.create(<ErrorHandler errors={errors} />);
  expect(tree).toMatchSnapshot();
});
