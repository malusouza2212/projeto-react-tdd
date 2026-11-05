import { createCounter } from '../services/counterService';

describe('Testes de Unidade: counterService (TDD)', () => {
  test('RED/GREEN: deve inicializar com o valor correto', () => {
    const counter = createCounter(5);
    expect(counter.getValue()).toBe(5);
  });

  test('RED/GREEN: deve incrementar o valor', () => {
    const counter = createCounter(0);
    expect(counter.increment()).toBe(1);
  });

  test('RED/GREEN: deve decrementar o valor', () => {
    const counter = createCounter(10);
    expect(counter.decrement()).toBe(9);
  });

  test('RED/GREEN: deve resetar para o valor inicial', () => {
    const counter = createCounter(42);
    counter.increment();
    expect(counter.reset()).toBe(42);
  });
});
