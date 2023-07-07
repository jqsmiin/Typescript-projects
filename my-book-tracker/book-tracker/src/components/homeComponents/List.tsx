import { Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Books } from "../types/BookTypes";
import Slider from "react-slick";
import { settings } from "../utils/CarouselSettings";
import { Link } from "react-router-dom";

function List() {
  const [books, setBooks] = useState<null | Books[]>(null);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch(
          "https://www.googleapis.com/books/v1/volumes?q=subject:philosophy&orderBy=relevance&maxResults=20&key=AIzaSyCjdeIADIDNVx7HR5rZVWENhABE1oMi0WM"
        );
        const data = await res.json();

        setBooks(data.items);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);
  return (
    <section id="list" className="section-margin">
      <Container>
        <Row>
          <Slider {...settings}>
            {books?.map((book, i) => (
              <div className="book-item" key={i}>
                <img
                  src={book?.volumeInfo?.imageLinks?.thumbnail}
                  alt="book cover"
                />
                <h3>{book.volumeInfo.title}</h3>
                <h4>By : {book.volumeInfo.authors[0]}</h4>
                <Link
                  to={book.volumeInfo.infoLink}
                  target="_blank"
                  className="primary-btn"
                >
                  View More
                </Link>
              </div>
            ))}
          </Slider>
        </Row>
      </Container>
    </section>
  );
}

export default List;
