"use client";
import React from "react";
import dynamic from 'next/dynamic';

// Dynamically import PianoTutorial to ensure it's only rendered on the client side
const PianoTutorial = dynamic(() => import('./PianoTutorial'), { ssr: false });

const PlayerPage: React.FC = () => {
  // This is a dummy function for onMidiMessage, as we are not connecting to a real MIDI device here.
  // In a real scenario, this would be passed down from a parent component that handles MIDI input.
  const handleMidiMessage = (callback: (data: Uint8Array) => void) => {
    // You can simulate MIDI messages here for testing purposes if needed.
    // For example, to simulate a note on for C4 (MIDI 60) with velocity 100:
    // callback(new Uint8Array([0x90, 60, 100]));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Piano Tutorial Player</h1>
      <p>This page demonstrates the PianoTutorial component with a sample AlphaTab file.</p>
      <PianoTutorial file="/windy_hill.musicxml" onMidiMessage={handleMidiMessage} />
    </div>
  );
};

export default PlayerPage;
