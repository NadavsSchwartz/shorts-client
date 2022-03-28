import axios from 'axios';
import { API } from 'consts';

export const GUEST_CONTACT_US_REQUEST = 'GUEST_CONTACT_US_REQUEST';
export const GUEST_CONTACT_US_SUCCESS = 'GUEST_CONTACT_US_SUCCESS';
export const GUEST_CONTACT_US_FAIL = 'GUEST_CONTACT_US_FAIL';
export const GUEST_LINK_RESET = 'GUEST_LINK_RESET';

export const contactUs = (contactFormValues) => async (dispatch) => {
  try {
    dispatch({
      type: GUEST_CONTACT_US_REQUEST,
    });

    const { data } = await axios.post(
      `${API.BASE}${API.ContactUs}`,
      contactFormValues,
    );

    dispatch({
      type: GUEST_CONTACT_US_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data
        ? error.response.data.message
        : error.message;

    dispatch({
      type: GUEST_CONTACT_US_FAIL,
      payload: message,
    });
  }
};
