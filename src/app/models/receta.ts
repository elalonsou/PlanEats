import { Timestamp } from '@firebase/firestore-types';

export class Receta {
  UID_Usuario: string;
  Id: string;
  Nombre: string;
  Nota: number;
  FechaCreacion: Timestamp;

  get fechaCreacionFormateada(): string {
    return formatDate(this.FechaCreacion.toDate());
  }

}

function formatDate(date) {
  const monthNames = [
    'Enero', 'Febrero', 'Marzo',
    'Abril', 'Mayo', 'Junio', 'Julio',
    'Agosto', 'Septiembre', 'Octubre',
    'Noviembre', 'Deciembre'
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return day + ' ' + monthNames[monthIndex] + ' ' + year;
}

