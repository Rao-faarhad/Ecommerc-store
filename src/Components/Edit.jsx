import React, { useContext, useEffect, useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
// import { nanoid } from 'nanoid';
import { productContext } from '../utils/Context';
import { toast } from 'react-toastify';

const Edit = () => {
  const [products, setProducts]= useContext(productContext);
  const Navigate= useNavigate();
const { id } = useParams();
  const[product, setProduct]= useState({
    title: "",
    image: "",
    description: "",
    price: "",
    category: "",
  });

  const ChangeHandler = (e) => {
 
    setProduct({...product,  [e.target.name]: e.target.value });
    // console.log(e.target.name, e.target.value);

  };


  useEffect(() => {
      setProduct(products.filter((p) => p.id == id)[0]);
      },[id]);
    //   console.log(product);
    
  
         const AddProductHandler = (e) => {
        e.preventDefault();
      if(
        product.title.trim().length < 5 || 
        product.image.trim().length < 5 || 
        product.category.trim().length < 5  || 
        product.description.trim().length < 5 || 
        product.price.trim().length < 1
       ) {
         alert("Please fill all the fields");
      return;
    }

    const pi = products.findIndex((p) => p.id == id);
    const copyData = [...products];
      copyData[pi] ={...products[pi], ...product};
    //   console.log(copyData);
    
     console.log(product);
     setProducts(copyData);
    
      //now store data to local-storage
      localStorage.setItem(
      "products", 
      JSON.stringify(copyData)
    );
    
    toast.success("product Add successfull");
       // to redirect to create-button details to home

       Navigate(-1);
     };
    return(
        <form onSubmit={AddProductHandler} className=" bg-yellow-200 flex flex-col  justify-center items-center p-[5%] w-full h-screen">
        <h1 className="mb-5 text-3xl w-1/2 ml-80 font-semibold decoration-solid">Edit  product</h1>
        <input
          type="text"
          placeholder="Title"
          className="text-1xl bg-black-300 rounded w-[45%] mb-2"
          name="title"
          onChange={ChangeHandler}
          value={product && product.title}
        />
        <input
          type="text"
          placeholder="Image link"
          className="text-1xl bg-black-300 rounded w-[46%] mb-2"
          name="image"
          onChange={ChangeHandler}
          value={product && product.image}
        />
        <input
          type="number"
          placeholder="Price"
          className="text-1xl  rounded w-[48%] mb-2"
          name="price"
          onChange={ChangeHandler}
          value={product && product.price}
        />
        <input
          type="text"
          placeholder="Category"
          className="text-1xl  rounded w-[49%] mb-2"
          name="category"
          onChange={ChangeHandler}
          value={product && product.category}
        />
        <textarea
          name="description"
          onChange={ChangeHandler}
          value={product && product.description}
          placeholder="Enter description"
          rows="10"
          className="text-1xl  w-[50%] h-[50%] p-3 rounded mb-60 border-black"> 
        </textarea>
  
        <div className="py-2 px-5 border border-blue-600  text-blue-600 font-semibold rounded mb">
          <button >ADD Edit Product</button>
        </div>
       
        
      </form>
    )
}

export default Edit;