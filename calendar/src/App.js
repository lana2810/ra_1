import "./App.css";
import Calendar from "./Calendar";

function App() {
  const now = Date.now();
  return <Calendar date={now} />;
}

export default App;
