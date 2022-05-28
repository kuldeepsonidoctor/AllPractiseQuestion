import { LightningElement } from 'lwc';

export default class Iterator extends LightningElement {
    status='show';
    selectedButton='red';
     redBox=()=>{
        this.selectedButton='red';
        console.log(this.selectedButton);
     }
     greenBox=()=>{
        this.selectedButton='green';
     }
     get getData(){
         return this.selectedButton=='red'? 'btn-red':'btn-green';
     }
     get getStatus(){
         return this.status=='show'?'btn':'';
     }
     updateStatus=()=>{
         this.status=this.status=='show'?'Hide':'show';
     }
}