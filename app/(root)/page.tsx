"use client";

import {
  useEffect,
  useState,
} from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { pilots } from '../mockedData';
import { Button } from '../components/Button/Button';
import { PilotPagination } from './PilotPagination/PilotPagination';

export default function Home() {
  const router = useRouter();
  const [
    currentPilot,
    setCurrentPilot,
  ] = useState(0);
  const [
    activeButton,
    setActiveButton,
  ] = useState(pilots[0]?.buttons[0]?.id);

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      router.push('/login');
    }
  }, [router]);

  if (!localStorage.getItem('token')) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Ładowanie...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex gap-[30px]">
        <Image
          src="/images/pilot.svg"
          alt="pilot"
          width={140}
          height={21}
        />
        <div>
          <h2 
            className="text-lg font-bold mb-[60px]"
            style={{
              color: 'var(--primary-blue)',
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '24px',
            }}
          >
            {pilots[currentPilot]?.title}
          </h2>
          
          <ul className="mt-8">
            {pilots[currentPilot]?.buttons?.map(button => (
              <li
                key={button.id}
                className="mb-4"
              >
                <Button
                  active={activeButton === button.id}
                  name={button.name}
                  onClick={() => setActiveButton(button.id)}
                  fullWidth
                />
              </li>
            ))}
          </ul>
          <p>Wybierz bramę, by otworzyć</p>
        </div>
      </div>
      <PilotPagination
        totalPilots={pilots.length}
        currentPilot={currentPilot}
        onPilotChange={pilotIndex => {
          setCurrentPilot(pilotIndex);
          setActiveButton(pilots[pilotIndex]?.buttons[0]?.id);
        }}
      />
    </>
  );
}
