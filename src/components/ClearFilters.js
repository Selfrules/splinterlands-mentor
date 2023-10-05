import React from 'react';
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';

const ClearFilters = ({
  setSelectedColors,
  setSelectedAttackType,
  setSelectedAbilities,
  setSelectedRules,
}) => {
  const clearFilters = () => {
    setSelectedColors([]);
    setSelectedAttackType('');
    setSelectedAbilities([]);
    setSelectedRules([]);
  };

  return (
    <Button
      variant="text"
      color="primary"
      size="small"
      onClick={clearFilters}
      startIcon={<CancelIcon />}
    >
      Clear
    </Button>
  );
};

export default ClearFilters;