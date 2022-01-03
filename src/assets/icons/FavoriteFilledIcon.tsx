import * as React from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface FavoriteFilledIconProps extends React.SVGProps<SVGSVGElement> {}

const FavoriteFilledIcon = ({
  width = 24,
  height = 22,
  ...rest
}: FavoriteFilledIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 22"
    {...rest}
  >
    <path
      fill="#DD0031"
      d="M12 3.248C8.852-2.154 0-.577 0 6.192 0 10.853 5.571 15.619 12 22c6.43-6.381 12-11.147 12-15.808C24-.6 15.125-2.114 12 3.248z"
    />
  </svg>
)

export default React.memo(FavoriteFilledIcon)
