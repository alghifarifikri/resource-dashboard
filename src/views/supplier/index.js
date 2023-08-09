/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clear, remove, fetch, post, update } from 'src/redux/slice/supplierSlice'
import Loading from 'src/components/loading'
import {
  handleChangeForm,
  handleCurrentPage,
  handleModal,
  handlePageChange,
  handleRow,
} from 'src/utils/function'
import { mapSupplier } from 'src/utils/mapping'
import { customersColumn } from 'src/utils/column'
import ListComponent from 'src/components/ListComponent'

const itemsPerPage = 5

const Suppliers = () => {
  const dispatch = useDispatch()
  const suppliersData = useSelector((state) => state.suppliers.suppliers)
  const isLoading = useSelector((state) => state.suppliers.loading)
  const [suppliers, setSuppliers] = useState(suppliersData)
  const [row, setRow] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [showDelete, setShowDelete] = useState(false)
  const [showDetail, setShowDetail] = useState(false)
  const [paging, setIsPaging] = useState({
    currentPage: 1,
    totalPages: 1,
  })

  useEffect(() => {
    dispatch(fetch())
  }, [dispatch])

  useEffect(() => {
    setSuppliers(handleCurrentPage(suppliersData, paging, itemsPerPage))
  }, [suppliersData])

  useEffect(() => {
    const total = Math.ceil(suppliersData.length / itemsPerPage)
    setIsPaging({
      currentPage: paging.currentPage,
      totalPages: total > 0 ? total : 1,
    })
  }, [suppliers])

  useEffect(() => {
    setSuppliers(handleCurrentPage(suppliersData, paging, itemsPerPage))
  }, [paging.currentPage])

  useEffect(() => {
    if (isLoading) {
      dispatch(clear())
      setRow({
        name: '',
        email: '',
        address: '',
        company: '',
      })
      setShowDetail(false)
      setShowModal(false)
      setShowDelete(false)
    }
  }, [dispatch, isLoading])

  const onChange = (param) => {
    setRow(handleChangeForm(row, param))
  }

  const handleCrudUser = () => {
    const payload = {
      ...row,
      id:
        Object.keys(row).length !== 0 || showDelete
          ? row.id
          : Math.random().toString(36).substring(2, 9), // Membuat ID unik secara acak
    }
    dispatch(
      showDelete
        ? remove(payload)
        : Object.keys(row).length !== 0 && showDetail
        ? update(payload)
        : post(payload),
    )
  }

  const closeModal = () => {
    handleModal(() => {
      setRow({
        name: '',
        email: '',
        address: '',
        company: '',
      })
      if (showDetail) {
        setShowDetail(!showDetail)
      } else if (showModal) {
        setShowModal(!showModal)
      } else if (showDelete) {
        setShowDelete(!showDelete)
      }
    })
  }

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <ListComponent
          label={'Suppliers'}
          dataSource={suppliers}
          mapping={mapSupplier}
          column={customersColumn}
          paging={paging}
          row={row}
          showModal={showModal}
          showDetail={showDetail}
          showDelete={showDelete}
          onChange={onChange}
          handleCrudUser={handleCrudUser}
          handleCloseModal={() => closeModal()}
          handleCloseDetail={() => closeModal()}
          handleCloseDelete={() => closeModal()}
          handleShowModal={() => handleModal(() => setShowModal(true))}
          onPageChange={(page) =>
            handlePageChange(() =>
              setIsPaging({
                currentPage: page,
                totalPages: paging.totalPages,
              }),
            )
          }
          handleRowData={(data) =>
            handleRow(() => {
              setRow(data)
              setShowDetail(true)
            })
          }
          handleRowDelete={(data) =>
            handleRow(() => {
              setRow(data)
              setShowDelete(true)
            })
          }
        />
      )}
    </div>
  )
}

export default Suppliers
