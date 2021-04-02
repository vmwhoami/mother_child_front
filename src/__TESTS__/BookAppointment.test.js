import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookAppointment from '../components/pages/BookAppointmen';
import store from '../redux/store';

describe('Doctor', () => {
  test('snapshot renders correctly', () => {
    const component = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <BookAppointment />
        </Provider>
      </BrowserRouter>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('checks if Navbar component renders correctly', () => {
  test('should renders correct text', () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <BookAppointment />
        </Provider>
      </BrowserRouter>,
    );

    container.querySelector('.container');
    expect(container.firstChild).toMatchSnapshot();
  });
});
