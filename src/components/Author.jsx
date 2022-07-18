
import LinkedImage from './LinkedImage'
import axios from 'axios'
import { useEffect,useState } from 'react';

const Author = () => {
    const [books,setBooks]=useState([]);
    const [collaborations,setCollaborations]=useState([]);

    const fetchBooks = async () => {
        const results = await axios.get('/.netlify/functions/books');
        setBooks(results.data);
    }

    const fetchCollaborations = async () => {
        const results = await axios.get('/.netlify/functions/collaborations')
        setCollaborations(results.data);
    }

    useEffect(()=>{
        fetchBooks()
        fetchCollaborations()
    },[])
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