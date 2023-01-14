import React from 'react'
import Sidebar from '../Components/Sidebar'

const Setting = () => {
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
      <div className='setting-div'>This is the Setting component</div>
    </div>
      </div>
  )
}

export default Setting
