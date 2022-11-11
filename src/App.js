import './App.css';
import Person from './Person';

function App() {
  return (
    <div className="App">
        <h1>Hello World</h1>
        <p>We are learning react!</p>
        <Person personName = "John" personLocation = "Paris" />
        <Person personName = "Jack" personLocation = "London" />
        <Person personName = "Yoav" personLocation = "Jerusalem" />
        <Person personName = "Mohamed" personLocation = "Dubai" />
    </div>
  );
}

export default App;
