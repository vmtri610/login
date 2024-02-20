import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"simplechat-dc456","appId":"1:226786736714:web:d6794a8f36da0e36aa04b3","storageBucket":"simplechat-dc456.appspot.com","apiKey":"AIzaSyCqHYPjqAuLRQk49WxylgVPLszWd2Wz8v4","authDomain":"simplechat-dc456.firebaseapp.com","messagingSenderId":"226786736714","measurementId":"G-T3JXV23W8R"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideMessaging(() => getMessaging())), importProvidersFrom(provideStorage(() => getStorage()))]
};
