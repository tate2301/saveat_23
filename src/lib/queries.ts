import { OffersDataStore, ReviewsDataStore } from '@/lib/data';

export const getFavoriteStores = async () => {
  const data = 'Ok';
  await new Promise((r) => setTimeout(r, 1000));
  return data;
};

export const getFavoriteOffers = async () => {
  const data = OffersDataStore;
  await new Promise((r) => setTimeout(r, 1000));
  return data;
};

export const getReviews = async () => {
  const data = ReviewsDataStore;
  await new Promise((r) => setTimeout(r, 1000));
  return data;
};

export const getTrendingStores = async () => {
  const data = 'Ok';
  await new Promise((r) => setTimeout(r, 1000));
  return data;
};
