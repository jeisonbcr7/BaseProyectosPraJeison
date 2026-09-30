import { useState } from 'react';
import { MAX_CAPACITY } from './constants/loginConst';
import { useParticipantRegistration } from './hooks/useLogin';

export function LoginLayout() {
  const [name, setName] = useState('');
  const { participants, registeredCount, availableSlots, registerParticipant } = useParticipantRegistration();

  function handleSubmit(event) {
    event.preventDefault();
    if (registerParticipant(name)) setName('');
  }

  return (
    <main>
      <h1>Registro de participantes</h1>
      <p>Capacidad máxima: {MAX_CAPACITY}</p>
      <p>Participantes registrados: {registeredCount}</p>
      <p>Cupos disponibles: {availableSlots}</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="participant-name">Nombre</label>{' '}
        <input id="participant-name" type="text" value={name}
          onChange={(event) => setName(event.target.value)} disabled={availableSlots === 0} />{' '}
        <button type="submit" disabled={availableSlots === 0}>Registrar</button>
      </form>

      <h2>Participantes</h2>
      {participants.length === 0 ? <p>No hay participantes registrados.</p> : (
        <ul>{participants.map((participant, index) => <li key={index}>{participant}</li>)}</ul>
      )}
    </main>
  );
}

export default LoginLayout;
