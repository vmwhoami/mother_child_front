import React from 'react';
import renderer from 'react-test-renderer';
import Loading from '../components/component/Loading';

it('renders Loading  correctly', () => {
  const tree = renderer.create(<Loading />);
  expect(tree).toMatchSnapshot();
});
