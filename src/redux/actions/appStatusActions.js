export const showLoader = () => async (dispatch) => {
  dispatch({
    type: "SHOW_LOADER",
  });
}

export const hideLoader = () => async (dispatch) => {
  dispatch({
    type: "HIDE_LOADER",
  });
}

export const showErrorModal = (errorMessage) => async (dispatch) => {
  dispatch({
    type: "SHOW_ERROR_MODAL",
    payload: {
      errorMessage: errorMessage,
    }
  });
}

export const hideErrorModal = () => async (dispatch) => {
  dispatch({
    type: "HIDE_ERROR_MODAL",
  });
}