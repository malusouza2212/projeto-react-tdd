import React from 'react';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Painel do Usuário - Vercel & GitHub Actions</h1>
      </header>
      <main>
        <Counter initialValue={10} />
      </main>
    </div>
  );
}

export default App;
