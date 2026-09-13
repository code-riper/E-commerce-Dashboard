import { Chip, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

export default function UserTable({users,onEditUser,onDeleteUser,onStatusChange,deleteUserLoading}){

    const [search,setSearch]=useState("");
    const [statusFilter,setStatusFilter]=useState("All");
    const[currentPage,setCurrentPage]=useState(1);
    const usersPerPage=5;

    
    
    const filteredUsers=users.filter((user)=>{
    const matchesSearch= 
    (user.name.toLowerCase().includes(search.toLowerCase())) || user.email.toLowerCase().includes(search.toLowerCase())

    const matchesStatus=(statusFilter==="All" || user.status === statusFilter)

    return matchesSearch && matchesStatus;
    });

    const totalPages=Math.ceil(
        filteredUsers.length/usersPerPage
    )

    const startIndex=(currentPage-1)*usersPerPage;

    const paginatedUsers=filteredUsers.slice(startIndex,startIndex+usersPerPage);

    useEffect(()=>{
        setCurrentPage(1);
    },[search,statusFilter]);


    return(
        <>
        <div className="row g-3 mb-3">

        <div className="col-12 col-md-8">
            <input type="text" className="form-control mb-3" placeholder="Search users..." value={search} onChange={(e)=>setSearch(e.target.value)}/>
        </div>

        <div className="col-12 col-md-4">                        
        <select className="form-select mb-3 " value={statusFilter} onChange={(e)=>setStatusFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
        </select>
        </div>

        </div>

        <TableContainer component={Paper} sx={{overflow:"auto"}}>
            <Table>
                <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 600}}>ID</TableCell>
                            <TableCell sx={{ fontWeight: 600}}>Name</TableCell>
                            <TableCell sx={{ fontWeight: 600}}>Email</TableCell>
                            <TableCell sx={{ fontWeight: 600}}>Status</TableCell>
                            <TableCell sx={{ fontWeight: 600}}>Action</TableCell>
                            <TableCell sx={{ fontWeight: 600}}>Delete</TableCell>
                        </TableRow>
                </TableHead>
                
                <TableBody>
                    {paginatedUsers.length === 0 ?(
                        <TableRow>
                            <TableCell colSpan={6} align="center">
                                No users found
                            </TableCell>
                        </TableRow>
                    ):(
                    
                    paginatedUsers.map((user)=>{
                        return <TableRow key={user.id}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>
                                {/* <Chip label={user.status} color="success"/> */}
                                <select
                                 value={user.status}
                                  onChange={(e)=>onStatusChange(user.id,e.target.value)}
                                  className="form-select form-select-sm"
                                  >
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </select>
                            
                            </TableCell>
                            <TableCell>
                                <Button variant="outlined"
                                onClick={()=>onEditUser(user)}
                                size="small"
                                >Edit</Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="outlined"
                                size="small"
                                onClick={()=>onDeleteUser(user)}>
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    }))}
                </TableBody>
            </Table>
        </TableContainer>

        <div className="d-flex flex-column justify-content-between flex-sm-row align-items-center gap-2 mt-3">
            <Button variant="outlined" disabled={currentPage === 1} onClick={()=>setCurrentPage(currentPage-1)}>
                    Previous
            </Button>

            <span>
                Page {currentPage} of {totalPages}
            </span>

            <Button variant="outlined" disabled={currentPage === totalPages}onClick={()=>setCurrentPage(currentPage+1)}>
                Next
            </Button>
        </div>
        </>
    )
}