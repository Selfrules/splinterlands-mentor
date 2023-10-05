import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCards } from './store/actions';
import CardList from './components/CardList';
import Filters from './components/Filters';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import AbilitiesWithRules from './components/AbilitiesWithRules';
import { Routes, Route } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';
import AppMenu from './components/AppMenu';
import RulesPage from './components/RulesPage';


const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f44336',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  const dispatch = useDispatch();

  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedAttackType, setSelectedAttackType] = useState('');
  const [selectedAbilities, setSelectedAbilities] = useState([]);
  const [selectedRules, setSelectedRules] = useState([]);

  useEffect(() => {
    dispatch(fetchCards('selfrules'));
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Box display="flex" justifyContent="space-between" width="100%">
            <Typography variant="h6" className="app-title">
              Cards
            </Typography>
          </Box>
          <AppMenu />
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/" element={
          <>
            <Box mt={2} mb={2}>
              <Filters
                selectedColors={selectedColors}
                setSelectedColors={setSelectedColors}
                selectedAttackType={selectedAttackType}
                setSelectedAttackType={setSelectedAttackType}
                selectedAbilities={selectedAbilities}
                setSelectedAbilities={setSelectedAbilities}
                selectedRules={selectedRules}
                setSelectedRules={setSelectedRules}
              />
            </Box>
            <Grid container>
              <Grid item xs={12} md={7}>
                <CardList
                  selectedColors={selectedColors}
                  selectedAttackType={selectedAttackType}
                  selectedAbilities={selectedAbilities}
                />
              </Grid>
              <Grid item xs={12} md={5}>
                <AbilitiesWithRules
                  selectedRules={selectedRules}
                  selectedAbilities={selectedAbilities}
                  setSelectedAbilities={setSelectedAbilities}
                />
              </Grid>
            </Grid>
          </>
        } />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
