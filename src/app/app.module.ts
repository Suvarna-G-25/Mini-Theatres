import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { EventsComponent } from './events/events.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FoodComponent } from './food/food.component';
import { CakeComponent } from './cake/cake.component';
import { BouquetsComponent } from './bouquets/bouquets.component';
import { BookingComponent } from './booking/booking.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { AnniversaryComponent } from './anniversary/anniversary.component';
import { OtherpartiesComponent } from './otherparties/otherparties.component';
import { HiteccityComponent } from './hiteccity/hiteccity.component';
import { MiyapurComponent } from './miyapur/miyapur.component';
import { CartComponent } from './cart/cart.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AddeventsComponent } from './addevents/addevents.component';
import { ManageeventsComponent } from './manageevents/manageevents.component';
import { TheatersComponent } from './theaters/theaters.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserdashboardComponent,
    EventsComponent,
    NavbarComponent,
    FoodComponent,
    CakeComponent,
    BouquetsComponent,
    BookingComponent,
    BirthdayComponent,
    AnniversaryComponent,
    OtherpartiesComponent,
    HiteccityComponent,
    MiyapurComponent,
    CartComponent,
    AdmindashboardComponent,
    AddeventsComponent,
    ManageeventsComponent,
    TheatersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
