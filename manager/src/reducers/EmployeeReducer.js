/**
 *  EmployeeReducer reducer
 */

 import { EMPLOYEES_FETCH_SUCCESS } from '../actions/types';

  const INITAL_STATE = {};

function EmployeeReducer(state = INITAL_STATE, action) {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export default EmployeeReducer;
