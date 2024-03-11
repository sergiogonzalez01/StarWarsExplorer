import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { GlobalContextProvider } from "./context/GlobalContext";
import { NotFound } from "./pages/NotFound";
import { Index } from "./pages/Index";

function App() {
  return (
    <main
      className="h-dvh min-h-[550px] overflow-y-auto"
      style={{ scrollbarWidth: "thin", scrollbarGutter: "stable" }}
    >
      <GlobalContextProvider>
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} replace />} />
          <Route
            path="/search"
            element={<Navigate to={"/search/characters"} replace />}
          />

          <Route element={<Index />}>
            <Route path="/home" element={<Home />} />
            <Route path="/search/:category" element={<Search />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </GlobalContextProvider>
    </main>
  );
}

export default App;
