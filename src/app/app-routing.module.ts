import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { FoodComponent } from './food/food.component';
import { CakeComponent } from './cake/cake.component';
import { BouquetsComponent } from './bouquets/bouquets.component';
import { BookingComponent } from './booking/booking.component';
import { EventsComponent } from './events/events.component';
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

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'user',component:UserdashboardComponent,
  children:[
  {path:'home',component:HomeComponent},
  {path:'food',component:FoodComponent},
  {path:'cake',component:CakeComponent},
  {path:'bouquets',component:BouquetsComponent},
  {path:'booking',component:BookingComponent},
  {path:'events',component:EventsComponent},
  {path:'birthday',component:BirthdayComponent},
  {path:'anniversary',component:AnniversaryComponent},
  {path:'otherparties',component:OtherpartiesComponent},
  {path:'hiteccity',component:HiteccityComponent},
  {path:'miyapur',component:MiyapurComponent},
  {path:'cart',component:CartComponent}
  ]},
  {path:'admin',component:AdmindashboardComponent,
  children:[
    {path:'home',component:HomeComponent},
    {path:'addevents',component:AddeventsComponent},
    {path:'events',component:EventsComponent},
    {path:'birthday',component:BirthdayComponent},
    {path:'anniversary',component:AnniversaryComponent},
    {path:'otherparties',component:OtherpartiesComponent},
    {path:'manageevents',component:ManageeventsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
