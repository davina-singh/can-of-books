import { useState } from "react";
import axios from "axios";

export default function Form({ books, setBooks, book, setBook }) {
  const [formData, setFormData] = useState(
    book ?? {
    title: "",
    author: "",
    status: false,
  });

  function handleChange(event) {
    if (event.target.type === "status") {
        setFormData({ ...formData, [event.target.name]: event.target.checked });
    } else {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }
  }

  async function addBook(event) {
    event.preventDefault();
    const API = "http://localhost:8080/books";
    const res = await axios.post(API, formData);
    setBooks([...books, res.data]);
  }

  async function updateBook(event) {
    event.preventDefault();
    const API = `http://localhost:8080/books/${book._id}`;
    await axios.put(API, formData);
    setBook(formData);
  }

  return (
    <form onSubmit={book?.name ? updateBook : addBook}>
      <input 
      name="title" 
      placeholder="title" 
      onChange={handleChange} 
      value={formData.title}
      />
      <input 
      name="author" 
      placeholder="author" 
      onChange={handleChange} 
      value={formData.author}
      />
      <input 
      name="status" 
      type="checkbox" 
      onChange={handleChange} 
      value={formData.status}
      />
      <button>Add Book</button>
    </form>
  );
}