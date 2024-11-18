import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './Components/app/app.config';
import { AppComponent } from './Components/app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
