import axios from 'axios';

export const fetchPlayerCards = async (playerName) => {
  try {
    const response = await axios.get(`https://game-api.splinterlands.com/cards/collection/${playerName}`);

    if (response.status === 200) {
      return response.data;
    } else {
      console.error('Error fetching player cards, status code:', response.status);
      return [];
    }
  } catch (error) {
    console.error('Error fetching player cards:', error);
    return [];
  }
};

export const fetchCardsData = async () => {
  try {
    const response = await axios.get('https://game-api.splinterlands.com/cards/get_details');

    if (response.status === 200) {
      return response.data;
    } else {
      console.error('Error fetching cards, status code:', response.status);
      return [];
    }
  } catch (error) {
    console.error('Error fetching cards:', error);
    return [];
  }
};

const getCardImagePath = (edition, rarity, name) => {
  const basePath = "https://d36mxiodymuqjm.cloudfront.net/cards_by_level";
  const encodedName = encodeURIComponent(name.replace(/ /g, '%20'));

  const editionMapping = {
    "10": "soulbound",
    "8": "rift",
    "7": "chaos",
    "6": "gladius",
    "2": "promo",
  };

  const rarityMapping = {
    "4": "4",
    "3": "6",
    "2": "8",
    "1": "10",
  };

  const editionPath = editionMapping[edition];
  const maxLevel = rarityMapping[rarity];

  return `${basePath}/${editionPath}/${encodedName}_lv${maxLevel}.png`;
};

export const fetchPlayerCardDetails = async (playerName) => {
  const allCards = await fetchCardsData();
  const playerCardsData = await fetchPlayerCards(playerName);
  const playerCards = playerCardsData.cards;
  const playerCardIds = playerCards.map((card) => card.card_detail_id);
  
  const filteredCards = allCards.filter((card) => playerCardIds.includes(card.id));

  return filteredCards.map((card) => ({
    ...card,
    imagePath: getCardImagePath(card.editions, card.rarity, card.name),
  }));
};
