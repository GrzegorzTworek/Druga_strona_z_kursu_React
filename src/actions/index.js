import axios from 'axios';

export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';

export const REMOVE_ITEM_REQUEST = 'REMOVE_ITEM_REQUEST';
export const REMOVE_ITEM_SUCCESS = 'REMOVE_ITEM_SUCCESS';
export const REMOVE_ITEM_FAILURE = 'REMOVE_ITEM_FAILURE';

export const AUTHENTICATE_REQUEST = 'AUTHENTICATE_REQUEST';
export const AUTHENTICATE_SUCCESS = 'AUTHENTICATE_SUCCESS';
export const AUTHENTICATE_FAILURE = 'AUTHENTICATE_FAILURE';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const removeItem = (itemType, id) => dispatch => {
  dispatch({ type: REMOVE_ITEM_REQUEST });
  console.log(itemType);

  axios
    .delete(`http://localhost:9000/api/note/${id}`)
    .then(() => {
      dispatch({
        type: 'REMOVE_ITEM_SUCCESS',
        payload: {
          itemType,
          id,
        },
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: REMOVE_ITEM_FAILURE });
    });
};

export const addItem = (itemType, itemContent) => (dispatch, getState) => {
  dispatch({ type: ADD_ITEM_REQUEST });
  // dispatch({type: 'ADD_ITEM_REQUEST'})
  // return axios('blabla', 'getState().').then(response => dispatch({ type: 'ADD_ITEM_SUCCESS', response})).catch()

  return axios
    .post(`http://localhost:9000/api/note`, {
      userID: getState().userID,
      type: itemType,
      ...itemContent,
    })
    .then(({ data }) => {
      console.log(data);
      dispatch({
        type: 'ADD_ITEM_SUCCESS',
        payload: {
          itemType,
          data,
        },
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_ITEM_FAILURE });
    });
};

export const authenticate = (username, password) => dispatch => {
  // AUTHENTICATE_REQUEST
  dispatch({ type: 'AUTHENTICATE_REQUEST' });

  return (
    axios
      .post('http://localhost:9000/api/user/login', {
        username,
        password,
      })

      // AUTHENTICATE_SUCCESS
      .then(payload => {
        console.log(payload);
        dispatch({ type: 'AUTHENTICATE_SUCCESS', payload });
      })
      // AUTHENTICATE_FAILURE
      .catch(err => {
        console.log(err);
        dispatch({ type: 'AUTHENTICATE_FAILURE' });
      })
  );
};

// ActionCreator

// Action

// Middleware

// Reducer

// Store

export const fetchItems = itemType => (dispatch, getState) => {
  dispatch({ type: 'FETCH_REQUEST' });

  return (
    axios
      .get('http://localhost:9000/api/notes/type', {
        params: {
          type: itemType,
          userID: getState().userID,
        },
      })

      // AUTHENTICATE_SUCCESS
      .then(({ data }) => {
        console.log(data);
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: {
            data,
            itemType,
          },
        });
      })
      // AUTHENTICATE_FAILURE
      .catch(err => {
        console.log(err);
        dispatch({ type: 'FETCH_FAILURE' });
      })
  );
};
