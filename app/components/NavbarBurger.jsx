"use client"



import React from 'react'
import { useEffect, useState } from 'react'
import { Link, Element } from 'react-scroll';
import Image from 'next/image';


import logo from "../../Tindog-wp-icons/tindog-logo.png"
import burger from "../../Tindog-wp-icons/burger-bar.png"
import { Squash as Hamburger } from 'hamburger-react'


const NavbarBurger = ({props}) => {


    const [isOpen, setOpen] = useState(false)
    const [windowWidth, setWindowWidth] = useState(900);


      function burgerClick(){
        setOpen(!isOpen)
      }

        // Update windowWidth state on component mount
        useEffect(() => {
            setWindowWidth(window.innerWidth);
        }, []); // Empty dependency array means it runs once on mount

        // Update windowWidth state when the window size changes
        useEffect(() => {
            const handleResize = () => {
            setWindowWidth(window.innerWidth);
            };

            window.addEventListener('resize', handleResize);

            // Clean up the event listener when the component unmounts
            return () => {
            window.removeEventListener('resize', handleResize);
            };
        }, [windowWidth]); // Dependency array includes windowWidth



    if (!props) {
    return null; // Return null or a loading spinner while data is being fetched
    }
  return (
    <nav>
        {windowWidth <= 900 ? (
            <div>
                <ul className={`flex flex-row items-center navbar ${isOpen ? "navbottom" : ""}`}>
                    <li>
                        <Link
                            activeClass="active"
                            to="section1"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <Image src={logo} alt='logo' className='nav-logo'/>
                        </Link>
                    </li>
                    <div className='burger-icon' onClick={burgerClick}>
                        <Hamburger toggled={isOpen}  size={25}/>
                    </div>
                </ul>
                <ul className={`burger-menu ${isOpen ? "menuOpen" : ""}`}>
                    <li>
                        <Link
                            activeClass="active"
                            to="section2"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            {props[0].name}
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="section3"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            {props[1].name}
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="section4"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            {props[2].name}
                        </Link>
                    </li>
                </ul>
            </div>
        ) : (
            <div>
                <ul className={`flex flex-row items-center navbar`}>
                    <li>
                        <Link
                            activeClass="active"
                            to="section1"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <Image src={logo} alt='logo' className='nav-logo'/>
                        </Link>
                    </li>
                    <div className={`nav-div`}>
                        <li >
                            <Link
                                activeClass="active"
                                to="section2"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                {props[0].name}
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="section3"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                {props[1].name}
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="section4"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                {props[2].name}
                            </Link>
                        </li>
                    </div>
                </ul>
            </div>
        )}
        
    </nav>
  )
}

export default NavbarBurger



    