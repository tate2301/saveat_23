import { NotificationBellIcon } from '@/components/icons';
import Heading from '@/components/typography/Heading';

export default function Navbar() {
  return (
    <div className='flex items-center justify-between'>
      <Heading>saveat.co.uk</Heading>
      <button className='flex items-center rounded-full bg-slate-700 p-2 text-white'>
        <NotificationBellIcon />
      </button>
    </div>
  );
}
