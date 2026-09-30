import { useState } from 'react';
import { MAX_CAPACITY } from '../constants/loginConst';

export function useParticipantRegistration() {
  const [participants, setParticipants] = useState([]);
  const [error, setError] = useState('');

  function registerParticipant(name) {
    const cleanName = name.trim();
    if (!cleanName) {
      setError('Ingresa un nombre válido.');
      return false;
    }
    if (participants.length >= MAX_CAPACITY) {
      setError('No hay cupos disponibles.');
      return false;
    }
    setParticipants([...participants, cleanName]);
    setError('');
    return true;
  }

  return {
    participants,
    registeredCount: participants.length,
    availableSlots: MAX_CAPACITY - participants.length,
    registerParticipant,
    error,
  };
}
