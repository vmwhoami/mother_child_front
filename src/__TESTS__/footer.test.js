import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../components/component/Footer';

it('renders Footer correctly', () => {
  const tree = renderer.create(<Footer />);
  expect(tree).toMatchSnapshot();
});
