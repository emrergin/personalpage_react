import { State } from "./state";
import { Book, Website, Drawer } from '../types';
import axios from 'axios'

export type Action =
   {
      type: "SET_AFFILIATIONS";
      payload: Drawer[];
    }
  | {
    type: "SET_ARTICLES";
    payload: Drawer[];
    }
  | {
    type: "SET_BOOKS";
    payload: Book[];
    }
  | {
    type: "SET_COLLABORATIONS";
    payload: Book[];
    } 
  | {
    type: "SET_TRANSLATIONS";
    payload: Book[];
    }
  | {
    type: "SET_WEBSITES";
    payload: Website[];
    }   


export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_AFFILIATIONS":
      return {
        ...state,
        affiliations: action.payload
      };
    case "SET_ARTICLES":
      return {
        ...state,
        articles: action.payload
      };
      case "SET_BOOKS":
      return {
        ...state,
        books: action.payload
      };
    case "SET_COLLABORATIONS":
      return {
        ...state,
        collaborations: action.payload
      }; 
    case "SET_TRANSLATIONS":
      return {
        ...state,
        translations: action.payload
      };
    case "SET_WEBSITES":
      return {
        ...state,
        websites: action.payload
      };     
    default:
      return state;
  }
};

export const setAffiliations = (list:Drawer[]):Action =>{
  return{
    type: "SET_AFFILIATIONS",
    payload: list
  }
}

export const setArticles = (list:Drawer[]):Action =>{
  return{
    type: "SET_ARTICLES",
    payload: list
  }
}

export const setBooks = (list:Book[]):Action =>{
  return{
    type: "SET_BOOKS",
    payload: list
  }
}

export const setCollaborations = (list:Book[]):Action =>{
  return{
    type: "SET_COLLABORATIONS",
    payload: list
  }
}

export const setTranslations = (list:Book[]):Action =>{
  return{
    type: "SET_TRANSLATIONS",
    payload: list
  }
}

export const setWebsites = (list:Website[]):Action =>{
  return{
    type: "SET_WEBSITES",
    payload: list
  }
}