import * as React from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TimeIconProps extends React.SVGProps<SVGSVGElement> {}

const TimeIcon = ({ width = 16, height = 16, ...rest }: TimeIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 16 16"
    {...rest}
  >
    <path
      fill="#606060"
      d="M8 1.333A6.675 6.675 0 0 1 14.667 8 6.675 6.675 0 0 1 8 14.667 6.675 6.675 0 0 1 1.333 8 6.675 6.675 0 0 1 8 1.333zM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm.667 8V4H7.333v5.333H12V8H8.667z"
    />
  </svg>
)

export default React.memo(TimeIcon)
