import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ListaRecetasComponent } from './components/recetas/lista-recetas/lista-recetas.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AppRoutingModule } from './app.routes';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';

import { AuthFireService } from './services/auth-fire.service';

import { FormsModule } from '@angular/forms';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import { NgRatingsModule } from './shared/app-rating/ng-ratings.module';
import { UsrImgPipe } from './pipes/usr-img.pipe';
// import { RecetasService } from './services/recetas.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    PageNotFoundComponent,
    NavbarComponent,
    ListaRecetasComponent,
    UsrImgPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    // AngularFireStorageModule // imports firebase/storage only needed for storage features
    FormsModule,
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.circleSwish,
      backdropBackgroundColour: 'rgba(0,0,0,0)',
      backdropBorderRadius: '4px',
      primaryColour: '#ff11aa',
      secondaryColour: '#ffff11',
      tertiaryColour: '#ff3344'
    }),
    NgRatingsModule
  ],
  providers: [AuthFireService],
  bootstrap: [AppComponent]
})
export class AppModule { }
