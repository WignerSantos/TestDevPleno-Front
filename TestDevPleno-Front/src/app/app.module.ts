import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';

import { ToastrModule } from 'ngx-toastr';

// Form in Angular
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Rest requests
import { HttpClientModule, HttpContext } from '@angular/common/http';

// Components imports from Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { AuthInterceptorProvider } from './interceptor/auth-interceptor.interceptor';

// Home Component
import { HomeDeleteComponent } from './components/home-delete/home-delete.component';
import { HomeListOneComponent } from './components/home-list-one/home-list-one.component';
import { HomeCreateComponent } from './components/home-create/home-create.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeDeleteComponent,
    HomeListOneComponent,
    HomeCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Forms
    FormsModule,
    ReactiveFormsModule,
    // HTTP Request
    HttpClientModule,
    // Angular Material
    MatButtonModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true
    })
  ],
  providers: [
    AuthInterceptorProvider,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
