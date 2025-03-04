import React, { useEffect, useState } from "react";
// import { DefaultLayout } from "../../components/layouts/DefaultLayout";
import { CustomCarousel } from "../../components/customCarouse/CustomCarousel";
import { Container, Row, Col, Form } from "react-bootstrap";
import { CustomCard } from "../../components/customCard/CustomCard";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { apiProcessor } from "../../helpers/axiosHelper";
import { setBooks } from "../../slicer/bookSlice";
import { getAllBookAction } from "../../features/books/bookAction";

const Home = () => {
  const bookStore = useSelector((state) => state.bookInfo);
  const dispatch = useDispatch();

  const [searchedBooks, setSearchBooks] = useState([]);
  // const fetchBooks = async () => {
  //   const response = await apiProcessor({
  //     method: "get",
  //     url: "http://localhost:9001/api/v1/books/pub-books",
  //     isPrivate: false,
  //     isRefreshToken: true,
  //   });
  //   console.log(response);
  //   dispatch(setBooks(response.books));
  // };
  //action to fetch books
  // const fetchBooks=()=>{
  //   //action to get all books
  //   dispatch(getAllBooksAction());
  // }
  useEffect(() => {
    dispatch(getAllBookAction());
  }, []);

  useEffect(() => {
    setSearchBooks(bookStore.books || []);
  }, [bookStore.books]);
  // const [searchedBooks, setSearchBooks] = useState([
  //   {
  //     status: "active",
  //     title: "Mastering CSS",
  //     author: "CSS GURU",
  //     isbn: "12345668",
  //     publishedYear: 1995,
  //     thumbnail: "https://randomuser.me/api/portraits/women/44.jpg",
  //     description: "Advanced techniques in CSS.",
  //     isAvailable: true,
  //     expectedAvailable: null,
  //     createdAt: "2024-11-27T00:41:30.357Z",
  //     updatedAt: "2024-11-27T00:41:30.357Z",
  //   },
  //   {
  //     status: "active",
  //     title: "Mastering CSS",
  //     author: "CSS GURU",
  //     isbn: "12345668",
  //     publishedYear: 1995,
  //     thumbnail: "https://randomuser.me/api/portraits/women/44.jpg",
  //     description: "Advanced techniques in CSS.",
  //     isAvailable: true,
  //     expectedAvailable: null,
  //     createdAt: "2024-11-27T00:41:30.357Z",
  //     updatedAt: "2024-11-27T00:41:30.357Z",
  //   },
  // ]);

  // useEffect(() => {
  //   setSearchBooks(books);
  // }, [books]);

  const handleOnSearch = (e) => {
    const { value } = e.target;

    setSearchBooks(
      books.filter(({ title }) =>
        title.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <>
      <CustomCarousel />

      {/* book list  */}

      <Container>
        <Row>
          <Col className="d-flex justify-content-between mt-5">
            <label htmlFor="">{searchedBooks.length} books found!</label>
            <div>
              <Form.Control
                onChange={handleOnSearch}
                placeholder="search by book name .. "
              />
            </div>
          </Col>
        </Row>
        <hr />
        <Row className="mb-4">
          <Col className="d-flex gap-4 flex-wrap ">
            {searchedBooks.map((book) => (
              <Link key={book._id} to={"/book/" + book._id}>
                <CustomCard {...book} />
              </Link>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
