import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from "../../pages/Home";
import About from "../../pages/About";
import Error from "../../pages/Error";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      {/*<Route path="/posts" element={<Posts/>}/>*/}
      {/*<Route path="/post/:id" element={<PostId/>}/>*/}
      <Route path="*" element={<Error/>}/>
      {/*<Route path="*" replace to="/" />*/}
    </Routes>
);
};

export default AppRoutes;