import { LightningElement,wire,track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import Opp_obj from '@salesforce/schema/Opportunity';
import Name from '@salesforce/schema/Opportunity.Name';
import CloseDate from '@salesforce/schema/Opportunity.CloseDate';
import Amount from '@salesforce/schema/Opportunity.Amount';
import Stage from '@salesforce/schema/Opportunity.StageName';

export default class AssignmentThree extends LightningElement {
   
    options;
    Fields={
        Name:'',
        StageName:'',
        ClosedDate:'',
        Amount:''
    }
    
    @wire(getObjectInfo, { objectApiName : Opp_obj})
    opportunityinfo;
    @wire(getPicklistValues,
        {
            recordTypeId: '$opportunityinfo.data.defaultRecordTypeId',
            fieldApiName: Stage
        }
    )
    StageValues({data,error}){
       if(data){
        this.options=data.values;
        console.log(this.options);
       }
    }
    handleChange(e){
        const{value,name}=e.target;
        this.Fields={...this.Fields,[name]:value}
    }
    handleClick(){
        console.log(this.Fields);
        const fields={};
        fields[Name.fieldApiName]=this.Fields.Name;
        
        fields[CloseDate.fieldApiName]=this.Fields.ClosedDate;
        fields[Amount.fieldApiName]=this.Fields.Amount;
        fields[Stage.fieldApiName]=this.Fields.StageName;
        let input={apiName:Opp_obj.objectApiName,fields};
        console.log("come"+fields);
        createRecord(input).then(res=>{
           
           this.Fields={} 
        }).catch(err=>{
            console.log(err)
        });


    }
}