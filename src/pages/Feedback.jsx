import React from 'react'
import Sidebar from '../Components/Sidebar'

const Feedback = () => {
  return (
    <div>
      <Sidebar />
    <div style={{
      "margin" : "auto",
      "display" : "flex",
      "justifyContent" : "center",
      "alignItems" : "center",
      "fontSize" : "50px",
      "fontWeight" : "bold"
    }}>
      <div className='feedback-div'>This is the Feedback component</div>
    </div>
      </div>
  )
}

export default Feedback
