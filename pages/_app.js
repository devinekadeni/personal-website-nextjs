import PropTypes from 'prop-types'
import { createGlobalStyle } from 'styled-components'
import useWindowSize from 'utils/hooks/useWindowSize'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  button {
    border: none;
    outline: none;
  }

  @media (hover) {
    button:hover {
      cursor: pointer;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  label {
    margin: 0;
  }
`

function MyApp({ Component, pageProps }) {
  const windowSize = useWindowSize()
  const isMobile = windowSize.width <= 600

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} isMobile={isMobile} />
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.object,
}

export default MyApp
