/* eslint-disable react/prop-types */
import React from 'react'
import Table from '../table'
import Pagination from '../pagination'
import Modal from '../modal'
import DetailCustomer from 'src/views/customers/component/DetailCustomers'
import DetailSupplier from 'src/views/supplier/component/DetailSupplier'
import DetailOrder from 'src/views/order/component/DetailOrder'

export default function ListComponent({
  label,
  mapping,
  column,
  handleShowModal,
  dataSource,
  paging,
  row,
  showModal,
  onChange,
  showDetail,
  showDelete,
  handleCrudUser,
  onPageChange,
  handleCloseModal,
  handleCloseDetail,
  handleCloseDelete,
  handleRowData,
  handleRowDelete,
}) {
  return (
    <div>
      {label !== 'Orders' && (
        <button className="btn btn-primary mb-2" onClick={handleShowModal}>
          Add {label}
        </button>
      )}
      <Table
        dataSource={dataSource}
        column={column}
        mapping={mapping}
        handleDetail={handleRowData}
        handleDelete={handleRowDelete}
      />
      <Pagination
        currentPage={paging.currentPage}
        totalPages={paging.totalPages}
        onPageChange={onPageChange}
      />
      <Modal
        label={'Delete Customers'}
        button={'Delete'}
        handleCloseModal={handleCloseDelete}
        submit={handleCrudUser}
        showModal={showDelete}
      >
        Are You Sure Want To Delete This Data ?
      </Modal>
      <Modal
        label={showModal ? `Add ${label}` : `Detail ${label}`}
        button={showModal ? 'Save' : 'Edit'}
        submit={handleCrudUser}
        handleCloseModal={showModal ? handleCloseModal : handleCloseDetail}
        showModal={showModal ? showModal : showDetail}
      >
        {label === 'Customers' ? (
          <DetailCustomer row={row} onChange={onChange} />
        ) : label === 'Suppliers' ? (
          <DetailSupplier row={row} onChange={onChange} />
        ) : (
          <DetailOrder row={row} onChange={onChange} />
        )}
      </Modal>
    </div>
  )
}
