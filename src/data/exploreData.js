export const popularPlaces = [
  {
    id: 1,
    category: 'Cultural',
    name: 'Gyeongbokgung Palace',
    thumbnail: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=150&h=150&fit=crop&q=80', // This was already updated, but I'm confirming it.
    description: 'A blend of history and royal grandeur.',
  },
  {
    id: 2,
    category: 'Nature',
    name: 'Namsan Park',
    thumbnail: 'https://images.unsplash.com/photo-1588650225053-a3b34a3b3244?w=150&h=150&fit=crop&q=80', // This was already updated, but I'm confirming it.
    description: 'Amazing views of Seoul city.',
  },
  {
    id: 3,
    category: 'Urban',
    name: 'Myeongdong Shopping Street',
    thumbnail: 'https://images.unsplash.com/photo-1570068481000-23522a114d42?w=150&h=150&fit=crop&q=80', // This was already updated, but I'm confirming it.
    description: 'Bustling district for shopping and street food.',
  },
  {
    id: 4,
    category: 'Cultural',
    name: 'Bukchon Hanok Village',
    thumbnail: 'https://images.unsplash.com/photo-1584338542929-2336a53b3469?w=150&h=150&fit=crop&q=80', // This was already updated, but I'm confirming it.
    description: 'Traditional Korean houses.',
  },
];

export const curatedPlaces = [
  { id: 1, name: 'Changdeokgung Palace', location: 'Seoul', tags: ['Historic sites', 'UNESCO'], image: 'https://images.unsplash.com/photo-1584338542929-2336a53b3469?w=100&h=100&fit=crop&q=80' },
  { id: 2, name: 'Jeonju Hanok Village', location: 'Jeonju', tags: ['Traditional neighborhood', 'Local market'], image: 'https://images.unsplash.com/photo-1558313494-280a4434449a?w=100&h=100&fit=crop&q=80' },
  { id: 3, name: 'Busan Gamcheon Culture Village', location: 'Busan', tags: ['Local art', 'Hidden gems'], image: 'https://images.unsplash.com/photo-1583833323344-2bde3343cf75?w=100&h=100&fit=crop&q=80' },
];

export const popularPlacesCategories = [...new Set(popularPlaces.map(place => place.category))];