import { screen, render } from '@testing-library/react';

import Typography from './';
import { colors } from '../../styles/colors';

describe('The Typography component', () => {
  it('Should render the text with the default style', async () => {
    render(<Typography>text</Typography>);

    const text = await screen.findByText('text');

    expect(text).toBeInTheDocument();
    expect(text).toHaveStyle({
      color: colors.secondary,
      'font-weight': 500,
      'font-size': '3.75rem',
      'font-family': 'TTTravels',
    });
  });

  it('should render the text with body-bold style', async () => {
    render(<Typography variant="body-bold">text</Typography>);

    const text = await screen.findByText('text');

    expect(text).toBeInTheDocument();
    expect(text).toHaveStyle({
      color: colors.secondary,
      'font-weight': 700,
      'font-size': '3.75rem',
      'font-family': 'TTTravels',
    });
  });

  it('should render the text with caption style', async () => {
    render(<Typography variant="caption">text</Typography>);

    const text = await screen.findByText('text');

    expect(text).toBeInTheDocument();
    expect(text).toHaveStyle({
      color: colors.secondary,
      'font-weight': 400,
      'font-size': '3.75rem',
      'font-family': 'TTTravels',
    });
  });

  it('should render the text with content-title style', async () => {
    render(<Typography variant="content-title">text</Typography>);

    const text = await screen.findByText('text');

    expect(text).toBeInTheDocument();
    expect(text).toHaveStyle({
      color: colors.secondary,
      'font-weight': 900,
      'font-size': '6.25rem',
      'font-family': 'Suprapower',
    });
  });

  it('should render the text with section-title style', async () => {
    render(<Typography variant="section-title">text</Typography>);

    const text = await screen.findByText('text');

    expect(text).toBeInTheDocument();
    expect(text).toHaveStyle({
      color: colors.secondary,
      'font-weight': 900,
      'font-size': '3.75rem',
      'font-family': 'Suprapower',
    });
  });

  it('should render the text with subtitle style', async () => {
    render(<Typography variant="subtitle">text</Typography>);

    const text = await screen.findByText('text');

    expect(text).toBeInTheDocument();
    expect(text).toHaveStyle({
      color: colors.secondary,
      'font-weight': 900,
      'font-size': '7.5rem',
      'font-family': 'Suprapower',
    });
  });

  it('should render the text with title style', async () => {
    render(<Typography variant="title">text</Typography>);

    const text = await screen.findByText('text');

    expect(text).toBeInTheDocument();
    expect(text).toHaveStyle({
      color: colors.secondary,
      'font-weight': 900,
      'font-size': '10rem',
      'font-family': 'Suprapower',
    });
  });

  it('should render the text with primary color', async () => {
    render(<Typography color="primary">text</Typography>);

    const text = await screen.findByText('text');

    expect(text).toBeInTheDocument();
    expect(text).toHaveStyle({
      color: colors.primary,
    });
  });

  it('should render the text with highlight color', async () => {
    render(<Typography color="highlight">text</Typography>);

    const text = await screen.findByText('text');

    expect(text).toBeInTheDocument();
    expect(text).toHaveStyle({
      color: colors.highlight,
    });
  });

  it('should render the text with warning color', async () => {
    render(<Typography color="warning">text</Typography>);

    const text = await screen.findByText('text');

    expect(text).toBeInTheDocument();
    expect(text).toHaveStyle({
      color: colors.warning,
    });
  });

  it('should render the text with error color', async () => {
    render(<Typography color="error">text</Typography>);

    const text = await screen.findByText('text');

    expect(text).toBeInTheDocument();
    expect(text).toHaveStyle({
      color: colors.error,
    });
  });

  it('should render the text with success color', async () => {
    render(<Typography color="success">text</Typography>);

    const text = await screen.findByText('text');

    expect(text).toBeInTheDocument();
    expect(text).toHaveStyle({
      color: colors.success,
    });
  });
});
