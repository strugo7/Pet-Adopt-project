// Static data for the assignment. userId and animalId will become Foreign Keys in MySQL.
const adoptionRequests = [
  { id: 1, userId: 1, animalId: 1, status: 'pending', requestDate: '2026-11-01', message: 'אשמח לאמץ את לוקי' },
  { id: 2, userId: 2, animalId: 3, status: 'approved', requestDate: '2026-11-03', message: 'יש לי חצר גדולה' },
  { id: 3, userId: 3, animalId: 4, status: 'approved', requestDate: '2026-10-20', message: 'מחפשת כלבה לילדים' },
  { id: 4, userId: 1, animalId: 5, status: 'rejected', requestDate: '2026-11-05', message: 'מעוניינת בחתול' }
];

module.exports = adoptionRequests;
