import { LightningElement, wire ,track} from 'lwc';
import getallrelatedcon from '@salesforce/apex/getallRaces.getallrelatedcon';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
import FullCalendarJS from '@salesforce/resourceUrl/FullCalendarJS';
import { NavigationMixin } from 'lightning/navigation';
import getstarttimr from '@salesforce/apex/getallRaces.getstarttimr'
import getendtime from '@salesforce/apex/getallRaces.getendtime'
import fetchAllEvents from '@salesforce/apex/getallRaces.fetchAllEvents'
import insertevent from '@salesforce/apex/getallRaces.insertevent'
import getallevent from '@salesforce/apex/getallRaces.getallevent'
import uId from '@salesforce/user/Id';


export default class Scheduleevents extends NavigationMixin(LightningElement) {
    fullCalendarJsInitialised = false;
    @track allEvents = [];
    @track selectedEvent = undefined;
    datetogetscheduledevent;
    getevents;
    regularpopup;
    differpop=false;
    whoidcon;
    Fields={
        Subject:'Meeting',
        WhoId:'',
        OwnerId:'0055j000005HFfaAAG',
        WhatId:'0015j00000Yui4gAAB',
        startdate:'',
        startdatetimr:'',
        enddatetime:''
    }
    relatedShowModal=false;
    endtimemeet
    contactname
    dateofmeeting
    timeofmeeting
    allcontactname
    @wire(getallrelatedcon)
    getthedata({data,error}){
        console.log(data);
        console.log(error);
        if(data){
        this.allcontactname = data;
        }
      
    }
    popup(e){
        console.log('aaya');
        this.relatedShowModal=this.relatedShowModal===false?true:false;
        this.regularpopup=true;
        this.dateofmeeting=e.target.value;
    }
    changeHandler(event){
        this.contactname= event.target.value;
      
    }
    handleClicksave(){
       
        this.allcontactname.map(item=>{
            if(this.contactname===item.Name){
                this.whoidcon=item.Id;
                
                this.Fields={...this.Fields,['WhoId']: this.whoidcon}
                console.log('mmeee');
            }
        })
        // getstarttimr({stim:this.timeofmeeting,datim:this.dateofmeeting}).then(
        //     res=>{
        //         console.log('start');
        //         console.log(res)

        //         this.Fields={...this.Fields,['StartDateTime']:res}
        //     }
        // ).catch(err=>{
        //     console.log(err);
        // });
        // getendtime({etim:this.endtimemeet,datim:this.dateofmeeting}).then(
        //     res=>{
        //         console.log('end');
        //         console.log(res)
        //         this.Fields={...this.Fields,['EndDateTime']: res}

        //     }
        // ).catch(
        //     err=>{
        //         console.log(err);
        //     }
        // );
       
        // fields[Subject.fieldApiName]=this.Fields.Subject;
        
        // fields[WhoId.fieldApiName]=this.Fields.WhoId;
        // fields[OwnerId.fieldApiName]=this.Fields.OwnerId;
        // fields[WhatId.fieldApiName]=this.Fields.WhatId;
        // fields[StartDateTime.fieldApiName]=this.Fields.StartDateTime;
        // fields[EndDateTime.fieldApiName]=this.Fields.EndDateTime;
        this.Fields={...this.Fields,['startdate']: this.dateofmeeting}
        this.Fields={...this.Fields,['startdatetimr']: this.timeofmeeting}
        this.Fields={...this.Fields,['enddatetime']: this.endtimemeet}
     console.log(this.whoidcon);
     console.log(this.timeofmeeting);
     console.log(this.contactname);
     console.log(this.endtimemeet);
     console.log(this.Fields);

    }
    timeee(e){
      this.timeofmeeting=e.target.value;
      
    }
    endtime(e){
      this.endtimemeet=e.target.value;
    }
   back(){
    this.relatedShowModal=this.relatedShowModal===false?true:false;    
    this.regularpopup=false;
    this.differpop=false;
    insertevent({Subject:this.Fields.Subject,WhoI:this.Fields.WhoId,OwnerId:this.Fields.OwnerId,WhatI:this.Fields.WhatId,startdate:this.Fields.startdate,starttime:this.Fields.startdatetimr,endtime:this.Fields.enddatetime}).then(res=>{
        console.log('getsom');
        if(res){
            alert('Data is not inserted because This Time Slot is');
        }
        console.log(res)}).catch(err=>{console.log(err)});
        
   }
   popupdifferent(e){
    this.relatedShowModal=this.relatedShowModal===false?true:false;
       this.differpop=true;
       console.log('va re va');
       this.datetogetscheduledevent=e.target.value;
       console.log(this.datetogetscheduledevent);
       getallevent({dat:this.datetogetscheduledevent}).then(res=>{
        console.log('saare aaye'); 
        this.getevents=res;  
        console.log(res)}).catch(err=>{console.log(err)});
   }
   renderedCallback() {

    // Performs this operation only on first render
    if (this.fullCalendarJsInitialised) {
      return;
    }
    this.fullCalendarJsInitialised = true;

    // Executes all loadScript and loadStyle promises
    // and only resolves them once all promises are done
    Promise.all([
      loadScript(this, FullCalendarJS + '/FullCalendarJS/jquery.min.js'),
      loadScript(this, FullCalendarJS + '/FullCalendarJS/moment.min.js'),
      loadScript(this, FullCalendarJS + '/FullCalendarJS/theme.js'),
      loadScript(this, FullCalendarJS + '/FullCalendarJS/fullcalendar.min.js'),
      loadStyle(this, FullCalendarJS + '/FullCalendarJS/fullcalendar.min.css'),
      // loadStyle(this, FullCalendarJS + '/fullcalendar.print.min.css')
    ])
    .then(() => {
      // Initialise the calendar configuration
      this.getAllEvents();
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error({
        message: 'Error occured on FullCalendarJS',
        error
      });
    })
  }

  /**
   * @description Initialise the calendar configuration
   *              This is where we configure the available options for the calendar.
   *              This is also where we load the Events data.
   */
  initialiseFullCalendarJs() {
    const ele = this.template.querySelector('div.fullcalendarjs');
    // eslint-disable-next-line no-undef
    $(ele).fullCalendar({
      header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,basicWeek,basicDay,listWeek'
      },
      themeSystem : 'standard',
      defaultDate: new Date(), 
      navLinks: true,
      editable: true,
      eventLimit: true,
      events: this.allEvents,
      dragScroll : true,
      droppable: true,
      weekNumbers : true,
      eventDrop: function(event, delta, revertFunc) {
        alert(event.title + " was dropped on " + event.start.format());
        if (!confirm("Are you sure about this change? ")) {
          revertFunc();
        }
      },
      eventClick: function(event, jsEvent, view) {
        alert('Event Clicked '+event.title)
        this.selectedEvent =event;
        console.log(this.selectedEvent)
      },
      dayClick :function(date, jsEvent, view) {
        jsEvent.preventDefault();
        
      },
      eventMouseover : function(event, jsEvent, view) {
      }
    });
  }

  getAllEvents(){
      fetchAllEvents()
      .then(result => {
        this.allEvents = result.map(item => {
          return {
            id : item.Id,
            editable : true,
            title : item.Subject,
            start : item.ActivityDate,
            end : item.EndDateTime,
            description : item.Description,
            allDay : false,
            extendedProps : {
              whoId : item.WhoId,
              whatId : item.WhatId
            },
            backgroundColor: "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")",
            borderColor: "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")"
          };
        });
        // Initialise the calendar configuration
        this.initialiseFullCalendarJs();
      })
      .catch(error => {
        window.console.log(' Error Occured ', error)
      })
      .finally(()=>{
        //this.initialiseFullCalendarJs();
      })
  }

  closeModal(){
    this.selectedEvent = undefined;
  }
   
}