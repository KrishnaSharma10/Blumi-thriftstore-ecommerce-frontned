import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from "react-router-dom";
import HomePage from "./pages/homepage";
import LoginRegister from "./components/login/register/LoginRegister";
import React from "react";
import MainLayout from "./Layouts/MainLayout";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}>
    <Route index element={<HomePage/>}/>
    <Route path='/login' element={<LoginRegister/>}/>
    <Route path="*" element={<NotFoundPage/>}/>
  </Route>
  )
); 

function App(){
  return(
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App;