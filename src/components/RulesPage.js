import React, { useState, useEffect } from 'react';
import { Container, Box, Typography } from '@mui/material';
import axios from 'axios';

import RulesTable from './RulesTable';
import EditRuleDialog from './EditRuleDialog';
import RuleSnackbar from './RuleSnackbar';

function RulesPage() {
  const [rules, setRules] = useState([]);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editedRule, setEditedRule] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    const fetchRules = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/rules');
        setRules(response.data);
      } catch (error) {
        console.error('Error fetching rules:', error);
      }
    };

    fetchRules();
  }, []);

  const handleEditClick = (rule) => {
    setEditedRule({ ...rule });
    setEditDialogOpen(true);
  };

  const handleSaveChanges = async (id, updatedRule) => {
    try {
      const response = await axios.put(`http://localhost:3001/api/rules/${id}`, updatedRule);
      if (response.status === 200) {
        setRules(rules.map((rule) => (rule._id === id ? response.data : rule)));
        setEditDialogOpen(false);
        setSnackbarOpen(true);
      } else {
        console.error('Error updating rule:', response);
      }
    } catch (error) {
      console.error('Error updating rule:', error);
    }
  };

  return (
    <Container maxWidth="xl">
      <Box mt={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Regole
        </Typography>
        <RulesTable rules={rules} onEditClick={handleEditClick} />
        <EditRuleDialog
          open={editDialogOpen}
          onClose={() => setEditDialogOpen(false)}
          rule={editedRule}
          onSaveChanges={handleSaveChanges}
        />
        <RuleSnackbar
          open={snackbarOpen}
          onClose={() => setSnackbarOpen(false)}
        />
      </Box>
    </Container>
  );
}

export default RulesPage;