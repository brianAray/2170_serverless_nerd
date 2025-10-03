import {render, fireEvent} from "@testing-library/react"
import Counter from './Counter';

test('renders initial count and button', () => {
    const {getByText} = render(<Counter/>);

    // Check if the component renders with an initial cont of 0

    const countElement = getByText('Count: 0');
    expect(countElement).toBeInTheDocument();

    // Check if the increment and decrement buttons are present
    const incrementButton = getByText("Increment");
    const decrementButton = getByText("Decrement");

    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
});

test('Increments and Decrements count when buttons are clicked', () => {
    const {getByText} = render(<Counter/>);

    const countElement = getByText('Count: 0');
    const incrementButton = getByText("Increment");
    const decrementButton = getByText("Decrement");

    // Click the Increment button
    fireEvent.click(incrementButton);
    expect(countElement).toHaveTextContent('Count: 1');

    // Click the Decrement Button
    fireEvent.click(decrementButton);
    expect(countElement).toHaveTextContent('Count: 0');
})