import initialState from './initialState';
import axios from 'axios';

// selectors
export const getAllOwners = ({ owners }) => owners.data;
export const getRequest = ({ owners }) => owners.request;

// actions
const createActionName = (actionName) => `app/owners/${actionName}`;
const LOAD_OWNERS = createActionName('LOAD_OWNERS');
const ADD_OWNER = createActionName('ADD_OWNER');

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

// action creators
export const loadOwners = (payload) => ({ payload, type: LOAD_OWNERS });

export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = (error) => ({ error, type: ERROR_REQUEST });

export const loadOwnersRequest = (id) => {
  return async (dispatch) => {
    dispatch(startRequest());

    try {
      let res = await axios.get(
        `https://crm-real-estate-manager.herokuapp.com/v1/owners`
      );
      await new Promise((resolve, reject) => setTimeout(resolve, 1000));

      dispatch(loadOwners(res.data));
      console.log(res.data);
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

const ownersReducer = (statePart = initialState, action = {}) => {
  switch (action.type) {
    case START_REQUEST:
      return {
        ...statePart,
        request: { pending: true, error: null, success: false },
      };
    case END_REQUEST:
      return {
        ...statePart,
        request: { pending: false, error: null, success: true },
      };
    case ERROR_REQUEST:
      return {
        ...statePart,
        request: { pending: false, error: action.error, success: false },
      };
    case LOAD_OWNERS:
      return { ...statePart, data: action.payload };
    default:
      return statePart;
  }
};

export default ownersReducer;
