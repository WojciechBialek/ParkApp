"use client";

import { useState } from 'react';
import Image from 'next/image';

import { pilots } from '../mockedData';
import { Button } from '../components/Button/Button';
import { PilotPagination } from './PilotPagination/PilotPagination';

export default function Home() {
  const [
    currentPilot,
    setCurrentPilot,
  ] = useState(0);
  const [
    activeButton,
    setActiveButton,
  ] = useState(pilots[0]?.buttons[0]?.id);

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
