import React from "react";
import Home from "./Components/Home";
import Details from "./Components/Details"
import {Link, Route, Routes, useLocation } from "react-router-dom";
import Create from "./Components/Create";
import Edit from "./Components/Edit";

const App = () => {

    //logic to hide  home button from home button
    const {search , pathname} = useLocation(); 

    return (
       
            <div className="h-screen w-screen flex ">
                {(pathname != "/" || search.length > 0) && (
                    <Link 
                        to="/" 
                        className=" font-semibold text-black-300 rounded-md bg-blue-400 absolute left-[17%] top-[3%]"
                    >
                           Back To Home
                    </Link>
                )}
               

               <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/Create" element={ <Create /> } />
                <Route path="/details/:id" element={ <Details /> } />
                <Route path="/edit/:id" element={ <Edit /> } />
               </Routes>
           
               

            </div>
             
    

        
    );
};

export default App;
