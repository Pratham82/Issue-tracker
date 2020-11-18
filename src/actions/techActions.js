import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR,
} from './types'

// Get Techs

export const getTechs = () => async dispatch => {
  try {
    setLoading()
    const res = await fetch('/techs')
    const data = await res.json()

    dispatch({
      type: GET_TECHS,
      payload: data,
    })
  } catch (err) {
    /* handle error */
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.data,
    })
  }
}

export const setLoading = () => {
  return {
    type: SET_LOADING,
  }
}
