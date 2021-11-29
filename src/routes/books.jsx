import Header from "../components/header.js";
import '../App.css';

export default function Books() {
  return (
    <div>
      <Header></Header>
      <div className="body">
        <h2>Livres
          </h2>
        <ul>
          <li>Maladie mentale et personnalité (1954)</li>
          <li>Histoire de la folie (1964)</li>
          <li>Les Mots et les choses (1966)</li>
          <li>L'Archéologie du savoir (1969)</li>
          <li>L'Ordre du discours (1971)</li>
          <li>Surveiller et punir (1975)</li>
          <li>Histoire de la sexualité, vol. 1 (1976)</li>
          <li>Histoire de la sexualité, vol. 2 (1984)</li>
          <li>Histoire de la sexualité, vol. 3 (1984)</li>
          <li>Histoire de la sexualité, vol. 4  (2018)</li>
        </ul>
        <h2>Cours au Collège de France</h2>
        <ul> 
          <li>Leçons sur la volonté de savoir (1970-1971),</li>
          <li>Théories et institutions pénales (1971-1972)</li>
          <li>La société punitive (1972-1973)</li>
          <li>Le Pouvoir psychiatrique (1973-1974)</li>
          <li>Les Anormaux (1974-1975)</li>
          <li>Il faut défendre la société  (1975-1976)</li>
          <li>Sécurité, territoire, population (1977-1978) (1976)</li>
          <li>Naissance de la biopolitique (1978-1979)</li>
          <li>Du gouvernement des vivants (1979-1980)</li>
          <li>Subjectivité et vérité (1980-1981)</li>
          <li>L'Herméneutique du sujet (1981-1982)</li>
          <li>Le Gouvernement de soi et des autres I (1982-1983)</li>
          <li>Le Gouvernement de soi et des autres II : Le Courage de la vérité (1983-1984)</li>
        </ul>

      </div>
    </div>
  );
}