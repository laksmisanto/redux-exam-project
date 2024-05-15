import "./App.css";
import Layout from "./container/layout/Layout";
import Pagination from "./container/pagination/Pagination";
import Tag from "./container/tag/Tag";
import Videos from "./container/videos/Videos";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      {/* <Layout>
        <Tag />
        <Videos />
        <Pagination />
      </Layout> */}
    </>
  );
}

export default App;
