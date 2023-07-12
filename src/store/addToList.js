import { requestAction } from "./requestSlice";

export const addToList = (listType, movie) => {
  return (dispatch) => {
    dispatch(requestAction.addToList({ listType, movie }));
  };
};
