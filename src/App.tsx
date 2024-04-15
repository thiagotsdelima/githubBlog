import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from './styles/global'
import { PostsProvider } from "./PostContext";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      <PostsProvider>
      <Router />
      </PostsProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}


