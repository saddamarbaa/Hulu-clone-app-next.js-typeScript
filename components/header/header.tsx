import React from 'react'
import Image from 'next/image'
import {
  HomeIcon,
  CollectionIcon,
  BadgeCheckIcon,
  SearchIcon,
  UserIcon,
  LightningBoltIcon,
} from '@heroicons/react/outline'

import HeaderItems from './header-items'

const HeaderComponent: React.FunctionComponent = () => {
  return (
    <header className="mx-auto mt-5 flex h-auto max-w-[1500px] flex-col items-center justify-between sm:flex-row">
      <div className="flex max-w-2xl flex-grow items-center justify-evenly space-x-5">
        <HeaderItems title="Home" Icon={HomeIcon} />
        <HeaderItems title="TERDING" Icon={LightningBoltIcon} />
        <HeaderItems title="VERFIFIED" Icon={CollectionIcon} />
        <HeaderItems title="SEARCH" Icon={SearchIcon} />
        <HeaderItems title="ACCOUNT" Icon={SearchIcon} />
      </div>
      <Image
        src="/images/hulu-white.png"
        width={200}
        height={100}
        className="object-contain"
      />
    </header>
  )
}

export default HeaderComponent
