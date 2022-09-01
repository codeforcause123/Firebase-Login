import React from 'react'

export default function hero({handlelogout}) {
  return (
    <section className='hero'>
        <nav>
            <h2>Welcome</h2>
            <button onClick={handlelogout}>Logout</button>
        </nav>
    </section>
  )
}
