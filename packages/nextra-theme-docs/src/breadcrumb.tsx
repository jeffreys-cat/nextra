import React from 'react'
import Link from 'next/link'
import cn from 'classnames'

import { Item } from './utils/normalize-pages'

export default function Breadcrumb({ activePath }: { activePath: Item[] }) {
  return (
    <div className="text-sm font-normal flex mt-2.5 text-gray-500 transition-colors cursor-default overflow-hidden">
      {activePath.map((item, index) => {
        const isLink = !item.children || item.withIndexPage
        const isActive = index === activePath.length - 1

        return (
          <>
            {index ? <span className="mx-2 select-none">/</span> : null}
            <div
              key={item.route}
              className={cn('transition-colors hover:text-gray-900', {
                'text-gray-600': isActive,
                'text-ellipsis whitespace-nowrap overflow-hidden': !isActive
              })}
            >
              {isLink && !isActive ? (
                <Link href={item.route}>
                  <a className="text-current no-underline">{item.title}</a>
                </Link>
              ) : (
                item.title
              )}
            </div>
          </>
        )
      })}
    </div>
  )
}
