import {
  GUEST_CONTACT_US_FAIL,
  GUEST_CONTACT_US_REQUEST,
  GUEST_CONTACT_US_SUCCESS,
} from 'store/actions/guestActions';
import {
  GUEST_CREATE_LINK_FAIL,
  GUEST_CREATE_LINK_REQUEST,
  GUEST_CREATE_LINK_SUCCESS,
  GUEST_LINK_RESET,
} from '../actions/shortLinkAcionts';

export const guestLinkReducer = (
  state = { loading: false, error: null, guestLink: {}, success: false },
  action,
) => {
  switch (action.type) {
    case GUEST_CREATE_LINK_REQUEST:
      return { ...state, loading: true, error: null, success: false };
    case GUEST_CREATE_LINK_SUCCESS:
      return {
        ...state,
        loading: false,
        guestLink: action.payload,
        error: null,
        success: false,
      };
    case GUEST_CREATE_LINK_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
      };
    case GUEST_CONTACT_US_REQUEST:
      return { ...state, loading: true, error: null, success: false };
    case GUEST_CONTACT_US_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload,
        error: null,
      };
    case GUEST_CONTACT_US_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
      };
    case GUEST_LINK_RESET:
      return {
        ...state,
        loading: false,
        error: null,
        guestLink: {},
        success: false,
      };
    default:
      return state;
  }
};
