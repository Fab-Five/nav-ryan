const data = [
  { 
    id: 1,
    name: 'Yogida',
    address: { 
      line1: '635 Bryon Ave', 
      line2: 'North Rose, AR 67243',
      milesAway: 9.3
    },
    phone: '631-998-3176',
    ratings: { 
      number: 413, 
      stars: 4.5, 
      good: 96, 
      timely: 88, 
      correct: 90 
    },
    schedule: {
      monFri: { delivery: '11:30am-9:00pm', pickup: '12:00pm-11:00pm' },
      satSun: { delivery: '10:00am-7:30pm', pickup: '10:00am-7:30pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/aluminous-749358_1280.jpg',
    priceRange: 2,
    categories: [ 'Korean', 'Lunch', 'Dinner', 'Salads' ] 
  },
  { 
    id: 2,
    name: 'Lee\'s Kitchen',
    address: { 
      line1: '1893 E Tanner St',
      line2: 'Wileyburgh, LA 53498',
      milesAway: 1.56
    },
    phone: '856-264-0286',
    ratings: { 
      number: 466, 
      stars: 5, 
      good: 99, 
      timely: 91, 
      correct: 97 
    },
    schedule: {
      monFri: { delivery: '11:00am-8:30pm', pickup: '10:30am-10:30pm' },
      satSun: { delivery: 'Closed', pickup: 'Closed' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/chicken-soup-1346310_1280.jpg',
    priceRange: 3,
    categories: [ 'Korean', 'Dinner', 'Soup', 'Salads' ] 
  },
  { 
    id: 3,
    name: 'Han Galbi',
    address: { 
      line1: '878 Christiansen Way',
      line2: 'West Una, HI 85904',
      milesAway: 2.02
    },
    phone: '808-720-0531',
    ratings: { 
      number: 425, 
      stars: 3.5, 
      good: 81, 
      timely: 87, 
      correct: 73 
    },
    schedule: {
      monFri: { delivery: '11:00am-7:30pm', pickup: '9:00am-11:00pm' },
      satSun: { delivery: '10:30am-7:30pm', pickup: '' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1503392968123-ceabe9e5e630.jpeg',
    priceRange: 3,
    categories: ['Korean', 'BBQ', 'Dinner'] 
  },
  { 
    id: 4,
    name: 'Heart & Seoul',
    address: { 
      line1: '4316 Romaguera Dr',
      line2: 'Vincent, NV 98700',
      milesAway: 0.56 
    },
    phone: '665-050-4105',
    ratings: { 
      number: 188, 
      stars: 2.5, 
      good: 77, 
      timely: 80, 
      correct: 71 
    },
    schedule: {
      monFri: { delivery: '10:00am-8:00pm', pickup: '9:00am-11:30pm' },
      satSun: { delivery: 'Closed', pickup: 'Closed' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/food-1380275_1280.jpg',
    priceRange: 1,
    categories: ['Korean', 'Lunch', 'Dinner'] 
  },
  { 
    id: 5,
    name: 'Dubu',
    address: { 
      line1: '78 Enola St SW', 
      line2: 'Haleyland, ID 12010',
      milesAway: 0.24 
    },
    phone: '670-266-9381',
    ratings: { 
      number: 286, 
      stars: 3.5, 
      good: 84, 
      timely: 87, 
      correct: 83 
    },
    schedule: {
      monFri: { delivery: '10:00am-9:00pm', pickup: '11:30am-11:30pm' },
      satSun: { delivery: 'Closed', pickup: 'Closed' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1550388342-5699a35584f4.jpeg',
    priceRange: 3,
    categories: [ 'Korean', 'Healthy', 'Soup', 'Rice' ] 
  },
  { 
    id: 6,
    name: 'Bibi Me',
    address: { 
      line1: '667 Carter Rd', 
      line2: 'Hesselside, IA 13549',
      milesAway: 7.62 
    },
    phone: '892-887-2183',
    ratings: { 
      number: 221, 
      stars: 3, 
      good: 91, 
      timely: 71, 
      correct: 98 
    },
    schedule: {
      monFri: { delivery: '11:00am-6:30pm', pickup: '11:30am-11:30pm' },
      satSun: { delivery: '10:00am-7:30pm', pickup: '10:00am-7:30pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/bibimbap-1738580_1280.jpg',
    priceRange: 4,
    categories: [ 'Korean', 'Healthy', 'Soup', 'Lunch', 'Noodles' ] 
  },
  { 
    id: 7,
    name: 'Kim\'s BBQ',
    address: { 
      line1: '4567 Cordia Way',
      line2: 'South Jaida, MO 02228',
      milesAway: 0.55 
    },
    phone: '545-557-1220',
    ratings: { 
      number: 29, 
      stars: 3.5,
      good: 82, 
      timely: 84, 
      correct: 85 
    },
    schedule: {
      monFri: { delivery: '10:00am-9:00pm', pickup: '11:00am-10:00pm' },
      satSun: { delivery: 'Closed', pickup: 'Closed' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1550388342-b3fd986e4e67.jpeg',
    priceRange: 1,
    categories: [ 'Korean', 'BBQ', 'Dinner' ] 
  },
  { 
    id: 8,
    name: 'Bool BBQ',
    address: { 
      line1: '650 Muller Way NE',
      line2: 'Tristian, KY 07334',
      milesAway: 1.33
    },
    phone: '585-495-4610',
    ratings: { 
      number: 174, 
      stars: 3.5, 
      good: 93, 
      timely: 78, 
      correct: 86 
    },
    schedule: {
      monFri: { delivery: '10:30am-8:30pm', pickup: '9:00am-10:30pm' },
      satSun: { delivery: 'Closed', pickup: 'Closed' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1546069901-eacef0df6022.jpeg',
    priceRange: 2,
    categories: ['Korean', 'BBQ', 'Lunch', 'Dinner'] 
  },
  { 
    id: 9,
    name: 'Giwa',
    address: { 
      line1: '1965 Leffler Lane',
      line2: 'Gulgowski, MA 69978',
      milesAway: 1.55 
    },
    phone: '778-194-6586',
    ratings: { 
      number: 198, 
      stars: 5, 
      good: 99, 
      timely: 90, 
      correct: 98 
    },
    schedule: {
      monFri: { delivery: '11:00am-7:30pm', pickup: '11:00am-11:30pm' },
      satSun: { delivery: '11:00am-7:30pm', pickup: '11:00am-7:30pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/cooking-4124108_1280.jpg',
    priceRange: 1,
    categories: [ 'Korean', 'Rice', 'Soup', 'Lunch' ]
  },
  { 
    id: 10,
    name: 'Galbi Me',
    address: { 
      line1: '55586 Hodkiewicz Ave',
      line2: 'New Jena, NY 80579',
      milesAway: 0.54 
    },
    phone: '352-705-6381',
    ratings: { 
      number: 467, 
      stars: 2.5, 
      good: 71, 
      timely: 77, 
      correct: 73 
    },
    schedule: {
      monFri: { delivery: '10:30am-6:00pm', pickup: '10:00am-10:00pm' },
      satSun: { delivery: '10:30am-7:30pm', pickup: '10:30am-7:30pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1531263539449-56fdf29dfc4d.jpeg',
    priceRange: 1,
    categories: [ 'Korean', 'Dinner', 'BBQ', 'Lunch' ]
  },
  { 
    id: 11,
    name: 'Soon\'s Dubu',
    address: { 
      line1: '9620 Stokes St',
      line2: 'Concepcion, IL 72333',
      milesAway: 2.66 
    },
    phone: '445-777-4737',
    ratings: { 
      number: 166, 
      stars: 5, 
      good: 97, 
      timely: 94, 
      correct: 99 
    },
    schedule: {
      monFri: { delivery: '11:30am-7:30pm', pickup: '10:00am-10:30pm' },
      satSun: { delivery: 'Closed', pickup: 'Closed' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1553163147-622ab57be1c7.jpeg',
    priceRange: 3,
    categories: [ 'Korean', 'Salads', 'Vegetarian', 'Lunch', 'Healthy' ] 
  },
  { 
    id: 12,
    name: 'Song\'s Kitchen',
    address: { 
      line1: '7562 Jennifer Square',
      line2: 'Rochester, OK 91873',
      milesAway: 5.5 
    },
    phone: '463-420-0741',
    ratings: { 
      number: 192, 
      stars: 3, 
      good: 75, 
      timely: 97, 
      correct: 74 
    },
    schedule: {
      monFri: { delivery: '11:00am-6:30pm', pickup: '10:00am-11:30pm' },
      satSun: { delivery: 'Closed', pickup: 'Closed' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/herbs-749360_1280.jpg',
    priceRange: 5,
    categories: [ 'Korean', 'Soup', 'Dinner', 'Rice' ] 
  },
  { 
    id: 13,
    name: 'Bibi Please',
    address: { 
      line1: '111 Gideon Hill', 
      line2: 'Koeppton, HI 08985',
      milesAway: 2.1 
    },
    phone: '245-210-8909',
    ratings: { 
      number: 389, 
      stars: 4, 
      good: 87, 
      timely: 84, 
      correct: 88 
    },
    schedule: {
      monFri: { delivery: '11:00am-8:00pm', pickup: '11:00am-11:30pm' },
      satSun: { delivery: '12:00pm-6:00pm', pickup: '12:00pm-6:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/kimchi-fried-rice-241051_1280.jpg',
    priceRange: 2,
    categories: [ 'Korean', 'Lunch', 'Rice', 'Noodles', 'Healthy' ] 
  },
  { 
    id: 14,
    name: 'House of Tofu',
    address: { 
      line1: '56697 Anya Grove', 
      line2: 'Robertview, KS 09584',
      milesAway: 0.3
    },
    phone: '974-274-3394',
    ratings: { 
      number: 140, 
      stars: 3, 
      good: 73, 
      timely: 92, 
      correct: 74 
    },
    schedule: {
      monFri: { delivery: '11:00am-6:30pm', pickup: '9:00am-10:30pm' },
      satSun: { delivery: '10:30am-7:30pm', pickup: '10:30am-7:30pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/tofu-597228_1280.jpg',
    priceRange: 3,
    categories: ['Korean', 'Healthy', 'Salads'] 
  },
  { 
    id: 15,
    name: 'Galbi Jib',
    address: { 
      line1: '6454 Gerlach Dr',
      line2: 'Botsfordburgh, MS 22811',
      milesAway: 1.4 
    },
    phone: '958-185-4640',
    ratings: { 
      number: 108, 
      stars: 3.5, 
      good: 84, 
      timely: 78, 
      correct: 94 
    },
    schedule: {
      monFri: { delivery: '10:00am-6:30pm', pickup: '11:00am-11:00pm' },
      satSun: { delivery: '10:00am-6:00pm', pickup: '10:00am-6:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1550388342-c75d3a99540d.jpeg',
    priceRange: 4,
    categories: ['Korean', 'BBQ', 'Dinner'] 
  },
  { 
    id: 16,
    name: 'The Hot Stone',
    address: { 
      line1: '17264 Mervin Pl',
      line2: 'Lake Elliott, WI 37525',
      milesAway: 0.88 
    },
    phone: '363-640-8679',
    ratings: { 
      number: 181, 
      stars: 3, 
      good: 81, 
      timely: 88, 
      correct: 98 
    },
    schedule: {
      monFri: { delivery: '10:00am-6:30pm', pickup: '11:00am-10:30pm' },
      satSun: { delivery: '11:30am-8:00pm', pickup: '11:30am-8:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1498654896293-37aacf113fd9.jpeg',
    priceRange: 3,
    categories: [ 'Korean', 'Rice', 'Noodles', 'Lunch' ] 
  },
  { 
    id: 17,
    name: 'Pak BBQ',
    address: { 
      line1: '210 Alexandre Blvd',
      line2: 'Port Lizahaven, MI 15425',
      milesAway: 1.55 
    },
    phone: '593-221-2065',
    ratings: { 
      number: 342, 
      stars: 3, 
      good: 83, 
      timely: 76, 
      correct: 86 
    },
    schedule: {
      monFri: { delivery: '11:00am-8:30pm', pickup: '10:30am-10:30pm' },
      satSun: { delivery: 'Closed', pickup: 'Closed' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/vegetable-1582920_1280.jpg',
    priceRange: 3,
    categories: ['Korean', 'BBQ', 'Lunch', 'Dinner', 'Drinks'] 
  },
  { 
    id: 18,
    name: 'Charcoal House',
    address: { 
      line1: '8200 Winston Blvd', 
      line2: 'South Colby, CO 73586',
      milesAway: 2.1 
    },
    phone: '870-944-8562',
    ratings: { 
      number: 469, 
      stars: 4, 
      good: 88, 
      timely: 96, 
      correct: 81 
    },
    schedule: {
      monFri: { delivery: '11:00am-8:30pm', pickup: '11:00am-11:00pm' },
      satSun: { delivery: 'Closed', pickup: 'Closed' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/korean-cabbage-in-chili-sauce-1120406_1280.jpg',
    priceRange: 5,
    categories: [ 'Korean', 'BBQ', 'Drinks', 'Dinner' ] 
  },
  { 
    id: 19,
    name: 'Seoul Palace',
    address: { 
      line1: '635 S Bryon Way', 
      line2: 'North Rose, AR 67243',
      milesAway: 0.6 
    },
    phone: '631-998-3176',
    ratings: { 
      number: 413, stars: 4.5, good: 80, timely: 78, correct: 71 },
    schedule: {
      monFri: { delivery: '11:30am-7:30pm', pickup: '12:00pm-10:30pm' },
      satSun: { delivery: '11:30am-8:00pm', pickup: '11:30am-8:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/toppokki-1607479_1280.jpg',
    priceRange: 2,
    categories: [ 'Korean', 'Lunch', 'Dinner', 'Rice', 'Drinks', 'Salads' ] 
  },
  { 
    id: 20,
    name: 'Noodle House',
    address: { 
      line1: '1893 Tanner Dr SW',
      line2: 'Wileyburgh, LA 53498',
      milesAway: 3.4 
    },
    phone: '856-264-0286',
    ratings: { 
      number: 466, 
      stars: 5, 
      good: 93, 
      timely: 91, 
      correct: 97 
    },
    schedule: {
      monFri: { delivery: '10:30am-7:30pm', pickup: '10:30am-10:00pm' },
      satSun: { delivery: '12:00pm-6:30pm', pickup: '12:00pm-6:30pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1540138279543-b3728f037467.jpeg',
    priceRange: 3,
    categories: [ 'Korean', 'Rice', 'Healthy', 'Salads', 'Lunch'] 
  },
  { 
    id: 21,
    name: 'Casa Del Mar',
    address: { 
      line1: '878 Christiansen Way',
      line2: 'West Una, HI 85904',
      milesAway: 4.11 
    },
    phone: '382-720-0531',
    ratings: { 
      number: 425, 
      stars: 3.5, 
      good: 81, 
      timely: 97, 
      correct: 73 
    },
    schedule: {
      monFri: { delivery: '11:30am-6:00pm', pickup: '10:00am-11:30pm' },
      satSun: { delivery: '12:00pm-7:30pm', pickup: '12:00pm-7:30pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/burrito-4126108_1280.jpg',
    priceRange: 3,
    categories: [ 'Mexican', 'Grill', 'Dinner', 'Salads' ]
  },
  { 
    id: 22,
    name: 'Tina\'s Tacos',
    address: { 
      line1: '4316 Romaguera Dr',
      line2: 'Vincent, NV 98700',
      milesAway: 6.6 
    },
    phone: '665-050-4105',
    ratings: { 
      number: 188, 
      stars: 2.5, 
      good: 77, 
      timely: 79, 
      correct: 91 
    },
    schedule: {
      monFri: { delivery: '10:30am-6:00pm', pickup: '12:00pm-10:30pm' },
      satSun: { delivery: '12:00pm-6:00pm', pickup: '12:00pm-6:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/tacos-245241_1280.jpg',
    priceRange: 1,
    categories: [ 'Mexican', 'Grill', 'Lunch', 'Dinner' ] 
  },
  { 
    id: 23,
    name: 'Burritos Por Favor',
    address: { 
      line1: '1744 Enola Ave W', 
      line2: 'Haleyland, ID 00010',
      milesAway: 0.9 
    },
    phone: '670-266-9381',
    ratings: { 
      number: 286, 
      stars: 4.5, 
      good: 94, 
      timely: 87, 
      correct: 93 
    },
    schedule: {
      monFri: { delivery: '11:30am-9:00pm', pickup: '10:00am-10:00pm' },
      satSun: { delivery: '12:00pm-6:00pm', pickup: '12:00pm-6:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/burrito-4126116_1280.jpg',
    priceRange: 3,
    categories: [ 'Mexican', 'Drinks', 'Salads', 'Lunch Specials' ] 
  },
  { 
    id: 24,
    name: 'El Burro',
    address: { 
      line1: '667 Carter Rd', 
      line2: 'Hesselside, IA 13549',
      milesAway: 0.24 
    },
    phone: '892-887-2183',
    ratings: { 
      number: 221, 
      stars: 3, 
      good: 91, 
      timely: 71, 
      correct: 98 
    },
    schedule: {
      monFri: { delivery: '11:00am-9:00pm', pickup: '12:00pm-11:30pm' },
      satSun: { delivery: 'Closed', pickup: 'Closed' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/grilled-pineapple-pork-burrito-2944562_1280.jpg',
    priceRange: 4,
    categories: [ 'Mexican', 'Salads', 'Dessert', 'Lunch Specials' ] 
  },
  { 
    id: 25,
    name: 'Red Plate Taco',
    address: { 
      line1: '4567 Cordia Ave',
      line2: 'South Jaida, MO 02228',
      milesAway: 10.1 
    },
    phone: '545-557-1220',
    ratings: { 
      number: 29, 
      stars: 3.5, 
      good: 82, 
      timely: 84, 
      correct: 85 
    },
    schedule: {
      monFri: { delivery: '10:00am-6:00pm', pickup: '9:00am-10:00pm' },
      satSun: { delivery: '11:00am-7:30pm', pickup: '11:00am-7:30pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/tacos-1613795_1280.jpg',
    priceRange: 1,
    categories: [ 'Mexican', 'Lunch Specials', 'Dessert', 'Grill' ]
  },
  { 
    id: 26,
    name: 'Cocina',
    address: { 
      line1: '650 Muller Dr',
      line2: 'Tristian, KY 07334',
      milesAway: 8.1 
    },
    phone: '585-495-4610',
    ratings: { 
      number: 174, 
      stars: 2.5, 
      good: 73, 
      timely: 78, 
      correct: 86 
    },
    schedule: {
      monFri: { delivery: '11:30am-7:30pm', pickup: '10:30am-10:00pm' },
      satSun: { delivery: '10:00am-6:30pm', pickup: '10:00am-6:30pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/tamales-1990080_1280.jpg',
    priceRange: 2,
    categories: [ 'Mexican', 'Dinner', 'Dessert', 'Lunch Specials' ]
  },
  { 
    id: 27,
    name: 'Escobar',
    address: { 
      line1: '1965 Leffler Rd',
      line2: 'Gulgowskihaven, MA 69978',
      milesAway: 0.19 
    },
    phone: '778-194-6586',
    ratings: { 
      number: 198, 
      stars: 5, 
      good: 99, 
      timely: 98, 
      correct: 98 
    },
    schedule: {
      monFri: { delivery: '10:00am-7:30pm', pickup: '9:00am-11:00pm' },
      satSun: { delivery: '11:00am-8:00pm', pickup: '11:00am-8:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/burrito-gratin-1564287_1280.jpg',
    priceRange: 1,
    categories: [ 'Mexican', 'Dinner', 'Drinks', 'Grill' ]
  },
  { 
    id: 28,
    name: 'Little Taco',
    address: { 
      line1: '586 Hodkiewicz Pkwy',
      line2: 'New Jena, NY 80579',
      milesAway: 4.4 
    },
    phone: '352-705-6381',
    ratings: { 
      number: 467, 
      stars: 3.5, 
      good: 91, 
      timely: 97, 
      correct: 73 
    },
    schedule: {
      monFri: { delivery: '11:30am-8:00pm', pickup: '11:00am-10:00pm' },
      satSun: { delivery: '10:00am-8:00pm', pickup: '10:00am-8:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/taco-2610649_1280.jpg',
    priceRange: 1,
    categories: [ 'Mexican', 'Grill', 'Salads', 'Lunch Specials' ]
  },
  { 
    id: 29,
    name: 'Blue Cabana',
    address: { 
      line1: '9620 E Stokes St',
      line2: 'Concepcion, IL 72333',
      milesAway: 2.45 
    },
    phone: '945-777-4737',
    ratings: { 
      number: 166, 
      stars: 5, 
      good: 77, 
      timely: 74, 
      correct: 99 
    },
    schedule: {
      monFri: { delivery: '11:30am-8:00pm', pickup: '12:00pm-10:30pm' },
      satSun: { delivery: '12:00pm-9:00pm', pickup: '12:00pm-9:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/food-1090619_1280.jpg',
    priceRange: 3,
    categories: [ 'Mexican', 'Lunch Specials', 'Salads', 'Breakfast' ] 
  },
  { 
    id: 30,
    name: 'Casa Enriquez',
    address: { 
      line1: '7562 Jennifer Square',
      line2: 'Rodriguez, OK 91873',
      milesAway: 9.22 
    },
    phone: '063-420-0741',
    ratings: { 
      number: 192, 
      stars: 3, 
      good: 75, 
      timely: 97, 
      correct: 74 
    },
    schedule: {
      monFri: { delivery: '11:00am-8:30pm', pickup: '11:00am-11:00pm' },
      satSun: { delivery: '11:30am-9:00pm', pickup: '11:30am-9:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/photo-1464219222984-216ebffaaf85.jpeg',
    priceRange: 5,
    categories: [ 'Mexican', 'Dinner', 'Dessert', 'Drinks' ]
  },
  { 
    id: 31,
    name: 'Sol',
    address: { 
      line1: '111 Gideon Way NE', 
      line2: 'Motunui, HI 08985',
      milesAway: 4.11 
    },
    phone: '245-210-8909',
    ratings: { 
      number: 389, 
      stars: 4, 
      good: 97, 
      timely: 84, 
      correct: 88 
    },
    schedule: {
      monFri: { delivery: '10:30am-6:30pm', pickup: '12:00pm-11:00pm' },
      satSun: { delivery: 'Closed', pickup: 'Closed' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/food-2580200_1280.jpg',
    priceRange: 2,
    categories: [ 'Mexican', 'Grill', 'Drinks', 'Breakfast' ]
  },
  { 
    id: 32,
    name: 'Tito\'s Taqueria',
    address: { 
      line1: '5697 Anya Dr', 
      line2: 'Robertview, KS 09584',
      milesAway: 0.55 
    },
    phone: '974-274-3394',
    ratings: { 
      number: 140, 
      stars: 3, 
      good: 73, 
      timely: 92, 
      correct: 74 
    },
    schedule: {
      monFri: { delivery: '11:00am-6:30pm', pickup: '10:00am-10:30pm' },
      satSun: { delivery: '11:00am-6:00pm', pickup: '11:00am-6:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/food-791614_1280.jpg',
    priceRange: 3,
    categories: [ 'Mexican', 'Lunch Specials', 'Breakfast' ]
  },
  { 
    id: 33,
    name: 'Guac You Talking About',
    address: { 
      line1: '6454 Gerlach Dr',
      line2: 'Botsfordburgh, MS 22811',
      milesAway: 0.13 
    },
    phone: '958-185-4640',
    ratings: { 
      number: 108, 
      stars: 3.5, 
      good: 84, 
      timely: 78, 
      correct: 94 
    },
    schedule: {
      monFri: { delivery: '11:30am-9:00pm', pickup: '11:30am-11:30pm' },
      satSun: { delivery: '11:00am-6:00pm', pickup: '11:00am-6:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/photo-1536184071535-78906f7172c2.jpeg',
    priceRange: 4,
    categories: [ 'Mexican', 'Grill', 'Breakfast', 'Lunch' ]
  },
  { 
    id: 34,
    name: 'Verde',
    address: { 
      line1: '17264 Mervin Blvd',
      line2: 'Lake Elliott, WI 37525',
      milesAway: 3.1 
    },
    phone: '363-640-8679',
    ratings: { 
      number: 181, 
      stars: 3, 
      good: 91, 
      timely: 88, 
      correct: 98 
    },
    schedule: {
      monFri: { delivery: '10:30am-7:30pm', pickup: '11:00am-10:00pm' },
      satSun: { delivery: '10:00am-6:00pm', pickup: '10:00am-6:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/mexican-2456038_1280.jpg',
    priceRange: 3,
    categories: [ 'Mexican', 'Salads', 'Drinks', 'Dinner' ]
  },
  { 
    id: 35,
    name: 'Tacos 4 All',
    address: { 
      line1: '210 Alexandre Lane',
      line2: 'Port Lizahaven, MI 15425',
      milesAway: 7.6 
    },
    phone: '593-221-2065',
    ratings: { 
      number: 342, 
      stars: 3, 
      good: 83, 
      timely: 76, 
      correct: 86 
    },
    schedule: {
      monFri: { delivery: '10:30am-8:00pm', pickup: '11:00am-10:00pm' },
      satSun: { delivery: '10:00am-8:30pm', pickup: '10:00am-8:30pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/grill-1599035_1280.jpg',
    priceRange: 3,
    categories: [ 'Mexican', 'Dessert', 'Breakfast', 'Lunch Specials' ]
  },
  { 
    id: 36,
    name: 'Casa Bonita',
    address: { 
      line1: '8200 N Wolf St', 
      line2: 'South Colby, CO 73586',
      milesAway: 2.66 
    },
    phone: '870-944-8562',
    ratings: { 
      number: 469, 
      stars: 4, 
      good: 88, 
      timely: 96, 
      correct: 91 },
    schedule: {
      monFri: { delivery: '11:00am-8:30pm', pickup: '9:00am-11:00pm' },
      satSun: { delivery: '10:30am-6:00pm', pickup: '10:30am-6:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/photo-1552332386-f8dd00dc2f85.jpeg',
    priceRange: 5,
    categories: [ 'Mexican', 'Dinner', 'Salads', 'Dessert' ]
  },
  { 
    id: 37,
    name: 'Poquito',
    address: { 
      line1: '31 Wisoky Dr',
      line2: 'West Madisen, MN 01138',
      milesAway: 0.54 
    },
    phone: '895-678-3232',
    ratings: { 
      number: 185, 
      stars: 3, 
      good: 86, 
      timely: 85, 
      correct: 89 
    },
    schedule: {
      monFri: { delivery: '11:00am-8:30pm', pickup: '10:30am-11:30pm' },
      satSun: { delivery: '11:00am-8:30pm', pickup: '11:00am-8:30pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/mexican-food-1885616_1280.jpg',
    priceRange: 2,
    categories: [ 'Mexican', 'Dessert', 'Lunch Specials', 'Grill' ]
  }, 
  { 
    id: 38,
    name: 'Mom\'s Taco Shop',
    address: { 
      line1: '635 Bryon Ave', 
      line2: 'North Rose, AR 67243',
      milesAway: 1.1 
    },
    phone: '631-998-3176',
    ratings: { 
      number: 413, 
      stars: 4.5, 
      good: 90, 
      timely: 98, 
      correct: 91 
    },
    schedule: {
      monFri: { delivery: '11:00am-8:00pm', pickup: '12:00pm-10:00pm' },
      satSun: { delivery: 'Closed', pickup: 'Closed' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/photo-1550951957-3ab761159b8f.jpeg',
    priceRange: 2,
    categories: [ 'Mexican', 'Dinner', 'Salads', 'Drinks' ] 
  },
  { 
    id: 39,
    name: 'Tanner and Main',
    address: { 
      line1: '1893 Tanner Dr W',
      line2: 'Wileyburgh, LA 53498',
      milesAway: 1.56
    },
    phone: '856-264-0286',
    ratings: { 
      number: 466, 
      stars: 5, 
      good: 93, 
      timely: 91, 
      correct: 97 
    },
    schedule: {
      monFri: { delivery: '11:30am-7:30pm', pickup: '11:00am-10:30pm' },
      satSun: { delivery: '11:30am-9:00pm', pickup: '11:30am-9:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/quesadilla-4034046_1280.jpg',
    priceRange: 3,
    categories: [ 'Mexican', 'Lunch', 'Salads', 'Dinner' ]
  },
  { 
    id: 40,
    name: 'Little Sunset',
    address: { 
      line1: '878 Mola Lane',
      line2: 'West Una, HI 85904',
      milesAway: 5.23 
    },
    phone: '382-720-0531',
    ratings: { 
      number: 425, 
      stars: 3.5, 
      good: 91, 
      timely: 97, 
      correct: 73 
    },
    schedule: {
      monFri: { delivery: '11:30am-8:00pm', pickup: '10:00am-11:30pm' },
      satSun: { delivery: '10:00am-8:30pm', pickup: '10:00am-8:30pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/tortilla-1386757_1280.jpg',
    priceRange: 3,
    categories: [ 'Mexican', 'Breakfast', 'Salads', 'Dinner' ] 
  },
  { 
    id: 41,
    name: 'House of Kee',
    address: {
      line1: '4316 Romaguera Dr',
      line2: 'Carlton, NV 98700',
      milesAway: 0.23
    },
    phone: '665-050-4105',
    ratings: { 
      number: 188, 
      stars: 2.5, 
      good: 77, 
      timely: 99, 
      correct: 91 
    },
    schedule: {
      monFri: { delivery: '10:30am-8:00pm', pickup: '12:00pm-11:30pm' },
      satSun: { delivery: '11:30am-6:30pm', pickup: '11:30am-6:30pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/broiled-1238582_1280.jpg',
    priceRange: 1,
    categories: [ 'Chinese', 'Late Night', 'Soup', 'Asian' ] 
  },
  { 
    id: 42,
    name: 'Lily Garden',
    address: { 
      line1: '177 Enola Lane', 
      line2: 'Haleyland, ID 00010',
      milesAway: 5.32 
    },
    phone: '670-266-9381',
    ratings: { 
      number: 286, 
      stars: 4.5, 
      good: 94, 
      timely: 87, 
      correct: 93 
    },
    schedule: {
      monFri: { delivery: '11:00am-8:00pm', pickup: '12:00pm-10:00pm' },
      satSun: { delivery: 'Closed', pickup: 'Closed' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/chinese-food-951889_1280.jpg',
    priceRange: 3,
    categories: [ 'Chinese', 'Late Night', 'Dinner', 'Soup' ] 
  },
  { 
    id: 43,
    name: 'Szechuan Palace',
    address: { 
      line1: '667 Carter Rd', 
      line2: 'Hesselside, IA 13549',
      milesAway: 0.62 
    },
    phone: '892-887-2183',
    ratings: { 
      number: 221, 
      stars: 3, 
      good: 91, 
      timely: 71, 
      correct: 88 
    },
    schedule: {
      monFri: { delivery: '11:00am-8:30pm', pickup: '9:00am-11:00pm' },
      satSun: { delivery: '10:30am-6:00pm', pickup: '10:30am-6:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/Szechuan-Chicken_.jpg',
    priceRange: 4,
    categories: [ 'Chinese', 'Salads', 'Lunch Specials' ] 
  },
  { 
    id: 44,
    name: 'Liu\'s Chinese',
    address: { 
      line1: '4567 Cordia Ave',
      line2: 'South Jaida, MO 02228',
      milesAway: 7.23 
    },
    phone: '545-557-1220',
    ratings: { 
      number: 29, 
      stars: 3.5, 
      good: 82, 
      timely: 84, 
      correct: 85 
    },
    schedule: {
      monFri: { delivery: '10:30am-7:30pm', pickup: '11:00am-10:00pm' },
      satSun: { delivery: '10:00am-6:00pm', pickup: '10:00am-6:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/image-951834_1280.jpg',
    priceRange: 1,
    categories: [ 'Chinese', 'Salads', 'Dinner', 'Noodles', 'Late Night' ] 
  },
  { 
    id: 45,
    name: 'Rising Moon',
    address: { 
      line1: '650 Muller Way',
      line2: 'Tristianborough, KY 07334',
      milesAway: 4.23 
    },
    phone: '585-495-4610',
    ratings: { 
      number: 174, 
      stars: 2.5, 
      good: 93, 
      timely: 78, 
      correct: 86 
    },
    schedule: {
      monFri: { delivery: '10:00am-6:00pm', pickup: '11:30am-11:00pm' },
      satSun: { delivery: '10:00am-9:00pm', pickup: '10:00am-9:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/duck-479701_1280.jpg',
    priceRange: 2,
    categories: [ 'Chinese', 'Noodles', 'Lunch', 'Dinner' ] 
  },
  { 
    id: 46,
    name: 'The Red Dragon',
    address: { 
      line1: '1965 Leffler Rd',
      line2: 'Gulgowski, MA 69978',
      milesAway: 1.65 
    },
    phone: '778-194-6586',
    ratings: { 
      number: 198, 
      stars: 5, 
      good: 99, 
      timely: 99, 
      correct: 98 
    },
    schedule: {
      monFri: { delivery: '10:30am-6:00pm', pickup: '12:00pm-10:00pm' },
      satSun: { delivery: 'Closed', pickup: 'Closed' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/eggplant-1317917_1280.jpg',
    priceRange: 5,
    categories: [ 'Chinese', 'Late Night', 'Noodles', 'Salads' ] 
  },
  { 
    id: 47,
    name: 'Dim Sum Palace',
    address: { 
      line1: '55586 Hodkiewicz Way',
      line2: 'New Jena, NY 80579',
      milesAway: 0.46 
    },
    phone: '352-705-6381',
    ratings: { 
      number: 467, 
      stars: 4, 
      good: 91, 
      timely: 97, 
      correct: 73 
    },
    schedule: {
      monFri: { delivery: '10:30am-6:30pm', pickup: '12:00pm-10:30pm' },
      satSun: { delivery: '11:00am-6:00pm', pickup: '11:00am-6:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/dumplings-632206_1280.jpg',
    priceRange: 1,
    categories: [ 'Chinese', 'Dinner', 'Lunch Specials', 'Noodles' ] 
  },
  { 
    id: 48,
    name: 'Chef Kee\'s',
    address: { 
      line1: '9620 Stokes St',
      line2: 'Charles, IL 72333',
      milesAway: 1.45 
    },
    phone: '545-777-4737',
    ratings: { 
      number: 166, 
      stars: 3.5, 
      good: 77, 
      timely: 74, 
      correct: 99 
    },
    schedule: {
      monFri: { delivery: '10:30am-8:00pm', pickup: '12:00pm-11:30pm' },
      satSun: { delivery: '11:30am-6:30pm', pickup: '11:30am-6:30pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/fried-fish-with-sweet-peppers-906248_1280.jpg',
    priceRange: 3,
    categories: [ 'Chinese', 'Soup', 'Noodles', 'Lunch Specials' ] 
  },
  { 
    id: 49,
    name: 'Mandarin Impression',
    address: { 
      line1: '7562 Jennifer Ave',
      line2: 'Chester, OK 91873',
      milesAway: 8.23 
    },
    phone: '663-420-0741',
    ratings: { 
      number: 192, 
      stars: 3, 
      good: 75, 
      timely: 97, 
      correct: 74 
    },
    schedule: {
      monFri: { delivery: '10:00am-6:00pm', pickup: '11:30am-11:00pm' },
      satSun: { delivery: '10:00am-9:00pm', pickup: '10:00am-9:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/gourmet-667599_1280.jpg',
    priceRange: 5,
    categories: [ 'Chinese', 'Dinner', 'Lunch Specials', 'Soup' ] 
  },
  { 
    id: 50,
    name: 'Chop & Stick',
    address: { 
      line1: '111 W Gideon Hill', 
      line2: 'Kameha, HI 08985',
      milesAway: 2.32 
    },
    phone: '245-210-8909',
    ratings: { 
      number: 389, 
      stars: 4, 
      good: 97, 
      timely: 84, 
      correct: 88 
    },
    schedule: {
      monFri: { delivery: '10:00am-8:00pm', pickup: '10:00am-10:00pm' },
      satSun: { delivery: '11:00am-7:30pm', pickup: '11:00am-7:30pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/green-dragon-vegetable-1707089_1280.jpg',
    priceRange: 4,
    categories: [ 'Chinese', 'Noodles', 'Lunch Specials', 'Asian', 'Dinner' ]
  },
  { 
    id: 51,
    name: 'Yum Yum Wok',
    address: { 
      line1: '5697 W Anya St', 
      line2: 'Robertview, KS 09584',
      milesAway: 0.63 
    },
    phone: '974-274-3394',
    ratings: { 
      number: 140, 
      stars: 3, 
      good: 73, 
      timely: 92, 
      correct: 74 
    },
    schedule: {
      monFri: { delivery: '11:30am-6:30pm', pickup: '12:00pm-11:30pm' },
      satSun: { delivery: 'Closed', pickup: 'Closed' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/cooking-1835369_1280.jpg',
    priceRange: 3,
    categories: [ 'Chinese', 'Late Night', 'Soup', 'Lunch Specials' ] 
  },
  { 
    id: 52,
    name: 'The Feast Room',
    address: { 
      line1: '6454 Gerlach Dr',
      line2: 'Botsford, MS 22811',
      milesAway: 0.1 
    },
    phone: '958-185-4640',
    ratings: { 
      number: 108, 
      stars: 3.5, 
      good: 84, 
      timely: 78, 
      correct: 94 
    },
    schedule: {
      monFri: { delivery: '10:00am-6:00pm', pickup: '12:00pm-11:00pm' },
      satSun: { delivery: '10:00am-8:00pm', pickup: '10:00am-8:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/noodles-3557592_1280.jpg',
    priceRange: 4,
    categories: [ 'Chinese', 'Late Night', 'Noodles', 'Soup' ]
  },
  { 
    id: 53,
    name: 'House of Mao',
    address: { 
      line1: '17264 Mervin Pl',
      line2: 'Lake Ellington, WI 37525',
      milesAway: 0.03 
    },
    phone: '363-640-8679',
    ratings: { 
      number: 181, 
      stars: 4, 
      good: 91, 
      timely: 88, 
      correct: 98 
    },
    schedule: {
      monFri: { delivery: '10:00am-6:30pm', pickup: '11:00am-11:30pm' },
      satSun: { delivery: '10:00am-8:00pm', pickup: '10:00am-8:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/photo-1525755662778-989d0524087e.jpeg',
    priceRange: 3,
    categories: [ 'Chinese', 'Salads', 'Noodles', 'Soup', 'Late Night', 'Dinner' ] 
  },
  { 
    id: 54,
    name: 'Red Table',
    address: { 
      line1: '210 Alexandre Pkwy',
      line2: 'Port Lizahaven, MI 15425',
      milesAway: 9.22 
    },
    phone: '593-221-2065',
    ratings: { 
      number: 342, 
      stars: 3, 
      good: 83, 
      timely: 76, 
      correct: 86 
    },
    schedule: {
      monFri: { delivery: '11:30am-9:00pm', pickup: '9:00am-10:30pm' },
      satSun: { delivery: 'Closed', pickup: 'Closed' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/photo-1541696432-82c6da8ce7bf.jpeg',
    priceRange: 3,
    categories: [ 'Chinese', 'Late Night', 'Vegetarian', 'Salads', 'Noodles' ] 
  },
  { 
    id: 55,
    name: 'Little Rose',
    address: { 
      line1: '8200 Wolf Pkwy', 
      line2: 'South Colby, CO 73586',
      milesAway: 0.63 
    },
    phone: '870-944-8562',
    ratings: { 
      number: 469, 
      stars: 4, 
      good: 88, 
      timely: 96, 
      correct: 91 
    },
    schedule: {
      monFri: { delivery: '11:30am-6:30pm', pickup: '12:00pm-11:30pm' },
      satSun: { delivery: 'Closed', pickup: 'Closed' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/sweet-and-sour-pork-1264563_1280.jpg',
    priceRange: 5,
    categories: [ 'Chinese', 'Salads', 'Soup', 'Lunch Specials', 'Dinner', 'Asian' ] 
  },
  { 
    id: 56,
    name: 'Mei\'s Chinese Kitchen',
    address: { 
      line1: '9231 Wisoky Way',
      line2: 'West Madisen, MN 01138',
      milesAway: 0.02 
    },
    phone: '895-678-3232',
    ratings: { 
      number: 185, 
      stars: 3, 
      good: 96, 
      timely: 85, 
      correct: 89 
    },
    schedule: {
      monFri: { delivery: '11:30am-9:00pm', pickup: '10:00am-10:00pm' },
      satSun: { delivery: '12:00pm-6:00pm', pickup: '12:00pm-6:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/prawns-959219_1280.jpg',
    priceRange: 2,
    categories: [ 'Chinese', 'Dinner', 'Lunch Specials', 'Asian' ] 
  },
  { 
    id: 57,
    name: 'Dumpling House',
    address: { 
      line1: '18555 Crist Dr', 
      line2: 'Ottilieville, SD 51198',
      milesAway: 5.24 
    },
    phone: '858-072-2242',
    ratings: { 
      number: 391, 
      stars: 3.5, 
      good: 81, 
      timely: 73, 
      correct: 77 
    },
    schedule: {
      monFri: { delivery: '10:00am-6:00pm', pickup: '9:00am-10:00pm' },
      satSun: { delivery: '11:00am-7:30pm', pickup: '11:00am-7:30pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/dumplings-669901_1280.jpg',
    priceRange: 3,
    categories: [ 'Chinese', 'Lunch', 'Salads', 'Noodles' ] 
  },
  { 
    id: 58,
    name: 'Hop Sun',
    address: { 
      line1: '701 Herman Lane',
      line2: 'West Vergieville, KS 54223',
      milesAway: 2.1 
    },
    phone: '941-039-3952',
    ratings: { 
      number: 335, 
      stars: 5, 
      good: 96, 
      timely: 96, 
      correct: 95 
    },
    schedule: {
      monFri: { delivery: '11:30am-7:30pm', pickup: '12:00pm-10:30pm' },
      satSun: { delivery: '11:30am-8:00pm', pickup: '11:30am-8:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/water-spinach-1628620_1280.jpg',
    priceRange: 1,
    categories: [ 'Chinese', 'Noodles', 'Dinner', 'Soup', 'Late Night', 'Asian' ] 
  },
  { 
    id: 59,
    name: 'Hunan Impression',
    address: { 
      line1: '8275 Kunde Highway',
      line2: 'North Olenside, IA 65770',
      milesAway: 0.45 
    },
    phone: '372-796-4107',
    ratings: { 
      number: 184, 
      stars: 4.5, 
      good: 97, 
      timely: 91, 
      correct: 94 
    },
    schedule: {
      monFri: { delivery: '10:00am-6:30pm', pickup: '11:00am-10:30pm' },
      satSun: { delivery: '11:30am-8:00pm', pickup: '11:30am-8:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/restaurant-1762493_1280.jpg',
    priceRange: 4,
    categories: [ 'Chinese', 'Late Night', 'Noodles', 'Asian', 'Lunch Specials' ] 
  },
  { 
    id: 60,
    name: 'East Cafe',
    address: { 
      line1: '1897 S Ebert Hill', 
      line2: 'Crooksfort, DE 82838',
      milesAway: 0.09 
    },
    phone: '933-222-7859',
    ratings: { 
      number: 205, 
      stars: 3.5, 
      good: 73, 
      timely: 87, 
      correct: 92 
    },
    schedule: {
      monFri: { delivery: '11:00am-8:30pm', pickup: '10:30am-10:30pm' },
      satSun: { delivery: 'Closed', pickup: 'Closed' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/spring-rolls-2536526_1280.jpg',
    priceRange: 4,
    categories: [ 'Chinese', 'Asian', 'Lunch Specials', 'Salads' ] 
  },
  { 
    id: 61,
    name: 'Giulia\'s',
    address: { 
      line1: '90043 Quitzon Dr',
      line2: 'New Delphatown, SD 79368',
      milesAway: 3.2 
    },
    phone: '436-720-7155',
    ratings: { 
      number: 158, 
      stars: 5, 
      good: 80, 
      timely: 79, 
      correct: 95 
    },
    schedule: {
      monFri: { delivery: '10:30am-8:30pm', pickup: '10:00am-10:30pm' },
      satSun: { delivery: '10:00am-6:00pm', pickup: '10:00am-6:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/italian-food-2157246_1280.jpg',
    priceRange: 2,
    categories: [ 'Italian', 'Pasta', 'Soup', 'Pizza' ] 
  },
  { 
    id: 62,
    name: 'Giovanni',
    address: { 
      line1: '776 Lamont Lane', 
      line2: 'South Madilyn, DE 24758',
      milesAway: 6.21 
    },
    phone: '547-637-0778',
    ratings: { 
      number: 294, 
      stars: 4.5, 
      good: 94, 
      timely: 90, 
      correct: 99 
    },
    schedule: {
      monFri: { delivery: '10:00am-8:00pm', pickup: '10:30am-10:00pm' },
      satSun: { delivery: '12:00pm-6:30pm', pickup: '12:00pm-6:30pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/pasta-4144384_1280.jpg',
    priceRange: 5,
    categories: [ 'Italian', 'Pasta', 'Seafood', 'Dinner' ]
  },
  { 
    id: 63,
    name: 'Misto',
    address: { 
      line1: '5628 Verda Dr', 
      line2: 'Kieranville, ID 06319',
      milesAway: 1.33 
    },
    phone: '405-853-9132',
    ratings: { 
      number: 301, 
      stars: 3.5, 
      good: 81, 
      timely: 89, 
      correct: 82 
    },
    schedule: {
      monFri: { delivery: '11:30am-6:30pm', pickup: '10:00am-11:00pm' },
      satSun: { delivery: '12:00pm-6:30pm', pickup: '12:00pm-6:30pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/pasta-salad-1967501_1280.jpg',
    priceRange: 3,
    categories: [ 'Italian', 'Soup', 'Pasta', 'Lunch', 'Seafood' ] 
  },
  { 
    id: 64,
    name: 'Aglio Trattoria',
    address: { 
      line1: '1646 Sporer Circle', 
      line2: 'Lake Myra, FL 10666',
      milesAway: 0.62 
    },
    phone: '866-468-6279',
    ratings: { 
      number: 479, 
      stars: 3, 
      good: 72, 
      timely: 99, 
      correct: 80 
    },
    schedule: {
      monFri: { delivery: '10:00am-8:30pm', pickup: '11:00am-11:00pm' },
      satSun: { delivery: '11:00am-8:00pm', pickup: '11:00am-8:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/photo-1551183053-bf91a1d81141.jpeg',
    priceRange: 5,
    categories: [ 'Italian', 'Seafood', 'Salads', 'Soup', 'Dinner' ] 
  },
  { 
    id: 65,
    name: 'Little Milan',
    address: { 
      line1: '348 Talon Blvd', 
      line2: 'North Carli, OH 24625',
      milesAway: 0.02 
    },
    phone: '257-891-3409',
    ratings: { 
      number: 73, 
      stars: 3.5, 
      good: 81, 
      timely: 79, 
      correct: 80 
    },
    schedule: {
      monFri: { delivery: '10:00am-8:00pm', pickup: '10:30am-10:00pm' },
      satSun: { delivery: '12:00pm-6:30pm', pickup: '12:00pm-6:30pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/tomatoes-1804452_1280.jpg',
    priceRange: 4,
    categories: [ 'Italian', 'Salads', 'Seafood', 'Pasta', 'Pizza' ] 
  },
  { 
    id: 66,
    name: 'Red White & Green',
    address: { 
      line1: '87239 Kuvalis Way', 
      line2: 'Cronaberg, MT 02260',
      milesAway: 3.11 
    },
    phone: '964-569-4929',
    ratings: { 
      number: 31, 
      stars: 3, 
      good: 86, 
      timely: 90, 
      correct: 83 
    },
    schedule: {
      monFri: { delivery: '11:00am-9:00pm', pickup: '11:30am-10:00pm' },
      satSun: { delivery: 'Closed', pickup: 'Closed' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/salad-2487759_1280.jpg',
    priceRange: 5,
    categories: [ 'Italian', 'Dinner', 'Pasta', 'Lunch', 'Salads' ] 
  },
  { 
    id: 67,
    name: 'Nic\'s Pizzeria',
    address: { 
      line1: '24 Ollie Blvd',
      line2: 'New Unachester, NE 50595',
      milesAway: 0.22 
    },
    phone: '773-366-5764',
    ratings: { 
      number: 12, 
      stars: 3.5, 
      good: 73, 
      timely: 100, 
      correct: 85 
    },
    schedule: {
      monFri: { delivery: '10:00am-7:30pm', pickup: '10:00am-10:30pm' },
      satSun: { delivery: '10:00am-7:30pm', pickup: '10:00am-7:30pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/photo-1528490060256-c345efae4442.jpeg',
    priceRange: 2,
    categories: [ 'Italian', 'Dinner', 'Pizza', 'Lunch' ]
  },
  { 
    id: 68,
    name: 'Non Ti Pago',
    address: { 
      line1: '30479 Kozey Avenue', 
      line2: 'Schoenbury, FL 75921',
      milesAway: 6.23 
    },
    phone: '397-440-9019',
    ratings: { 
      number: 463, 
      stars: 5, 
      good: 100, timely: 96, correct: 98 
    },
    schedule: {
      monFri: { delivery: '11:30am-7:30pm', pickup: '12:00pm-11:30pm' },
      satSun: { delivery: '10:00am-9:00pm', pickup: '10:00am-9:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/photo-1551443874-e8d6a8e561aa.jpeg',
    priceRange: 5,
    categories: [ 'Italian', 'Dinner', 'Pizza', 'Lunch' ]
  },
  { 
    id: 69,
    name: 'Mamma In Cuccina',
    address: { 
      line1: '9653 186th St',
      line2: 'Wittingmouth, ME 26602',
      milesAway: 0.04 
    },
    phone: '925-495-8140',
    ratings: { 
      number: 474, 
      stars: 4, 
      good: 81, 
      timely: 93, 
      correct: 89 
    },
    schedule: {
      monFri: { delivery: '10:30am-9:00pm', pickup: '11:00am-11:30pm' },
      satSun: { delivery: '11:00am-8:00pm', pickup: '11:00am-8:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/photo-1458644267420-66bc8a5f21e4.jpeg',
    priceRange: 4,
    categories: [ 'Italian', 'Pasta', 'Lunch', 'Dinner', 'Salads' ] 
  },
  { 
    id: 70,
    name: 'Pastasciutta',
    address: { 
      line1: '8131 N Rasheed Way', 
      line2: 'Karleetown, VT 93719',
      milesAway: 0.55 
    },
    phone: '421-132-0272',
    ratings: { 
      number: 221, 
      stars: 4, 
      good: 83, 
      timely: 89, 
      correct: 99 
    },
    schedule: {
      monFri: { delivery: '10:30am-9:00pm', pickup: '11:00am-11:30pm' },
      satSun: { delivery: '11:00am-8:00pm', pickup: '11:00am-8:00pm' } 
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/spaghetti-660748_1280.jpg',
    priceRange: 2,
    categories: [ 'Italian', 'Dinner', 'Pasta', 'Dessert', 'Salads' ] 
  },
  { 
    id: 71,
    name: 'Lo Scoglio',
    address: { 
      line1: '8904 Armstrong Dr', 
      line2: 'Ethylhaven, AZ 83942',
      milesAway: 9.2 
    },
    phone: '155-459-5088',
    ratings: { 
      number: 395, 
      stars: 4.5, 
      good: 97, 
      timely: 82, 
      correct: 95 
    },
    schedule: {
      monFri: { delivery: '10:30am-9:00pm', pickup: '11:30am-10:30pm' },
      satSun: { delivery: '12:00pm-7:30pm', pickup: '12:00pm-7:30pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/photo-1528137871618-79d2761e3fd5.jpeg',
    priceRange: 2,
    categories: [ 'Italian', 'Seafood', 'Lunch', 'Salads', 'Dinner' ] 
  },
  { 
    id: 72,
    name: 'Valentino\'s',
    address: { 
      line1: '695 Vickie Pkwy',
      line2: 'Eastbrook, DE 23452',
      milesAway: 1.92 
    },
    phone: '853-571-4207',
    ratings: { 
      number: 165, 
      stars: 5, 
      good: 72, 
      timely: 80, 
      correct: 80 
    },
    schedule: {
      monFri: { delivery: '10:00am-6:30pm', pickup: '10:30am-10:00pm' },
      satSun: { delivery: '11:00am-9:00pm', pickup: '11:00am-9:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/photo-1539586345401-51d5bfba7ac0.jpeg',
    priceRange: 3,
    categories: [ 'Italian', 'Salads', 'Soup', 'Lunch', 'Dinner' ] 
  },
  { 
    id: 73,
    name: 'House of Bruschetta',
    address: { 
      line1: '026 Raynor Dr', 
      line2: 'Julieton, GA 29384',
      milesAway: 5.2 
    },
    phone: '904-920-4283',
    ratings: { 
      number: 311, 
      stars: 3, 
      good: 83, 
      timely: 83, 
      correct: 73 
    },
    schedule: {
      monFri: { delivery: '11:30am-6:00pm', pickup: '10:00am-10:00pm' },
      satSun: { delivery: '10:30am-8:00pm', pickup: '10:30am-8:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/tomato-mozzarella-2367016_1280.jpg',
    priceRange: 4,
    categories: [ 'Italian', 'Salads', 'Pizza', 'Soup', 'Dinner' ]
  },
  { 
    id: 74,
    name: 'Eatie Some Ziti',
    address: { 
      line1: '318 Johanna Island', 
      line2: 'Hettiebury, FL 30406',
      milesAway: 9.2 
    },
    phone: '869-873-6052',
    ratings: { 
      number: 299, 
      stars: 3, 
      good: 82, 
      timely: 93, 
      correct: 80 
    },
    schedule: {
      monFri: { delivery: '10:30am-8:30pm', pickup: '12:00pm-11:00pm' },
      satSun: { delivery: '10:00am-6:30pm', pickup: '10:00am-6:30pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/pasta-329522_1280.jpg',
    priceRange: 2,
    categories: [ 'Italian', 'Lunch', 'Pasta', 'Dinner' ]
  },
  { 
    id: 75,
    name: 'Little Roma',
    address: { 
      line1: '507 Rolfson Way', 
      line2: 'Reinhold, WV 22904',
      milesAway: 1.56 
    },
    phone: '295-642-6934',
    ratings: { 
      number: 163, 
      stars: 4.5, 
      good: 79, 
      timely: 77, 
      correct: 90 
    },
    schedule: {
      monFri: { delivery: '10:30am-9:00pm', pickup: '10:30am-11:30pm' },
      satSun: { delivery: 'Closed', pickup: 'Closed' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/pizza-1209748_1280.jpg',
    priceRange: 2,
    categories: [ 'Italian', 'Salads', 'Pizza', 'Soup', 'Dinner' ]
  },
  { 
    id: 76,
    name: 'Bella Bella Mozzarella',
    address: { 
      line1: '30 Jairo Circle', 
      line2: 'Ryanberg, SD 14078',
      milesAway: 4.42 
    },
    phone: '655-249-6145',
    ratings: { 
      number: 107, 
      stars: 5, 
      good: 95, 
      timely: 99, 
      correct: 98 
    },
    schedule: {
      monFri: { delivery: '10:30am-6:00pm', pickup: '10:30am-10:30pm' },
      satSun: { delivery: 'Closed', pickup: 'Closed' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/salad-2487775_1280.jpg',
    priceRange: 4,
    categories: [ 'Italian', 'Lunch', 'Salads', 'Seafood' ] 
  },
  { 
    id: 77,
    name: 'The Grapevine',
    address: { 
      line1: '674 Wyatt Causeway',
      line2: 'Nolachester, WI 18538',
      milesAway: 6.2 
    },
    phone: '958-638-9610',
    ratings: { 
      number: 428, 
      stars: 3.5, 
      good: 87, 
      timely: 88, 
      correct: 83 
    },
    schedule: {
      monFri: { delivery: '11:00am-7:30pm', pickup: '9:00am-10:30pm' },
      satSun: { delivery: '12:00pm-9:00pm', pickup: '12:00pm-9:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/tortellini-3578016_1280.jpg',
    priceRange: 2,
    categories: [ 'Italian', 'Pasta', 'Dinner', 'Lunch', 'Soup' ] 
  },
  { 
    id: 78,
    name: 'Silo & Olive',
    address: { 
      line1: '7873 Neoma Way', 
      line2: 'Kristo, ID 15412',
      milesAway: 0.93 
    },
    phone: '666-794-5716',
    ratings: { 
      number: 289, 
      stars: 4.5, 
      good: 91, 
      timely: 98, 
      correct: 93 
    },
    schedule: {
      monFri: { delivery: '11:30am-9:00pm', pickup: '12:00pm-10:30pm' },
      satSun: { delivery: 'Closed', pickup: 'Closed' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/salami-3296478_1280.jpg',
    priceRange: 3,
    categories: [ 'Italian', 'Pasta', 'Dinner', 'Pizza', 'Soup' ] 
  },
  { 
    id: 79,
    name: 'Bella Donna',
    address: { 
      line1: '3473 8th St', 
      line2: 'Lake Vicenta, WA 32382',
      milesAway: 0.02 
    },
    phone: '754-278-1467',
    ratings: { 
      number: 7, 
      stars: 3.5, 
      good: 91, 
      timely: 74, 
      correct: 73 
    },
    schedule: {
      monFri: { delivery: '11:30am-6:30pm', pickup: '11:00am-11:00pm' },
      satSun: { delivery: 'Closed', pickup: 'Closed' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/spaghetti-3547078_1280.jpg',
    priceRange: 5,
    categories: [ 'Italian', 'Seafood', 'Dinner', 'Pizza', 'Lunch' ] 
  },
  { 
    id: 80,
    name: 'Jay\'s Pizza',
    address: { 
      line1: '861 9th Ave', 
      line2: 'Shawnaberg, NY 47143',
      milesAway: 1.5 
    },
    phone: '951-686-2642',
    ratings: { 
      number: 61, 
      stars: 5, 
      good: 100, 
      timely: 98, 
      correct: 98 
    },
    schedule: {
      monFri: { delivery: '10:00am-8:30pm', pickup: '11:30am-11:00pm' },
      satSun: { delivery: 'Closed', pickup: 'Closed' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/pizza-1442946_1280.jpg',
    priceRange: 2,
    categories: [ 'Italian', 'Pizza', 'Lunch' ]  
  },
  { 
    id: 81,
    name: 'Whenaburger',
    address: { 
      line1: '3647 Floyd Lane',
      line2: 'South Lurline, MI 12390',
      milesAway: 1.75 
    },
    phone: '498-995-7815',
    ratings: { 
      number: 224, 
      stars: 3.5, 
      good: 85, 
      timely: 89, 
      correct: 85 
    },
    schedule: {
      monFri: { delivery: '11:00am-6:00pm', pickup: '11:00am-11:00pm' },
      satSun: { delivery: '12:00pm-6:00pm', pickup: '12:00pm-6:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/burger-74748_1280.jpg',
    priceRange: 1,
    categories: [ 'Hamburgers', 'Lunch', 'Dinner' ] 
  },
  { 
    id: 82,
    name: 'Gastro Niche',
    address: { 
      line1: '687 201st St', 
      line2: 'Dorothyburgh, RI 26767',
      milesAway: 4.2 
    },
    phone: '963-500-6971',
    ratings: { 
      number: 326, 
      stars: 5, 
      good: 95, 
      timely: 96, 
      correct: 100 
    },
    schedule: {
      monFri: { delivery: '10:00am-6:30pm', pickup: '12:00pm-10:30pm' },
      satSun: { delivery: '12:00pm-8:00pm', pickup: '12:00pm-8:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/burger-951896_1280.jpg',
    priceRange: 4,
    categories: [ 'Hamburgers', 'Drinks', 'Salads', 'Grill' ] 
  },
  { 
    id: 83,
    name: 'Knife and Bun',
    address: { 
      line1: '2923 Sunset Ave', 
      line2: 'Port Dena, KS 41204',
      milesAway: 0.66 
    },
    phone: '353-983-1691',
    ratings: { 
      number: 116, 
      stars: 4, 
      good: 89, 
      timely: 96, 
      correct: 96 
    },
    schedule: {
      monFri: { delivery: '11:00am-8:30pm', pickup: '11:00am-10:00pm' },
      satSun: { delivery: '10:00am-8:00pm', pickup: '10:00am-8:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/photo-1534790566855-4cb788d389ec.jpeg',
    priceRange: 4,
    categories: [ 'Hamburgers', 'Drinks', 'Salads', 'Dinner' ] 
  },
  { 
    id: 84,
    name: 'Four Guys',
    address: { 
      line1: '21201 Carmella Lane', 
      line2: 'Port Jalyn, UT 35760',
      milesAway: 0.07 
    },
    phone: '940-875-0702',
    ratings: { 
      number: 197, 
      stars: 4, 
      good: 90, 
      timely: 87, 
      correct: 94 
    },
    schedule: {
      monFri: { delivery: '10:00am-7:30pm', pickup: '10:00am-11:00pm' },
      satSun: { delivery: '11:30am-6:00pm', pickup: '11:30am-6:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/burger-2762371_1280.jpg',
    priceRange: 2,
    categories: [ 'Hamburgers', 'Lunch'] 
  },
  { 
    id: 85,
    name: 'Cheddar Block',
    address: { 
      line1: '558 19th Ave',
      line2: 'Maudville, DE 36926',
      milesAway: 1.44 
    },
    phone: '165-742-6165',
    ratings: { 
      number: 277, 
      stars: 2.5, 
      good: 73, 
      timely: 79, 
      correct: 90 
    },
    schedule: {
      monFri: { delivery: '11:30am-8:30pm', pickup: '10:00am-10:00pm' },
      satSun: { delivery: '10:00am-9:00pm', pickup: '10:00am-9:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/burger-500054_1280.jpg',
    priceRange: 4,
    categories: [ 'Hamburgers', 'Dinner' ] 
  },
  { 
    id: 86,
    name: 'Out & In',
    address: { 
      line1: '60627 N Israel Ave',
      line2: 'Port Abbigail, MN 12783',
      milesAway: 2.5 
    },
    phone: '682-827-9419',
    ratings: { 
      number: 248, 
      stars: 4.5, 
      good: 98, 
      timely: 95, 
      correct: 87 
    },
    schedule: {
      monFri: { delivery: '10:30am-6:00pm', pickup: '10:00am-11:30pm' },
      satSun: { delivery: '11:30am-8:00pm', pickup: '11:30am-8:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/burger-3442227_1280.jpg',
    priceRange: 1,
    categories: [ 'Hamburgers', 'Lunch' ] 
  },
  { 
    id: 87,
    name: 'Span Check',
    address: { 
      line1: '4030 McLaughlin Dr',
      line2: 'Kassulkeview, SC 38068',
      milesAway: 3.44 
    },
    phone: '894-544-4038',
    ratings: { 
      number: 377, 
      stars: 3, 
      good: 77, 
      timely: 81, 
      correct: 92 
    },
    schedule: {
      monFri: { delivery: '10:30am-6:00pm', pickup: '10:00am-11:30pm' },
      satSun: { delivery: 'Closed', pickup: 'Closed' } 
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/burger-3962997_1280.jpg',
    priceRange: 2,
    categories: [ 'Hamburgers', 'Lunch', 'Dinner', 'Grill' ] 
  },
  { 
    id: 88,
    name: 'Stout',
    address: { 
      line1: '853 Elwin Pkwy', 
      line2: 'Hesselport, ME 44271',
      milesAway: 1.4 
    },
    phone: '459-802-5578',
    ratings: { 
      number: 46, 
      stars: 3.5, 
      good: 82, 
      timely: 74, 
      correct: 86 
    },
    schedule: {
      monFri: { delivery: '11:00am-6:00pm', pickup: '11:00am-10:00pm' },
      satSun: { delivery: '10:30am-6:30pm', pickup: '10:30am-6:30pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/photo-1512152272829-e3139592d56f.jpeg',
    priceRange: 4,
    categories: [ 'Hamburgers', 'Dinner' ] 
  },
  { 
    id: 89,
    name: 'Shakes on the Shore',
    address: { 
      line1: '7728 Erich St', 
      line2: 'Denview, TX 82497',
      milesAway: 0.6 
    },
    phone: '902-613-3923',
    ratings: { 
      number: 78, 
      stars: 3.5, 
      good: 71, 
      timely: 99,
      correct: 93 
    },
    schedule: {
      monFri: { delivery: '10:30am-8:00pm', pickup: '12:00pm-10:30pm' },
      satSun: { delivery: '12:00pm-7:30pm', pickup: '12:00pm-7:30pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/burger-2034433_1280.jpg',
    priceRange: 2,
    categories: [ 'Hamburgers', 'Dessert', 'Salads' ] 
  },
  { 
    id: 90,
    name: 'Mother\'s Office',
    address: { 
      line1: '5826 14th Ave', 
      line2: 'Lake Golda, AR 11849',
      milesAway: 1.55 
    },
    phone: '767-592-4725',
    ratings: { 
      number: 31, 
      stars: 3.5, 
      good: 80, 
      timely: 77, 
      correct: 86 
    },
    schedule: {
      monFri: { delivery: '11:00am-9:00pm', pickup: '11:30am-11:30pm' },
      satSun: { delivery: 'Closed', pickup: 'Closed' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/burger-4145977_1280.jpg',
    priceRange: 5,
    categories: [ 'Hamburgers', 'Lunch', 'Dinner' ] 
  },
  { 
    id: 91,
    name: 'Brews, Brats and Burgs',
    address: { 
      line1: '197 Conn Pkwy', 
      line2: 'Montanaview, MA 21454',
      milesAway: 5.22 
    },
    phone: '873-287-5571',
    ratings: {
      number: 29, 
      stars: 4, 
      good: 83, 
      timely: 94, 
      correct: 88 
    },
    schedule: {
      monFri: { delivery: '11:30am-8:00pm', pickup: '12:00pm-11:00pm' },
      satSun: { delivery: '12:00pm-8:00pm', pickup: '12:00pm-8:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/photo-1550984754-8d1b067b0239.jpeg',
    priceRange: 4,
    categories: [ 'Hamburgers', 'Dinner', 'Salads', 'Grill' ] 
  },
  { 
    id: 92,
    name: 'Jack in the Circle',
    address: { 
      line1: '565 Brent Lane',
      line2: 'Lakeland, VT 33281',
      milesAway: 0.51 
    },
    phone: '982-384-3464',
    ratings: { 
      number: 15, 
      stars: 4, 
      good: 93, 
      timely: 82, 
      correct: 84 
    },
    schedule: {
      monFri: { delivery: '11:00am-8:30pm', pickup: '11:00am-11:00pm' },
      satSun: { delivery: '12:00pm-8:30pm', pickup: '12:00pm-8:30pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/snack-2635035_1280.jpg',
    priceRange: 1,
    categories: [ 'Hamburgers', 'Lunch' ] 
  },
  { 
    id: 93,
    name: 'Mahogany',
    address: { 
      line1: '305 Cassandre Dr',
      line2: 'Casey, TN 08933',
      milesAway: 4.9 
    },
    phone: '391-892-2526',
    ratings: {
      number: 211, 
      stars: 3.5,
      good: 88, 
      timely: 80, 
      correct: 75 
    },
    schedule: {
      monFri: { delivery: '11:00am-8:00pm', pickup: '9:00am-11:30pm' },
      satSun: { delivery: '11:30am-9:00pm', pickup: '11:30am-9:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/photo-1536510233921-8e5043fce771.jpeg',
    priceRange: 5,
    categories: [ 'Hamburgers', 'Dinner' ] 
  },
  { 
    id: 94,
    name: 'Big Mike\'s',
    address: { 
      line1: '15165 Amelie St',
      line2: 'Krisfort, KS 01588',
      milesAway: 1.56
    },
    phone: '354-273-6266',
    ratings: { 
      number: 184, 
      stars: 3.5, 
      good: 71, 
      timely: 94, 
      correct: 90 
    },
    schedule: {
      monFri: { delivery: '11:30am-6:00pm', pickup: '9:00am-10:00pm' },
      satSun: { delivery: '11:30am-6:00pm', pickup: '11:30am-6:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/hamburger-801942_1280.jpg',
    priceRange: 4,
    categories: [ 'Hamburgers', 'Lunch', 'Dinner'] 
  },
  { 
    id: 95,
    name: 'Ale House',
    address: { 
      line1: '12987 190th Ct E',
      line2: 'Maverick, IN 65902',
      milesAway: 0.55 
    },
    phone: '786-979-2973',
    ratings: { 
      number: 390, 
      stars: 4.5, 
      good: 97, 
      timely: 96, 
      correct: 80 
    },
    schedule: {
      monFri: { delivery: '10:30am-6:30pm', pickup: '11:30am-10:00pm' },
      satSun: { delivery: '11:00am-6:30pm', pickup: '11:00am-6:30pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/photo-1551615593-ef5fe247e8f7.jpeg',
    priceRange: 4,
    categories: [ 'Hamburgers', 'Salads', 'Dinner' ] 
  },
  { 
    id: 96,
    name: 'Craft Table',
    address: { 
      line1: '6782 Jannie Square', 
      line2: 'Wolfburgh, ID 04508',
      milesAway: 2.4 
    },
    phone: '332-222-0275',
    ratings: { 
      number: 484,
      stars: 5, 
      good: 95, 
      timely: 96, 
      correct: 96 
    },
    schedule: {
      monFri: { delivery: '10:00am-8:30pm', pickup: '10:00am-11:00pm' },
      satSun: { delivery: '11:00am-9:00pm', pickup: '11:00am-9:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/hamburger-1281855_1280.jpg',
    priceRange: 4,
    categories: [ 'Hamburgers', 'Dinner', 'Salads', 'Grill' ] 
  },
  { 
    id: 97,
    name: 'Sesame',
    address: { 
      line1: '1865 W Farrell Ave', 
      line2: 'Jesseborough, MD 13066',
      milesAway: 6.7 
    },
    phone: '881-186-7669',
    ratings: { 
      number: 220, 
      stars: 4, 
      good: 82, 
      timely: 85, 
      correct: 82 
    },
    schedule: {
      monFri: { delivery: '11:30am-6:30pm', pickup: '11:00am-10:00pm' },
      satSun: { delivery: '10:00am-6:30pm', pickup: '10:00am-6:30pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/hamburger-1414423_1280.jpg',
    priceRange: 4,
    categories: [ 'Hamburgers', 'Dinner', 'Salads' ] 
  },
  { 
    id: 98,
    name: 'Patty House',
    address: { 
      line1: '399 Zulauf St', 
      line2: 'Carlhaven, RI 62123',
      milesAway: 0.33 
    },
    phone: '747-236-8892',
    ratings: { 
      number: 136, 
      stars: 3, 
      good: 73, 
      timely: 91, 
      correct: 87 
    },
    schedule: {
      monFri: { delivery: '11:30am-6:00pm', pickup: '9:00am-10:00pm' },
      satSun: { delivery: '11:30am-6:00pm', pickup: '11:30am-6:00pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/photo-1550984754-8d1b067b0239.jpeg',
    priceRange: 1,
    categories: [ 'Hamburgers', 'Lunch', 'Salads' ] 
  },
  { 
    id: 99,
    name: 'Buffalo & Brew',
    address: { 
      line1: '7672 Jenkins Ave E',
      line2: 'Labadie, IA 73489',
      milesAway: 0.09 
    },
    phone: '735-931-4392',
    ratings: { 
      number: 151, 
      stars: 5, 
      good: 95, 
      timely: 97, 
      correct: 98 
    },
    schedule: {
      monFri: { delivery: '10:30am-7:30pm', pickup: '11:00am-11:00pm' },
      satSun: { delivery: '10:30am-6:30pm', pickup: '10:30am-6:30pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/burger-3199088_1280.jpg',
    priceRange: 2,
    categories: [ 'Hamburgers', 'Grill', 'Lunch', 'Dinner' ] 
  },
  { 
    id: 100,
    name: 'Geoff\'s Burgers',
    address: { 
      line1: '2936 N Douglas St',
      line2: 'East Louiefurt, SC 29233',
      milesAway: 3.32 
    },
    phone: '942-099-8805',
    ratings: { 
      number: 24, 
      stars: 3.5, 
      good: 92, 
      timely: 72, 
      correct: 82 
    },
    schedule: {
      monFri: { delivery: '11:30am-8:00pm', pickup: '10:30am-10:30pm' },
      satSun: { delivery: '11:00am-7:30pm', pickup: '11:00am-7:30pm' }
    },
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/burger-3946012_1280.jpg',
    priceRange: 2,
    categories: [ 'Hamburgers', 'Lunch' ] 
  }
];
