import { LightningElement,wire } from 'lwc';
import getRecords from '@salesforce/apex/getRecordByApex.getRecords'
import gtRecordsById from '@salesforce/apex/getRecordByApex.gtRecordsById'
import Account_Name from '@salesforce/schema/Account.Name'
import { getSObjectValue } from '@salesforce/apex';
export default class GetDataFromApexClass extends LightningElement {
    // deploy folders to get the error and after clearing all errors if you get the error again then close 
    // the vs code and start again the server also
    accounts=[]
   @wire(getRecords)
   data({data,error}){
       if(data){
   console.log(data);
       }
       if(error){
       console.log(error);
       }
      
   }
     
   @wire(gtRecordsById,{I:'001N00000259hdKIAQ'})
   dataFromId({data,error}){
    if(data){
        console.log(data);
            }
            if(error){
            console.log(error);
            }
   }
   get name(){
    
    return this.dataFromId.data!=null?getSObjectValue(this.dataFromId.data,Account_Name):'kuldeep';
}
   buttonHandler(){
    getRecords().then(result=>{
        this.accounts=result;
   }      
    ).error(e=>{
        console.log(e);
    });
   }

}