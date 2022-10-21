import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import NewHotel from "./pages/newHotel/NewHotel";
import NewRoom from "./pages/newRoom/NewRoom";
import Single from "./pages/single/Single";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route element={<Login />} />
            {/* path: users */}
            <Route path="users">
              <Route index element={<List />} />

              <Route path=":userId" element={<Single />} />

              <Route path="new" element={<New />} />
            </Route>
            {/* path: hotels */}
            <Route path="hotels">
              <Route index element={<List />} />

              <Route path=":hotelId" element={<Single />} />

              <Route path="new" element={<NewHotel />} />
            </Route>

            {/* path: rooms */}
            <Route path="rooms">
              <Route index element={<List />} />

              <Route path=":roomId" element={<Single />} />

              <Route path="new" element={<NewRoom />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
