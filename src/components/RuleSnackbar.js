import React from 'react';
import { Snackbar, Alert } from '@mui/material';

function RuleSnackbar({ open, onClose }) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={onClose}
    >
      <Alert
        onClose={onClose}
        severity="success"
        sx={{ width: '100%' }}
      >
        Regola aggiornata con successo!
      </Alert>
    </Snackbar>
  );
}

export default RuleSnackbar;