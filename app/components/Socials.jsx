"use client"


import React from 'react'
import { useEffect, useState } from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope  } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'



const Socials = ({props}) => {


    const [element1Content, setElement1Content] = useState([]);



    useEffect(() => {
        if (props) {
          const element1Content1 = props.getElementById('text-15');



        // console.log(download1Element)
        if (element1Content1 ) {
            const elementContent1 = element1Content1.querySelector('p');

            setElement1Content([elementContent1.innerHTML]);
          }
        }
      },[props])



  return (
    <section className='social-section'>
        <div className='social-icons'>
            <FontAwesomeIcon icon={faFacebookF} className='socials-icon'/>
            <FontAwesomeIcon icon={faTwitter} className='socials-icon'/>
            <FontAwesomeIcon icon={faInstagram} className='socials-icon'/>
            <FontAwesomeIcon icon={faEnvelope} className='socials-icon' />
        </div>
        <p className='text-black opacity-50'>
            {element1Content[0]}
        </p>
    </section>
  )
}

export default Socials