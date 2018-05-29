import { Timestamp } from '@firebase/firestore-types';

export class Receta {
  UID_Usuario: string;
  Id: string;
  Nombre: string;
  Nota: number;
  FechaCreacion: Timestamp;
}
