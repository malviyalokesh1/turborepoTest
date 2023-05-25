'use client';
import { Button } from 'ui/atoms';

import 'ui/styles/globals.css';

export default function Page() {
  const clickHandler = (prop) => {
    alert(`${prop} form docs!`);
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen w-screen bg-red-50'>
      <div className='flex flex-col items-center justify-evenly h-1/4 w-full'>
        <h1 className='text-9xl text-black font-bold'>Hi there, I'm Doc!</h1>
      </div>
      <div className='flex items-center justify-evenly h-1/4 w-1/2'>
        <Button
          variant='primary'
          clickHandler={() => clickHandler('Boooooooop')}
          text='Boop'
        />
        <Button
          variant='outline'
          clickHandler={() => clickHandler('Boooooooop')}
          text='Boop'
        />
        <Button
          variant='light'
          clickHandler={() => clickHandler('Beeeeeeeep')}
          text='Beep'
          className='!text-black'
        />

        <Button variant='dark' text='Shhhh!!' disabled />
      </div>
    </div>
  );
}
