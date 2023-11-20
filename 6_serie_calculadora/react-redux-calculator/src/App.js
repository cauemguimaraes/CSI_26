// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// src/App.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { add, subtract, multiply, divide, reset } from './actions/calculatorActions';

const App = ({ result, add, subtract, multiply, divide, reset }) => {
  const [value, setValue] = useState('');

  const handleOperation = (operation) => {
    const num = parseFloat(value);
    if (!isNaN(num)) {
      switch (operation) {
        case 'add':
          add(num);
          break;
        case 'subtract':
          subtract(num);
          break;
        case 'multiply':
          multiply(num);
          break;
        case 'divide':
          divide(num);
          break;
        default:
          break;
      }
      setValue('');
    }
  };

  return (
    <div>
      <h1>Redux Calculator</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter a number"
      />
      <div>
        <button onClick={() => handleOperation('add')}>+</button>
        <button onClick={() => handleOperation('subtract')}>-</button>
        <button onClick={() => handleOperation('multiply')}>*</button>
        <button onClick={() => handleOperation('divide')}>/</button>
        <button onClick={reset}>Reset</button>
      </div>
      <h2>Result: {result}</h2>
    </div>
  );
};

const mapStateToProps = (state) => ({
  result: state.calculator.result,
});

export default connect(mapStateToProps, { add, subtract, multiply, divide, reset })(App);
