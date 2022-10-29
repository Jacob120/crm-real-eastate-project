import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import { addOwnerRequest } from '../../../redux/ownersReducer';
import { useAppDispatch } from '../../../redux/hooks';

const AddOwnerDialog = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [personalData, setPersonalData] = useState('');
  const [forwardingAddress, setForwardingAddress] = useState('');
  const [dataToInvoice, setDataToInvoice] = useState('');
  const [apartmentAddress, setApartmentAddress] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    dispatch(
      addOwnerRequest({
        personalData,
        forwardingAddress,
        dataToInvoice,
        apartmentAddress,
      })
    );
  };

  return (
    <div>
      <Button variant='outlined' onClick={handleClickOpen}>
        Dodaj właściciela
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Wypełnij formularz</DialogTitle>
        <DialogContent>
          <TextField
            required
            id='outlined-required'
            label='Imię i nazwisko'
            margin='normal'
            type='text'
            fullWidth
            onChange={(e) => setPersonalData(e.target.value)}
          />
          <TextField
            required
            id='outlined-required'
            label='Adres do korespondencji'
            margin='normal'
            type='text'
            fullWidth
            onChange={(e) => setForwardingAddress(e.target.value)}
          />
          <TextField
            required
            id='outlined-required'
            label='Dane do faktur'
            margin='normal'
            type='text'
            fullWidth
            onChange={(e) => setDataToInvoice(e.target.value)}
          />
          <TextField
            required
            id='outlined-required'
            label='Adres lokalu'
            margin='normal'
            type='text'
            fullWidth
            onChange={(e) => setApartmentAddress(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Anuluj</Button>
          <Button onClick={handleSubmit}>Dodaj</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddOwnerDialog;
