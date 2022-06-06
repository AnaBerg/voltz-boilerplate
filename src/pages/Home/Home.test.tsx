import { findByText, render, screen } from '@testing-library/react';

import Home from '.';

describe('The page Home', () => {
    it('should render the Home text', async () => {
        render(<Home />);
        
        const text = await screen.findByText("Home");
        
        expect(text).toBeInTheDocument();
    });
});

