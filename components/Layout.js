import { useState, createContext } from 'react'
import Navbar from "./Navbar"

export const ThemeContext = createContext()


export function Layout( {children} ) {
    
    const [theme, setTheme] = useState('light')

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <div
                className={theme=='light'?'':'bg-black text-white'}>
                <Navbar />
                {children}
                <div className="w-full bg-black p-50 h-40 text-white">
                    Footer
                </div>
            </div>
        </ThemeContext.Provider>
    )
}