import React, { useState } from 'react';

const AddWorkoutForm = () => {
  const [workoutName, setWorkoutName] = useState('');
  const [workoutDuration, setWorkoutDuration] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Novo treino adicionado:', workoutName, workoutDuration);
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
