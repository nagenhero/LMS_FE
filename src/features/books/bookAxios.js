import { apiProcessor } from "../../helpers/axiosHelper";
const bookEp = import.meta.env.VITE_APP_ROOT_URL + "/books";

export const fetchAllBookApi = () => {
  const apiObj = {
    method: "get",
    url: bookEp + "/pub-books",
    isPrivate: false,
    isRefreshToken: true,
  };
  return apiProcessor(apiObj);
};
