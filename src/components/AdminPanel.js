import React from 'react';
import AdminForm from './AdminForm';
import {Grid,Container,} from '@mui/material';
import { SnackbarProvider } from 'notistack';

const AdminPanel = () => {

  return (

    <Container maxWidth="md">
        <Grid item xs={12}>
          <h1>Aggiungi Dettagli ad una regola</h1>
        </Grid>
        <SnackbarProvider maxSnack={3}>
          <AdminForm />
        </SnackbarProvider>
    </Container>
  );
};

export default AdminPanel;