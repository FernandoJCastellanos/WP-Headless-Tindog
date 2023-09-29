"use client"


import Image from 'next/image';
import { useEffect, useState } from 'react'
import React from 'react'

import { Carousel } from "@material-tailwind/react";


const Testimonial = ({props}) => {

    const [element1Content, setElement1Content] = useState([]);
    const [element2Content, setElement2Content] = useState([]);
    const [element3Content, setElement3Content] = useState([]);



    useEffect(() => {
        if (props) {
          const element1Content1 = props.getElementById('text-8');
          const element1Content2 = props.getElementById('text-9');
          const element1Content3 = props.getElementById('img-lady');

          const element2Content1 = props.getElementById('text-10');
          const element2Content2 = props.getElementById('text-11');
          const element2Content3 = props.getElementById('img-doggo');

          const element3Content1 = props.getElementById('img-tc');
          const element3Content2 = props.getElementById('img-tnw');
          const element3Content3 = props.getElementById('img-bi');
          const element3Content4 = props.getElementById('img-mashable');


        // console.log(download1Element)
        if (element1Content1 && element1Content2 && element1Content3 ) {
            const elementContent1 = element1Content1.querySelector('p');
            const elementContent2 = element1Content2.querySelector('p');

            const elementContent3 = element1Content3.querySelector('img');
            const src = elementContent3.getAttribute('src');
            const alt = elementContent3.getAttribute('alt');

            setElement1Content([elementContent1.innerHTML,elementContent2.innerHTML,src,alt]);
          }
          if (element2Content1 && element2Content2 && element2Content3 ) {
            const elementContent1 = element2Content1.querySelector('p');
            const elementContent2 = element2Content2.querySelector('p');

            const elementContent3 = element2Content3.querySelector('img');
            const src = elementContent3.getAttribute('src');
            const alt = elementContent3.getAttribute('alt');

            setElement2Content([elementContent1.innerHTML,elementContent2.innerHTML,src,alt]);
          }
          if (element3Content1 && element3Content2 && element3Content3 && element3Content4 ) {
            const elementContent1 = element3Content1.querySelector('img');
            const src1 = elementContent1.getAttribute('src');
            const alt1 = elementContent1.getAttribute('alt');

            const elementContent2 = element3Content2.querySelector('img');
            const src2 = elementContent2.getAttribute('src');
            const alt2 = elementContent2.getAttribute('alt');

            const elementContent3 = element3Content3.querySelector('img');
            const src3 = elementContent3.getAttribute('src');
            const alt3 = elementContent3.getAttribute('alt');

            const elementContent4 = element3Content4.querySelector('img');
            const src4 = elementContent4.getAttribute('src');
            const alt4 = elementContent4.getAttribute('alt');

            setElement3Content([src1,alt1,src2,alt2,src3,alt3,src4,alt4]);
          }
        }
      },[props])

  return (
    <section className='testimonial-section'>
        <div>
            <Carousel
                className="rounded-xl"
                autoplay={true}
                loop={true}

                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                        key={i}
                        className={`item-selector block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                            activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                        }`}
                        onClick={() => setActiveIndex(i)}
                        />
                    ))}
                    </div>
                )}
            >
                <div className='carousel-item1'>
                    <p className='carousel-text'>
                        {element1Content[0]}
                    </p>
                    <div className='carousel-testimonial'>
                        <img className='carousel-img' src={element1Content[2]} />
                        <p className='carousel-title'>
                            {element1Content[1]}
                        </p>
                    </div>
                </div>
                <div className='carousel-item1'>
                    <p className='carousel-text'>
                        {element2Content[0]}
                    </p>
                    <div className='carousel-testimonial'>
                        <img className='carousel-img' src={element2Content[2]} />
                        <p className='carousel-title'>
                            {element2Content[1]}
                        </p>
                    </div>
                </div>
            </Carousel>
        </div>
        <div className='carousel-brands'>
            <img className='carousel-brand' src={element3Content[0]} alt={element3Content[1]} />
            <img className='carousel-brand' src={element3Content[2]} alt={element3Content[3]} />
            <img className='carousel-brand' src={element3Content[4]} alt={element3Content[5]} />
            <img className='carousel-brand' src={element3Content[6]} alt={element3Content[7]} />

        </div>
    </section>
  )
}

export default Testimonial