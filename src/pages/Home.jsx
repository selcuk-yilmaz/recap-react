import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Home = () => {
  const { sidebarToggle, setSidebarToggle } = useContext(UserContext)

  const homeWidth = sidebarToggle ? '300px' : '50px'

  return (
    <div className=" home" style={{ marginLeft: homeWidth }}>
      <div className="d-flex gap-3 p-5 flex-wrap">
        <div className="bg-danger  " style={{height:300, width:500}}>asdiöifdöhişlöşöşifdhöşfödfşöhlşöfdöbföhifffffbfçöbhhhhhhhhhhhhhhhhhhhhgfasd</div>
        <div className="bg-warning " style={{height:300, width:500}}>asdfxghblögöfgşlöfgöpkrçöfdböfbmkfdlxcçdfmklxkxmksköfghjrhglglglglglglglglglglglkjshkasd</div>
      </div>
      
      <div className="bg-success m-3"  style={{height:400, width:800}}></div>
      <div className="bg-warning m-5"  style={{height:500, width:800}}></div>
    </div>
  )
}

export default Home
