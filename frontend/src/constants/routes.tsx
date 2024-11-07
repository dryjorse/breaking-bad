import CharactersPage from "../pages/charactersPage/CharactersPage";
import MainPage from "../pages/mainPage/MainPage";
import SeasonsPage from "../pages/seasonsPage/SeasonsPage";

export const routes = [
  { path: "/", element: <MainPage />, label: "Home" },
  { path: "/seasons", element: <SeasonsPage />, label: "Seasons" },
  { path: "/characters", element: <CharactersPage />, label: "Characters" },
];
