import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  async function getBooks() {
    const API = `http://localhost:8080/books`;
    const res = await axios.get(API);
    setBooks(res.data);
  }

  return (
    <>
      <h1>Can of Books</h1>
      <p>The ultimate book Database</p>
      {books.map((book) => {
        return (
          <div key={book._id}>
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <p>Read: {book.status ? "✅" : "😡"}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;