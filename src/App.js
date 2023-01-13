import { Provider } from "react-redux"
import './App.css';

import store from "./redux Toolkit/store"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListeUsers from "./Composant/ListeUsers";
import AjouterUser from "./Composant/AjouterUser";
import ModifierUser from "./Composant/ModifierUser";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<ListeUsers />} />
            <Route path="/add_user" element={<AjouterUser />} />
            <Route path="/update_user/:id" element={<ModifierUser/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
