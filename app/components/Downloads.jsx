"use client"


import React from 'react'
import { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons'


const Downloads = ({props}) => {


    const [element1Content, setElement1Content] = useState([]);



    useEffect(() => {
        if (props) {
          const element1Content1 = props.getElementById('text-14');

          const element1Content2 = props.getElementById('download-3');
          const element1Content3 = props.getElementById('download-4');





        // console.log(download1Element)
        if (element1Content1 && element1Content2 && element1Content3 ) {
            const elementContent1 = element1Content1.querySelector('p');
            const linkElement = element1Content2.querySelector('a');
            const href = linkElement.getAttribute('href');
            const text = linkElement.innerText.trim();
            const linkElement2 = element1Content3.querySelector('a');
            const href2 = linkElement2.getAttribute('href');
            const text2 = linkElement2.innerText.trim();

            setElement1Content([elementContent1.innerHTML,href, text, href2, text2]);
          }
        }
      },[props])



  return (
    <section className='download-section'>
        <h3 className='download-text'>
            {element1Content[0]}
        </h3>
        <div className='download-container'>
          <a className='download-download' href={element1Content[1]}><FontAwesomeIcon icon={faApple} className='header-icon-apple'/>{element1Content[2]}</a>
          <a className='download-download' href={element1Content[1]}><FontAwesomeIcon icon={faGooglePlay} className='header-icons-google'/>{element1Content[2]}</a>
        </div>
       
    </section>
  )
}

export default Downloads