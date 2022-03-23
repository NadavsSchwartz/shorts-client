import axios from 'axios';
import { API, getAxiosConfig } from 'consts';

export const DELETE_LINK_REQUEST = 'DELETE_LINK_REQUEST';
export const DELETE_LINK_SUCCESS = 'DELETE_LINK_SUCCESS';
export const DELETE_LINK_FAIL = 'DELETE_LINK_FAIL';
export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

export const deleteShortLink = (selectedLinksToDelete) => async (dispatch) => {
  console.log(selectedLinksToDelete);
  try {
    dispatch({
      type: DELETE_LINK_REQUEST,
    });
    //todo - get actual urlId, this is bad hack
    const urlId = selectedLinksToDelete.split('/')[3];
    const { data } = await axios.delete(
      `${API.BASE}${API.DeleteUrl}/${urlId}`,
      {
        headers: getAxiosConfig(),
        data: { urlId: urlId },
      },
    );

    dispatch({
      type: DELETE_LINK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data
        ? error.response.data
        : error.message;

    dispatch({
      type: DELETE_LINK_FAIL,
      payload: message,
    });
  }
};

export const CREATE_LINK_REQUEST = 'CREATE_LINK_REQUEST';
export const CREATE_LINK_SUCCESS = 'CREATE_LINK_SUCCESS';
export const CREATE_LINK_FAIL = 'CREATE_LINK_FAIL';

export const createShortLink = (longUrlToShorten) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_LINK_REQUEST,
    });

    const { data } = await axios.post(
      `${API.BASE}${API.CreateUrl}`,
      {
        longUrl: longUrlToShorten,
      },
      getAxiosConfig(),
    );

    dispatch({
      type: CREATE_LINK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data
        ? error.response.data
        : error.message;

    dispatch({
      type: CREATE_LINK_FAIL,
      payload: message,
    });
  }
};
