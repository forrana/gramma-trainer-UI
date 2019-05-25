import React from 'react';
import './App.css';
import ExercisesList from './Categories/Exercesises/ExercisesList'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ExercisesList />
      </header>
    </div>
  );
}

export default App;
