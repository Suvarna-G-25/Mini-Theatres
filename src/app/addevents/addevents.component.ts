import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-addevents',
  templateUrl: './addevents.component.html',
  styleUrl: './addevents.component.css'
})
export class AddeventsComponent {
  eventId:any;
  eventName:any;
  eventCompany:any;
  eventPrice:any;
  eventDescription:any;
  eventImage:any;
  newEvent:any;
  constructor(private service :EventsService,private router :Router){}
  addEvents(){
    this.newEvent={
      eventId:this.eventId,
      eventName:this.eventName,
      eventCompany:this.eventCompany,
      eventPrice:this.eventPrice,
      eventDescription:this.eventDescription,
      eventImage:this.eventImage
    }
    this.service.addEvents(this.newEvent);
    Swal.fire({
      title:"success",
      text:"Product added successfully",
      icon:"success"
    });
    this.router.navigateByUrl("/admin/events");
  }
}

