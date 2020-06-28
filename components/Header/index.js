import React from 'react'
import PropTypes from 'prop-types'

import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'

const Header = (props) => {
  const { isMobile } = props

  return isMobile ? <MobileHeader {...props} /> : <DesktopHeader {...props} />
}

Header.propTypes = {
  isMobile: PropTypes.bool.isRequired,
}

export default Header
