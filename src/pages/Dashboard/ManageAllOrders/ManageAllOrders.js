import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Box } from '@mui/material';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/orders")
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleApproveStatus = id => {
        const proceed = window.confirm('Do you want to upgrade order status to shipped?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`
            fetch(url, {
                method: 'PUT'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('Order has been approved')
                        window.location.reload();
                    }
                })
        }
    }

    const handleDeleteWatch = id => {
        const proceed = window.confirm("Are you sure you want to delete?");
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingWatches = orders.filter(watch => watch._id !== id);
                        console.log(remainingWatches)
                        setOrders(remainingWatches);
                        alert('Deleted successfully')
                    }
                })
        }
    }
    return (
        <div>
            <TableContainer elevation='0' sx={{ p: 4 }}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="left">Product</StyledTableCell>
                            <StyledTableCell align="left">Order Id</StyledTableCell>
                            <StyledTableCell>Product Name</StyledTableCell>
                            <StyledTableCell align="left">Email</StyledTableCell>
                            <StyledTableCell align="left">City</StyledTableCell>
                            <StyledTableCell align="left">Price</StyledTableCell>
                            <StyledTableCell align="left">Status</StyledTableCell>
                            <StyledTableCell align="center">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders?.map((order) => (
                            <StyledTableRow key={order?._id}>

                                <StyledTableCell align="left">
                                    <img style={{ width: 40, height: 40 }} src={order?.orderedItem?.img} alt="order" />
                                </StyledTableCell>
                                <StyledTableCell align="left">{order?._id}</StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    {order?.orderedItem?.title}
                                </StyledTableCell>
                                <StyledTableCell align="left">{order?.email}</StyledTableCell>
                                <StyledTableCell align="left">{order?.city}</StyledTableCell>
                                <StyledTableCell align="left">${order?.orderedItem?.price}</StyledTableCell>
                                <StyledTableCell align="left">{order?.status}</StyledTableCell>
                                <StyledTableCell align="center" >
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'between' }} >
                                        <Button onClick={() => handleApproveStatus(order._id)} size='small' sx={{ background: 'green', color: 'white', '&:hover': { background: 'silver', color: 'black' } }}>Approve</Button>
                                        <DeleteIcon sx={{ color: 'red' }} onClick={() => handleDeleteWatch(order._id)} />
                                    </Box>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageAllOrders;