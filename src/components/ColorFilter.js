import React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

const ColorFilter = ({ selectedColors, setSelectedColors }) => {
  const colors = [
    { key: 'Red', icon: 'https://d36mxiodymuqjm.cloudfront.net/website/ui_elements/icon_splinter_fire.svg' },
    { key: 'Blue', icon: 'https://d36mxiodymuqjm.cloudfront.net/website/ui_elements/icon_splinter_water.svg' },
    { key: 'Green', icon: 'https://d36mxiodymuqjm.cloudfront.net/website/ui_elements/icon_splinter_earth.svg' },
    { key: 'White', icon: 'https://d36mxiodymuqjm.cloudfront.net/website/ui_elements/icon_splinter_life.svg' },
    { key: 'Black', icon: 'https://d36mxiodymuqjm.cloudfront.net/website/ui_elements/icon_splinter_death.svg' },
    { key: 'Gold', icon: 'https://d36mxiodymuqjm.cloudfront.net/website/ui_elements/icon_splinter_dragon.svg' },
    { key: 'Gray', icon: 'https://d36mxiodymuqjm.cloudfront.net/website/icons/icon-element-neutral-2.svg' },
  ];

  const handleColorClick = (colorKey) => {
    if (selectedColors.includes(colorKey)) {
      setSelectedColors(selectedColors.filter((color) => color !== colorKey));
    } else {
      setSelectedColors([...selectedColors, colorKey]);
    }
  };


  return (
    <Box
      className="color-filter-container"
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
      {colors.map((color) => (
  <IconButton
  key={color.key}
  onClick={() => handleColorClick(color.key)}
  sx={{
    width: '24px', // Riduci la larghezza
    height: '24px', // Riduci l'altezza
    padding: 0,
    opacity: selectedColors.includes(color.key) ? 1 : 0.5,
  }}
>
  <img src={color.icon} alt={color.key} style={{ width: '100%', height: '100%' }} /> {/* Aggiungi style per adattare l'icona */}
</IconButton>
))}
    </Box>
  );
};

const colorIcons = {
  Red: 'https://d36mxiodymuqjm.cloudfront.net/website/ui_elements/icon_splinter_fire.svg',
  Blue: 'https://d36mxiodymuqjm.cloudfront.net/website/ui_elements/icon_splinter_water.svg',
  Green: 'https://d36mxiodymuqjm.cloudfront.net/website/ui_elements/icon_splinter_earth.svg',
  White: 'https://d36mxiodymuqjm.cloudfront.net/website/ui_elements/icon_splinter_life.svg',
  Black: 'https://d36mxiodymuqjm.cloudfront.net/website/ui_elements/icon_splinter_death.svg',
  Gold: 'https://d36mxiodymuqjm.cloudfront.net/website/ui_elements/icon_splinter_dragon.svg',
  Gray: 'https://d36mxiodymuqjm.cloudfront.net/website/icons/icon-element-neutral-2.svg',
};

export { colorIcons };
export default ColorFilter;
