"use client"


import React from 'react'
import { useEffect, useState } from 'react'

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";



  function CheckIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-3 w-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
    );
  }


const PriceCard = ({props}) => {



    const [element1Content, setElement1Content] = useState([]);
    const [element2Content, setElement2Content] = useState([]);
    const [element3Content, setElement3Content] = useState([]);
    const [element4Content, setElement4Content] = useState([]);



    useEffect(() => {
        if (props) {
          const element1Content1 = props.getElementById('text-12');
          const element1Content2 = props.getElementById('text-13');

          const element2Content1 = props.getElementById('card1-1');
          const element2Content2 = props.getElementById('card1-2');
          const element2Content3 = props.getElementById('card1-3');
          const element2Content4 = props.getElementById('card1-4');
          const element2Content5 = props.getElementById('card1-5');
          const element2Content6 = props.getElementById('card1-6');

          const element3Content1 = props.getElementById('card2-1');
          const element3Content2 = props.getElementById('card2-2');
          const element3Content3 = props.getElementById('card2-3');
          const element3Content4 = props.getElementById('card2-4');
          const element3Content5 = props.getElementById('card2-5');
          const element3Content6 = props.getElementById('card2-6');

          const element4Content1 = props.getElementById('card3-1');
          const element4Content2 = props.getElementById('card3-2');
          const element4Content3 = props.getElementById('card3-3');
          const element4Content4 = props.getElementById('card3-4');
          const element4Content5 = props.getElementById('card3-5');
          const element4Content6 = props.getElementById('card3-6');
          const element4Content7 = props.getElementById('card3-7');



        // console.log(download1Element)
        if (element1Content1 && element1Content2 ) {
            const elementContent1 = element1Content1.querySelector('p');
            const elementContent2 = element1Content2.querySelector('p');

            setElement1Content([elementContent1.innerHTML,elementContent2.innerHTML]);
          }
          if (element2Content1 && element2Content2 && element2Content3 ) {
            const elementContent1 = element2Content1.querySelector('p');
            const elementContent2 = element2Content2.querySelector('p');
            const elementContent3 = element2Content3.querySelector('p');
            const elementContent4 = element2Content4.querySelector('p');
            const elementContent5 = element2Content5.querySelector('p');
            const linkElement = element2Content6.querySelector('a');
            const href = linkElement.getAttribute('href');
            const text = linkElement.innerText.trim();

            setElement2Content([elementContent1.innerHTML,elementContent2.innerHTML,elementContent3.innerHTML,
                elementContent4.innerHTML,elementContent5.innerHTML, href, text]);
          }
          if (element3Content1 && element3Content3 && element3Content3 ) {
            const elementContent1 = element3Content1.querySelector('p');
            const elementContent2 = element3Content2.querySelector('p');
            const elementContent3 = element3Content3.querySelector('p');
            const elementContent4 = element3Content4.querySelector('p');
            const elementContent5 = element3Content5.querySelector('p');
            const linkElement = element3Content6.querySelector('a');
            const href = linkElement.getAttribute('href');
            const text = linkElement.innerText.trim();

            setElement3Content([elementContent1.innerHTML,elementContent2.innerHTML,elementContent3.innerHTML,
                elementContent4.innerHTML,elementContent5.innerHTML,href, text]);
          }
          if (element4Content1 && element4Content3 && element4Content3 ) {
            const elementContent1 = element4Content1.querySelector('p');
            const elementContent2 = element4Content2.querySelector('p');
            const elementContent3 = element4Content3.querySelector('p');
            const elementContent4 = element4Content4.querySelector('p');
            const elementContent5 = element4Content5.querySelector('p');
            const elementContent6 = element4Content6.querySelector('p');
            const linkElement = element4Content7.querySelector('a');
            const href = linkElement.getAttribute('href');
            const text = linkElement.innerText.trim();

            setElement4Content([elementContent1.innerHTML,elementContent2.innerHTML,elementContent3.innerHTML,
                elementContent4.innerHTML,elementContent5.innerHTML,elementContent6.innerHTML, href, text]);
          }

        }
      },[props])




  return (
    <section className='card-section'>
        <div className='card-title'>
            <h2 className="card-title-main">
                {element1Content[0]}
            </h2>
            <p className="card-title-sub">
                {element1Content[1]}
            </p>
        </div>
        <div className='cards-container'>
            <Card color="gray" variant="gradient" className="w-full max-w-[20rem] p-8 mt-8 card-item">
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
                >
                    <Typography
                    variant="small"
                    color="white"
                    className="font-normal uppercase"
                    >
                    {element2Content[0]}
                    </Typography>
                    <Typography
                    variant="h1"
                    color="white"
                    className="mt-6 flex justify-center gap-1 text-7xl font-normal"
                    >
                    <span className="mt-2 text-4xl"></span>{element2Content[1]}{" "}

                    </Typography>
                </CardHeader>
                <CardBody className="p-0">
                    <ul className="flex flex-col gap-4">
                    <li className="flex items-center gap-4">
                        <span className="rounded-full border border-white/20 bg-white/20 p-1">
                        <CheckIcon />
                        </span>
                        <Typography className="font-normal">{element2Content[2]}</Typography>
                    </li>
                    <li className="flex items-center gap-4">
                        <span className="rounded-full border border-white/20 bg-white/20 p-1">
                        <CheckIcon />
                        </span>
                        <Typography className="font-normal">{element2Content[3]}</Typography>
                    </li>
                    <li className="flex items-center gap-4">
                        <span className="rounded-full border border-white/20 bg-white/20 p-1">
                        <CheckIcon />
                        </span>
                        <Typography className="font-normal">{element2Content[4]}</Typography>
                    </li>

                    </ul>
                </CardBody>
                <CardFooter className="mt-12 p-0">
                    <Button
                    size="lg"
                    color="white"
                    className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                    ripple={false}
                    fullWidth={true}
                    >
                    {element2Content[6]}
                    </Button>
                </CardFooter>
            </Card>
            <Card color="gray" variant="gradient" className="w-full max-w-[20rem] p-8 mt-8 card-item">
                <CardHeader
                    floated={false}
                    shadow={false}s
                    color="transparent"
                    className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
                >
                    <Typography
                    variant="small"
                    color="white"
                    className="font-normal uppercase"
                    >
                    {element3Content[0]}
                    </Typography>
                    <Typography
                    variant="h1"
                    color="white"
                    className="mt-6 flex justify-center gap-1 text-7xl font-normal"
                    >
                    <span className="mt-2 text-4xl">$</span>{element3Content[1]}{" "}
                    <span className="self-end text-4xl">/mo</span>
                    </Typography>
                </CardHeader>
                <CardBody className="p-0">
                    <ul className="flex flex-col gap-4">
                    <li className="flex items-center gap-4">
                        <span className="rounded-full border border-white/20 bg-white/20 p-1">
                        <CheckIcon />
                        </span>
                        <Typography className="font-normal">{element3Content[2]}</Typography>
                    </li>
                    <li className="flex items-center gap-4">
                        <span className="rounded-full border border-white/20 bg-white/20 p-1">
                        <CheckIcon />
                        </span>
                        <Typography className="font-normal">{element3Content[3]}</Typography>
                    </li>
                    <li className="flex items-center gap-4">
                        <span className="rounded-full border border-white/20 bg-white/20 p-1">
                        <CheckIcon />
                        </span>
                        <Typography className="font-normal">{element3Content[4]}</Typography>
                    </li>
                    </ul>
                </CardBody>
                <CardFooter className="mt-12 p-0">
                    <Button
                    size="lg"
                    color="white"
                    className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                    ripple={false}
                    fullWidth={true}
                    >
                    {element3Content[6]}
                    </Button>
                </CardFooter>
            </Card>
            <Card color="gray" variant="gradient" className="w-full max-w-[60rem] p-8 mt-8 card-item">
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
                >
                    <Typography
                    variant="small"
                    color="white"
                    className="font-normal uppercase"
                    >
                    {element4Content[0]}
                    </Typography>
                    <Typography
                    variant="h1"
                    color="white"
                    className="mt-6 flex justify-center gap-1 text-7xl font-normal"
                    >
                    <span className="mt-2 text-4xl">$</span>{element4Content[1]}{" "}
                    <span className="self-end text-4xl">/mo</span>
                    </Typography>
                </CardHeader>
                <CardBody className="p-0">
                    <ul className="flex flex-col gap-4 third-card">
                    <li className="flex items-center gap-4">
                        <span className="rounded-full border border-white/20 bg-white/20 p-1">
                        <CheckIcon />
                        </span>
                        <Typography className="font-normal">{element4Content[2]}</Typography>
                    </li>
                    <li className="flex items-center gap-4">
                        <span className="rounded-full border border-white/20 bg-white/20 p-1">
                        <CheckIcon />
                        </span>
                        <Typography className="font-normal">{element4Content[3]}</Typography>
                    </li>
                    <li className="flex items-center gap-4">
                        <span className="rounded-full border border-white/20 bg-white/20 p-1">
                        <CheckIcon />
                        </span>
                        <Typography className="font-normal">{element4Content[4]}</Typography>
                    </li>
                    <li className="flex items-center gap-4">
                        <span className="rounded-full border border-white/20 bg-white/20 p-1">
                        <CheckIcon />
                        </span>
                        <Typography className="font-normal">{element4Content[5]}</Typography>
                    </li>

                    </ul>
                </CardBody>
                <CardFooter className="mt-12 p-0">
                    <Button
                    size="lg"
                    color="white"
                    className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                    ripple={false}
                    fullWidth={true}
                    >
                    {element4Content[7]}
                    </Button>
                </CardFooter>
            </Card>
        </div>
        
    </section>
  )
}

export default PriceCard