import React from 'react'
import Link from 'next/link'

function ErrorPage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <div className="max-w-md text-center">
        <h1 className="mb-4 text-6xl">404</h1>
        <div className="text-grey-900 mb-8 text-center">
          We re sorry. The page you requested could not be found. Please go back
          to the homepage or contact us
        </div>
        <div className="flex w-full items-center justify-center">
          <Link href="/">
            <a>
              <button className="rounded-md bg-[#1DE883] px-8 py-3 text-[1.1rem] font-bold text-black transition duration-300  hover:bg-green-700 ">
                Go back
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
