import './App.css';
import Card from './components/Card';
import image from './components/img/dmitrii.votchitsev_511740470321529236.jpg'

const cardOne = {
  title: 'Card title',
  text: `Some quick example text to build on the card title and make up the bulk of the cards content.`,
}

const cardTwo = {
  title: 'Special title treatment',
  text: 'With supporting text below as a natural lead-in to additional content',
}

function App() {
  return (
    <div id='container'>
      <Card { ...cardOne } >
        <img src={image} className="card-img-top" alt="Tree" />
      </Card>
      <Card { ...cardTwo } />
    </div>
    
  );
}

export default App;