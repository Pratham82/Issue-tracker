import { GET_LOGS, ADD_LOG, SET_LOADING, LOGS_ERROR } from './types'

/*
export const getLogs = () => {
  return async dispatch => {
    setLoading()
    const res = await fetch('/logs')
    const data = res.json()

    dispatch({
      type: GET_LOGS,
      payload: data,
    })
  }
}
*/

// Get logs from the server
export const getLogs = () => async dispatch => {
  try {
    setLoading()
    const res = await fetch('/logs')
    const data = await res.json()

    dispatch({
      type: GET_LOGS,
      payload: data,
    })
  } catch (err) {
    /* handle error */
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    })
  }
}

// Add logs
export const addLog = log => async dispatch => {
  try {
    setLoading()
    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()

    dispatch({
      type: ADD_LOG,
      payload: data,
    })
  } catch (err) {
    /* handle error */
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    })
  }
}

export const setLoading = () => {
  return {
    type: SET_LOADING,
  }
}
