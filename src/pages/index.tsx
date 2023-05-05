import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <p className='sr-only bg-red hover:bg-blue-700 text-3xl text-red-500'>test</p>Hello World
    </>
  );
}
