const products = [
  { id: 1, name: "Kayak", category: "Sports nautiques", description: "Un bateau pour une personne", price: 275 },
  { id: 2, name: "Gilet de sauvetage", category: "Sports nautiques", description: "Protecteur et à la mode", price: 48.95 },
  { id: 3, name: "Ballon de football", category: "Sports de ballon", description: "Taille et poids approuvés par la FIFA", price: 19.50 },
  { id: 4, name: "Raquette de tennis", category: "Sports de raquette", description: "Confortable et durable", price: 120 },
  { id: 5, name: "Vélo de montagne", category: "Cyclisme", description: "Robuste et fiable", price: 999 },
  { id: 6, name: "Bâton de hockey", category: "Sports de glace", description: "Léger et solide", price: 89.99 },
  { id: 7, name: "Ballon de basket", category: "Sports de ballon", description: "Conforme aux normes de la NBA", price: 29.95 },
  { id: 8, name: "Tapis de yoga", category: "Fitness", description: "Antidérapant et écologique", price: 45 },
  { id: 9, name: "Chaussures de course", category: "Course à pied", description: "Confortables et respirantes", price: 150 },
  { id: 10, name: "Gants de boxe", category: "Sports de combat", description: "Rembourrage de haute qualité", price: 65 },
  { id: 11, name: "Casque de ski", category: "Sports de glace", description: "Sécuritaire et confortable", price: 110 },
  { id: 12, name: "Planche de surf", category: "Sports nautiques", description: "Haute performance", price: 400 },
  { id: 13, name: "Corde à sauter", category: "Fitness", description: "Idéale pour l'entraînement cardio", price: 12 },
  { id: 14, name: "Haltères", category: "Fitness", description: "Poids ajustables", price: 80 },
  { id: 15, name: "Maillot de bain", category: "Sports nautiques", description: "Résistant au chlore", price: 40 },
  { id: 16, name: "Chaussures de football", category: "Sports de ballon", description: "Adhérence optimale", price: 200 },
  { id: 17, name: "Raquette de badminton", category: "Sports de raquette", description: "Légère et maniable", price: 50 },
  { id: 18, name: "Arc", category: "Sports de précision", description: "Précis et fiable", price: 175 },
  { id: 19, name: "Pagaie", category: "Sports nautiques", description: "Conçue pour la vitesse", price: 95 },
  { id: 20, name: "Ballon de rugby", category: "Sports de ballon", description: "Conforme aux normes internationales", price: 25 },
  { id: 21, name: "Casque de vélo", category: "Cyclisme", description: "Aéré et sécuritaire", price: 60 },
  { id: 22, name: "Chaussures de golf", category: "Sports de précision", description: "Stables et imperméables", price: 130 },
  { id: 23, name: "Sac de sport", category: "Fitness", description: "Spacieux et durable", price: 55 },
  { id: 24, name: "Crampons d'escalade", category: "Sports d'aventure", description: "Adhérence maximale", price: 100 },
  { id: 25, name: "Masque de plongée", category: "Sports nautiques", description: "Champ de vision large", price: 70 },
  { id: 26, name: "Balle de ping-pong", category: "Sports de raquette", description: "Approuvée par l'ITTF", price: 5 },
  { id: 27, name: "Selle de cheval", category: "Sports d'aventure", description: "Confortable pour le cavalier et le cheval", price: 250 },
  { id: 28, name: "Protège-tibias", category: "Sports de ballon", description: "Protection maximale", price: 20 },
  { id: 29, name: "Chaussures de randonnée", category: "Sports d'aventure", description: "Imperméables et durables", price: 160 },
  { id: 30, name: "Bâtons de ski", category: "Sports de glace", description: "Légers et résistants", price: 45 }
];


module.exports = function () {
  return {
      products: products,
      orders: []
  }
}
