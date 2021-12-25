import * as React from 'react'

const ArrowDownIcon = React.memo(
  ({ width = 24, height = 24, ...rest }: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height={24}
      width={24}
      viewBox='0 0 24 24'
      {...rest}
    >
      <path d='M0 0h24v24H0V0z' fill='none' />
      <path d='M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z' />
    </svg>
  )
)

export default ArrowDownIcon
