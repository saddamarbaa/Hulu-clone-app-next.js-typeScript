import React from 'react'
import Image from 'next/image'
import { Circle } from 'better-react-spinkit'

const Loading = () => {
  return (
    <div className="min-w-screen grid  min-h-screen  place-items-center overflow-hidden   ">
      <div
        style={{
          padding: '100px',
          textAlign: 'center',
          background: 'white',
          borderRadius: '6px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <div
          className="logo"
          style={{
            position: 'relative',
            cursor: 'pointer',
            marginBottom: '3rem',
            width: '7rem',
            height: '7rem',
            display: 'block',
          }}
        >
          <Image
            className="logo-img"
            src="/images/hulus.png"
            alt="Picture of the Hulu"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div>
          <Circle color="#1DE883" size={60} />
        </div>
      </div>
    </div>
  )
}

export default Loading
