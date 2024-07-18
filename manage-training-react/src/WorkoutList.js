import React, { useState } from 'react';

const WorkoutList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const workouts = [
    { id: 1, name: 'Supino Reto Barra', series: '3 x 10 a 12', muscle: 'Peito', day: 'Segunda' },
    { id: 2, name: 'Supino Inclinado', series: '3 x 10 a 12', muscle: 'Peito', day: 'Segunda' },
    { id: 3, name: 'Crucifixo com Halter', series: '3 x 10 a 12', muscle: 'Peito', day: 'Segunda' },
    { id: 4, name: 'Pullover', series: '3 x 10 a 12', muscle: 'Peito', day: 'Segunda' },
    { id: 5, name: 'Tríceps Corda', series: '3 x 10 a 12', muscle: 'Tríceps', day: 'Segunda' },
    { id: 6, name: 'Tríceps Barra Reta', series: '3 x 10 a 12', muscle: 'Tríceps', day: 'Segunda' },
    { id: 7, name: 'Tríceps Barra Reta Inv.', series: '3 x 10 a 12', muscle: 'Tríceps', day: 'Segunda' },
    { id: 8, name: 'Francês', series: '3 x 10 a 12', muscle: 'Tríceps', day: 'Segunda' },
    { id: 9, name: 'Puxada Supinada Barra', series: '3 x 10 a 12', muscle: 'Costas', day: 'Terça' },
    { id: 10, name: 'Puxada Supinada Inv.', series: '3 x 10 a 12', muscle: 'Costas', day: 'Terça' },
    { id: 11, name: 'Serrote', series: '3 x 10 a 12', muscle: 'Costas', day: 'Terça' },
    { id: 12, name: 'Remada Sentada', series: '3 x 10 a 12', muscle: 'Costas', day: 'Terça' },
    { id: 13, name: 'Rosca Direta com Barra', series: '3 x 8 a 10', muscle: 'Bíceps', day: 'Terça' },
    { id: 14, name: 'Rosca Alternada Halter', series: '3 x 8 a 10', muscle: 'Bíceps', day: 'Terça' },
    { id: 15, name: 'Martelo', series: '3 x 8 a 10', muscle: 'Bíceps', day: 'Terça' },
    { id: 16, name: 'Rosca Concentrada', series: '3 x 8 a 10', muscle: 'Bíceps', day: 'Terça' },
    { id: 17, name: 'Elevação Lateral', series: '3 x 8 a 10', muscle: 'Ombro', day: 'Quarta' },
    { id: 18, name: 'Elevação Frontal', series: '3 x 8 a 10', muscle: 'Ombro', day: 'Quarta' },
    { id: 19, name: 'Des. Arnold', series: '3 x 8 a 10', muscle: 'Ombro', day: 'Quarta' },
    { id: 20, name: 'Crucifixo Inverso', series: '3 x 8 a 10', muscle: 'Ombro', day: 'Quarta' },
    { id: 21, name: 'Extensora', series: '4 x 10 a 12', muscle: 'Perna', day: 'Quarta' },
    { id: 22, name: 'Abdutora', series: '4 x 10 a 12', muscle: 'Perna', day: 'Quarta' },
    { id: 23, name: 'Agachamento', series: '4 x 10 a 12', muscle: 'Perna', day: 'Quarta' },
    { id: 24, name: 'Leg 45', series: '4 x 10 a 12', muscle: 'Perna', day: 'Quarta' },
    { id: 25, name: 'Panturrilha', series: '4 x 12 a 15', muscle: 'Perna', day: 'Quarta' },
    // Adicione os outros treinos aqui...
  ];

  const filteredWorkouts = workouts.filter(workout =>
    workout.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    workout.muscle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="workout-list">
      <h2>Meus Treinos</h2>
      <input
        type="text"
        placeholder="Buscar treino"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredWorkouts.map(workout => (
          <li key={workout.id}>
            <span>{workout.day} - {workout.name} ({workout.muscle}) - {workout.series}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutList;
