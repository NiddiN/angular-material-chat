import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WrapperComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: 'chat',
        loadChildren: () => import('./pages/chat/chat.module')
          .then(m => m.ChatModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'chat',
      }
    ]
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/sign-in/sign-in.module')
      .then(m => m.SignInModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
