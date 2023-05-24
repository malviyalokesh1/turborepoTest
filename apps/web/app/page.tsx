'use client';
import { Button } from 'ui/atoms';

import '../../../packages/ui/styles/globals.css';

export default function Page() {
  const clickHandler = () => {
    alert('Booop form web!');
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen w-screen bg-purple-50'>
      <div className='flex items-center justify-evenly h-1/4 w-full'>
        <Button variant='primary' clickHandler={clickHandler}>
          Booop
        </Button>
        <Button variant='outline' clickHandler={clickHandler}>
          Booop
        </Button>
      </div>
      <div className='flex items-center justify-evenly h-1/4 w-full'>
        <Button
          variant='light'
          clickHandler={clickHandler}
          className='!text-black'
        >
          Booop
        </Button>
        <Button variant='dark' clickHandler={clickHandler} disabled>
          Booop
        </Button>
      </div>
    </div>
  );
}
