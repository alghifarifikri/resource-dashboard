/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Input from 'src/components/input'
import Loading from 'src/components/loading'

export default function DetailOrder({ row, onChange }) {
  const [data, setData] = useState(row)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setData(row)
    setLoading(false)
  }, [row])

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="">
          {loading ? (
            <Loading />
          ) : (
            <form>
              <Input
                label="Name"
                type="text"
                value={data.name}
                onChange={onChange}
                keys={'name'}
                disabled={true}
              />
              <Input
                label="Email"
                type="text"
                value={data.email}
                onChange={onChange}
                keys={'email'}
                disabled={true}
              />
              <Input
                label="Address"
                type="text"
                value={data.address}
                onChange={onChange}
                keys={'address'}
                disabled={true}
              />
              <Input
                label="Item"
                type="text"
                value={data.item}
                onChange={onChange}
                keys={'item'}
                disabled={true}
              />
              <Input
                label="Status"
                type="text"
                value={data.status}
                onChange={onChange}
                keys={'status'}
              />
              <Input
                label="Price"
                type="text"
                value={data.price?.toLocaleString()}
                onChange={onChange}
                keys={'price'}
                disabled={true}
              />
              <Input
                label="Qty"
                type="text"
                value={data.qty?.toLocaleString()}
                onChange={onChange}
                keys={'qty'}
                disabled={true}
              />
              <Input
                label="Total"
                type="text"
                value={data.total?.toLocaleString()}
                onChange={onChange}
                keys={'total'}
                disabled={true}
              />
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
