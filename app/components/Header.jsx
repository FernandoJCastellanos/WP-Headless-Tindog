"use client"


import Image from 'next/image';
import { useEffect, useState } from 'react'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons'





const Header = ({props}) => {

    const [text1Content, setText1Content] = useState('');

    const [linkHref1, setLinkHref1] = useState('');
    const [linkText1, setLinkText1] = useState('');
    const [linkHref2, setLinkHref2] = useState('');
    const [linkText2, setLinkText2] = useState('');

    const [img1Content, setImg1Content] = useState('');
    const [img1Alt, setImg1Alt] = useState('');


    useEffect(() => {
        if (props) {
          const text1Element = props.getElementById('text-1');
          const download1Element = props.getElementById('download-1');
          const download2Element = props.getElementById('download-2');
          const img1Element = props.getElementById('img-dog-phone');

        // console.log(text1Element)
          if (text1Element) {
            const paragraphElement = text1Element.querySelector('p');
              setText1Content(paragraphElement.innerHTML);
          }
          if(download1Element) {
            const linkElement = download1Element.querySelector('a');
                const href = linkElement.getAttribute('href');
                const text = linkElement.innerText.trim();
                setLinkHref1(href);
                setLinkText1(text);
          }
          if(download2Element) {
            const linkElement = download2Element.querySelector('a');
                const href = linkElement.getAttribute('href');
                const text = linkElement.innerText.trim();
                setLinkHref2(href);
                setLinkText2(text);
          }
          if (img1Element) {
            const imgElement = img1Element.querySelector('img');
            const src = imgElement.getAttribute('src');
            const alt = imgElement.getAttribute('alt');

            setImg1Content(src);
            setImg1Alt(alt);

          }
 
        }
      },[props])
    

  return (
    <section className='header-section'>
        <div className='header-div'>
          <h1 className='header-title'>
              {text1Content}
          </h1>
          <div className='header-download-div'>
            <a className='header-download-apple' href={linkHref1}><FontAwesomeIcon icon={faApple} className='header-icon-apple'/>{linkText1}</a>
            <a className='header-download-google' href={linkHref2}><FontAwesomeIcon icon={faGooglePlay} className='header-icons-google'/>{linkText2}</a>
          </div>
        </div>
        
        {/* <Image src={img1Content} alt={img1Alt} width={100} height={100}/> */}
        <img src={img1Content} className='phone-img'/>
    </section>
  )
}

export default Header