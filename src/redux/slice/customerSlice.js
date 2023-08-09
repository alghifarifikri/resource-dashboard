import { createSlice } from '@reduxjs/toolkit'
import { deleteApi, fetchApi, postApi, updateApi } from 'src/utils/api'

export const fetch = () => async (dispatch) => {
  dispatch(started())
  try {
    const response = await fetchApi('http://localhost:3001/api/customers')
    if (response) {
      dispatch(getCustomerSuccess(response))
    }
  } catch (err) {
    console.log({ err })
    dispatch(failed(err))
  }
}

export const post = (payload) => async (dispatch) => {
  dispatch(started())
  try {
    const response = await postApi(payload, 'http://localhost:3001/api/customers')
    if (response) {
      dispatch(addCustomerSuccess(response))
      window.alert('Add Data Successfully')
    }
  } catch (err) {
    console.log({ err })
    window.alert(err.message)
    dispatch(failed(err.message))
  }
}

export const update = (payload) => async (dispatch) => {
  dispatch(started())
  try {
    const response = await updateApi(payload, `http://localhost:3001/api/customers/${payload.id}`)
    if (response) {
      dispatch(updateSuccess(response))
      window.alert('Update Data Successfully')
    }
  } catch (err) {
    console.log({ err })
    window.alert(err.message)
    dispatch(failed(err.message))
  }
}

export const remove = (payload) => async (dispatch) => {
  dispatch(started())
  try {
    const response = await deleteApi(payload, `http://localhost:3001/api/customers/${payload.id}`)
    if (response) {
      dispatch(removeSuccess(response))
      window.alert('Delete Data Successfully')
    }
  } catch (err) {
    console.log({ err })
    window.alert(err.message)
    dispatch(failed(err.message))
  }
}

const customerSlice = createSlice({
  name: 'customers',
  initialState: {
    customers: [],
    loading: false,
    error: null,
    success: null,
  },
  reducers: {
    started: (state) => {
      state.loading = true
      state.error = null
    },
    getCustomerSuccess: (state, action) => {
      state.customers = action.payload
      state.loading = false
    },
    addCustomerSuccess: (state, action) => {
      state.customers.push(action.payload)
      state.loading = false
      state.success = true
    },
    updateSuccess: (state, action) => {
      const { firstname, lastname, username, email, password, confirmPassword } = action.payload
      const customers = state.customers.find((customer) => customer.id === action.payload.id)
      if (customers) {
        customers.firstname = firstname
        customers.lastname = lastname
        customers.username = username
        customers.email = email
        customers.password = password
        customers.confirmPassword = confirmPassword
      }
      state.loading = false
      state.success = true
    },
    removeSuccess: (state, action) => {
      const customers = state.customers.filter((customer) => {
        return customer.id !== action.payload.id
      })
      state.customers = customers
      state.loading = false
      state.success = true
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

export const {
  started,
  getCustomerSuccess,
  addCustomerSuccess,
  updateSuccess,
  removeSuccess,
  failed,
  clear,
} = customerSlice.actions
export default customerSlice.reducer
