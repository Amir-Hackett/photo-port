import React from "react";
//cleanup is used to remove components from the DOM to prevent memory leaking
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import About from '..';

//ensures that after each test, we won't have any leftover memory data that could give us false results.
afterEach(cleanup);


//describe function to declare the component we're testing
describe('About component', () => {
    // First Test
    it('renders', () => {
        render(<About/>)
    })
    
   // Second Test
   it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<About/>)
    expect(asFragment()).toMatchSnapshot();
   })
})