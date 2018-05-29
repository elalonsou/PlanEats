import { AuthFireService } from './auth-fire.service';
import { DashboardComponent } from './../components/dashboard/dashboard.component';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, QuerySnapshot } from 'angularfire2/firestore';
import { Receta } from '../models/receta';
import { Observable } from 'rxjs';
import { QueryDocumentSnapshot, DocumentChange } from '@firebase/firestore-types';


@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  private recetas: Receta[];

  private colRecetas: AngularFirestoreCollection = this.ngFireStr.collection('Recetas');

  constructor( public ngFireStr: AngularFirestore, private authFire: AuthFireService) { }

  getRecetasUsuario (): Promise<Receta[]> {
    const query = this.colRecetas.ref.where('UID_Usuario', '==', this.authFire.usr.uid);

    // --------- FUNCIONANDO -------------
    // Fijo - Devuelve los documentos una sola vez.
    return query.get().then( (querySnapshot: QuerySnapshot<any>) => {
      this.recetas = querySnapshot.docs.map( (documento) => {
        if (documento) {
          const receta = new Receta();
          receta.Id = documento.id;
          receta.FechaCreacion = documento.data()['FechaCreacion'];
          receta.Nombre = documento.data()['Nombre'];
          receta.Nota = documento.data()['Nota'];
          receta.UID_Usuario = documento.data()['UID_Usuario'];
          return receta;
        }
      });
      // console.log(this.recetas);
      return this.recetas;
    });
  }



  // **********************************************************************************************
  // *****************************       ACCESO SIMPLE      ***************************************
  // **********************************************************************************************

  // -------- OBTENER UN SOLO DOCUMENTO POR ID SUBCRIBIENDO A CAMBIOS -------
  // this.colRecetas.doc(ID_DOCUMENTO).valueChanges().subscribe( (data: Receta) => {
  //   console.log(receta);
  // }) ;



  // **********************************************************************************************
  // *******************************       CONSULTA      ******************************************
  // **********************************************************************************************
  // getWithQuery() {
      // --------- CONSULTA -------------
      // const query = this.colRecetas.ref.where('UID_Usuario', '==', '8mMBQCoLZzWblvQLuPV1IhdAcbv1');

      // --------- FUNCIONANDO -------------
      // Fijo - Devuelve los documentos una sola vez.
      // query.get().then( (querySnapshot: QuerySnapshot<any>) => {
      //   querySnapshot.forEach(
      //     doc => console.log( doc.data() )
      //   );
      // });

      // --------- FUNCIONANDO -------------
      // Escuchando - Solo devuelve documentos cambiados (al principio todos).
      // Con esta opcion nos subscribimos a los cambios en los documentos de la consulta.
      // Al principio devuelve todos los documentos. Luego cuando hay un cambio devuelve el documento
      // cambiado
      // query.onSnapshot( (snapshot: QuerySnapshot<any>) => {
      //   snapshot.docChanges().forEach( (change: DocumentChange) => {
      //     console.log(change.doc.data());
      //   });
      // });

      // ----------- FUNIONANDO -------------
      // Escuchando - Siempre devuelve todos los documentos.
      // Con esta opcion cada vez que algun documento cambie se devuelven todos los documentos.
      // query.onSnapshot( (snapshot: QuerySnapshot<any>) => {
      //   snapshot.docs.forEach( doc => console.log(doc.data()) );
      // });
  // }


// FORMA EJEMPLO JavaScript
//   getDocumentsInQuery (query) {
//     query.onSnapshot(function (snapshot) {
//       if (!snapshot.size) {
//         // return render();
//       }

//       console.log(snapshot);

//       snapshot.docChanges().forEach(function(change) {
//         console.log(change.doc.data());
//         // console.log(change.type);
//         // if (change.type === 'added') {
//         //   render(change.doc);
//         // }
//       });
//     });
//   }

}
