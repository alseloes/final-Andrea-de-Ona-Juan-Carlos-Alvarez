import React, { createContext, useReducer, useMemo, useEffect } from "react";

export const initialState = {
  theme: "light",
  data: [],
  favs: [],
};

export const ContextGlobal = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "THEME":
      const updatedTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", updatedTheme);
      return { ...state, theme: updatedTheme };

    case "DATA":
      return { ...state, data: action.payload };

    case "ADD_FAV":
      const updatedFavsAdd = [...state.favs, action.payload];
      localStorage.setItem("favs", JSON.stringify(updatedFavsAdd));
      return { ...state, favs: updatedFavsAdd };

    case "REMOVE_FAV":
      const filteredFavs = state.favs.filter((fav) => fav.id !== action.payload);
      localStorage.setItem("favs", JSON.stringify(filteredFavs));
      return { ...state, favs: filteredFavs };
    case "CLEAR_FAVS":
      localStorage.removeItem("favs");
      return { ...state, favs: [] };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const storedTheme = localStorage.getItem("theme") || initialState.theme;
  const storedFavs = JSON.parse(localStorage.getItem("favs")) || initialState.favs;

  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    theme: storedTheme,
    favs: storedFavs,
  });

  const cambiarTheme = () => {
    dispatch({ type: "THEME" });
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "DATA", payload: data });
      })
      .catch((error) => {
        console.error("Error al procesar la información", error);
      });
  }, []);

  const contextValue = useMemo(() => ({ state, cambiarTheme, dispatch }), [state]);

  return (
    <ContextGlobal.Provider value={{ contextValue }}>
      {children}
    </ContextGlobal.Provider>
  );
};

