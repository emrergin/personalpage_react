import {
    BrowserRouter,
    Routes,
    Route,
    useLocation
  } from "react-router-dom";
  import { TransitionGroup, CSSTransition } from "react-transition-group";
  import './App.css'
  
  import Academic from "./components/Academic";
  import Author from "./components/Author";
  import Translator from "./components/Translator";
  import Developer from "./components/Developer";
  import Menu from "./components/Menu"
  
  const RouteWrap = () => {
    const location = useLocation(); 

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
  
function App() {
  
    return (
      <BrowserRouter>
        <div id="app">
          <Menu/>
          <RouteWrap />
        </div>
      </BrowserRouter>
    )
}

export default App