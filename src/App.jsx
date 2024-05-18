import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./container/layout/RootLayout";
import Home from "./pages/home/Home";
import SingleVideo from "./pages/singleVideo/SingleVideo";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/single-video" element={<SingleVideo />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
