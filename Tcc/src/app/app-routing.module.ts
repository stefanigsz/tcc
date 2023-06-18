import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cadastrar',
    loadChildren: () => import('./cadastrar/cadastrar.module').then( m => m.CadastrarPageModule)
  },
  {
    path: 'ongs',
    loadChildren: () => import('./ongs/ongs.module').then( m => m.OngsPageModule)
  },
  {
    path: 'trans',
    loadChildren: () => import('./trans/trans.module').then( m => m.TransPageModule)
  },
  {
    path: 'entrevistas',
    loadChildren: () => import('./entrevistas/entrevistas.module').then( m => m.EntrevistasPageModule)
  },
  {
    path: 'figuras',
    loadChildren: () => import('./figuras/figuras.module').then( m => m.FigurasPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'davinci',
    loadChildren: () => import('./davinci/davinci.module').then( m => m.DavinciPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
