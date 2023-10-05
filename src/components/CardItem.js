import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';


const StyledCard = styled(Card)({
  display: 'inline-block',
  margin: '0.2rem',
  textAlign: 'center',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: '0.3s',
  overflow: 'hidden',
  '&:hover': {
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
  },
  padding: '0.25rem',
});

const StyledCardContent = styled(CardContent)({
  padding: 0,
  '&:last-child': {
    paddingBottom: 0,
  },
});

const CardImage = styled('img')({
  width: '100%',
  height: 'auto',
  objectFit: 'contain',
});

const getImageUrl = (card) => {
  const edition = card.editions;
  const rarity = card.rarity;
  const basePath = 'https://d36mxiodymuqjm.cloudfront.net/cards_by_level';
  let editionPath = '';

  switch (edition) {
    case '10':
      editionPath = '/soulbound/';
      break;
    case '8':
      editionPath = '/rift/';
      break;
    case '7':
      editionPath = '/chaos/';
      break;
    case '6':
      editionPath = '/gladius/';
      break;
    case '3':
      editionPath = '/reward/';
      break;
    case '2':
      editionPath = '/promo/';
      break;
    default:
      editionPath = '/soulbound/';
  }

  let maxLevel;
  switch (rarity) {
    case 4:
      maxLevel = 4;
      break;
    case 3:
      maxLevel = 6;
      break;
    case 2:
      maxLevel = 8;
      break;
    case 1:
      maxLevel = 10;
      break;
    default:
      maxLevel = 1;
  }

  const cardNameEncoded = encodeURIComponent(card.name.replace(/ /g, ' '));
  const imageUrl = `${basePath}${editionPath}${cardNameEncoded}_lv${maxLevel}.png`;

  return imageUrl;
};


const CardItem = ({ card }) => {
  const imageUrl = getImageUrl(card);

  return (
    <StyledCard>
      <StyledCardContent>
          <CardImage className="card-image" src={imageUrl} alt={card.name} />
      </StyledCardContent>
    </StyledCard>
  );
};

export default CardItem;
