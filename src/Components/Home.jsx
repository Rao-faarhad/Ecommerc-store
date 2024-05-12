import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { productContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/axios";


const Home = () => {
    const [products] =useContext(productContext);
    const {search} = useLocation ();
      // decodeurlcompenent is use to covert data to string
    const category = decodeURIComponent(search.split("=")[1]);

    // category  logic 
    const [filterProducts, setfilterProducts] = useState(null);

    const getProductscategory =async () => {
        try {
            const {data } = await axios.get(`/products/category/${category}`);
            setfilterProducts(data);
        } catch (err) {
            console.log(err)
        }
    };

    //use effect for seeking data 
    useEffect(() => {
        if(!filterProducts || category == "undefined") 
            setfilterProducts(products);
        if(category != "undefined") 
            //ya logic iss liya ky jo data localstorage ma ha wo nazar aya lazmi
            // getProductscategory();
         setfilterProducts(products.filter(p => p.category == category))
        },
    [category, products]);


           
    


     
   
    return products ? (
           <>  
                <Nav/>
                <div className="h-full w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto ">
                    {filterProducts &&
                    (filterProducts.map((p, i) => (
                        <Link 
                            key={p.id}
                            to={`/details/${p.id}`}
                            className=" outline-2 mb-3 mr-3 card p-5 border shadow rounded  w-[18%] h-[30vh] flex flex-col justify-center items-center "
                        >
                         
                            <div 
                                className="w-full h-[90%] bg-contain bg-no-repeat bg-center mb-1 hover:scale-110"
                                style={{
                                    backgroundImage: `url(${p.image})`,
                                }}
                            ></div>
                            <h1 className="hover:text-blue-400">
                                {p.title}
                            </h1>
                         
                    
                        </Link>   
                    )))}
                </div>
            </> 
    ) :(
        <Loading />
    );  
};

export default Home;