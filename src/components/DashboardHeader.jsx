import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { Fragment, useEffect, useState } from "react";



export default function DashboardHeader({onAddUser,selectedUser,onEditUser,onClearSelectedUser,loading}){
    const [open, setOpen]=useState(false);
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [errors, setErrors] = useState({});
    
    const handleSave=()=>{
        const newErrors={};

        if(!name.trim()){
            newErrors.name="Name is required";
        }

        if(!email.trim()){
            newErrors.email="Email is required";
        }

        if(email && !email.includes("@")){
            newErrors.email="Enter a valid email";
        }

        setErrors(newErrors);

        if(Object.keys(newErrors).length===0){
            if(selectedUser){
                onEditUser({
                    ...selectedUser,
                    name:name,
                    email:email,
                });

            }else{
                onClearSelectedUser()
            onAddUser({
                name:name,
                email:email,
            });

            // setName("");
            // setEmail("");
            // setErrors({})
            // setOpen(false);
        }
            setName("");
            setEmail("");
            setErrors({})
            setOpen(false);
            onClearSelectedUser();
        }
        
    };

    const handleCancel=()=>{
            onClearSelectedUser();
            setName("");
            setEmail("");
            setErrors({})
            setOpen(false);
    }

    useEffect(()=>{
        if(selectedUser){
            setName(selectedUser.name);
            setEmail(selectedUser.email);
            setOpen(true);
        }
    },[selectedUser]);

    return(
        <Fragment>
        <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
                <h1 className="mb-1">
                    Dashboard
                </h1>
                <p className="text-muted mb-0">Welcome back!</p>
            </div>

            <Button variant="contained" 
            onClick={()=>setOpen(true)}
            disabled={loading}
            >
                {loading?"Adding...":"+ Add User"}
            </Button>
        </div>

        <Dialog open={open} onClose={()=>setOpen(false)}>
            <DialogTitle>
                {selectedUser ? "Edit User" : "Add New User"}
            </DialogTitle>

            <DialogContent>
                <TextField label="Name" fullWidth margin="normal" value={name}
                 onChange={(e)=>setName(e.target.value)} helperText={errors.name} error={Boolean(errors.name)}></TextField>
                <TextField label="Email" fullWidth margin="normal" value={email} error={Boolean(errors.email)}
                onChange={(e)=>setEmail(e.target.value)} helperText={errors.email}
                ></TextField>
            </DialogContent>

            <DialogActions>

                {/* <Button onClick={()=>setOpen(false)}>Cancel</Button> */}
                <Button onClick={handleCancel}>Cancel</Button>
                <Button variant="contained" onClick={handleSave}>{selectedUser ? "Update" : "Save"}</Button>
            </DialogActions>
        </Dialog>
            </Fragment>
    )
}