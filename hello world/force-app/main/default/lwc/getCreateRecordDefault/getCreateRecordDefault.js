import { LightningElement ,wire} from 'lwc';
import { getRecordCreateDefaults } from 'lightning/uiRecordApi';
import Account_Object from '@salesforce/schema/Account.Name'

export default class GetCreateRecordDefault extends LightningElement {
    tabelHeader=[]
    tableBody=[]
    @wire(getRecordCreateDefaults,{ objectApiName: Account_Object})
    wiredMyRecord({data,error}){
       
        if(data){
            console.log('aaya')
          const {fields}=data.objectInfos.Account;
          this.tabelHeader=['api name','datatype','label','lenght']
          this.tableBody=Object.keys(fields).map(Item=>{
              let field=fields[Item];
               const {apiName,dataType,label,lenght,required}=field;
               return {apiName,dataType,label,lenght,required}


          })
          
        }
        if(error){
            console.log('error')
            console.log(error)
        }
    };
}