import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Doctor from '../components/component/Doctor';

const doctor = {};

const selectDoc = jest.fn();
describe('Doctor', () => {
  test('snapshot renders correctly', () => {
    const component = renderer.create(
      <BrowserRouter>
        <Doctor doctor={doctor} selectDoc={selectDoc} />
      </BrowserRouter>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
