import React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

const AttackTypeFilter = ({ selectedAttackType, setSelectedAttackType }) => {
  const attackTypes = [
    { name: 'Melee', icon: 'https://d36mxiodymuqjm.cloudfront.net/website/stats/melee-attack.png' },
    { name: 'Ranged', icon: 'https://d36mxiodymuqjm.cloudfront.net/website/stats/ranged-attack.png' },
    { name: 'Magic', icon: 'https://d36mxiodymuqjm.cloudfront.net/website/stats/magic-attack.png' },
    { name: 'No Attack', icon: 'https://d36mxiodymuqjm.cloudfront.net/website/icons/icon_close_default.svg' },
  ];

  const handleAttackTypeClick = (attackTypeName) => {
    if (selectedAttackType === attackTypeName) {
      setSelectedAttackType('');
    } else {
      setSelectedAttackType(attackTypeName);
    }
  };

  return (
    <Box
      className="attack-type-filter-container"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '5px',
        border: '1px solid #ccc',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
        borderRadius: '4px',
        marginLeft: '8px',
      }}
    >
      {attackTypes.map((attackType) => (
        <IconButton
          key={attackType.name}
          onClick={() => handleAttackTypeClick(attackType.name)}
          sx={{
            width: '24px',
            height: '24px',
            padding: 0,
            opacity: selectedAttackType === attackType.name ? 1 : 0.5,
          }}
        >
          <img src={attackType.icon} alt={attackType.name} style={{ width: '100%', height: '100%' }} />
        </IconButton>
      ))}
    </Box>
  );
};

export default AttackTypeFilter;
