import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { TextField, Box, Avatar, ListItemText } from '@mui/material';

const rules = [
    'Aim True',
    'Aimless',
    'Are You Not Entertained?',
    'Armored Up',
    'Back to Basics',
    'Briar Patch',
    'Broken Arrows',
    'Close Range',
    'Counterspell',
    'Earthquake',
    'Equalizer',
    'Equal Opportunity',
    'Even Stevens',
    'Explosive Weaponry',
    'Fire & Regret',
    'Fog of War',
    'Ferocity',
    'Going the Distance',
    'Healed Out',
    'Heavy Hitters',
    'Holy Protection',
    'Keep Your Distance',
    'Little League',
    'Lost Legendaries',
    'Lost Magic',
    'Melee Mayhem',
    'Noxious Fumes',
    'Odd Ones Out',
    'Reverse Speed',
    'Rise of the Commons',
    'Silenced Summoners',
    'Standard',
    'Wands Out',
    'What Doesn\'t Kill You',
    'Stampede',
    'Super Sneak',
    'Taking Sides',
    'Target Practice',
    'Unprotected',
    'Up Close and Personal',
    'Up to Eleven',
    'Weak Magic',
  ];
  

const getRuleIconUrl = (ruleName) => {
  const basePath = 'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_';
  const ruleNameFormatted = ruleName.toLowerCase().replace(/ /g, '-');
  return `${basePath}${ruleNameFormatted}_150.png`;
};

const RulesSelector = ({ selectedRules, setSelectedRules }) => {
    return (
      <Box mt={2} width="80%">
        <Autocomplete
          multiple
          limitTags={3}
          options={rules}
          value={selectedRules}
          onChange={(event, newValue) => {
            setSelectedRules(newValue);
          }}
          getOptionDisabled={(option) =>
            selectedRules.length >= 3 && !selectedRules.includes(option)
          }
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Avatar
                alt={option}
                src={getRuleIconUrl(option)}
                style={{ marginRight: 8 }} // Aggiungi spazio tra l'icona e il nome della regola
              />
              <ListItemText primary={option} />
            </li>
          )}
          renderInput={(params) => (
            <TextField {...params} label="Select Rules" placeholder="Rules" />
          )}
        />
      </Box>
    );
  };

export default RulesSelector;
