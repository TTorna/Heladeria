import { Flavor } from '../types';

export const flavors: Record<string, Flavor[]> = {
  'DULCE DE LECHE': [
    { name: 'Cheese Cake de dulce de leche', category: 'DULCE DE LECHE', tags: ['Sin TACC', 'Dulce de leche'] },
    { name: 'Dulce de leche', category: 'DULCE DE LECHE', tags: ['Sin TACC', 'Dulce de leche'] },
    { name: 'Dulce de leche Bailoche', category: 'DULCE DE LECHE', tags: ['Sin TACC', 'Dulce de leche'] },
    { name: 'Dulce de leche Bombón', category: 'DULCE DE LECHE', tags: ['Sin TACC', 'Dulce de leche'] },
    { name: 'Dulce de leche con Brownie', category: 'DULCE DE LECHE', tags: ['Dulce de leche'] },
    { name: 'Dulce de leche Granizado', category: 'DULCE DE LECHE', tags: ['Dulce de leche'] },
    { name: 'Super Dulce de leche', category: 'DULCE DE LECHE', tags: ['Sin TACC', 'Dulce de leche'], isRecommended: true },
  ],
  'CHOCOLATES': [
    { name: 'Alfajor de chocolate', category: 'CHOCOLATES', tags: ['Sin TACC', 'Chocolates', 'Golosinas'] },
    { name: 'Bombón suizo', category: 'CHOCOLATES', tags: ['Sin TACC', 'Chocolates', 'Con alcohol'] },
    { name: 'Chocolate', category: 'CHOCOLATES', tags: ['Sin TACC', 'Chocolates'] },
    { name: 'Chocolate amargo belga', category: 'CHOCOLATES', tags: ['Sin TACC', 'Chocolates'], isRecommended: true },
    { name: 'Chocolate blanco', category: 'CHOCOLATES', tags: ['Sin TACC', 'Chocolates'] },
    { name: 'Chocolate con almendras', category: 'CHOCOLATES', tags: ['Sin TACC', 'Chocolates'] },
    { name: 'Chocolate Daniel', category: 'CHOCOLATES', tags: ['Sin TACC', 'Chocolates'], isRecommended: true },
    { name: 'Chocolate goloso', category: 'CHOCOLATES', tags: ['Sin TACC', 'Chocolates'], isRecommended: true },
    { name: 'Chocolate Patagónico', category: 'CHOCOLATES', tags: ['Sin TACC', 'Chocolates'] },
  ],
  'CREMAS': [
    { name: 'Almendrado', category: 'CREMAS', tags: ['Sin TACC', 'Cremas'] },
    { name: 'Americana', category: 'CREMAS', tags: ['Sin TACC', 'Cremas'] },
    { name: 'Avellana chocolate', category: 'CREMAS', tags: ['Sin TACC', 'Chocolates', 'Cremas'], isRecommended: true },
    { name: 'Banana Split', category: 'CREMAS', tags: ['Sin TACC', 'Cremas', 'Fruta a la crema'] },
    { name: 'Capuchino al caramelo', category: 'CREMAS', tags: ['Sin TACC', 'Cremas'] },
    { name: 'Cereza a la crema', category: 'CREMAS', tags: ['Sin TACC', 'Cremas'] },
    { name: 'Cheese cream', category: 'CREMAS', tags: ['Sin TACC', 'Cremas'] },
    { name: 'Crema Rock', category: 'CREMAS', tags: ['Cremas'], isNew: true },
  ],
  'FRUTALES': [
    { name: 'Damasco', category: 'FRUTALES', tags: ['Sin TACC', 'Fruta al agua'], isNew: true },
    { name: 'Frambuesa', category: 'FRUTALES', tags: ['Sin TACC', 'Vegano', 'Fruta al agua'] },
    { name: 'Kiwi & frutilla', category: 'FRUTALES', tags: ['Sin TACC', 'Vegano', 'Fruta al agua'], isRecommended: true },
    { name: 'Limón', category: 'FRUTALES', tags: ['Sin TACC', 'Vegano', 'Fruta al agua'] },
    { name: 'Mandarina & pomelo', category: 'FRUTALES', tags: ['Vegano', 'Fruta al agua'] },
    { name: 'Tropical 14', category: 'FRUTALES', tags: ['Vegano', 'Fruta al agua'], isNew: true, isRecommended: true },
  ],
};