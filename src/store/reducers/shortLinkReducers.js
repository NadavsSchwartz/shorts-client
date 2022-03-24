import {
  GUEST_CREATE_LINK_FAIL,
  GUEST_CREATE_LINK_REQUEST,
  GUEST_CREATE_LINK_SUCCESS,
} from '../actions/shortLinkAcionts';

export const guestLinkReducer = (
  state = { loading: false, error: null, guestLink: {} },
  action,
) => {
  switch (action.type) {
    case GUEST_CREATE_LINK_REQUEST:
      return { ...state, loading: true, error: null };
    case GUEST_CREATE_LINK_SUCCESS:
      return {
        ...state,
        loading: false,
        guestLink: action.payload,
        error: null,
      };
    case GUEST_CREATE_LINK_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
