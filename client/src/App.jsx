import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Book from "./pages/Book";

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

  async function deleteBook(id) {
    const API = `http://localhost:8080/books/${id}`;
    await axios.delete(API);
    getBooks();
  }

  return (
    <BrowserRouter>
      <header>
        <h1>Can of Books</h1>
        <p>The ultimate book Database</p>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <Home
              books={books}
              setBooks={setBooks}
              deleteBook={deleteBook}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/books/:id" element={<Book />} />
      </Routes>

      <footer>
        <p>Books is a trading name of Books &copy;</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;