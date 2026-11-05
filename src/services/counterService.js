// Lógica isolada de contador seguindo TDD
export const createCounter = (initialValue = 0) => {
  let count = initialValue;
  return {
    getValue: () => count,
    increment: () => { count += 1; return count; },
    decrement: () => { count -= 1; return count; },
    reset: () => { count = initialValue; return count; }
  };
};
