import React from 'react'

const Header = (props) => {
    const logOutUser = () => {
        localStorage.setItem('loggedInUser', '')
        props.changeUser('');
    }
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'> User 👋</span></h1>
        <button onClick={logOutUser} className='bg-red-600 text-white px-5 py-2 text-lg font-medium rounded-sm'>Log out</button>
    </div>
  )
}

export default Header