import { 
  SELECT_REQUEST_TYPE,
  FETCH_SUPPORT_REQUESTS,
  FETCH_SUPPORT_REQUEST_BY_ID
} from "../actions/types";

const INITIAL_STATE = {
  selected: 'pending',
  supportRequests: [],
  fetchedItem: {}
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
      case SELECT_REQUEST_TYPE:
          const selected = action.payload
          return {
              ...state,
              selected
          }
      case FETCH_SUPPORT_REQUESTS:
          const supportRequests = action.payload;
          return {
              ...state,
              supportRequests
          }
      case FETCH_SUPPORT_REQUEST_BY_ID:
          const fetchedItem = state.supportRequests.find(supportRequest => {
              if(supportRequest._id == action.payload) {
                  return supportRequest
              }
          })
          return {
              ...state,
              fetchedItem
          }
      default: return state;
  }
}