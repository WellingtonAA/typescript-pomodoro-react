import { PomodoroTimer } from './components/pomodoro-timer';

function App() {
  return (
    <div className="container">
      <PomodoroTimer
        pomodoroTime={1}
        shortRestTime={1}
        longRestTime={100}
        cycles={4}
      />
    </div>
  );
}

export default App;
