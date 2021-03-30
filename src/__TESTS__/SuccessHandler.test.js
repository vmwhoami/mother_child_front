import React from 'react';
import renderer from 'react-test-renderer';
import SuccessHandler from '../components/component/SuccessHandler';

const message = 'Success';

it('renders SuccessHandler correctly', () => {
  const tree = renderer.create(<SuccessHandler message={message} />);
  expect(tree).toMatchSnapshot();
});
