const baseUrl = import.meta.env.VITE_APP_BACKEND_URL;

export const dueñoService = {
  crearDueño,
  buscarPorEmail,
  obtenerPorId
};

async function crearDueño(dueñoData) {
  const response = await fetch(`${baseUrl}/api/dueños`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dueñoData)
  });

  if (!response.ok) {
    throw new Error('Error al crear el dueño');
  }

  return response.json();
}

async function buscarPorEmail(email) {
  const response = await fetch(`${baseUrl}/api/dueños/email/${encodeURIComponent(email)}`);

  if (!response.ok) {
    throw new Error('Dueño no encontrado por email');
  }

  return response.json();
}

async function obtenerPorId(id) {
  const response = await fetch(`${baseUrl}/api/dueños/${id}`);

  if (!response.ok) {
    throw new Error('Dueño no encontrado por ID');
  }

  return response.json();
}
