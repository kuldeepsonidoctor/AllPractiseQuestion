import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import ACCOUNT_OBJET from '@salesforce/schema/Account'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import Industry_Field from '@salesforce/schema/Account.Industry'
import Type_Field from '@salesforce/schema/Account.Type'
import Phone_Field from '@salesforce/schema/Account.Phone'
export default class CreateRecordDemo extends LightningElement {
FormFields={
    Name:'',
    Industry:'',
    Phone:'',
    Type:''
}
changeHadler(event){
        const{value,name}=event.target;
        this.FormFields={...this.FormFields,[name]:value}
}
handleSave(){
    const fields={}
    fields[NAME_FIELD.fieldApiName]=this.FormFields.Name
    fields[Industry_Field.fieldApiName]=this.FormFields.Industry
    fields[Type_Field.fieldApiName]=this.FormFields.Type
    fields[Phone_Field.fieldApiName]=this.FormFields.Phone
    let recordInput={apiName:ACCOUNT_OBJET.objectApiName,fields}
    createRecord(recordInput).then(result=>{
        console.log(this.fields)
        this.FormFields={}
        console.log(JSON.stringify(result.id))
    }).catch(error=>{
        console.log(error)
    })

}
}