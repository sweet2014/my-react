import React from 'react';
import CollapsibleSection from './CollapsibleSection';

function ClothingCategories() {
  const clothingData = {
    sweaters: [
      'Wool Turtleneck Sweater',
      'Cashmere Pullover',
      'Cable Knit Cardigan',
      'V-Neck Sweater',
      'Hooded Sweater'
    ],
    summerWear: [
      'Cotton T-Shirts',
      'Linen Shorts',
      'Sundresses',
      'Tank Tops',
      'Beach Cover-ups'
    ],
    winterWear: [
      'Puffer Jackets',
      'Thermal Underwear',
      'Wool Coats',
      'Fleece Hoodies',
      'Winter Boots'
    ],
    accessories: [
      'Scarves',
      'Gloves',
      'Hats',
      'Belts',
      'Sunglasses'
    ]
  };

  return (
    <div className="clothing-categories">
      <h2>Clothing Categories</h2>
      <CollapsibleSection title="Sweaters" items={clothingData.sweaters} />
      <CollapsibleSection title="Summer Wear" items={clothingData.summerWear} />
      <CollapsibleSection title="Winter Wear" items={clothingData.winterWear} />
      <CollapsibleSection title="Accessories" items={clothingData.accessories} />
    </div>
  );
}

export default ClothingCategories;
