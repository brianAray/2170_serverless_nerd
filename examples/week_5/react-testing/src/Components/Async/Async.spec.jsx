import {render, screen} from "@testing-library/react"
import Async from './Async';

describe("Async Component", () => {
    test('renders post if request succeeds', async () => {

        window.fetch = jest.fn();

        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 1, title: "first post"}]
        });

        render(<Async/>);

        // Fetch request will get a list
        // We want all the items in thtat list

        const listItemElement = await screen.findAllByRole("listitem");

        // We will make sure this is not empty
        expect(listItemElement).not.toHaveLength(0);
    })
})