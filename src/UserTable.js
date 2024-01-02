import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

const UserTable = ({rows, selectedUser, deleteUser}) => {
    return (
        <TableContainer component={Paper} sx={{
            marginTop:'20px',
            marginLeft:'20%',
            width:'60%'
         
            }}>
            <Table>
                <TableHead sx={{
                    backgroundColor:'aquamarine',
                    

                    }}>
                    <TableRow >
                        <TableCell sx={{fontSize:'17px',fontWeight:'600'}}>ID</TableCell>
                        <TableCell sx={{fontSize:'17px',fontWeight:'600'}}>First Name</TableCell>
                        <TableCell sx={{fontSize:'17px',fontWeight:'600'}}>Last Name</TableCell>
                        <TableCell sx={{fontSize:'17px',fontWeight:'600'}}>Address</TableCell>
                        <TableCell sx={{fontSize:'17px',fontWeight:'600'}}>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row)=>(
                        <TableRow key={row.id} sx={{border:'2px'}}>
                        <TableCell component='th' scope="row">{row.id}</TableCell>
                        <TableCell component='th' scope="row">{row.firstName}</TableCell>
                        <TableCell component='th' scope="row">{row.lastName}</TableCell>
                        <TableCell component='th' scope="row">{row.address}</TableCell>
                        <TableCell >
                            <Button sx={{
                                fontSize:'15px',
                                fontWeight:'500'
        
                            }} onClick={()=> selectedUser({
                                id:row.id,
                                firstName: row.firstName,
                                lastName: row.lastName,
                                address: row.address,

                            })}>
                                Update
                            </Button>
                            <Button sx={{
                                fontSize:'15px',
                                fontWeight:'500'
                               
                            }} onClick={()=> deleteUser({
                                id:row.id,
                                
                            })}>
                                Delete
                            </Button>
                        </TableCell>

                    </TableRow>

                    ))}
                    
                   
                        
                    
                

                </TableBody>
            </Table>
            
            

        </TableContainer>
    )
}

export default UserTable
