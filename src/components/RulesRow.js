import React from 'react';
import { TableCell, TableRow, Box, Avatar, Tooltip, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { Edit } from '@mui/icons-material';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  cursor: 'pointer',
}));

function RuleRow({ rule, onEditClick }) {
  const getRuleIconUrl = (ruleName) => {
    const basePath = 'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_';
    const ruleNameFormatted = ruleName.toLowerCase().replace(/ /g, '-');
    return `${basePath}${ruleNameFormatted}_150.png`;
  };

  const getAbilityIconUrl = (abilityName) => {
    const iconName = abilityName.toLowerCase().replace(/ /g, '-');
    return `https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_${iconName}.png`;
  };

  return (
    <StyledTableRow>
      <TableCell>
        <Box display="flex" flexWrap="wrap">
          <Avatar alt={rule.name} src={getRuleIconUrl(rule.name)} style={{ marginRight: 8 }} />
          {rule.name}
        </Box>
      </TableCell>
      <TableCell>
        <Box display="flex" flexWrap="wrap">
          {rule.abilitiesToUse.map((ability) => (
            <Tooltip key={ability} title={ability}>
              <Avatar
                alt={ability}
                src={getAbilityIconUrl(ability)}
                style={{ marginRight: 4, marginBottom: 4 }}
              />
            </Tooltip>
          ))}
        </Box>
      </TableCell>
      <TableCell>
        <Box display="flex" flexWrap="wrap">
          {rule.abilitiesNotToUse.map((ability) => (
            <Tooltip key={ability} title={ability}>
              <Avatar
                alt={ability}
                src={getAbilityIconUrl(ability)}
                style={{ marginRight: 4, marginBottom: 4 }}
              />
            </Tooltip>
          ))}
        </Box>
      </TableCell>
      <TableCell>
        {rule.suggestions.map((suggestion, idx) => {
          if (suggestion.trim() !== '') {
            return (
              <div key={idx}>
                {suggestion.trim()}
                    {idx < rule.suggestions.length - 1 && '.'}
            </div>
            );
        }
        return null;
        })}
    </TableCell>
    <TableCell>
        <IconButton onClick={onEditClick}>
        <Edit />
        </IconButton>
    </TableCell>
    </StyledTableRow>
);
}

export default RuleRow;