import React from 'react'

const Authlayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='flex items-center h-full justify-center'>{children}</div>
  )
}

export default Authlayout