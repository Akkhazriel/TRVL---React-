import React, {useState, useEffect} from 'react'
import './Navbar.sass'
import { Link } from 'react-router-dom'
import { MdModeOfTravel } from "react-icons/md"
import { IoMenu } from "react-icons/io5"
import { IoMdClose } from "react-icons/io"
import Button from './Button'

function Navbar() {
    // Принимаем в качестве значения иконки false
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(false)

    const handleClick = () => {
        setClick(!click) // смена значения на противоположное указанное в icon
    }

    // При нажатии закрывает действующее меню передавая значение неактивного меню
    const closeMobileMenu = () => setClick(false)

    // Показать кнопку при менее 960
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    // Рендерим кнопку единожды
    useEffect(() => {
        showButton()
    }, [])

    // Если окно меньше 960 то покажет кнопку
    window.addEventListener('resize', showButton)

  return (
    <>
        {/* Navigation */}
        <nav className='navbar'>
            <div className="navbar-container">
                {/* LOGO LINK */}
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    TRVL <MdModeOfTravel />
                </Link>
                {/* MENU ICON */}
                <div className='menu-icon' onClick={handleClick}>
                    {click ?  <IoMdClose className='menu-icon__color' /> : <IoMenu className='menu-icon__color'/>}
                </div>
                {/* MENU LINKS */}
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
            </div>
        </nav>
    </>
  )
}

export default Navbar