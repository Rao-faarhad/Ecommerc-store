import axios from "./axios";
import React, { createContext, useEffect, useState } from "react";

export const productContext = createContext();

const Context= (props) => {
            //json.parso(localstore.grtitrm) lgany ka mtlb ha agr hmary api sa data to aya lakin jo data localstorage ma add kia ha hum na wo bi sath ma aya
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")) || null);


  // ya tb hum use krry gy jb hum api ky through data add kr so ab hum manuaaaly add kr rhy ha data to isy commentout kia
  // const getProducts= async () => {
  //   try {
  //     const { data }  = await axios("/products")
  //     setProducts(data);
  //   } catch (error) {
  //     console.log(error)
        
  //   }
  // };
  // console.log(products);
  // // new make a call to getProduct with useeffect to access data..
  // useEffect(() => {
  //   getProducts();
  // }, []);




    // return krwana ky lia const/name/var+Context.provider or usma value pass kry {[use state wali]} then {props.Children} pass kro
    return(
        <productContext.Provider value={[products, setProducts]}>
            {props.children}
        </productContext.Provider>    
        

    );
}

export default Context;



// context iss liya bnaya ha ky props ko replace kia gay..
//  props ko replace krky context  ko bnaya ha sara .....
// props wala data yha ha yha sa khi bi data ko catch up kry gy..