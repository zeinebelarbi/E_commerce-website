import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PeoplelistComponent } from './peoplelist/peoplelist.component';
import {TreeTableModule} from 'primeng/treetable';
import {ButtonModule} from 'primeng/button';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ConfirmationdialogComponent } from './confirmationdialog/confirmationdialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { AdduserComponent } from './adduser/adduser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PeoplelistComponent,
    ForgetpasswordComponent,
    ConfirmationdialogComponent,
    AdduserComponent,
    UpdateuserComponent,
   
  ],
  imports: [
   BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    ReactiveFormsModule,
    TreeTableModule,
    ButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    TabMenuModule,
  
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
providers:[] ,
bootstrap: [AppComponent]
})
export class AppModule { }
