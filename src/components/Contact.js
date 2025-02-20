import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className='contact-section'>
      <h2>Contact</h2>
      <form className='contact-form'>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            className='form-control'
            id='name'
            placeholder='Enter your name'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            className='form-control'
            id='email'
            placeholder='Enter your email'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='message'>Message</label>
          <textarea
            className='form-control'
            id='message'
            rows='5'
            placeholder='Enter your message'
          ></textarea>
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </section>
  )
}

export default Contact
