import Dexie from 'dexie';

export const db = new Dexie('MEAEFDatabase');

db.version(1).stores({
  hiem: '++id, hiemId, periodoId, semanaId, fechaCreacion, completada',
  progreso: '++id, periodoId, semanaId, sesion, completada, fechaCompletada, [periodoId+semanaId+sesion]',
  insignias: '++id, insigniaId, fechaObtenida',
  configuracion: 'clave, valor'
});

export async function guardarHIEM(hiemId, datos) {
  const existente = await db.hiem.where('hiemId').equals(hiemId).first();
  if (existente) {
    await db.hiem.update(existente.id, { ...datos, fechaModificacion: new Date() });
  } else {
    await db.hiem.add({ hiemId, ...datos, fechaCreacion: new Date() });
  }
}

export async function cargarHIEM(hiemId) {
  return await db.hiem.where('hiemId').equals(hiemId).first();
}

export async function marcarProgreso(periodoId, semanaId, sesion) {
  const existente = await db.progreso
    .where('[periodoId+semanaId+sesion]')
    .equals([periodoId, semanaId, sesion])
    .first();
  if (!existente) {
    await db.progreso.add({ periodoId, semanaId, sesion, completada: true, fechaCompletada: new Date() });
  }
}

export async function obtenerProgreso() {
  return await db.progreso.toArray();
}

export async function desbloquearInsignia(insigniaId) {
  const existente = await db.insignias.where('insigniaId').equals(insigniaId).first();
  if (!existente) {
    await db.insignias.add({ insigniaId, fechaObtenida: new Date() });
    return true; // nueva insignia
  }
  return false;
}

export async function obtenerInsignias() {
  return await db.insignias.toArray();
}

export async function contarHIEMCompletadas() {
  return await db.hiem.where('completada').equals(1).count();
}
