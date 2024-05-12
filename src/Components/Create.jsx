import React, { useContext, useState } from "react";
import { productContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const Create = () => {
  // ab  hum custom manuaaly data add kr rhy ha to uasky lia we do this
  const Navigate= useNavigate();
  const [products, setProducts]= useContext(productContext);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const AddProductHandler = (e) => {
    e.preventDefault();
    if(
      title.trim().length < 5 || 
      image.trim().length < 5 || 
      category.trim().length < 5  || 
      description.trim().length < 5 || 
      price.trim().length < 1
    ) {
      alert("Please fill all the fields");
      return;
    }
    const product = {
      // apply nono is for decent id
      id: nanoid(),
      title,
      image,
      category,
      price,
      description
    };
    setProducts([...products, product]);
    
    //now store data to local-storage
    localStorage.setItem(
      "products", 
      JSON.stringify([...products, product])
    );  
       // to redirect to create-button details to home

    Navigate("/");
  };


  //color changing logic
  const color = () => {
    return `rgba(${(Math.random()*255).toFixed()},${(
        Math.random() * 255
    ).toFixed()},${(Math.random()*255).toFixed()}, 0.2)`;
  };


  return (
    <form style={{backgroundColor:color()}} onSubmit={AddProductHandler} className="flex flex-col  justify-center items-center p-[5%] w-full h-screen">
      <h1 className="mb-5 text-3xl w-1/2 ml-80 font-semibold decoration-solid">Add new product</h1>
      <input
        type="text"
        placeholder="Title"
        className="text-1xl bg-black-300 rounded w-80 mb-2"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        type="text"
        placeholder="Image link"
        className="text-1xl bg-black-300 rounded w-80 mb-2"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <input
        type="number"
        placeholder="Price"
        className="text-1xl  rounded w-80 mb-2"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />
      <input
        type="text"
        placeholder="Category"
        className="text-1xl  rounded w-80 mb-2"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      />
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        placeholder="Enter description"
        rows="10"
        className="text-1xl  w-80 p-3 rounded mb-60 border-black"> 
      </textarea>

      <div className="py-2 px-5 border border-blue-600  text-blue-600 font-semibold rounded mb">
        <button >ADD  Product</button>
      </div>
     
      
    </form>
  );
};

export default Create;
