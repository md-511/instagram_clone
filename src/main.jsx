import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'
import './index.css'
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { BrowserRouter } from 'react-router-dom'

// custom style

const styles = {
  global: (props) => ({
    body: {
      bg:    mode("#fff", "#000")(props),
      color: mode("#000", "#fff")(props),
    }
  })
}


// * write in seperate file for better stuff

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const theme = extendTheme({ config, styles })

// export default theme

// * end

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
)
