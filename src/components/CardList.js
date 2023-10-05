/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCards } from '../store/actions';
import CardItem from './CardItem';
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { colorIcons } from './ColorFilter';

const CardListContainer = styled(Grid)({
  marginTop: '0.2rem',
  marginBottom: '0.2rem',
  paddingLeft: '0.2rem',
  paddingRight: '0.2rem',
});

const CardList = ({ selectedColors, selectedAttackType, selectedAbility, selectedAbilities }) => {
  const cards = useSelector((state) => state.cards.cards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCards('selfrules'));
  }, [dispatch]);

  const getLastValue = (arr) => arr[arr.length - 1];

  const countCardsByElement = (cards) => {
    const counts = {
      Red: 0,
      Blue: 0,
      Green: 0,
      White: 0,
      Black: 0,
      Gold: 0,
      Gray: 0,
    };

    cards.forEach((card) => {
      counts[card.color]++;
    });

    return counts;
  };

  // Filtra le carte in base al colore, alla tipologia di attacco e all'abilità selezionati
  const filteredCards = cards.filter((card) => {
    const colorMatches = !selectedColors.length || selectedColors.includes(card.color);
    const abilityMatches = !selectedAbilities.length || (card.stats.abilities && selectedAbilities.some((ability) => card.stats.abilities.flat().includes(ability)));

    const attackTypeMatches =
      !selectedAttackType ||
      (selectedAttackType === 'Melee' && getLastValue(card.stats.attack) > 0) ||
      (selectedAttackType === 'Ranged' && getLastValue(card.stats.ranged) > 0) ||
      (selectedAttackType === 'Magic' && getLastValue(card.stats.magic) > 0) ||
      (selectedAttackType === 'No Attack' && (getLastValue(card.stats.attack) === 0 && getLastValue(card.stats.ranged) === 0 && getLastValue(card.stats.magic) === 0));

    return colorMatches && attackTypeMatches && abilityMatches;
  });

  const cardCounts = countCardsByElement(filteredCards);

  return (
    <Box>
      <Box display="flex" justifyContent="center" alignItems="center" sx={{ mt: 2 }}>
        {Object.entries(cardCounts).map(([element, count]) => (
          <Box key={element} display="flex" alignItems="center" sx={{ mx: 2 }}>
            <img src={colorIcons[element]} alt={element} width="24" height="24" />
            <Typography sx={{ ml: 1 }}>{count}</Typography>
          </Box>
        ))}
      </Box>
      <Grid container spacing={2}>
        {filteredCards.map((card) => (
          <Grid key={card.id} item xs={12} sm={6} md={4} lg={3}>
            <CardItem card={card} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardList;
