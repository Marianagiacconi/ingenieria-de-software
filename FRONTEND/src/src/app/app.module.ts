import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { FootComponent } from './components/foot/foot.component';
import { PagComponent } from './components/pag/pag.component';
import { ViewPoemasComponent } from './components/view-poemas/view-poemas.component';
import { MantenedorpoemsComponent } from './pages/mantenedorpoems/mantenedorpoems.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { LstextComponent } from './components/lstext/lstext.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PoemaComponent } from './pages/poema/poema.component';
import { AbmUsuarioComponent } from './components/abm-usuario/abm-usuario.component';
import { ViewUsuariosComponent } from './components/view-usuarios/view-usuarios.component';
import { UsersService } from './services/users.service';
import { PoemsService } from './services/poems.service';
import { LoginService } from './services/login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoemComponent } from './pages/poem/poem.component';
import { AuthInterceptor } from './interceptor/auth.interceptor.interceptor';
import { LikesComponent } from './likes/likes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    RegistroComponent,
    FootComponent,
    PagComponent,
    ViewPoemasComponent,
    MantenedorpoemsComponent,
    UsuarioComponent,
    UsuariosComponent,
    LstextComponent,
    PoemaComponent,
    AbmUsuarioComponent,
    ViewUsuariosComponent,
    PoemComponent,
    LikesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [PoemsService, UsersService, LoginService,

    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {}
