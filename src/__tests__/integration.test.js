import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

describe('Testes de Integração: Componente Counter + Service', () => {
  test('deve integrar estado da UI com a lógica do counterService', () => {
    render(<Counter initialValue={0} />);
    
    const valueDisplay = screen.getByTestId('counter-value');
    const incBtn = screen.getByText('Incrementar');

    expect(valueDisplay.textContent).toBe('0');
    fireEvent.click(incBtn);
    expect(valueDisplay.textContent).toBe('1');
  });
});
