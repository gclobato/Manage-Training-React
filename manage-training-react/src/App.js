import './App.css';
import WorkoutList from './WorkoutList';
import AddWorkoutForm from './AddWorkoutForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Treinos</h1>
      </header>
      <main>
        <WorkoutList />
        <AddWorkoutForm />
      </main>
    </div>
  );
}

export default App;
