import { Offer, Review } from '@/lib/types';

export const OffersDataStore: Array<Offer> = [
  {
    picture_url: '/images/eagle.png',
    title: 'Greggs meal for $3',

    description:
      'Save £3 off a jumbo sausage egg  roll and black coffee before 10a..',
    discount: '$3',
    user: {
      display_name: 'Greggs',
      profile_picture_url: '/images/gregs_logo.png',
    },
  },
  {
    picture_url: '/images/landscape.png',
    title: 'Offer Title',

    description: 'Offer Description. Sometimes with expiry date and long te..',
    discount: '$3',
    user: {
      display_name: 'Greggs',
      profile_picture_url: '/images/sf.png',
    },
  },
  {
    picture_url: '/images/eagle.png',
    title: 'Greggs meal for $3',

    description:
      'Save £3 off a jumbo sausage egg  roll and black coffee before 10a..',
    discount: '$3',
    user: {
      display_name: 'Greggs',
      profile_picture_url: '/images/gregs_logo.png',
    },
  },
  {
    picture_url: '/images/landscape.png',
    title: 'Another Offer',
    description:
      'Performs a recursive search on a collection, with options for restricting the search by recursion depth and query filter.',
    discount: '$3',
    user: {
      display_name: 'Greggs',
      profile_picture_url: '/images/gregs_logo.png',
    },
  },
];

export const ReviewsDataStore: Array<Review> = [
  {
    user: {
      display_name: 'Greggs',
      profile_pic_url: '/images/sf.png',
    },
    rating: 4.0,
    text: "I've been using this for a while now and it's great.",
  },
  {
    user: {
      display_name: 'Kamfes',
      profile_pic_url: '/images/snowguy.png',
    },
    rating: 4.3,
    text: "I love this app. It's so easy to use and I love the fact that I can save money on my favorite stores.",
  },
  {
    user: {
      display_name: 'Tatenda',
      profile_pic_url: '/images/asia.png',
    },
    rating: 4.5,
    text: 'I love this app. It is so useful and easy to use.',
  },
];

export const FavoriteStoresDataStore = [];
