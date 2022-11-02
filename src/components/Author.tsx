import LinkedImage from "./LinkedImage";
import { useStateValue } from "../state";

const Author = () => {
  const [{ books, collaborations, isTurkish }] = useStateValue();
  return (
    <div className="album left-of-the-grid">
      <h1 id="tableHeader">{isTurkish ? `Kitaplar` : `Books`}</h1>
      {books.map((book, index) => (
        <LinkedImage key={index} book={book} />
      ))}
      <h1 id="tableHeader2">{isTurkish ? `Seçkiler` : `Collaborations`}</h1>
      {collaborations.map((book, index) => (
        <LinkedImage key={index} book={book} />
      ))}
    </div>
  );
};

export default Author;
