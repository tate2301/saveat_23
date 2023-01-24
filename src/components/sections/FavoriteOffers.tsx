import { Offers } from '@/lib/data';

import OfferCard from '@/components/cards/OfferCard';
import Text from '@/components/typography/Text';

export default function FavoriteOffers() {
  return (
    <div className='flex flex-col gap-6'>
      <Text className='text-3xl font-medium'>Our Favorite Offers</Text>
      <div className='flex gap-4 lg:grid lg:grid-cols-4'>
        {Offers.map((offer) => (
          <OfferCard {...offer} key={offer.title} />
        ))}
      </div>
    </div>
  );
}
