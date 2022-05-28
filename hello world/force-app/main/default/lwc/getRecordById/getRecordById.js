import { LightningElement,wire,api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import Account_Name from '@salesforce/schema/Account.Name'
import Phone_Number from '@salesforce/schema/Account.Phone'
import Owner_Name from '@salesforce/schema/Account.Owner.Name'
import Industry_Field from '@salesforce/schema/Account.Industry'
import Annual_Revenue from '@salesforce/schema/Account.AnnualRevenue'

export default class GetRecordById extends LightningElement {
 recordId='001N00000259WDcIAM'
result=[]

@wire(getRecord,{recordId:'$recordId',fields:[Account_Name,Phone_Number,Owner_Name,Industry_Field,Annual_Revenue]})
myWire({data,error}){
    console.log(Account_Name)
    console.log(this.recordId)
      if(data){
          //it takes some time in console to get the data so wait while do consoleing
          console.log('come')
       const{fields}=data;
       console.log(data)
       Object.keys(fields).map(item=>{
           let value=fields[item] && fields[item].displayValue? fields[item].displayValue:fields[item].value;
           this.result={...this.result,[item]:value}
       })
    }
    console.log(this.result)
   
    if(error){
        console.log(error);
    }
}


}