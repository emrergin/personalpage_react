import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./App.css";

import Academic from "./components/Academic";
import Author from "./components/Author";
import Translator from "./components/Translator";
import Developer from "./components/Developer";
import Menu from "./components/Menu";

import { Book, Website, Drawer } from "./types";
import {
  setAffiliations,
  setBooks,
  setArticles,
  setCollaborations,
  setTranslations,
  setWebsites,
  setTurkish,
  useStateValue,
} from "./state";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

const RouteWrap = ({ loopActive }: { loopActive: boolean }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const idleTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const possibleRoutes = ["author", "translator", "developer", "academic"];
  const currentRouteId = useRef<number>(-1);

  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }
    idleTimer.current = setInterval(() => {
      if (currentRouteId.current === -1) {
        currentRouteId.current = Math.floor(
          Math.random() * possibleRoutes.length
        );
      } else {
        currentRouteId.current++;
        currentRouteId.current = currentRouteId.current % 4;
      }
      navigate(`/${possibleRoutes[currentRouteId.current]}`);
    }, 5000);
  }, []);

  useEffect(() => {
    if (!loopActive && idleTimer.current) {
      clearInterval(idleTimer.current);
    }
  }, [loopActive]);

  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.pathname} classNames="fade" timeout={1200}>
        <Routes location={location}>
          <Route path="/" element={null} />
          <Route path="/author" element={<Author />} />
          <Route path="/translator" element={<Translator />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="academic" element={<Academic />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

function App() {
  const [, dispatch] = useStateValue();
  const [loopActive, setLoopActive] = useState(true);

  function stopCycles() {
    setLoopActive(false);
  }

  const fetchAffiliations = async () => {
    try {
      const { data: result } = await axios.get<Drawer[]>(
        "/.netlify/functions/affiliations"
      );
      dispatch(setAffiliations(result));
    } catch (e) {
      console.error(e);
    }
  };

  const fetchArticles = async () => {
    try {
      const { data: result } = await axios.get<Drawer[]>(
        "/.netlify/functions/articles"
      );
      dispatch(setArticles(result));
    } catch (e) {
      console.error(e);
    }
  };

  const fetchBooks = async () => {
    try {
      const { data: result } = await axios.get<Book[]>(
        "/.netlify/functions/books"
      );
      dispatch(setBooks(result));
    } catch (e) {
      console.error(e);
    }
  };

  const fetchCollaborations = async () => {
    try {
      const { data: result } = await axios.get<Book[]>(
        "/.netlify/functions/collaborations"
      );
      dispatch(setCollaborations(result));
    } catch (e) {
      console.error(e);
    }
  };

  const fetchTranslations = async () => {
    try {
      const { data: result } = await axios.get<Book[]>(
        "/.netlify/functions/translations"
      );
      dispatch(setTranslations(result));
    } catch (e) {
      console.error(e);
    }
  };

  const fetchWebsites = async () => {
    try {
      const { data: result } = await axios.get<Website[]>(
        "/.netlify/functions/websites"
      );
      dispatch(setWebsites(result));
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (navigator.language === `tr-TR`) {
      dispatch(setTurkish());
    }
    fetchAffiliations();
    fetchArticles();
    fetchBooks();
    fetchCollaborations();
    fetchTranslations();
    fetchWebsites();
  }, []);

  return (
    <BrowserRouter>
      <div id="app">
        <Menu linkFunction={stopCycles} />
        <RouteWrap loopActive={loopActive} />
      </div>
    </BrowserRouter>
  );
}

export default App;
