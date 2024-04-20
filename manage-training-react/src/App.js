// App.js
import './App.css';
import WorkoutList from './WorkoutList';
import AddWorkoutForm from './AddWorkoutForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meus Treinos da Academia</h1>
      </header>
      <main>
        <WorkoutList />
        <AddWorkoutForm />
      </main>
    </div>
  );
}

export default App;

// WorkoutList.js
import React from 'react';

const WorkoutList = () => {
  // Aqui você poderia buscar os treinos do backend e renderizá-los
  // Vou apenas simular alguns dados para demonstração
  const workouts = [
    { id: 1, name: 'Treino de Peito', duration: '60 min' },
    { id: 2, name: 'Treino de Pernas', duration: '45 min' },
    { id: 3, name: 'Treino de Costas', duration: '50 min' },
  ];

  return (
    <div className="workout-list">
      <h2>Meus Treinos</h2>
      <ul>
        {workouts.map(workout => (
          <li key={workout.id}>
            <span>{workout.name}</span>
            <span>{workout.duration}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutList;

// AddWorkoutForm.js
import React, { useState } from 'react';

const AddWorkoutForm = () => {
  const [workoutName, setWorkoutName] = useState('');
  const [workoutDuration, setWorkoutDuration] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você poderia enviar os dados para o backend para adicionar um novo treino
    console.log('Novo treino adicionado:', workoutName, workoutDuration);
    // Resetar os campos do formulário após a submissão
    setWorkoutName('');
    setWorkoutDuration('');
  };

  return (
    <div className="add-workout-form">
      <h2>Adicionar Novo Treino</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome do Treino"
          value={workoutName}
          onChange={(e) => setWorkoutName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Duração do Treino"
          value={workoutDuration}
          onChange={(e) => setWorkoutDuration(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default AddWorkoutForm;
