import { useState } from "react"
import { Link } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
    const [menu,setMenu] =useState("home")
    return (
        <div className="navbar">
            <ul className="nav-menu">
                <li onClick={()=>setMenu('home')}><Link style={{textDecoration:"none",color:'black'}} to='/'>Home</Link>{menu==='home'?(<hr/>):(<></>)}</li>
                <li onClick={()=>setMenu('users')}><Link style={{textDecoration:"none",color:'black'}} to='/users'>Users</Link>{menu==='users'?(<hr/>):(<></>)}</li>

            </ul>
            
        </div>
    )
}

export default Navbar
