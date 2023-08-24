import keyConceptsImage from './assets/images/key-concepts.png';
import componentsImage from './assets/images/child.png';
import stateImage from './assets/images/mid.png';
import eventsImage from './assets/images/recent.png';
import Comp from './components/Comp';
import "./index.css";
const concepts = [
  {
    title: 'Babyhood',
    image: componentsImage,
    description:
      'Babyhood is a precious and magical time filled with innocence and wonder. It is a stage of life where every experience is brand new, and each moment is filled with awe and discovery. ',
  },
  {
    title: 'Childhood',
    image: stateImage,
    description:
      'Childhood is a vibrant tapestry of laughter, imagination, and boundless energy. It is a time of endless curiosity and uninhibited exploration. From playing in the warm embrace of the sun to getting lost in the realms of make-believe, every day is an opportunity for new adventures. ',
  },
  {
    title: 'youth',
    image: eventsImage,
    description:
      'Youth is a vibrant and transformative phase of life, where the seeds of potential are nurtured and dreams take flight. It is a time of self-discovery, growth, and forging ones own path in the world.',
  },
];

function App() {
  return (
    <div>
      <header>
        <img src={keyConceptsImage} alt="Medal badge with a star" />
        <h1>MY JOURNEY</h1>
        <p>Every day is a new beginning, take a deep breath and start again.</p>
      </header>
      <ul id="concepts">
          <Comp image={concepts[0].image} title={concepts[0].title} description={concepts[0].description}/>
          <Comp image={concepts[1].image} title={concepts[1].title} description={concepts[1].description}/>
          <Comp image={concepts[2].image} title={concepts[2].title} description={concepts[2].description}/>

        
      </ul>
    </div>
  );
}

export default App;
