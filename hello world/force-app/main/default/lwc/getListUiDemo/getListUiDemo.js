import { LightningElement,wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import Account_Object from '@salesforce/schema/Account'

export default class GetListUiDemo extends LightningElement {
    accList
    @wire(getObjectInfo,{
        objectApiName:Account_Object
    })objectInfo({data,error}){
        console.log('come');
        console.log(data);
        if(data){
            console.log(data);
            this.accList=data.records.defaultRecordTypeId;
        }
        if(error){
            console.log(error);
        }
    }
}