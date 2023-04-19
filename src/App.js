import './App.css';
import {Routes, Route, Outlet,} from "react-router-dom";
import AppToolbar from "./components/AppToolbar/AppToolbar";
import { Container, } from "@mui/material";
import Login from './containers/Login/Login';
import Main from './components/Main/Main';
import Register from './containers/Register/Register';
function App() {
  return (
    <div className="App">
      
      <Routes>
            <Route element={<>
                <AppToolbar/>
                <main >
                    <Container>
                        <Outlet/>
                    </Container>
                </main>
            </>}>
                <Route path={"/"} element={<Main/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/register"} element={<Register/>}/>
                
            </Route>
        </Routes>

    </div>
  );
}

export default App;
