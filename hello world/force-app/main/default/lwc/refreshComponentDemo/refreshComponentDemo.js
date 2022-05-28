import { LightningElement ,wire} from 'lwc';
import getRecords from '@salesforce/apex/refreshApexController.getRecords';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import {updateRecord} from 'lightning/uiRecordApi';
import {refreshApex} from  '@salesforce/apex';
const column=[
    {label:'First name',fieldName:'FirstName',editable:true},
    {label:'Last name',fieldName:'LastName',editable:true},
    {label:'Email',fieldName:'Email',type:'email'}
]
export default class RefreshComponentDemo extends LightningElement {
    col=column;
    //use col variable not column in html tag
    draftValues=[]
  
@wire(getRecords)
contact;

get isContactAvailable(){
    console.log(JSON.stringify(this.contact))
    return this.contact && this.contact.data && this.contact.data.length>0?'yes':'no';
}
handleSave(event){
   console.log(event.detail.draftValues);
   //event.detail.draftValues do change in the real value not make the copy so we use slice because 
   //returns array
   const recordInputs=event.detail.draftValues.slice().map(draft=>{
       const fields=Object.assign({},draft);
       return {fields};
   })
   console.log(recordInputs);
   const promises=recordInputs.map(recordIn=>updateRecord(recordIn));
   
  Promise.all(promises).then(result=>{
       console.log('promise kiye hai')
     this.showTomsg('Success','Contacts Updated');
     this.draftValues=[];
     return refreshApex(this.contact);
   }).catch(error=>{
    console.log('promise Nahi kiye hai')
     this.showTomsg('Error Creating Record',error.body.message,error);
   })
}
showTomsg(titlee,messagee,variante){
    this.dispatchEvent(
        new ShowToastEvent({
        title:titlee,
        message:messagee,
        variant:variante||'Success'
    }));
}
// data come from default org database not from your pre login org database means you have to make new data 
// in the default org
// It takes some time to load the data so wait while consoleing

}