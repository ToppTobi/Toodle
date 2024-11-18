import {bootstrapApplication} from '@angular/platform-browser';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {AppComponent} from "./Components/app/app.component"; // Importiere die Routing-Konfiguration

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes) // Router bereitstellen
  ]
}).catch(err => console.error(err));
