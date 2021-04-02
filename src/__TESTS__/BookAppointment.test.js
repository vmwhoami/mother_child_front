import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookAppointment from '../components/pages/BookAppointmen';
import store from '../redux/store'
// import * as reactRedux from 'react-redux'

// jest.spyOn(reactRedux, 'useDispatch');


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
    const ren = render(
      <BrowserRouter>
        <Provider store={store}>
          <BookAppointment />
        </Provider>
      </BrowserRouter>,
    );
    console.log(ren);
    const text = screen.getByText('Full name');

    expect(text).toBeInTheDocument();
  });

  // test('should renders correct text', () => {
  //   render(
  //     <BrowserRouter>
  //       <Provider store={store}>
  //         <Home />
  //       </Provider>
  //     </BrowserRouter>,
  //   );
  //   const text = screen.getByText('Quote');
  //   expect(text).toBeInTheDocument();
  // });

  // test('should render correctly', () => {
  //   const tree = renderer
  //     .create(
  //       <BrowserRouter>
  //         <Provider store={store}>
  //           <Home />
  //         </Provider>
  //       </BrowserRouter>, ``,
  //     )
  //     .toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});