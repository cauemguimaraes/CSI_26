// calculatorActions.js
export const add = (value) => ({
    type: 'ADD',
    payload: value,
  });
  
  export const subtract = (value) => ({
    type: 'SUBTRACT',
    payload: value,
  });
  
  export const multiply = (value) => ({
    type: 'MULTIPLY',
    payload: value,
  });
  
  export const divide = (value) => ({
    type: 'DIVIDE',
    payload: value,
  });
  
  export const reset = () => ({
    type: 'RESET',
  });
  