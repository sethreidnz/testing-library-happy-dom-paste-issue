import { render, screen } from '@testing-library/react';
import { App } from './App';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  it('can paste in input', async () => {
    // arrange
    const user = userEvent.setup();

    // act
    render(<App />);

    // assert
    await user.click(screen.getByRole('textbox'));
    await user.paste('Hello, world!');
  });
});