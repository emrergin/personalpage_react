
import LinkedImage from './LinkedImage'
import { useStateValue } from '../state';

const Author = () => {
    const [{ books, collaborations }, ] = useStateValue();
    return (
            <div className="album left-of-the-grid">
                <h1 id="tableHeader">
                    Books
                </h1>
            {books.map((book,index) => (
                <LinkedImage key={index} book={book}/>
            ))}
                <h1 id="tableHeader2">
                    Collaborations
                </h1>
            {collaborations.map((book,index) => (
                <LinkedImage key={index} book={book}/>
            ))}
            </div>
      );
}

 
export default Author;