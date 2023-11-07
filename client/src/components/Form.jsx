import { useState } from "react";
import axios from "axios";

export default function Form({ books, setBooks }) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    status: "",
  });

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  async function submitForm(event) {
    event.preventDefault();
    const API = "http://localhost:8080/books";
    const res = await axios.post(API, formData);
    setBooks([...books, res.data]);
  }

  return (
    <form onSubmit={submitForm}>
      <input name="title" placeholder="title" onChange={handleChange} />
      <input name="author" placeholder="author" onChange={handleChange} />
      <input name="status" placeholder="status" onChange={handleChange} />
      <button>Add Book</button>
    </form>
  );
}