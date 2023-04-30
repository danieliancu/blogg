import React, { useContext } from 'react'
import Link from 'next/link'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import {ThemeContext} from './Layout'


const Navbar = () => {
    
    const {theme, setTheme} = useContext(ThemeContext)


  return (
    <div className="bg-black text-white p-5 flex justify-between"
    >
        <div>
            <Link href="/">Home</Link>
        </div>
        <div className="space-x-5">
            <Link href="/about">About</Link>
            <Link href="/admin">Admin</Link>  
            <button onClick={()=>setTheme(theme==='light'?'dark':'light')}>
                {theme==='dark'?<BsFillMoonFill />:<BsFillSunFill />}
            </button>     
        </div>

    </div>
  )
}

export default Navbar