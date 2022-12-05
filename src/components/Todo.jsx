import React from 'react'
// import PropTypes from 'prop-types'

const Todo = () => {
  return (
    <div className='flex bg-indigo-600 items-center w-80 rounded p-2 text-white font-semibold justify-between'>
        <p className='truncate'>Lorem ipsum dolor sit .</p>
        <i class="fa-regular fa-trash ml-2 cursor-pointer"></i>
    </div>
  )
}

export default Todo