import { fetchAllBookApi } from "./bookAxios";
import { setBooks } from "./bookSlice";

export const getAllBookAction = () => async (dispatch) => {
  //api call
  const response = await fetchAllBookApi();
  //update the book store
  dispatch(setBooks(response.books));
};
