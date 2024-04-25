import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { event } from './events';

@Injectable({
  providedIn: 'root'
})

export class EventsService {
   constructor() { }
  eventList : event[]=[
    {
      eventId:'12',
      eventName:'birthday',
      eventCompany:'magicblash',
      eventPrice:499,
      eventDescription:'Party Propz Birthday Decoration Items- ',
      eventImage:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT6O0ve4byEXtGV8SMz00akv1B81oSVzenyVl0w2oHLgJM4H9qwmq9Vh2yZqA58szKuatbP-4KMo-C6XOgqfHnweA5uOMpi63iGjRZSRmXD&usqp=CAE',
      eventEdit:false
    },
    {
      eventId:'41',
      eventName:'birthday',
      eventCompany:'magicblash',
      eventPrice:594,
      eventDescription:'party assets golden theme birthday backdrop for decoration',
      eventImage:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRusgeBsaXGpYbIv_dCaYNFrK2kbDZfjTfiWroH1uk3NrASP4VdKF2yRAq4a8k9otA_dDrwBp-S99Ua17qWp63mtli3-DmLDQmcE3R5ww4&usqp=CAE',
      eventEdit:false
    },
    {
      eventId:'8',
      eventName:'birthday',
      eventCompany:'magicblash',
      eventPrice:697,
      eventDescription:'party assets golden theme birthday backdrop for decoration',
      eventImage:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT1jmtAfPVWJ3h2xqbBS680WSXosqejKRC2K0pd6dsfAykzx3PYtOsiDQz9UmSCLTXKgpLcedJRtXYFgg29kEfX4G7uuvk472dwly0opgahAjEFBEUw-agEhQ&usqp=CAE',
      eventEdit:false
    },
    {
      eventId:'29',
      eventName:'anniversary',
      eventCompany:'magicblash',
      eventPrice:868,
      eventDescription:'Party Propz Happy Anniversary Decoration Kit For Bedroom -63 Items Set - Banner ...',
      eventImage:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQDjFV8ISLWDGYZk8mygFJWMBqI5G3VO6XFBFxuYlJlTVaiXxvBmaeVzvmhsCZ7fd3yMkV_T17v7I8ZkW6c5JEnprEnEFmPWUwsMhICFlvAuIX5lOLr8kiPBA&usqp=CAE',
      eventEdit:false
    },
    {
      eventId:'15',
      eventName:'anniversary',
      eventCompany:'magicblash',
      eventPrice:567,
      eventDescription:'Happy Anniversary Decoration Items Anniversary Lights For Decoration Anniversary ',
      eventImage:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSFhljjZRHjy2fb5LwJ08PW_IHOtUmpK7ZwJh_W2UgFG9eeU5qJXoCHkem_dWLoLdZ7KhtlMVprBrXVSIY2FFxsnlh8gBr6qITsvWKIsjk&usqp=CAE',
      eventEdit:false
    },
    {
      eventId:'25',
      eventName:'anniversary',
      eventCompany:'magicblash',
      eventPrice:799,
      eventDescription:'50th Anniversary Party Decoration Kit with Backdrop & Balloons Non Personalized ...',
      eventImage:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTpXwbbi7A2_sCcn63_xb-ea0vWPLqE8JW_nGID9Kx1pYQ5jxCrIavEZx14mek4kQw8QiQfFJvtUGTaQIIPRzYpDJYB1zTTP3akLevYpXE&usqp=CAE',
      eventEdit:false
    },
    {
      eventId:'36',
      eventName:'otherparties',
      eventCompany:'magicblash',
      eventPrice:548,
      eventDescription:'Party Propz Groom To Be Decoration Set- Huge Combo of 48 Pcs | Ring Balloon with ...',
      eventImage:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSiBoULAbestR9rFOgK2djc_pS1CyznV1EU-rK4cwusDD6NkLikwts1Fy-M1XLUqFmKgX1HvMDpmziCn7vG-ompX0NiyBylzbvfsPHR7q5E&usqp=CAE',
      eventEdit:false
    },
    {
      eventId:'259',
      eventName:'otherparties',
      eventCompany:'magicblash',
      eventPrice:569,
      eventDescription:'Party Propz Bride to Be Decoration Set Combo - 46Pcs Rose Gold Bachelorette Party ...',
      eventImage:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRrhvikL1ehdRaLhIYa4qW-_YCfMQ4YV_PL-Y8gw6JJR2Y6c3o4lUq9bMzl8rK1IRdcpJXbMqVK7keaetL-3m9xa3DdamBlNf0byzY3mWGA&usqp=CAE',
      eventEdit:false
    },
    {
      eventId:'97',
      eventName:'otherparties',
      eventCompany:'magicblash',
      eventPrice:699,
      eventDescription:'Party Propz Bride To Be Decoration Set Combo -62Pcs Bachelorette Party ...',
      eventImage:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSYZXRjQyNJetA_Pd5WZyjHQZpKO2UdQiiMUiXHLTpd-Tjal5H7ymCX_xq0-UsHaofOS-4gLuIcCu9eQ3zypOezxXOiUG_r4BO9fdA6ydsd&usqp=CAE',
      eventEdit:false
    },

      
  ]

  getEvents(){
    return of(this.eventList);
  }
  addEvents(event:event){
    this.eventList.push(event)
  }
  deleteEvent(prod:event){
    let res=this.eventList.findIndex(e=>e.eventId==prod.eventId);
    this.eventList.splice(res,1);
  }
  updateEvent(prod:event){
    let res=this.eventList.findIndex(e=>e.eventId==prod.eventId);
    this.eventList.splice(res,1,prod)
  }
}

