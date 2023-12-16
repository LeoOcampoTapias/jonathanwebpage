import React from 'react'
import './ContactStyles.css'

const Contact = () => {
  return (
    <div>
      <div className="contact">
        <div className="form-container">
            <form>
                <h1><span>Contact</span> Us</h1>
                <div>
                    <label>Name</label>
                    <input type="text" placeholder="enter your name"/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" placeholder="enter your email"/>
                </div>
                <div>
                    <label>Message</label>
                    <textarea rows='10' placeholder="enter your text"/>
                </div>
                <button>Submit</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
