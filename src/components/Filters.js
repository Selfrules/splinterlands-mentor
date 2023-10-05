import React from 'react';
import ColorFilter from './ColorFilter';
import AttackTypeFilter from './AttackTypeFilter';
import AbilityFilter from './AbilityFilter';
import ClearFilters from './ClearFilters';
import RulesSelector from './RulesSelector';
import { Box } from '@mui/material';

const Filters = ({
    selectedColors,
    setSelectedColors,
    selectedAttackType,
    setSelectedAttackType,
    selectedAbilities, 
    setSelectedAbilities,
    selectedRules,
    setSelectedRules,
  }) => {

  return (
    <Box display="flex" flexDirection="row" justifyContent="flex-start" alignItems="flex-start" width="100%">
      <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-start" width="70%">
        <Box display="flex" justifyContent="flex-start" alignItems="center" mb={2}>
          <ColorFilter selectedColors={selectedColors} setSelectedColors={setSelectedColors} />
          <AttackTypeFilter selectedAttackType={selectedAttackType} setSelectedAttackType={setSelectedAttackType} />
          <ClearFilters setSelectedColors={setSelectedColors} setSelectedAttackType={setSelectedAttackType} setSelectedAbilities={setSelectedAbilities} setSelectedRules={setSelectedRules}/>
        </Box>
        <Box display="flex" justifyContent="flex-start" alignItems="center" mb={2}>
        <AbilityFilter
            selectedAbility={selectedAbilities}
            setSelectedAbility={setSelectedAbilities}
        />
        </Box>
      </Box>
      <Box display="flex" justifyContent="flex-start" alignItems="flex-start" width="30%">
        <RulesSelector selectedRules={selectedRules} setSelectedRules={setSelectedRules} />
      </Box>
    </Box>
  );
};

export default Filters;
