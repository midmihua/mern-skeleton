const initialState = {
  siteLoading: false,
}

const SITE_LOADING = 'SITE_LOADING';


export default (state = initialState, action) => {
  switch (action.type) {
    case SITE_LOADING:
      return {
        ...state,
        siteLoading: action.payload,
      };
    default:
      return state;
  }
}


export const baseErrorsHandlerDecorator = (
  successConst,
  errorConst,
  func,
  loading = true,
) => {
  return (dispatch) => {
    dispatch({
      type: SITE_LOADING,
      payload: loading,
    });
    return func(dispatch)
      .then((response) => {
        dispatch({
          type: successConst,
          payload: response,
        });
        dispatch({
          type: SITE_LOADING,
          payload: false,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: errorConst,
          payload: error.response,
        });
        dispatch({
          type: SITE_LOADING,
          payload: false,
        });
      });
  };
};
