import * as React from 'react';
import Box from '@mui/material/Box';
import {
  GridToolbar,
  GridColDef,
  GridValueGetterParams,
} from '@mui/x-data-grid';
import { Typography } from '@material-ui/core';
import { StripedDataGrid } from './CommunityTable.styles';
import { Button } from '@mui/material';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';

const columns: GridColDef[] = [
  {
    field: 'Lp',
    headerName: 'Lp.',
    width: 60,
    headerClassName: 'column-header',
  },
  {
    field: 'owner',
    headerName: 'Właściciel',
    width: 200,
    editable: true,
    headerClassName: 'column-header',
  },
  {
    field: 'mailingAddress',
    headerName: 'Adres do korespondencji',
    width: 270,
    editable: true,
    headerClassName: 'column-header',
  },
  {
    field: 'billingInformation',
    headerName: 'Dane do faktur',
    width: 270,
    editable: true,
    headerClassName: 'column-header',
  },
  {
    field: 'apartmentAddress',
    headerName: 'Adres lokalu',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 300,
    headerClassName: 'column-header',

    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.owner || ''} ${params.row.mailingAddress || ''}`,
  },
];

const rows = [
  {
    id: 1,
    Lp: 1,
    owner: 'Jon Snow',
    mailingAddress: 'Jon Snow, Pokątna 4, 00-950 Warszawa',
    billingInformation: 'Jon Snow',
  },
  {
    id: 2,
    Lp: 2,
    owner: 'Cersei Lannister',
    mailingAddress: 'Cersei Lannister, Pokątna 4, 00-950 Warszawa',
    billingInformation: 'Cersein Lannister',
  },
  {
    id: 3,
    Lp: 3,
    owner: 'Jaime Lannister',
    mailingAddress: 'Jaimie Lannister Pokątna 4, 00-950 Warszawa',
    billingInformation: 'Haimie Lannister',
  },
  {
    id: 4,
    Lp: 4,
    owner: 'Arya Stark',
    mailingAddress: 'Arya Stark, Pokątna 4, 00-950 Warszawa',
    billingInformation: 'Arya Stark',
  },
  {
    id: 5,
    Lp: 5,
    owner: 'Daenerys Targaryen',
    mailingAddress: 'Daenerys Targaryen, Pokątna 4, 00-950 Warszawa',
    billingInformation: 'Daenerys Targaryen',
  },
  {
    id: 6,
    Lp: 6,
    owner: 'Melisandre',
    mailingAddress: 'Melisandre, Pokątna 4, 00-950 Warszawa',
    billingInformation: 'Melisandre',
  },
  {
    id: 7,
    Lp: 7,
    owner: 'Ferrara Clifford',
    mailingAddress: 'Ferrara Clifford, Pokątna 4, 00-950 Warszawa',
    billingInformation: 'Ferrara Clifford',
  },
  {
    id: 8,
    Lp: 8,
    owner: 'Rossini Frances',
    mailingAddress: 'Rossini Frances, Pokątna 4, 00-950 Warszawa',
    billingInformation: 'Rossini Frances',
  },
  {
    id: 9,
    Lp: 9,
    owner: 'Harvey Roxie',
    mailingAddress: 'Roxie, Pokątna 4, 00-950 Warszawa',
    billingInformation: 'Harvey Roxie',
  },
];

const CommunityTable = () => {
  return (
    <Box
      sx={{
        height: 700,
        width: '100%',
        '& .column-header': {
          backgroundColor: '#C8C8C8',
        },
        '& .MuiDataGrid-columnHeader ': {
          backgroundColor: '#e8e8e8',
        },
        '& .MuiDataGrid-columnSeparator--sideRight': {
          color: '#888888',
        },
      }}
    >
      <Box sx={{ marginBottom: 3 }}>
        <Typography variant='h5' component='h5'>
          Właściciele we wspólnocie
        </Typography>
      </Box>
      <Button>
        <NoteAddOutlinedIcon />
        Dodaj właściciela
      </Button>
      <Button>
        <RefreshOutlinedIcon />
        Odśwież listę
      </Button>
      <StripedDataGrid
        rows={rows}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        getRowHeight={() => 'auto'}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
        }
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
    </Box>
  );
};

export default CommunityTable;
