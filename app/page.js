"use client"


import { useEffect, useState } from 'react'


import NavbarBurger from './components/NavbarBurger';
import Header from './components/Header';
import Tags from './components/Tags';
import Testimonial from './components/Testimonial';
import PriceCard from './components/PriceCard';
import Downloads from './components/Downloads';
import Socials from './components/Socials';


export default function Home() {



  const [pageData, setPageData] = useState(null);
  const [navData, setNavData] = useState(null);


  async function pullJson(){
    const response = await fetch("http://localhost:10004/wp-json/wp/v2/pages/11")
    const responseData = await response.json()
    const parsedHTML = new DOMParser().parseFromString(responseData.content.rendered, 'text/html');
    setPageData(parsedHTML)
    // console.log(responseData)
  }


  async function pullNavJson(){
    const response = await fetch("http://localhost:10004/wp-json/wp/v2/navbar")
    const responseData = await response.json()
    setNavData(responseData)
  //   console.log(responseData)
  }


  useEffect(() => {
    pullJson()
    pullNavJson()
  },[])

  const [windowWidth, setWindowWidth] = useState(null);

  // Update windowWidth state when the window size changes
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.innerWidth]);




  return (
    <main>

      <NavbarBurger props={navData}/>

      <header>
        <Header props={pageData}/>
      </header>

      <Tags props={pageData}/>
      <Testimonial props={pageData}/>
      <PriceCard props={pageData}/> 

      <footer>
        <Downloads props={pageData}/>
        <Socials props={pageData}/>
      </footer>

    </main>
  )
}
