import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link as RouterLink } from 'react-router-dom'

export default function Header() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        99 Company Assignment
                    </Typography>
                    {isMobile ? (
                        <IconButton color="inherit">
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <Box sx={{ display: 'flex' }}>
                            <Button color="inherit" sx={{ mr: 1 }} component={RouterLink} to='/'>
                                Sign Up
                            </Button>
                            <Button color="inherit" component={RouterLink} to='/login'>Login</Button>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
