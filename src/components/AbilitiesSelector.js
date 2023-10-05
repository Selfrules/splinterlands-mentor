import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { TextField, Box, Avatar, ListItemText } from '@mui/material';

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

const AbilitiesSelector = ({ selectedAbilities, setSelectedAbilities }) => {
  return (
    <Box mt={2} width="80%">
      <Autocomplete
        multiple
        options={abilities}
        value={selectedAbilities}
        onChange={(event, newValue) => {
          setSelectedAbilities(newValue);
        }}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Avatar
              alt={option}
              src={getAbilityIconUrl(option)}
              style={{ marginRight: 8 }}
            />
            <ListItemText primary={option} />
          </li>
        )}
        renderInput={(params) => (
          <TextField {...params} label="Select Abilities" placeholder="Abilities" />
        )}
      />
    </Box>
  );
};

export default AbilitiesSelector;
