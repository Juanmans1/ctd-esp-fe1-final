import { combineReducers } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
// Importamos applyMiddleware de Redux, para poder agregar Thunk o Saga como Middleware
import { applyMiddleware, createStore } from "redux";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";
import thunk from "redux-thunk";
import charactersReducer from "../reducers/charactersReducer";
import favouritesCharactersReducer from "../reducers/favouritesCharactersReducer";
import selectedCharacterReducer from "../reducers/selectedCharacterReducer";

// import characterReducer from "../reducers/characterReducer";

const rootReducer = combineReducers({
  data: charactersReducer,
  favourites: favouritesCharactersReducer,
  selectedCharacter: selectedCharacterReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;

// Tipamos el hook useSelector
export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)) // Aqui aplicaremos los middlewares
);
