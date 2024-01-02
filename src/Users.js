import { Box } from "@mui/material";
import UserTable from "./UserTable";
import UserForm from "./UserForm";
import { useEffect, useState } from "react";
import axios from "axios";


const Users = () => {
    const [userDetails, setUserDetails] = useState([])
    const [submitted, setSubmitted] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [selectedUser,setSelectedUser] = useState({});

    useEffect(()=>{
        getUsers();
    },[])
    const getUsers = ()=>{
        axios.get('http://localhost:3001/api/getusers')
            .then(response =>{
                setUserDetails(response.data?.response || []);
            })
            .catch(error =>{
                console.error("Axios Error: ", error)
            })
    }

    const addUser = (data) =>{
        setSubmitted(true);
        const payload ={
            id: data.id,
            firstName: data.firstName,
            lastName: data.lastName,
            address: data.address,

        };
        axios.post('http://localhost:3001/api/createuser',payload)
            .then(() =>{
                getUsers();
                setSubmitted(false);
                setIsEdit(false);
                
            })
            .catch(error =>{
                console.error("Axios Error: ", error)
            })
    }

    const updateUser = (data)=>{
        setSubmitted(true);
        const payload ={
            id: data.id,
            firstName: data.firstName,
            lastName: data.lastName,
            address: data.address,

        };
        axios.put('http://localhost:3001/api/updateuser',payload)
            .then(() =>{
                getUsers();
                setSubmitted(false);
                setIsEdit(false);
                
            })
            .catch(error =>{
                console.error("Axios Error: ", error)
            })
    }

    const deleteUser = (data) =>{
        
        axios.delete('http://localhost:3001/api/deleteuser',data)
            .then(() =>{
                getUsers();
                
            })
            .catch(error =>{
                console.error("Axios Error: ", error)
            })

    }
    return (
        <Box>
            <UserForm 
                addUser={addUser}
                updateUser={updateUser}
                submitted={submitted}
                data={selectedUser}
                isEdit={isEdit}
            />
            <UserTable 
                rows={userDetails}
                selectedUser={(data)=>{
                    setSelectedUser(data);
                    setIsEdit(true);
                }}
                deleteUser={data => window.confirm("Are you sure?") && deleteUser(data)}

            />

        </Box>
       
      
    )
}

export default Users
