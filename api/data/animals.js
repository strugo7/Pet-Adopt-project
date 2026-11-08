// Static data for the assignment. shelterId will become a Foreign Key to shelters.id in MySQL.
const animals = [
  { id: 1, name: 'לוקי', species: 'כלב', breed: 'מעורב', ageYears: 3, gender: 'זכר', size: 'בינוני', status: 'available', shelterId: 1, featured: true },
  { id: 2, name: 'מיצי', species: 'חתול', breed: 'חתול רחוב', ageYears: 1, gender: 'נקבה', size: 'קטן', status: 'available', shelterId: 1, featured: false },
  { id: 3, name: 'רקס', species: 'כלב', breed: 'רועה גרמני', ageYears: 5, gender: 'זכר', size: 'גדול', status: 'available', shelterId: 2, featured: true },
  { id: 4, name: 'נלה', species: 'כלב', breed: 'לברדור', ageYears: 2, gender: 'נקבה', size: 'גדול', status: 'adopted', shelterId: 2, featured: false },
  { id: 5, name: 'שחור', species: 'חתול', breed: 'מעורב', ageYears: 4, gender: 'זכר', size: 'קטן', status: 'available', shelterId: 3, featured: true },
  { id: 6, name: 'פלפל', species: 'ארנב', breed: 'ננסי', ageYears: 1, gender: 'נקבה', size: 'קטן', status: 'available', shelterId: 3, featured: false }
];

module.exports = animals;
