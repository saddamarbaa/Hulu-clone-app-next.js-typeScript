import React from 'react'
import { useRouter } from 'next/router'

import request from '../../utils/request'

type NavProps = {
  title?: string
  ur?: string
}

const Nav: React.FC<NavProps> = () => {
  const router = useRouter()
  return (
    <nav className="relative">
      <div className="mx-auto  flex  h-auto max-w-[1500px] items-center justify-between space-x-5 overflow-hidden whitespace-nowrap   px-12 text-xl lg:text-2xl">
        {Object.entries(request).map(([key, { title, url }]) => {
          return (
            <h2
              key={key}
              className="transform cursor-pointer transition duration-100 hover:scale-105 hover:text-white active:text-red-500 "
              onClick={() => {
                router.push(`/?genre=${key}`)
              }}
            >
              {title}
            </h2>
          )
        })}
      </div>
    </nav>
  )
}

export default Nav
