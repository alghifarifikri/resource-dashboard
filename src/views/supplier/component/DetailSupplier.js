/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Input from 'src/components/input'
import Loading from 'src/components/loading'

export default function DetailSupplier({ row, onChange }) {
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
              <Input label="Name" type="text" value={data.name} onChange={onChange} keys={'name'} />
              <Input
                label="Email"
                type="text"
                value={data.email}
                onChange={onChange}
                keys={'email'}
              />
              <Input
                label="Address"
                type="text"
                value={data.address}
                onChange={onChange}
                keys={'address'}
              />
              <Input
                label="Company"
                type="text"
                value={data.company}
                onChange={onChange}
                keys={'company'}
              />
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
