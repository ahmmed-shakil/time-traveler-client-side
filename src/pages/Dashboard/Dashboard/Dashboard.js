import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Home } from '@mui/icons-material';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';
import Pay from '../Pay/Pay';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import AddNewProduct from '../AddNewProduct/AddNewProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../hooks/useAuth';

const drawerWidth = 240;

function Dashboard(props) {
    const { user, logout, admin } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Divider />
            <List>
                <h4>Welcome {user?.displayName}</h4>
                <Link style={{ color: 'black' }} to='/'>
                    <ListItem>
                        <ListItemText sx={{ fontWeight: '500', fontFamily: 'Poppins' }} >
                            <Home />
                        </ListItemText>
                    </ListItem>
                </Link>
                <Divider />

                {
                    !admin ? <Box>
                        <Link style={{ color: 'black', textDecoration: 'none', fontWeight: '600', fontFamily: 'Poppins' }} to={`${url}`}>
                            <ListItem>
                                <ListItemText >
                                    My Orders
                                </ListItemText>
                            </ListItem>
                        </Link>
                        <Divider />
                    </Box>
                        :
                        <Box>
                            <Link style={{ color: 'black', fontWeight: '500', fontFamily: 'Poppins', textDecoration: 'none' }} to={`${url}`}>
                                <ListItem button>
                                    <ListItemText>
                                        Manage All Orders
                                    </ListItemText>
                                </ListItem>
                            </Link>
                            <Divider />
                        </Box>

                }

                {
                    !admin && <Box>
                        <Link style={{ color: 'black', fontWeight: '500', fontFamily: 'Poppins', textDecoration: 'none' }} to={`${url}/review`}>
                            <ListItem button>
                                <ListItemText>
                                    Review
                                </ListItemText>
                            </ListItem>
                        </Link>
                        <Divider />

                        <Link style={{ color: 'black', fontWeight: '500', fontFamily: 'Poppins', textDecoration: 'none' }} to={`${url}/pay`}>
                            <ListItem button>
                                <ListItemText>
                                    Pay
                                </ListItemText>
                            </ListItem>
                        </Link>
                        <Divider />
                    </Box>
                }

                {
                    admin && <Box>
                        <Link style={{ color: 'black', fontWeight: '500', fontFamily: 'Poppins', textDecoration: 'none' }} to={`${url}/addProduct`}>
                            <ListItem button>
                                <ListItemText>
                                    Add New Product
                                </ListItemText>
                            </ListItem>
                        </Link>
                        <Divider />

                        <Link style={{ color: 'black', fontWeight: '500', fontFamily: 'Poppins', textDecoration: 'none' }} to={`${url}/manageProducts`}>
                            <ListItem button>
                                <ListItemText>
                                    Manage Products
                                </ListItemText>
                            </ListItem>
                        </Link>
                        <Divider />

                        <Link style={{ color: 'black', fontWeight: '500', fontFamily: 'Poppins', textDecoration: 'none' }} to={`${url}/makeAdmin`}>
                            <ListItem button>
                                <ListItemText>
                                    Make Admin
                                </ListItemText>
                            </ListItem>
                        </Link>
                        <Divider />
                    </Box>
                }

                <ListItem button onClick={logout}>
                    <ListItemText>
                        <span style={{ color: 'black', fontWeight: '500', fontFamily: 'Poppins', textDecoration: 'none' }}>Log Out</span>
                    </ListItemText>
                </ListItem>

            </List>
        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    background: 'black',
                    color: 'white'
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{ fontFamily: 'Poppins' }}>
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background: '#cfb54c', border: 'none' },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    {
                        !admin ?
                            <Route exact path={path}>
                                <MyOrders></MyOrders>
                            </Route>
                            :
                            <Route exact path={path}>
                                <ManageAllOrders></ManageAllOrders>
                            </Route>
                    }
                    {!admin ?
                        <Box>
                            <Route path={`${path}/review`}>
                                <Review></Review>
                            </Route>
                            <Route path={`${path}/pay`}>
                                <Pay></Pay>
                            </Route>
                        </Box>
                        :
                        <Box>
                            <Route path={`${path}/addProduct`}>
                                <AddNewProduct></AddNewProduct>
                            </Route>
                            <Route path={`${path}/manageProducts`}>
                                <ManageProducts></ManageProducts>
                            </Route>
                            <Route path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </Route>
                        </Box>
                    }
                </Switch>

            </Box>
        </Box >
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
