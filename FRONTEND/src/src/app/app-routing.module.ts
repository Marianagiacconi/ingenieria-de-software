import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { MantenedorpoemsComponent } from './pages/mantenedorpoems/mantenedorpoems.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { DefaultComponent } from './pages/default/default.component';
import { PoemaComponent } from './pages/poema/poema.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { AuthsessionGuard } from './guards/authsession.guard';

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'home', component: HomeComponent},
  { path:'login', component: LoginComponent},
  { path:'registro', component: RegistroComponent},
  { path:'usuario/:id/:tipo_op', component: UsuarioComponent, canActivate:[AuthsessionGuard] },
  { path:'usuarios', component: UsuariosComponent, canActivate:[AuthsessionGuard] },
  { path:'Mantenedor', component: MantenedorpoemsComponent, canActivate:[AuthsessionGuard] },
  { path:'poema', component: PoemaComponent},
  { path: '**', component: DefaultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
