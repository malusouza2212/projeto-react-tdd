import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

describe('Testes Funcionais / Aceitação: App Completo', () => {
  test('deve renderizar a aplicação inteira sob a visão do usuário', () => {
    render(<App />);
    
    expect(screen.getByText('Painel do Usuário - Vercel & GitHub Actions')).toBeInTheDocument();
    expect(screen.getByTestId('counter-container')).toBeInTheDocument();
    expect(screen.getByTestId('counter-value').textContent).toBe('10');
  });

  test('deve permitir incrementar, decrementar e resetar o contador', () => {
    render(<App />);

    const valueDisplay = screen.getByTestId('counter-value');

    fireEvent.click(screen.getByRole('button', { name: 'Incrementar' }));
    expect(valueDisplay).toHaveTextContent('11');

    fireEvent.click(screen.getByRole('button', { name: 'Decrementar' }));
    expect(valueDisplay).toHaveTextContent('10');

    fireEvent.click(screen.getByRole('button', { name: 'Incrementar' }));
    fireEvent.click(screen.getByRole('button', { name: 'Resetar' }));
    expect(valueDisplay).toHaveTextContent('10');
  });
});
