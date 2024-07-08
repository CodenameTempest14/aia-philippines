// carousel.tsx
'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { FaChevronCircleRight } from "react-icons/fa";
import { FaCircleChevronLeft } from "react-icons/fa6";

const Carousel = ({
  data,
}: {
  data: {
    image: string,
    title: string,
    description: string,
    buttonText: string,
    buttonLink: string,
  }[]
}) => {
  const [currentImg, setCurrentImg] = useState(0)
  const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 })
  const carouselRef = useRef(null)

  useEffect(() => {
    const elem = carouselRef.current as unknown as HTMLDivElement
    const { width, height } = elem.getBoundingClientRect()
    if (carouselRef.current) {
      setCarouselSize({
        width,
        height,
      })
    }
  }, [])

  return (
    <div className="relative">
      <div className="relative h-[750px] w-[1250px] overflow-hidden rounded-2xl">
        <div
          ref={carouselRef}
          style={{
            left: -currentImg * carouselSize.width,
          }}
          className="absolute flex h-full w-full transition-all duration-300"
        >
          {data.map((v, i) => (
            <div key={i} className="relative h-full w-full shrink-0">
              <Image
                className="pointer-events-none object-cover"
                alt={`carousel-image-${i}`}
                fill
                src={v.image || 'https://random.imagecdn.app/500/500'}
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40">
                <div className="text-white p-8 bg-orange-500 bg-opacity-80 rounded-lg">
                  <h2 className="text-4xl font-bold mb-4">{v.title}</h2>
                  <p className="text-lg mb-4">{v.description}</p>
                  <a href={v.buttonLink} className="bg-white text-black font-semibold py-2 px-4 rounded">
                    {v.buttonText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          disabled={currentImg === 0}
          onClick={() => setCurrentImg((prev) => prev - 1)}
          className={`absolute top-1/2 left-2 transform -translate-y-1/2 px-4 py-2 font-bold ${currentImg === 0 && 'opacity-50'}`}
        >
          <FaCircleChevronLeft size="40px" opacity="70%" color='white'/>
        </button>
        <button
          disabled={currentImg === data.length - 1}
          onClick={() => setCurrentImg((prev) => prev + 1)}
          className={`absolute top-1/2 right-2 transform -translate-y-1/2 px-4 py-2 font-bold ${currentImg === data.length - 1 && 'opacity-50'}`}
        >
         <FaChevronCircleRight size="40px" opacity="70%" color='white'/>
        </button>
      </div>
    </div>
  )
}

export default Carousel
