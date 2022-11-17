import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


export default function User() {
    const[name, setFirstName]=useState('')
    const[lastname, setLastName]=useState('')
    const[phoneNumber,setPhoneNumber]=useState('')
    const[email,setEmail]=useState('')

    const[users,setUsers]=useState([])
      

    const handleClick=(e)=>{
        e.preventDefault()
        const user={name,lastname,phoneNumber,email}
        console.log(user)
        fetch("http://10.30.4.169:8080/user/add",{ 
        method:"POST", 
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(user)
        
    }).then(()=>{
        console.log("New user added to database")
    })
    }
    const deleteClick=(userId)=>{
        fetch("http://10.30.4.169:8080/user/delete/"+userId,{
        method:"DELETE",
      
    }).then(response=> {
      
        console.log("Deleted user");
        window.location.reload();
    })
    }

    useEffect(()=>{
        fetch("http://10.30.4.169:8080/user/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setUsers(result);
        }
    )
},[])


  return (
    <Box sx={{
        display: 'flex',
        justifyContent:"center",
        flexWrap: 'wrap',
        '& > :not(style)': {
            padding: '30px 20px 50px 20px',
            width:'600px',
            margin:'20px auto'          
        },
      }}>
        <Paper elevation={3}>
            <h1 style={{color:"blue"}}>New Client</h1>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="First Name" variant="outlined" fullWidth 
      value={name}
      onChange={(e)=>setFirstName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Last Name" variant="outlined" fullWidth
      value={lastname}
      onChange={(e)=>setLastName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Phone Number" variant="outlined" fullWidth
      value={phoneNumber}
      onChange={(e)=>setPhoneNumber(e.target.value)}
      />
      <TextField id="outlined-basic" label="E-mail" variant="outlined" fullWidth
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
      <Button variant="contained" onClick={handleClick}>Submit</Button>
      
    </Box>
    </Paper>
    
    <Paper elevation={3}>
        
    <h1 style={{color:"blue"}}>Clients</h1>

        {users.map(user=>(
    <Paper elevation={6} style={{margin:"10px",padding:"15px",textAlign:"left"}}>
           Id:{user.id} <br/>
           Name:{user.name} <br/>
           Last Name:{user.lastname}<br/>
           Phone Number:{user.phoneNumber}<br/>
           E-mail:{user.email}<br/>
           <Button variant="contained" onClick={deleteClick.bind(this, user.id)}>Delete</Button>
    </Paper>
        ))}
    </Paper>
    
    </Box>
  );
}