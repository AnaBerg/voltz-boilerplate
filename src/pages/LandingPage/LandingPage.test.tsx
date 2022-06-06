import { findByText, render, screen } from '@testing-library/react';

import LandingPage from '.';

describe('The page LandingPage', () => {
  it('should render the LandingPage text', async () => {
    render(<LandingPage />);

    const text = await screen.findByText('LandingPage');

    expect(text).toBeInTheDocument();
  });
});
