import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { NotFoundPage } from '../src/pages/NotFoundPage.js';

describe('NotFoundPage Component', () => {
  it('renders 404 message and Back to Home button', () => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );

    expect(screen.getByText(/404 — Page Not Found/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /back to home/i })).toBeInTheDocument();
  });
});
