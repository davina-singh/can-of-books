const mongoose = require("mongoose");
require("dotenv").config();
const Book = require("./models/book");
mongoose.connect(process.env.DATABASE_URL);

async function seed() {
  await Book.create([
    {
        title: "The Kite Runner",
        author: "Khaled Hosseini",
        status: true,
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        status: true,
    },
    {
        title: "1984",
        author: "George Orwell",
        status: true,
    },
  ]);
  
  mongoose.disconnect();
}

seed();