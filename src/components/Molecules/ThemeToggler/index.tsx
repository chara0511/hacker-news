import * as React from 'react'

import { Icon, IconButton } from '../../Atoms'

/**
 * @description Read theme light by default or from local storage and sync the changed theme value to local storage and body data attribute.
 */
const ThemeToggler = () => {
  const [theme, setTheme] = React.useState(
    window.localStorage.getItem('theme') ?? 'light'
  )

  React.useEffect(() => {
    window.localStorage.setItem('theme', theme)
    document.body.dataset.theme = theme
  }, [theme])

  return (
    <IconButton
      shape="circle"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? <Icon name="moon" /> : <Icon name="sun" />}
    </IconButton>
  )
}

export default ThemeToggler
