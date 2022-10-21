import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { GridToolbar, GridActionsCellItem, GridRowId } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography } from '@material-ui/core';
import { StripedDataGrid } from './CommunityTable.styles';
import { Button } from '@mui/material';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import {
  getAllOwners,
  loadOwnersRequest,
  removeOwnerRequest,
} from '../../../redux/ownersReducer';
import { useEffect, useCallback } from 'react';
import { useAppDispatch } from '../../../redux/hooks';
import GridSkeleton from '../../common/GridSkeleton/GridSkeleton';

const CommunityTable = () => {
  const dispatch = useAppDispatch();

  const data = useSelector(getAllOwners);

  useEffect(() => {
    dispatch(loadOwnersRequest());
  }, [dispatch]);

  const deleteUser = useCallback(
    (id: GridRowId) => () => {
      dispatch(removeOwnerRequest(id));
    },
    [dispatch]
  );

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 60,
      headerClassName: 'column-header',
    },
    {
      field: 'personalData',
      headerName: 'Właściciel',
      width: 200,
      editable: false,
      headerClassName: 'column-header',
    },
    {
      field: 'addressToInvoice',
      headerName: 'Adres do korespondencji',
      width: 270,
      editable: false,
      headerClassName: 'column-header',
    },
    {
      field: 'dataToInvoice',
      headerName: 'Dane do faktur',
      width: 270,
      editable: false,
      headerClassName: 'column-header',
    },
    {
      field: 'forwardingAddress',
      headerName: 'Adres lokalu',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 300,
      headerClassName: 'column-header',
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Opcje',
      width: 230,
      headerClassName: 'column-header',
      getActions: (params: { id: GridRowId }) => [
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label='Delete'
          onClick={deleteUser(params.id)}
        />,
      ],
    },
  ];

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
      {data ? (
        <StripedDataGrid
          rows={data}
          columns={columns}
          pageSize={20}
          rowsPerPageOptions={[20]}
          checkboxSelection
          disableSelectionOnClick
          getRowHeight={() => 'auto'}
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
          }
          getRowId={(row) => row.ownerId}
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
        <GridSkeleton />
      )}
    </Box>
  );
};

export default CommunityTable;
