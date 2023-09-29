"use client"


import Image from 'next/image';
import { useEffect, useState } from 'react'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faBullseye, faHeart  } from '@fortawesome/free-solid-svg-icons'


const Tags = ({props}) => {

    const [element1Content, setElement1Content] = useState([]);
    const [element2Content, setElement2Content] = useState([]);
    const [element3Content, setElement3Content] = useState([]);



    useEffect(() => {
        if (props) {
          const element1Content1 = props.getElementById('check-icon');
          const element1Content2 = props.getElementById('text-2');
          const element1Content3 = props.getElementById('text-3');

          const element2Content1 = props.getElementById('target-icon');
          const element2Content2 = props.getElementById('text-4');
          const element2Content3 = props.getElementById('text-5');

          const element3Content1 = props.getElementById('heart-icon');
          const element3Content2 = props.getElementById('text-6');
          const element3Content3 = props.getElementById('text-7');


        // console.log(download1Element)
        if (element1Content1 && element1Content2 && element1Content3 ) {
            const elementContent1 = element1Content1.querySelector('img');
            const src = elementContent1.getAttribute('src');
            const alt = elementContent1.getAttribute('alt');

            const elementContent2 = element1Content2.querySelector('p');
            const elementContent3 = element1Content3.querySelector('p');

            setElement1Content([src,alt,elementContent2.innerHTML,elementContent3.innerHTML]);
          }
          if (element2Content1 && element2Content2 && element2Content3 ) {
            const elementContent1 = element2Content1.querySelector('img');
            const src = elementContent1.getAttribute('src');
            const alt = elementContent1.getAttribute('alt');

            const elementContent2 = element2Content2.querySelector('p');
            const elementContent3 = element2Content3.querySelector('p');

            setElement2Content([src,alt,elementContent2.innerHTML,elementContent3.innerHTML]);
          }
          if (element3Content1 && element3Content2 && element3Content3 ) {
            const elementContent1 = element3Content1.querySelector('img');
            const src = elementContent1.getAttribute('src');
            const alt = elementContent1.getAttribute('alt');

            const elementContent2 = element3Content2.querySelector('p');
            const elementContent3 = element3Content3.querySelector('p');

            setElement3Content([src,alt,elementContent2.innerHTML,elementContent3.innerHTML]);
          }
        }
      },[props])

  return (
    <section className='tag-section'>
        <div className='tag-icon-group'>
          <FontAwesomeIcon icon={faCircleCheck} className='tag-icons'/>
          <p className='tag-text'>{element1Content[2]}</p>
          <p className='tag-subtext'>{element1Content[3]}</p>
        </div>
        <div className='tag-icon-group'>
          <FontAwesomeIcon icon={faBullseye} className='tag-icons'/>
          <p className='tag-text'>{element2Content[2]}</p>
          <p className='tag-subtext'>{element2Content[3]}</p>
        </div>
        <div className='tag-icon-group'>
          <FontAwesomeIcon icon={faHeart} className='tag-icons'/>
          <p className='tag-text'>{element3Content[2]}</p>
          <p className='tag-subtext'>{element3Content[3]}</p>
        </div>
    </section>
  )
}

export default Tags