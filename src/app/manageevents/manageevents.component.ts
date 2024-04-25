import { Component } from '@angular/core';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-manageevents',
  templateUrl: './manageevents.component.html',
  styleUrl: './manageevents.component.css'
})
export class ManageeventsComponent {
  constructor(private service:EventsService){}
  delete(e:any){
    this.service.deleteEvent(e);
    alert("product deleted successfully");
  }
  toSave(e:any){
      e.eventEdit=false;
      this.service.updateEvent(e);
      alert("product updated successfully");
  }
  toUpdate(e:any){
    e.eventEdit=true;
  }
  events:any;
  ngOnInit(){
    this.service.getEvents().subscribe((res)=>{
      this.events=res;
    });
  }
}

