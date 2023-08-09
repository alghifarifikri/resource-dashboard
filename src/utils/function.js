export const handleModal = (func) => {
  return func()
}

export const handlePageChange = (func) => {
  return func()
}
export const handleRow = (func) => {
  return func()
}

export const handleChangeForm = (row, param) => {
  const temp = { ...row, ...param }
  return temp
}

export const handleCurrentPage = (param, paging, itemsPerPage) => {
  const startIndex = (paging.currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const temp = param?.slice(startIndex, endIndex)
  return temp
}
