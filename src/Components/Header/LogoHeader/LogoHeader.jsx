import React,{useState} from 'react'
import classes from './LogoHeader.module.css'
import Sidebar from '../../Sidebar/Sidebar'

const LogoHeader = () => {
    const [isSidebarOpen,setIsSidebarOpen] = useState(false)
  return (
    <div className={classes.header}>
        <div className={classes.header_left}>
            <img src="https://woxro.com/public/assets/png/woxrologo.png" alt="logo" />
        </div>
        <div className={classes.header_right}>
            {
                isSidebarOpen ? <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} /> :<i className='bx bx-menu' onClick={() => setIsSidebarOpen(true)}></i>
            }
        
        </div>
    </div>
  )
}

export default LogoHeader