/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Input from 'src/components/input'
import Loading from 'src/components/loading'

export default function DetailCustomer({ row, onChange }) {
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
                label="Firstname"
                type="text"
                value={data.firstname}
                onChange={onChange}
                keys={'firstname'}
              />
              <Input
                label="Lastname"
                type="text"
                value={data.lastname}
                onChange={onChange}
                keys={'lastname'}
              />
              <Input
                label="Username"
                type="text"
                value={data.username}
                onChange={onChange}
                keys={'username'}
              />
              <Input
                label="Email"
                type="text"
                value={data.email}
                onChange={onChange}
                keys={'email'}
              />
              <Input
                label="Password"
                type="password"
                value={data.password}
                onChange={onChange}
                keys={'password'}
              />
              <Input
                label="Confirm Password"
                type="password"
                value={data.confirmPassword}
                onChange={onChange}
                keys={'confirmPassword'}
              />
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
