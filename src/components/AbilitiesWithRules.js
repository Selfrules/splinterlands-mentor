import React, { useState, useEffect } from 'react';
import { Box, Avatar, Typography, Button, Grid  } from '@mui/material';
import abilitiesData from '../data/abilities.json';

const AbilitiesWithRules = ({ selectedRules, selectedAbilities, setSelectedAbilities }) => {
  const [positiveAbilities, setPositiveAbilities] = useState([]);
  const [negativeAbilities, setNegativeAbilities] = useState([]);

  useEffect(() => {
    const findAbilities = () => {
      let posAbilities = [];
      let negAbilities = [];

      abilitiesData.forEach((ability) => {
        selectedRules.forEach((rule) => {
          if (ability['Regole Positive'].includes(rule) && !posAbilities.includes(ability)) {
            posAbilities.push(ability);
          }
          if (ability['Regole Negative'].includes(rule) && !negAbilities.includes(ability)) {
            negAbilities.push(ability);
          }
        });
      });

      // Rimuovere le regole negative dalle regole positive
      //posAbilities = posAbilities.filter((posAbility) => !negAbilities.includes(posAbility));

      setPositiveAbilities(posAbilities);
      setNegativeAbilities(negAbilities);
    };

    findAbilities();
  }, [selectedRules]);

  const getAbilityIconUrl = (abilityName) => {
    const iconName = abilityName.toLowerCase().replace(/ /g, '-');
    return `https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_${iconName}.png`;
  };

  const handleFilterButtonClick = () => {
    setSelectedAbilities(positiveAbilities.map((ability) => ability.Abilita));
  };

  return (
    <Box sx={{ paddingLeft: '20px' }}>
      <Grid container justifyContent="center">
        <Grid item>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Abilità Da Usare
          </Typography>
          <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
            {positiveAbilities.map((ability, index) => (
              <Avatar
                key={index}
                alt={ability.Abilita}
                src={getAbilityIconUrl(ability.Abilita)}
                sx={{ m: 1 }}
              />
            ))}
          </Box>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Abilità da non usare
          </Typography>
          <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
            {negativeAbilities.map((ability, index) => (
              <Avatar
                key={index}
                alt={ability.Abilita}
                src={getAbilityIconUrl(ability.Abilita)}
                sx={{ m: 1 }}
              />
            ))}
          </Box>
          <Box sx={{ mt: 2, textAlign: 'center' }}>
            <Button variant="contained" color="primary" onClick={handleFilterButtonClick}>
              Applica Abilità
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default AbilitiesWithRules;
