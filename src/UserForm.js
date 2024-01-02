import { Button, Grid, Input, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const UserForm = ({addUser,submitted,data,isEdit,updateUser}) => {
    const [id,setId] =useState(0);
    const [fName,setFName] =useState('');
    const [lName,setLName] =useState('');
    const [address,setAddress] =useState('');
    
    useEffect(()=>{
        if(!submitted){
            setId(0);
            setFName('');
            setLName('');
            setAddress('');
        }
    },[submitted]);

    useEffect(()=>{
        if(data?.id && data.id !== 0){
            setId(data.id);
            setFName(data.firstName);
            setLName(data.lastName);
            setAddress(data.address);
        }

    },[data]);
    return (
        <Grid 
            container
            spacing={4}
            sx={{
                backgroundColor: '#fff',
                marginBottom: '30px',
                display: 'block',
                marginLeft: '30%',
                marginTop: '30px',
               
                
            }}
        

        >
            <Grid item xs={12}>
                <Typography component={'h1'} sx={{
                    color:'#000000', 
                    fontSize:'30px',
                    fontWeight:'500'
                    }}>
                    User Form
                </Typography>

            </Grid>
            <Grid item xs={12} sm={6} sx={{display: 'flex'}}>
                <Typography 
                    component={'label'} 
                    htmlFor='id'
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '20px',
                        width: '100px',
                        display: 'block'
                    }}
                >
                    ID
                </Typography>
                <Input
                    type='number'
                    id='id'
                    name='id'
                    sx={{
                        width: '400px'
                    }}
                    value={id}
                    onChange={(e) =>(setId(e.target.value))}

                />
            </Grid>
            <Grid item xs={12} sm={6} sx={{display: 'flex'}}>
                <Typography 
                    component={'label'} 
                    htmlFor='firstname'
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '20px',
                        width: '100px',
                        display: 'block'
                    }}
                >
                    First Name
                </Typography>
                <Input
                    type='text'
                    id='firstname'
                    name='firstname'
                    sx={{
                        width: '400px'
                    }}
                    value={fName}
                    onChange={(e) =>{setFName(e.target.value)}}

                />
            </Grid>
            <Grid item xs={12} sm={6} sx={{display: 'flex'}}>
                 <Typography 
                    component={'label'} 
                    htmlFor='lastname'
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '20px',
                        width: '100px',
                        display: 'block'
                    }}
                >
                    Last Name
                </Typography>
                <Input
                    type='text'
                    id='lastname'
                    name='lastname'
                    sx={{
                        width: '400px'
                    }}
                    value={lName}
                    onChange={(e) =>{setLName(e.target.value)}}

                />
            </Grid>
            <Grid item xs={12} sm={6} sx={{display: 'flex'}}>
                 <Typography 
                    component={'label'} 
                    htmlFor='address'
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '20px',
                        width: '100px',
                        display: 'block'
                    }}
                >
                    Address
                </Typography>
                <Input
                    type='text'
                    id='address'
                    name='address'
                    sx={{
                        width: '400px'
                    }}
                    value={address}
                    onChange={(e) =>{setAddress(e.target.value)}}

                />
                
            </Grid>
            <Button
                sx={{
                    margin: 'auto',
                    marginBottom : '20px',
                    backgroundColor: 'aquamarine',
                    width:'150px',
                    color: '#000000',
                    fontSize:'17px',
                    fontWeight:'600',
                    marginLeft: '15px',
                    marginTop: '20px',
                    borderRadius:'10px',
                    '&:hover': {
                        opacity: '0.6',
                        backgroundColor:'aquamarine'
                    }
                }}
                onClick={()=> isEdit?(updateUser({
                    id:id,
                    firstName:fName,
                    lastName:lName,
                    address:address,
                })):
                (addUser({
                    id:id,
                    firstName:fName,
                    lastName:lName,
                    address:address,
                }))}
            >
                {
                    isEdit? ("Update"):("Submit")
                }
                
            </Button>

        </Grid>
    
    )
}

export default UserForm
