import { createSlice } from '@reduxjs/toolkit'
import { deleteApi, fetchApi, updateApi } from 'src/utils/api'

export const fetch = () => async (dispatch) => {
  dispatch(started())
  try {
    const response = await fetchApi('http://localhost:3001/api/orders')
    if (response) {
      dispatch(getOrderSuccess(response))
    }
  } catch (err) {
    console.log({ err })
    dispatch(failed(err))
  }
}

export const update = (payload) => async (dispatch) => {
  dispatch(started())
  try {
    const response = await updateApi(payload, `http://localhost:3001/api/orders/${payload.id}`)
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
    const response = await deleteApi(payload, `http://localhost:3001/api/orders/${payload.id}`)
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

const orderSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: [],
    loading: false,
    error: null,
    success: null,
  },
  reducers: {
    started: (state) => {
      state.loading = true
      state.error = null
    },
    getOrderSuccess: (state, action) => {
      state.orders = action.payload
      state.loading = false
    },
    updateSuccess: (state, action) => {
      const { name, email, address, status, item, price, qty, total } = action.payload
      const orders = state.orders.find((order) => order.id === action.payload.id)
      if (orders) {
        orders.name = name
        orders.email = email
        orders.address = address
        orders.item = item
        orders.status = status
        orders.price = Number(price)
        orders.qty = Number(qty)
        orders.total = Number(total)
      }
      state.loading = false
      state.success = true
    },
    removeSuccess: (state, action) => {
      const orders = state.orders.filter((order) => {
        return order.id !== action.payload.id
      })
      state.orders = orders
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
  getOrderSuccess,
  //   addOrderSuccess,
  updateSuccess,
  removeSuccess,
  failed,
  clear,
} = orderSlice.actions
export default orderSlice.reducer
