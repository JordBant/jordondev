import { Route, Routes } from "react-router-dom";
import { SamePageLayout } from "./pages/SamePageLayout";
import "./styles/App.scss";

function App() {
  return (
    <Routes>
      <Route path="*" element={<SamePageLayout />} />
    </Routes>
  );
}

export default App;
