import * as React from 'react'

import {
  AngularIcon,
  ArrowDownIcon,
  FavoriteFilledIcon,
  FavoriteOutlinedIcon,
  MoonIcon,
  ReactjsIcon,
  SunIcon,
  TimeIcon,
  VuejsIcon
} from '../../../assets/icons'
import type { IconName } from '../../../types'

interface IconProps {
  name: IconName;
  width?: number;
  heigth?: number;
}

/**
 * @description Custom icon component for rendering a memorized svg.
 * @param {string} name - Name icon.
 * @param {number} width - Width icon.
 * @param {number} heigth - Heigth icon.
 * @example <Icon name="moon" width={26} heigth={26} />
 */
const Icon = ({ name = 'error', width, heigth }: IconProps) => {
  switch (name) {
    case 'angular':
      return <AngularIcon width={width} height={heigth} />

    case 'arrowDown':
      return <ArrowDownIcon width={width} height={heigth} />

    case 'reactjs':
      return <ReactjsIcon width={width} height={heigth} />

    case 'vuejs':
      return <VuejsIcon width={width} height={heigth} />

    case 'favoriteFilled':
      return <FavoriteFilledIcon width={width} height={heigth} />

    case 'favoriteOutlined':
      return <FavoriteOutlinedIcon width={width} height={heigth} />

    case 'moon':
      return <MoonIcon width={width} height={heigth} />

    case 'sun':
      return <SunIcon width={width} height={heigth} />

    case 'time':
      return <TimeIcon width={width} height={heigth} />

    default:
      return (
        <TimeIcon
          width={width}
          height={heigth}
          style={{ visibility: 'hidden' }}
        />
      )
  }
}

export default Icon
