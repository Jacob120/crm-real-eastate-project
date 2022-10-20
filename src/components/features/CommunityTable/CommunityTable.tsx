import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import {
  GridToolbar,
  GridColDef,
  GridValueGetterParams,
  GridRenderCellParams,
  GridRowCount,
  GridApi,
} from '@mui/x-data-grid';
import Skeleton from '@mui/material/Skeleton';
import { Typography } from '@material-ui/core';
import { StripedDataGrid } from './CommunityTable.styles';
import { Button } from '@mui/material';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import { getAllOwners, loadOwnersRequest } from '../../../redux/ownersReducer';
import { useEffect } from 'react';
import { useAppDispatch } from '../../../redux/hooks';

const columns: GridColDef[] = [
  {
    field: 'ordinalNumber',
    headerName: 'Lp.',
    width: 60,
    headerClassName: 'column-header',
    valueGetter: (params: GridValueGetterParams) =>
      params.api.getRowIndex(params.row.id) + 1,
  },
  {
    field: 'personalData',
    headerName: 'Właściciel',
    width: 200,
    editable: true,
    headerClassName: 'column-header',
  },
  {
    field: 'addressToInvoice',
    headerName: 'Adres do korespondencji',
    width: 270,
    editable: true,
    headerClassName: 'column-header',
  },
  {
    field: 'dataToInvoice',
    headerName: 'Dane do faktur',
    width: 270,
    editable: true,
    headerClassName: 'column-header',
  },
  {
    field: 'forwardingAddress',
    headerName: 'Adres lokalu',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 300,
    headerClassName: 'column-header',

    // valueGetter: (params: GridValueGetterParams) =>
    //   `${params.row.owner || ''} ${params.row.forwardingAddress || ''}`,
  },
  {
    field: 'options',
    headerName: 'Opcje',
    width: 230,
    editable: true,
    headerClassName: 'column-header',
  },
];

const CommunityTable = () => {
  const dispatch = useAppDispatch();

  const rows = useSelector(getAllOwners);

  console.log('data', rows);

  useEffect(() => {
    dispatch(loadOwnersRequest());
  }, [dispatch]);

  const handleGetRowId = (event: any) => {
    return event.ownerId;
  };

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
      {rows ? (
        <StripedDataGrid
          getRowId={handleGetRowId}
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
            '&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell': {
              py: '8px',
            },
            '&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell': {
              py: '15px',
            },
            '&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell': {
              py: '22px',
            },
          }}
        />
      ) : (
        <Box sx={{ pt: 0.5 }}>
          <Skeleton />
          <Skeleton width='60%' />
        </Box>
      )}
    </Box>
  );
};

export default CommunityTable;
