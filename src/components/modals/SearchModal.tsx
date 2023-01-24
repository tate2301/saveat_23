import FilterButton from '@/components/buttons/FilterButton';
import { SearchIcon } from '@/components/icons';

const SearchTrigger = () => (
  <div className='flex items-center gap-4 rounded-full border border-slate-700  text-white '>
    <div className='pl-4 md:pl-6'>
      <SearchIcon />
    </div>
    <input
      className='w-full bg-transparent py-4 focus:outline-none md:py-6'
      name='search'
      id='search'
      placeholder='Unlock unbeatable deals with Saveat.co.uk'
      autoComplete='off'
    />
    <div className='pr-4 md:pr-6'>
      <FilterButton />
    </div>
  </div>
);

export default function SearchModal() {
  return (
    <>
      <SearchTrigger />
    </>
  );
}
