import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { styled } from '@mui/system';

import RuleRow from './RulesRow';

const StyledTable = styled(Table)(({ theme }) => ({
  minWidth: 650,
}));

function RulesTable({ rules, onEditClick }) {
  return (
    <TableContainer component={Paper}>
      <StyledTable aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell width="10%">Nome</TableCell>
            <TableCell width="20%">Abilità da usare</TableCell>
            <TableCell width="20%">Abilità da non usare</TableCell>
            <TableCell width="20%">Suggerimenti</TableCell>
            <TableCell width="5%">Modifica</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rules.map((rule) => (
            <RuleRow key={rule._id} rule={rule} onEditClick={() => onEditClick(rule)} />
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
}

export default RulesTable;