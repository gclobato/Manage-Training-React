import React, { useState } from 'react';

const AddWorkoutForm = () => {
  const [workoutName, setWorkoutName] = useState('');
  const [workoutSeries, setWorkoutSeries] = useState('');
  const [workoutMuscle, setWorkoutMuscle] = useState('');
  const [workoutDay, setWorkoutDay] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você poderia enviar os dados para o backend para adicionar um novo treino
    console.log('Novo treino adicionado:', workoutName, workoutSeries, workoutMuscle, workoutDay);
    // Resetar os campos do formulário após a submissão
    setWorkoutName('');
    setWorkoutSeries('');
    setWorkoutMuscle('');
    setWorkoutDay('');
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
          placeholder="Séries do Treino"
          value={workoutSeries}
          onChange={(e) => setWorkoutSeries(e.target.value)}
        />
        <input
          type="text"
          placeholder="Músculo Alvo"
          value={workoutMuscle}
          onChange={(e) => setWorkoutMuscle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Dia da Semana"
          value={workoutDay}
          onChange={(e) => setWorkoutDay(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default AddWorkoutForm; 

