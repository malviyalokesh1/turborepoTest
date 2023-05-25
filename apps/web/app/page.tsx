'use client';
import { Button } from 'ui/atoms';

import '../../../packages/ui/styles/globals.css';

export default function Page() {
  const clickHandler = () => {
    alert('Booop form web!');
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen w-screen bg-purple-50'>
      <div className='flex flex-col items-center justify-evenly h-1/4 w-full'>
        <h1 className='text-9xl text-black font-bold'>Hi there, I'm Web!</h1>
      </div>
      <div className='flex items-center justify-evenly h-1/4 w-1/2'>
        <Button variant='primary' clickHandler={clickHandler}>
          Boop
        </Button>
        <Button variant='outline' clickHandler={clickHandler}>
          Boop
        </Button>
        <Button
          variant='light'
          clickHandler={clickHandler}
          className='!text-black'
        >
          Beep
        </Button>
        <Button variant='dark' clickHandler={clickHandler} disabled>
          Beep
        </Button>
      </div>
    </div>
  );
}
