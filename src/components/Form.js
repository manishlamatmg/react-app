import "./FormStyles.css"

import React from 'react'

const Form = () => {
  return (
  <div className="form">
    <form>
      <label>YOUR NAME</label>
      <input type="text"></input>
      <label>EMAIL</label>
      <input type="email"></input>
      <label>SUBJECT</label>
      <input type="text"></input>
      <label>MESSAGE</label>
      <textarea rows="6" placeholder="Type your message here" />
      <button className="btn">Submit</button>
    </form>
    
      
    </div>
  )
  
}

export default Form
