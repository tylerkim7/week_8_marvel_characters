// React Imports
import React, { useState } from 'react';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material';

// Local Imports
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { CharacterForm } from '../CharacterForm/CharacterForm';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'name',
        headerName: 'Name',
        width: 150,
        editable: true,
    },
    {
        field: 'description',
        headerName: 'Description',
        width: 150,
        editable: true,
    },
    {
        field: 'comic_appeared_in',
        headerName: 'Comic Appeared In',
        width: 110,
        editable: true,
    },
    {
        field: 'super_power',
        headerName: 'Super Power',
        width: 160,
        editable: true,
    },
    {
        field: 'date_created',
        headerName: 'Date Created',
        width: 160,
        editable: true,
    },
];


interface gridData {
    data: {
        id?:string;
    }
}

export const DataTable = () => {
    let { characterData, getData } = useGetData();
    let [open, setOpen] = useState(false)
    let [gridData, setData] = useState<GridSelectionModel>([])

    let handleOpen = () => {
        setOpen(true)
    }

    let handleClose = () => {
        setOpen(false)
    }

    let deleteData = () => {
        serverCalls.delete(`${gridData[0]}`)
        getData()
    }

    console.log(gridData)
    const MyAuth = localStorage.getItem('myAuth')
    console.log(MyAuth)
    if (MyAuth == "true"){

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={characterData}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                onSelectionModelChange = {(newSelectionModel) => {setData(newSelectionModel);}}
                {...characterData}
            />
            <Button onClick={handleOpen}>Update</Button>
            <Button variant='contained' color='secondary' onClick={deleteData}>Delete</Button>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update a Character</DialogTitle>
            <DialogContent>
                <DialogContentText>Character id: {gridData[0]}</DialogContentText>
                    <CharacterForm id={`${gridData[0]}`} />
            </DialogContent>
            <DialogActions>
                <Button onClick = {handleClose} color="primary">Cancel</Button>
                <Button onClick = {handleClose} color="primary">Done</Button>
            </DialogActions>
            </Dialog>
        </div>
    )
    } else {
        return (
            <div>
                <h1>Please Sign In to View Your Character Collection</h1>
            </div>
        )
    }
}