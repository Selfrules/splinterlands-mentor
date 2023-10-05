import React, { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Typography,
  Grid,
  Container,
} from '@mui/material';
import AbilitiesSelector from './AbilitiesSelector';
import RulesSelector from './RulesSelector';
import axios from 'axios';
import { useSnackbar } from 'notistack';

function AdminForm() {
  const [ruleName, setRuleName] = useState(null);
  const [description, setDescription] = useState('');
  const [abilitiesToUse, setAbilitiesToUse] = useState([]);
  const [abilitiesNotToUse, setAbilitiesNotToUse] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/rules', {
        name: ruleName,
        description,
        abilitiesToUse,
        abilitiesNotToUse,
        suggestions,
      });
      enqueueSnackbar('Regola salvata con successo', { variant: 'success' });
      setRuleName(null);
      setDescription('');
      setAbilitiesToUse([]);
      setAbilitiesNotToUse([]);
      setSuggestions('');
    } catch (error) {
      enqueueSnackbar('Errore nel salvataggio della regola', { variant: 'error' });
      console.error('Error saving rule:', error);
    }
  };

  return (
    <Container maxWidth="md">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6">Nome Regola</Typography>
            <RulesSelector
              selectedRules={ruleName ? [ruleName] : []}
              setSelectedRules={(rules) => setRuleName(rules[0])}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Descrizione</Typography>
            <TextField
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Abilità da usare</Typography>
            <AbilitiesSelector
              selectedAbilities={abilitiesToUse}
              setSelectedAbilities={setAbilitiesToUse}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Abilità da non usare</Typography>
            <AbilitiesSelector
              selectedAbilities={abilitiesNotToUse}
              setSelectedAbilities={setAbilitiesNotToUse}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Suggerimenti</Typography>
            <TextField
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              value={suggestions}
              onChange={(e) => setSuggestions(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Box mt={2}>
              <Button variant="contained" color="primary" type="submit">
                Salva
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default AdminForm;
