import { CREATE_PROJECT } from "../types";

export const createProject = project => {
  return (dispatch, getState) => {
    dispatch({
      type: CREATE_PROJECT,
      project
    });
  };
};
