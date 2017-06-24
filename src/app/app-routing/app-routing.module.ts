import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { NotFoundComponent } from "app/not-found/not-found.component";
import { LoginComponent } from "app/login/login.component";
import { AuthGuard } from "app/auth.guard";


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'main/:user', loadChildren: 'app/body/body.module#BodyModule', canActivate: [AuthGuard] },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  providers:[AuthGuard],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}