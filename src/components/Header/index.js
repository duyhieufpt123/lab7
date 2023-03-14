import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect } from 'react';
import { useState } from 'react';
import jwt_decode from "jwt-decode";
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
    const [user, setUser] = useState({})
    const handleCredentialResponse = (response) => {
        console.log("Encoded JWT ID token: " + response.credential);
        var decoded = jwt_decode(response.credential);
        setUser(decoded);
        document.getElementById('buttonDiv').hidden = true;
    }
    const handleLogOut = (e) => {
        setUser({});
        document.getElementById('buttonDiv').hidden = false;
    }
    useEffect(() => {
        /* global google*/
        window.onload = function () {
            google.accounts.id.initialize({
                client_id: "826132857747-u5t7of7igmhi0kneoe22u8vkp2uscr9c.apps.googleusercontent.com",
                callback: handleCredentialResponse
            });
            google.accounts.id.renderButton(
                document.getElementById("buttonDiv"),
                { theme: "outline", size: "large" }  // customization attributes
            );
            google.accounts.id.prompt(); // also display the One Tap dialog
        }
    }, []);
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>

                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link style={{ textDecoration: 'none' }} to='/'>Home</Link>
                        </Typography>
                        <Button color="inherit" >
                            <Link style={{ textDecoration: 'none' }} to='/contact'>Contact</Link>
                        </Button>
                        <Button color="inherit">
                            <Link style={{ textDecoration: 'none' }} to='/about'>About us</Link>
                        </Button>
                        <Button color="inherit"  >
                            <Link style={{ textDecoration: 'none' }} to='/detail'>User Detail</Link>
                        </Button>
                        <div id='buttonDiv'></div>
                        {Object.keys(user).length != 0 &&
                            <Button onClick={handleLogOut} color="inherit">Logout</Button>
                        }
                        {user &&
                            <div>
                                <h5>{user.name}</h5>
                            </div>
                        }
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}
