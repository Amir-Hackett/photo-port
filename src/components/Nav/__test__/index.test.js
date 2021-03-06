import React from "react";
//cleanup is used to remove components from the DOM to prevent memory leaking
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

//describe function to declare the component we're testing
describe('Nav component', () => {
    // First Test
    it('renders', () => {
        render(<Nav/>)
    })
    
   // Second Test
   it('matches snapshot', () => {
    const { asFragment } = render(<Nav/>)
    expect(asFragment()).toMatchSnapshot();
   })
})

describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        //Arrange
        const { getByLabelText } = render(<Nav/>)
        //Assert
        expect(getByLabelText('camera')).toHaveTextContent('📸')
    })
})

describe('links are visible', () => {
    it('inserts text into the links', () => {
      // Arrange
      const { getByTestId } = render(<Nav />);

      // Assert
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
      expect(getByTestId('about')).toHaveTextContent('About me');
    });
  })