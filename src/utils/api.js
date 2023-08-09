import axios from 'axios'

export const fetchApi = async (url) => {
  try {
    const response = await axios.get(url)
    return response?.data
  } catch (err) {
    throw err
  }
}

export const postApi = async (payload, url) => {
  try {
    const response = await axios.post(url, payload)
    return response?.data
  } catch (err) {
    console.log({ err })
    return err
  }
}

export const updateApi = async (payload, url) => {
  try {
    const response = await axios.put(url, payload)
    return response?.data
  } catch (err) {
    throw err
  }
}

export const deleteApi = async (payload, url) => {
  try {
    await axios.delete(url)
    return payload
  } catch (err) {
    throw err
  }
}
