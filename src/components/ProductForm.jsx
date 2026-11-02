import { useEffect, useState } from "react";

export default function ProductForm({ onAddProduct,selectedProduct,onEditProduct }){

    const [name, setName]=useState("");
    const [category, setCategory]=useState("Electronics");
    const [price, setPrice]=useState("");
    const [stock, setStock]=useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();

        const product={
            name:name,
            category:category,
            price:Number(price),
            stock:Number(stock),
        };

        if(selectedProduct){
            onEditProduct({
                ...product,
                id:selectedProduct.id,
            });
        }else{
        onAddProduct(product);
        }
        setName("");
        setCategory("Electronics");
        setPrice("");
        setStock("");
    };
    
    useEffect(()=>{
        if(selectedProduct){
            setName(selectedProduct.name);
            setCategory(selectedProduct.category);
            setPrice(selectedProduct.price);
            setStock(selectedProduct.stock);
        }
    },[selectedProduct])

    
console.log("Selected Product:", selectedProduct);
console.log(
  "Edit Mode:",
  selectedProduct ? true : false
);
    return(
        <form onSubmit={handleSubmit} className="row g-3">
         <div className="col-12 col-md-6">
            <label className="form-label">Product Name</label>

            <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} />
         </div>

         <div className="col-12 col-md-6">
            <label htmlFor="" className="form-label">Category</label>

            <select className="form-select" value={category} onChange={(e)=>setCategory(e.target.value)}>

                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Home">Home</option>
                <option value="Sports">Sports</option>

            </select>
         </div>

         <div className="col-12 col-md-6">
            <label className="form-label">Price</label>

            <input type="number" className="form-control" value={price} onChange={(e)=>setPrice(e.target.value)} />
         </div>

         <div className="col-12 col-md-6">
             <label className="form-label">Stock</label>

             <input type="number" className="form-control" value={stock} onChange={(e) => setStock(e.target.value)}/>
        </div>

        <div className="col-12 col-md-4 col-lg-3">
            <button type="submit" className="btn btn-primary w-100 ">
            {selectedProduct ? "Update Product" : "Add Product "}</button>
        </div>
        </form>
    )


}