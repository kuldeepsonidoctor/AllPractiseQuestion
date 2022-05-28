import { LightningElement } from 'lwc';

export default class AssignmentFirst extends LightningElement {
    data=false
     showData(){
        this.data=this.data==false?true:false;

    }
   
}