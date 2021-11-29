import Header from "./components/header.js";
import foucault from "./images/foucault.jpg";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <div className="body">
        <div className="introduction">
          Michel Foucault est un auteur français né à l'année de 1926. Pendant sa vie il est devenu connu par ses pensées autour des thémathiques philosophiques. Il a été professeur dans le Collège de France, où il a eu liberté pour créer differents courses autour de questions comme la vie, la bioéthique, le neolibéralisme, la courage de la vérité, entre autres. Michel Foucault est mort dans l'année de 1984.
        </div>
        <div className="image">
          <img  src={foucault} />
        </div>
      </div>
    </div>

  );
}

export default App;
