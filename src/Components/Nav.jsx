import React, { useContext } from "react";
import { productContext } from "../utils/Context";
import { Link } from "react-router-dom";


const Nav = () => {

    const [products] =useContext(productContext);
    let distinct_category =
       products && products.reduce((acc, cv) => [...acc, cv.category], []);
       //reduce gives two parameters accmulater, mean orignal value cv means current value
  

    //now here we use javascript concept to make object to array with ... spread concept
    distinct_category = [...new Set(distinct_category)];
    console.log(distinct_category);

    // now we make a function thAt can change color on every time when we reload our App..

    const color = () => {
        return `rgba(${(Math.random()*255).toFixed()},${(
            Math.random() * 255
        ).toFixed()},${(Math.random()*255).toFixed()}, 0.4)`;
    };
    


    



    return(
        <nav style={{backgroundColor: color()}} className=" w-[15%] h-full rounded-md text-black-600 flex flex-col items-center pt-5">
            <a className="py-2 px-5 border border-blue-200  text-blue 200 font-semibold rounded " href="/create">Add New Product</a>
            <hr  className="w-[80%] my-3"/>
            <h1 className="text-2xl w-[80%] mb-3">Category Filter</h1>
            <div className=" w-[80%] ">

                {/* now we make category funtionality with map */}
                {distinct_category.map((c, i) =>
                      <Link key={i}
                            to={`/?category =${c}`} 
                            className="flex items-center mb-3">
                            <span style={{backgroundColor: color()}} className="rounded-full  mr-2 w-[15px] h-[15px] "></span> {""}
                            {c}
                       </Link>
                )}

             
               
        
            </div>

        </nav>



    );
};
export default Nav;

// in this nav component we made nav and category funcnality only