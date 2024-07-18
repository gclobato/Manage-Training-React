import React from 'react';

const WorkoutList = () => {
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
