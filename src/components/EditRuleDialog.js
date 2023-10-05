import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@mui/material';

function EditRuleDialog({ open, rule, onSaveChanges, onClose }) {
  const [editedRule, setEditedRule] = React.useState({});

  React.useEffect(() => {
    setEditedRule(rule);
  }, [rule]);

  const handleChange = (field, value) => {
    setEditedRule({ ...editedRule, [field]: value });
  };

  const handleSave = () => {
    onSaveChanges(editedRule._id, editedRule);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Modifica regola</DialogTitle>
      <DialogContent>
        <TextField
          label="Nome"
          value={editedRule?.name || ''}
          InputProps={{
            readOnly: true,
          }}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Abilità da usare"
          value={editedRule?.abilitiesToUse?.join(', ') || ''}
          onChange={(e) =>
            handleChange(
              'abilitiesToUse',
              e.target.value.split(',').map((ability) => ability.trim()),
            )
          }
          fullWidth
          margin="normal"
        />
        <TextField
          label="Abilità da non usare"
          value={editedRule?.abilitiesNotToUse?.join(', ') || ''}
          onChange={(e) =>
            handleChange(
              'abilitiesNotToUse',
              e.target.value.split(',').map((ability) => ability.trim()),
            )
          }
          fullWidth
          margin="normal"
        />
        <TextField
          label="Suggerimenti"
          value={editedRule?.suggestions?.join('. ') || ''}
          onChange={(e) =>
            handleChange(
              'suggestions',
              e.target.value.split('.').map((suggestion) => suggestion.trim()),
            )
          }
          fullWidth
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Annulla</Button>
        <Button onClick={handleSave} color="primary">Salva</Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditRuleDialog;