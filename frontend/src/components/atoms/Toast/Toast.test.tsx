import { Toast } from '.';
import { render, screen } from '@testing-library/react';

describe("[Atom] Toast", () => {

    it('Toast renders correctly the message', async () => {
        render(<Toast message='Show toast test message' show={true} duration={3}/>)
        expect(await screen.findByText("Show toast test message")).toBeInTheDocument();
    });

});
