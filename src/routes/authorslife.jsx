import Header from "../components/header.js";
import michel from "../images/michel.jpg";
import '../App.css';

export default function Invoices() {
  return (
    <div>
      <Header></Header>
      <div className="body">
        <div className="introduction">
          Michel Foucault a eu differents maniéres de formation de pensées pendant sa vie. Il a commencé ses études curieux avec des situations liées à la folie et aussi à l'idée de punition. De cette façon, il a été connue principalement par ses études qui parlaient sur ces object d'éthude. Alors, ses études avaient un cible dans les questions de pouvoir et de sujétion. Neanmoins, presque de la fin de sa vie, le philosophe français a commencé a faire attention aux autres objects, comme les questions de résistance, de la formation du sujet, de éthique et, donc, dans une question de subjectivation.
        </div>
        <div className="image">
          <img src={michel} />
        </div>
      </div>
    </div>
  );
}