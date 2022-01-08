import * as React from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ArrowDownIconProps extends React.SVGProps<SVGSVGElement> {}

const ArrowDownIcon = ({
  width = 24,
  height = 24,
  ...rest
}: ArrowDownIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={width}
    width={height}
    viewBox="0 0 24 24"
    {...rest}
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path fill="currentColor" d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
  </svg>
)

export default React.memo(ArrowDownIcon)
