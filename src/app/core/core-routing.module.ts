import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ChatComponent } from './pages/chat/chat.component';

const routes: Routes = [
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/sign-in/sign-in.module')
      .then(m => m.SignInModule)
    // component: SignInComponent
  },
  // {
  //   path: 'chat',
  //   component: ChatComponent,
  //   loadChildren: () => import('./pages/chat/chat.module')
  //     .then(m => m.ChatModule)
  // },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sign-in',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
