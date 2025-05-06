import { Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { authRoutes } from './routes/auth.routes';

const appTitle = "Angular-Exam";

export const routes: Routes = [
  {
    path: "",
    title: `Accueil - ${appTitle}`,
    pathMatch: "full",
    loadComponent: () => import("./components/landing-page/landing-page.component").then(m => m.LandingPageComponent)
  },
  {
    path: "auth",
    loadChildren: () => import("./routes/auth.routes").then(m => m.authRoutes)
  },
  {
    path: "error/404",
    title: `Erreur 404 - ${appTitle}`,
    loadComponent: () => import("./components/error/error.component").then(m => ErrorComponent)
  },
  {
    path: "**",
    redirectTo: "error/404"
  }
];
