import initialState from './initialState';
import axios from 'axios';
import { API_URL } from '../config';

// selectors
export const getAllOwners = ({ owners }) => owners.data;
export const getRequest = ({ owners }) => owners.request;

// actions
const createActionName = (actionName) => `app/owners/${actionName}`;
const LOAD_OWNERS = createActionName('LOAD_OWNERS');
const ADD_OWNER = createActionName('ADD_OWNER');
const REMOVE_OWNER = createActionName('REMOVE_OWNER');

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

// action creators
export const loadOwners = (payload) => ({ payload, type: LOAD_OWNERS });
export const addOwner = (payload) => ({ payload, type: ADD_OWNER });
export const removeOwner = (payload) => ({ payload, type: REMOVE_OWNER });

export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = (error) => ({ error, type: ERROR_REQUEST });

export const loadOwnersRequest = () => {
  return async (dispatch) => {
    dispatch(startRequest());

    try {
      let res = await axios.get(`${API_URL}/owners`);

      dispatch(loadOwners(res.data));
      console.log(res.data);
      dispatch(endRequest());
    } catch (err) {
      dispatch(errorRequest(err.message));
    }
  };
};

export const addOwnerRequest = (owner) => {
  const { personalData, forwardingAddress, dataToInvoice, addressToInvoice } =
    owner;
  console.log('add request', owner);
  const ownerData = {
    personalData,
    forwardingAddress,
    dataToInvoice,
    addressToInvoice,
  };
  return async (dispatch) => {
    dispatch(startRequest());
    try {
      let res = await axios.post(`${API_URL}/owner/`, ownerData);
      dispatch(addOwner(res.data));
      dispatch(endRequest());
    } catch (err) {
      dispatch(errorRequest(err.message));
    }
  };
};

export const removeOwnerRequest = (id) => {
  return async (dispatch) => {
    dispatch(startRequest());

    try {
      await axios.delete(`${API_URL}/owners/${id}`);
      dispatch(removeOwner(id));
    } catch (err) {
      dispatch(errorRequest(err.message));
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
    case ADD_OWNER:
      return { ...statePart, data: action.payload };
    case REMOVE_OWNER:
      return { ...statePart, data: action.payload };
    default:
      return statePart;
  }
};

export default ownersReducer;
