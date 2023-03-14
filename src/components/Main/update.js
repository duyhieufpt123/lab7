import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './update.css';
import { FormControl,TextField,Checkbox,Button } from '@mui/material';
export default function Update() {
    const [id, setid] = useState('');
    const [name, setname] = useState('');
    const [username, setusername] = useState('');
    const [phone, setphone] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    useEffect(() => {
        setid(localStorage.getItem('ID'))
        setname(localStorage.getItem('Name'));
        setusername(localStorage.getItem('User Name'));
        setphone(localStorage.getItem('Phone'));
        setCheckbox(localStorage.getItem('Checkbox Value'));
    }, []);
    
    const updateAPIData = () => {
        axios.put(`https://6368c29a15219b8496060259.mockapi.io/users/${id}`, {
            id,
            name,
            username,
            phone,
            checkbox
        })
        alert("Update successfully!");
        
    }
    return (
        <div className="create_form">
            <FormControl >
                <TextField label='ID' placeholder='ID' value={id} onChange={(e) => setid(e.target.value)}/>
                <TextField label='Name' placeholder='Name'value={name} onChange={(e) => setname(e.target.value)}/>
                <TextField label='Username' placeholder='Username'value={username} onChange={(e) => setusername(e.target.value)}/>
                <TextField label='Phone' placeholder='Phone'value={phone} onChange={(e) => setphone(e.target.value)}/>
                <Checkbox checked={checkbox} onChange={(e) => setCheckbox(!checkbox)} label='Male' />
                <Button onClick={updateAPIData} type='submit'>Update</Button>
            </FormControl>
        </div>
    )
}