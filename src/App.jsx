import "./assets/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import MainPageRoute from "./layout/MainPageRoute";
import { route } from "./const";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPageRoute />} >
            {route.map((el,i)=> {
              return (<Route key={i} path={el.path} element={el.element} />)
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
