import React from 'react';
import renderer from 'react-test-renderer';
import Loading from '../components/comp/Loading';

it('renders Loading  correctly', () => {
  const tree = renderer.create(<Loading />);
  expect(tree).toMatchSnapshot();
});