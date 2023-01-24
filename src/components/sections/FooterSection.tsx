import Text from '@/components/typography/Text';

export default function FooterSection() {
  return (
    <div className='flex items-center justify-center py-8'>
      <Text>
        &copy; {new Date().getFullYear()} saveat.co.uk. All rights reserved.
        Made with ❤️ by <a href='https://kamfeskaya.com'>Tatenda</a>
      </Text>
    </div>
  );
}
