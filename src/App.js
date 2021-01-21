import React, { useState } from "react";
import "./styles.css";

const books = {
  Programming: [
    {
      name: "The C Programming Language",
      writtenby: "Dennis Ritchie",
      rating: "4/5",
      comments:
        "When the creater himself gets down to teach, you will get to know so much about the language.A must read book to know deep-insights of C and Data Structures."
    },
    {
      name:
        "Effective C++ : 55 Specific Ways to Improve Your Programs and Designs",
      writtenby: "Scott Meyers",
      rating: "4/5",
      comments:
        "Talent without wisdom is like using supernatural powers to toast your bread. This book gives you the wisdom you need as a programming wizard!"
    },
    {
      name: "Eloquent JavaScript: A Modern Introduction to Programming",
      writtenby: "Marijn Haverbeke",
      rating: "4/5",
      comments:
        "Its difficult to find a good JS book. But when you do find one, you can't help but share about it. You need this book if you are serious about JS."
    },
    {
      name: "The Art of Computer Programming Series",
      writtenby: "Donald Ervin Knuth",
      rating: "5/5",
      comments:
        "'If you can finish this book, send me your resume.' - Bill Gates. I don't think I have to say anything more."
    },
    {
      name: "Clean Code: A Handbook of Agile Software Craftsmanship",
      writtenby: "Robert C. Martin",
      rating: "4/5",
      comments:
        "This is the book that makes your code look as beautiful as the output, or maybe more!"
    },
    {
      name: " You Don't Know JS : All Volumes",
      writtenby: "Kyle Simpson",
      rating: "5/5",
      comments:
        "As I said, its difficult to find a good JS book. But when you do find one, you can't help but share about it. You need this book if you have completed Eloquent Javascript and are serious about JS."
    }
  ],

  SelfHelp: [
    {
      name: "Karma: A Yogi's Guide to Crafting Your Own Destiny",
      writtenby: "Sadhguru Jaggi Vasudev",
      rating: "5/5",
      comments: "Gets you right back on the driver's seat of your life!"
    },
    {
      name: "Complete Works of Swami Vivekananda",
      writtenby: "Swami Vivekananda",
      rating: "6/5",
      comments: "This doesn't any introduction. Ignore this at your own peril!"
    },
    {
      name:
        "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
      writtenby: "James Clear",
      rating: "5/5",
      comments:
        "If you don't need this book, you are God Gifted! The best book on Habits till date!"
    },
    {
      name: "The Power of NOW",
      writtenby: "Eckhart Tolle",
      rating: "5/5",
      comments:
        "This is not a book. Its a living friend. It will be there for you forever. So think twice before ignoring!"
    },
    {
      name: "A New Earth: Awakening to Your Life’s Purpose",
      writtenby: "Eckhart Tolle",
      rating: "5/5",
      comments:
        "This is not a book. Its a living friend. It will be there for you forever. It tells you about the ONLY problem that there is, 'the EGO' and how to kill it. So think twice before ignoring!"
    },
    {
      name:
        "The War of Art: Break Through the Blocks and Win Your Inner Creative Battles",
      writtenby: "Steven Pressfield",
      rating: "4/5",
      comments:
        "If you are struggling with Procrastination, this book can help isolate the reason behind it."
    },
    {
      name: "Flow: The Psychology of Optimal Experience",
      writtenby: "Mihaly Csikszentmihalyi",
      rating: "5/5",
      comments:
        "If you want to keep yourself forever ignorant about the real way of getting Happy, ignore this book!"
    },
    {
      name: "Rich Dad Poor Dad",
      writtenby: "Robert T. Kiyosaki",
      rating: "4/5",
      comments:
        "Probability is, you already have this book. If you don't, you must have misplaced it."
    },
    {
      name: "12 Rules for Life: An Antidote to Chaos",
      writtenby: "Jordan B. Peterson",
      rating: "4/5",
      comments:
        "A good book to gain clarity and strength in chaotic life situatuation."
    },
    {
      name: "The Untethered Soul: The Journey Beyond Yourself",
      writtenby: "Michael A. Singer",
      rating: "4/5",
      comments:
        "Beaware, you wont be able to keep this book down the moment you start reading it. It will suck you in. Ignore at you own risk!"
    },
    {
      name: "The Shallows: What the Internet Is Doing to Our Brains",
      writtenby: "Nicholas Carr",
      rating: "4/5",
      comments: "You know you need this book, Don't you?"
    },
    {
      name: "Autobiography of a Yogi",
      writtenby: "Paramahansa Yogananda",
      rating: "5/5",
      comments:
        "If you don't need this book, you don't have interest in knowing the secrets of life!"
    },
    {
      name: "Yoga Sutras of Patanjali",
      writtenby:
        "originally writtenby  Maharishi Patanjali, restored writtenby  Swami Vivekananda",
      rating: "6/5",
      comments:
        "THE GRATEST DOCUMENT HUMANITY HAS EVER PRODUCED AND CAN EVER PRODUCE!"
    },
    {
      name: "Awareness: The Key to Living in Balance",
      writtenby: "Osho",
      rating: "5/5",
      comments:
        "I am sure you will reach out to me on any of my social handles just to say thank you after you've read this book. Also, your book-shelf will then start filling up with mostly Osho books!"
    },
    {
      name: "Wings of Fire and All Books writtenby  Dr. A.P.J. Abdul Kalam",
      writtenby: "Arun Tiwari and Dr. A.P.J. Abdul Kalam",
      rating: "5/5",
      comments:
        "If you are looking for inspiration, look nowhere else! If you have not read books writtenby  Dr. APJ Abdul Kalam, I feel sorry for you!"
    },
    {
      name: "The First and Last Freedom",
      writtenby: "Jiddu Krishnamurti",
      rating: "5/5",
      comments:
        "This is not a book. Its a living friend who will be there for you forever and has the potential to clear you off of all the bullshit. So think twice before ignoring!"
    }
  ],
  Fiction: [
    {
      name: "The Alchemist",
      writtenby: "Paulo Coelho",
      rating: "5/5",
      comments:
        "You probably already have this book, if you don't, go get it! You won't regret."
    },
    {
      name: "The Monk Who Sold His Ferrari",
      writtenby: "Robin Sharma",
      rating: "5/5",
      comments: "A great read!"
    },
    {
      name: "Sherlock Holmes Complete Collection",
      writtenby: "Sir Arthur Conan Doyle",
      rating: "5/5",
      comments:
        "Don't buy the All-in-One fat but small book, you won't be able to read from it. Buy the 2 volume big sized hardcover one."
    },
    {
      name: "Major Novels",
      writtenby: "Fyodor Dostoevsky",
      rating: "4/5",
      comments:
        "You need this, unless you like being influenced writtenby  non-sense!"
    },
    {
      name: "Autobiography of a Yogi",
      writtenby: "Paramhansa Yogananda",
      rating: "4/5",
      comments: "Beautiful read!"
    },
    {
      name: "The Mahabharata",
      writtenby: "Maharishi Vyasa",
      rating: "6/5",
      comments:
        "THE EVER RELEVANT TO ANY KNID OF READER, GREATEST STORY EVER TOLD!"
    },
    {
      name: "A Christmas Carol",
      writtenby: "Charles Dickens",
      rating: "4/5",
      comments: "To melt that stone of a heart you've got!"
    },
    {
      name: "2001: A Space Odyssey",
      writtenby: "Arthur C. Clarke",
      rating: "4/5",
      comments: "If you have seen the movie, you will buy it for sure!"
    }
  ]
};

const myBooks = Object.keys(books);

export default function App() {
  const [currentGenre, setCurrentGenre] = useState("Fiction");

  function genreClickHandler(genreKeySelected) {
    setCurrentGenre(genreKeySelected);
  }
  return (
    <div className="App">
      <h1 style={{ fontSize: "3rem" }}>
        Welcome to <span style={{ color: "#080080" }}>Book Recommendation</span>
        !!
      </h1>
      <hr />
      <h2
        style={{
          fontFamily: "Langar",
          color: "black",
          fontWeight: "light"
        }}
      >
        Select a genre to get started!
      </h2>

      <div>
        {/* Mapping 3 buttons */}
        {myBooks.map((genreKey) => {
          return (
            <button key={genreKey} onClick={() => genreClickHandler(genreKey)}>
              {genreKey}
            </button>
          );
        })}
      </div>
      <hr />
      {/* Mapping the list of books */}
      <div style={{ textAlign: "center", margin: "1rem 1rem" }}>
        <ul>
          {books[currentGenre].map((book) => {
            return (
              <li
                key={book.name}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  margin: "1rem 0rem",
                  borderRadius: "0.5rem"
                }}
              >
                <div //Title
                  style={{
                    fontSize: "2.5rem",
                    margin: "0.5rem",
                    fontFamily: "Langar",
                    fontWeight: "bold",
                    color: "#080080"
                  }}
                >
                  {book.name}
                </div>
                <div //Written By
                  style={{
                    fontSize: "large",
                    margin: "0.5rem",
                    fontStyle: "italic",
                    color: "#364f6b"
                  }}
                >
                  {book.writtenby}
                </div>
                <div //Ratings
                  style={{
                    fontWeight: "bold",
                    margin: "0.5rem",
                    color: "#670000"
                  }}
                >
                  {book.rating}
                </div>
                <div style={{ fontSize: "normal", margin: "0.5rem" }}>
                  {book.comments}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
