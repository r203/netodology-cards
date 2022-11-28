import './App.css';
import Card from './components/Card';

function App() {
  const image = "https://i.pinimg.com/originals/f4/d2/96/f4d2961b652880be432fb9580891ed62.png"

  return (
    <div className="App">
      <Card image={image}>
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </Card>
      <Card>
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
      </Card>
    </div>
  );
}

export default App;
