/* eslint-disable react/prop-types */
import React from 'react'

export default function Table({ dataSource, column, handleDelete, handleDetail, mapping }) {
  return (
    <table className="table table-striped table-bordered table-hover">
      <thead>
        {column?.map((item, index) => {
          return (
            <th key={index} className="text-center">
              <div>{item}</div>
            </th>
          )
        })}
      </thead>
      <tbody>
        {dataSource?.map((data, index) => {
          return (
            <>
              <tr className="text-center" key={data.id}>
                {mapping?.map((map, i) => {
                  return (
                    <td key={i}>
                      {map === 'action' ? (
                        <>
                          <button
                            className="btn btn-info btn-sm text-white"
                            onClick={() => handleDetail(data)}
                          >
                            Detail
                          </button>{' '}
                          <button
                            className="btn btn-danger btn-sm text-white"
                            onClick={() => handleDelete(data)}
                          >
                            Delete
                          </button>
                        </>
                      ) : map === 'No.' ? (
                        index + 1
                      ) : (
                        data?.[map]
                      )}
                    </td>
                  )
                })}
              </tr>
            </>
          )
        })}
      </tbody>
    </table>
  )
}
