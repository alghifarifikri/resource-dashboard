import { createSlice } from '@reduxjs/toolkit'
import { fetchApi } from 'src/utils/api'

export const fetch = (payload) => async (dispatch) => {
  dispatch(started())
  try {
    const response = await fetchApi('http://localhost:3001/api/user')
    const filter = response.find((item) => {
      return item.username === payload.user
    })
    if (Object.keys(filter).length !== 0) {
      if (filter.password === payload.password) {
        localStorage.setItem('login', 'login')
        dispatch(getUserSuccess(filter))
      } else {
        window.alert('Password Incorrect')
      }
    } else {
      window.alert('Username Not Found')
    }
  } catch (err) {
    console.log({ err })
    window.alert('User Not Found')
    dispatch(failed(err))
  }
}

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    loading: false,
    error: null,
    success: null,
  },
  reducers: {
    started: (state) => {
      state.loading = true
      state.error = null
    },
    getUserSuccess: (state, action) => {
      state.user = action.payload
      state.loading = false
    },
    failed: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    clear: (state) => {
      state.error = null
      state.success = null
    },
  },
})

export const { started, getUserSuccess, failed, clear } = userSlice.actions
export default userSlice.reducer
