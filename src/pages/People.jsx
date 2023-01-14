import React from 'react'
import Sidebar from '../Components/Sidebar'

const People = () => {
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
      <div className='people-div'>This is the People component</div>
    </div>
      </div>
  )
}

export default People
