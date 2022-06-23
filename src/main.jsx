import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import App from './App'
import './index.css'

import Academic from "./components/Academic";
import Author from "./components/Author";
import Translator from "./components/Translator";
import Developer from "./components/Developer";

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//   </BrowserRouter>
// )

const RouteWrap = () => {
  const location = useLocation();

  // const [transitionName, setTransitionName] = useState("next");
  // https://codesandbox.io/s/react-router-animation-working-fix-forked-2t1hmb?file=/src/styles.css:1249-2217
  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={location.pathname}
        classNames="fade"
        timeout={1200}
      >
        <Routes location={location}>
          <Route path="/author" element={<Author />} />
          <Route path="/translator" element={<Translator />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="academic" element={<Academic />} /> 
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function AppWrap() {

  return (
    <BrowserRouter>
    <div id="app">
    <App/>
    <RouteWrap />
    </div>
    </BrowserRouter>
  )}

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <AppWrap/>
  // </React.StrictMode>
)