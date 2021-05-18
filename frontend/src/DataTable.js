//IMPORTS
import React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { DataGrid } from '@material-ui/data-grid';

function DataTable(props) {
    //Here, convert the data to add the 'ID' field
    


    return (
        <Box my = {12}>
            <Card>
                <CardContent>
                    <Typography>{props.pageName}</Typography>
                    <Box my = {2}>
                        <div style={{ height: 600, width: '100%' }}>
                            <DataGrid rows={props.rows} columns={props.columns} pageSize={8}/>
                        </div>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}

export default DataTable
