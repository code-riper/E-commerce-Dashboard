import { Chip, Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow } from "@mui/material";
import { useEffect, useState } from "react";

export default function ProductTable({products,onEditProduct, onDeleteProduct,
  deleteProductLoading,}){
    const [search, setSearch] = useState("");
    const [categoryFilter, setCategoryFilter]=useState("All");
    const [currentPage, setCurrentPage]=useState(1);
    const productsPerPage=5;

    // for filteration
    const filteredProducts=products.filter((product)=>{

        const matchesSearch=product.name.toLowerCase().includes(search.toLowerCase());

        const matchesCategory=
        categoryFilter === "All" || product.category === categoryFilter;

        return matchesSearch && matchesCategory;
    });

    // Pagination
    const totalPages=Math.max( 1,
        Math.ceil(filteredProducts.length / productsPerPage)
    )

    const startIndex=(currentPage-1)*productsPerPage;

    const paginatedProducts=filteredProducts.slice(
        startIndex,startIndex+productsPerPage
    );


    useEffect(()=>{
        setCurrentPage(1);
    },[search,categoryFilter])


    return(
        <>
        <div className="row g-3 mb-3">

          <div className="col-12 col-md-8">  
        <input
        type="text"
        className="form-control "
        placeholder="Search products..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
          </div>

          <div className="col-12 col-md-4">
        <select value={categoryFilter} onChange={(e)=>setCategoryFilter(e.target.value)} className="form-select">
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="Home">Home</option>
        </select>
        </div>
        </div>

        <TableContainer component={Paper} sx={{overflowX:"auto"}}>
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Product</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Stock</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Action</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                {paginatedProducts.length === 0 ? (
                    <TableRow>
                        <TableCell colSpan={8} align="center">
                            No products found
                        </TableCell>
                    </TableRow>
                )   :
                paginatedProducts.map((product)=>(

                    <TableRow key={product.id}>
                        <TableCell>{product.id}</TableCell>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell>{product.price.toLocaleString("en-IN")}</TableCell>
                        <TableCell>{product.stock}</TableCell>
                        <TableCell>
                            {/* {product.stock < 5 ? "Low Stock" : "In Stock"} */}
                            <Chip 
                               label={product.stock < 5 ? "Low Stock" : "In Stock"}
                               color={product.stock < 5 ? "error" : "success"}
                               size="small"
                            />
                        </TableCell>
                        <TableCell>
                            <button type="button"
                             className="btn btn-outline-primary btn-sm"
                             onClick={()=>onEditProduct(product)}
                            >
                                Edit
                            </button>
                        </TableCell>
                        <TableCell>
                            <button type="button"
                            className="btn btn-outline-danger btn-sm"
                            disabled={deleteProductLoading}
                            onClick={()=>onDeleteProduct(product)}
                            >
                                {deleteProductLoading ? "Deleting...":"Delete"}
                            </button>
                        </TableCell>
                    </TableRow>
                ))}
                
                </TableBody>
            </Table>
        </TableContainer>

        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2 mt-3">
            <button type="button" 
              className="btn btn-outline-primary"
              disabled={currentPage === 1}
              onClick={()=>setCurrentPage(currentPage - 1)}
            >Previous</button>

            <span>
               Page {currentPage} of {totalPages}
            </span>
            <button
             className="btn btn-outline-primary"
             disabled={currentPage === totalPages}
             onClick={()=>setCurrentPage(currentPage + 1)}
            >Next</button>
        </div>
        </>
    )
}