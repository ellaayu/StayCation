import React from 'react';
import render from '@testing-library/react'
import Button from './index'

// test("Should not allowed click button if isDisable is present", () => {
//     const {container} = render(<Button isDisable></Button>);

//     expect(container.querySelector("span.disable")).toBeInTheDocument();
// }); 

test("Render Spinner", () => {
    const {container, getByText} = render(<Button isLoading></Button>);

    //regex insensitive
    expect(getByText(/loading/i)).toBeInTheDocument()

    expect(container.querySelector("span")).toBeInTheDocument();
}); 

