
import { LightningElement, track } from 'lwc';
import accountData from '@salesforce/apex/accountController.accountData';
export default class AssignmentTwo extends LightningElement {
    @track accountData;
     renderedCallback(){
        accountData().then(res=>{
           this.accountData=res;
           console.log(this.accountData)
        }).catch(err=>{
            console.log(err);
        })
    }
}