import React from 'react'

type ItemsProps = {
  title?: string
  Icon?: any
}

const HeaderItems: React.FC<ItemsProps> = ({ title, Icon }) => {
  return (
    <div className="group flex w-12 cursor-pointer flex-col  items-center transition duration-100 hover:text-white sm:w-20 ">
      <Icon className="mb-1 h-8 transition duration-100 group-hover:animate-bounce" />
      <p className="tracking-widest opacity-0 group-hover:opacity-100  md:opacity-100 ">
        {title}
      </p>
    </div>
  )
}

export default HeaderItems
