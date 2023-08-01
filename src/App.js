import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./features/auth/Login"
import DashLayout from "./components/DashLayout";
import Welcome from "./features/auth/Welcome";
import NotesList from "./features/notes/NotesList";
import UsersList from "./features/users/UsersList";
import { Provider } from 'react-redux';
import { store } from './app/store';

function App() {
  return (
    <Provider store={store} >

      <BrowserRouter >
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Public />} />
          <Route path="login" element={<Login />} />

          
          <Route path="dash" element={<DashLayout />}>
            <Route index element={<Welcome />} />


            <Route path="notes">
              <Route index element={<NotesList />} />
            </Route>

            <Route path="users">
              <Route index element={<UsersList />} />
            </Route>

          </Route> { /* End of Dash route */}
        </Route>
        
        </Routes>
    </BrowserRouter>
    
    </Provider>
  );
}

export default App;
