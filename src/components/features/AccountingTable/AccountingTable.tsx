import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Typography } from '@material-ui/core';
import { TableCell, TableRow, TableBody } from '@material-ui/core';
import { GridToolbar } from '@mui/x-data-grid';
import { useSelector } from 'react-redux'
import { getAccountingTable } from '../../../redux/accountingRedux';


const columns: GridColDef[] = [
  {
    field: 'Lp',
    headerName: 'Lp.',
    width: 60,
    headerClassName: 'column-header',
  },
  {
    field: 'invoiceNumber',
    headerName: 'Numer faktury',
    width: 120,
    headerClassName: 'column-header',
    editable: true,
  },
  {
    field: 'clientName',
    headerName: 'Nazwa klienta',
    width: 430,
    headerClassName: 'column-header',
    editable: true,
  },
  {
    field: 'date',
    headerName: 'Data',
    width: 200,
    headerClassName: 'column-header',
  },
  {
    field: 'dateOfPayment',
    headerName: 'Termin płatności',
    width: 200,
    headerClassName: 'column-header',
    editable: true,
  },
  {
    field: 'sum',
    headerName: 'Kwota',
    width: 70,
    type: 'number',
    headerClassName: 'column-header',
    editable: false,
  },
];


const AccountingTable = () => { 
  const accountingData = useSelector(getAccountingTable)
  console.log(accountingData);

  const sumFunc = (param: object) => {
    let price = 0;
    for (let sum in param) {
      const obj = (param as any)[sum];
      price = price + obj.sum
    };
    return price;
  };

  return (
    <div>
      <Box sx={{ marginBottom: 3 }}>
        <Typography variant='h5' component='h5'>
          Księgowość
        </Typography>
      </Box>
      <Box sx={{ height: 700, width: '100%' }}>
        <DataGrid
          rows={accountingData}
          columns={columns}
          pageSize={20}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          components={{ Toolbar: GridToolbar }}
        sx={{
          '&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell': { py: '8px' },
          '&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell': {
            py: '15px',
          },
          '&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell': {
            py: '22px',
          },
        }}
        />
        <TableBody>
          <TableRow>
            <TableCell colSpan={2}>Suma kwot:</TableCell>
            <TableCell align="right">{sumFunc(accountingData)}.-</TableCell>
          </TableRow>
        </TableBody>
      </Box>
    </div>
  );
}

export default AccountingTable;
