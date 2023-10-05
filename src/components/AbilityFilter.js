import React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

const AbilityFilter = ({ selectedAbility, setSelectedAbility }) => {
  const abilities = [
    'Affliction',
    'Amplify',
    'Backfire',
    'Blast',
    'Blind',
    'Bloodlust',
    'Camouflage',
    'Cleanse',
    'Close Range',
    'Conscript',
    'Cripple',
    'Deathblow',
    'Demoralize',
    'Dispel',
    'Divine Shield',
    'Dodge',
    'Double Strike',
    'Enrage',
    'Flying',
    'Forcefield',
    'Fury',
    'Giant Killer',
    'Halving',
    'Headwinds',
    'Heal',
    'Immunity',
    'Inspire',
    'Knock Out',
    'Last Stand',
    'Life Leech',
    'Magic Reflect',
    'Martyr',
    'Opportunity',
    'Oppress',
    'Phase',
    'Piercing',
    'Poison',
    'Protect',
    'Reach',
    'Rebirth',
    'Recharge',
    'Redemption',
    'Reflection Shield',
    'Repair',
    'Resurrect',
    'Retaliate',
    'Return Fire',
    'Rust',
    'Scattershot',
    'Scavenger',
    'Shatter',
    'Shield',
    'Silence',
    'Slow',
    'Snare',
    'Sneak',
    'Snipe',
    'Strengthen',
    'Stun',
    'Swiftness',
    'Tank Heal',
    'Taunt',
    'Thorns',
    'Trample',
    'Triage',
    'True Strike',
    'Void',
    'Void Armor',
    'Weaken',
    'Weapons Training',
  ];

  const getAbilityIconUrl = (abilityName) => {
    const iconName = abilityName.toLowerCase().replace(/ /g, '-');
    return `https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_${iconName}.png`;
  };

  const handleAbilityClick = (abilityName) => {
    if (selectedAbility.includes(abilityName)) {
      setSelectedAbility(selectedAbility.filter((ability) => ability !== abilityName));
    } else {
      setSelectedAbility([...selectedAbility, abilityName]);
    }
  };

  return (
    <Box
      className="ability-filter-container"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '5px',
        border: '1px solid #ccc',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
        borderRadius: '4px',
        marginLeft: '8px',
        maxWidth: '450px',
      }}
    >
      {abilities.map((ability) => (
        <IconButton
          key={ability}
          onClick={() => handleAbilityClick(ability)}
          sx={{
            width: '24px',
            height: '24px',
            padding: 0,
            margin: '4px',
            opacity: selectedAbility === ability ? 1 : 0.5,
          }}
        >
          <img src={getAbilityIconUrl(ability)} alt={ability} style={{ width: '100%', height: '100%' }} />
        </IconButton>
      ))}
    </Box>
  );
};

export default AbilityFilter;