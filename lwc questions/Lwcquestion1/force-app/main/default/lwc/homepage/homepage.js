import { LightningElement,wire } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import getAllProperties from '@salesforce/apex/getAllData.getAllProperties'
import getAllPropertiesCobtact from '@salesforce/apex/getAllData.getAllPropertiesCobtact'
import Property from '@salesforce/schema/Client_Property__c';
import Name from '@salesforce/schema/Client_Property__c.Name';
import Address from '@salesforce/schema/Client_Property__c.Address__c';
import Imagee from '@salesforce/schema/Client_Property__c.Property_Image__c';
import Contact from '@salesforce/schema/Contact';
import FirstName from '@salesforce/schema/Contact.FirstName';
import LastName from '@salesforce/schema/Contact.LastName';
import con_Image from '@salesforce/schema/Contact.Contact_Image__c';
import prop from '@salesforce/schema/Contact.Client_Property__c';

export default class Homepage extends LightningElement {
    @wire(getAllProperties)
    myProperty
   
    viewSection=false
    addPro=false
    viewCon=false
    addCon=false
    selectedPro
    propertyContacts
    Fields={
        Name:'',
        URL:'',
        Address:''
       
    }
    conFields={
        FName:'',
        Lname:'',
        Image:''
              
    }

    
    addProperty(){
        this.addPro=true;
        this.viewSection=true;
        console.log(this.myProperty.data);
        console.log(this.myProperty.error);
        
    }

    addContact(e){
        console.log(e.target.dataset.item);
        this.selectedPro=e.target.dataset.item;
        this.viewSection=true
        this.addCon=true
        
        console.log(this.viewCon);
    }
    viewContact(e){
        this.selectedPro=e.target.dataset.item;
        this.viewSection=true
        this.viewCon=true
        console.log(this.selectedPro);
        getAllPropertiesCobtact({recordId:this.selectedPro}).then(res=>{
            console.log(res);
            this.propertyContacts=res;
        }).catch(err=>{
            console.log(err);
        });

    }
    handleChange(e){
        const{value,name}=e.target;
        this.Fields={...this.Fields,[name]:value}

    }
    handleContactFields(e){
        const{value,name}=e.target;
        this.conFields={...this.conFields,[name]:value}
    }
    handleClick(){
        this.Back();
        console.log(this.Fields);
        const fields={};
        fields[Name.fieldApiName]=this.Fields.Name;
        
        fields[Imagee.fieldApiName]=this.Fields.URL;
        fields[Address.fieldApiName]=this.Fields.Address;
        let input={apiName:Property.objectApiName,fields};
        console.log("come"+fields);
        createRecord(input).then(res=>{
           
           this.Fields={} 
        }).catch(err=>{
            console.log(err)
        });
     


    }
    handlecontact(){
        this.Back();
        console.log(this.conFields);
        console.log(this.selectedPro);
        const fields={};
        fields[FirstName.fieldApiName]=this.conFields.FName;
        
        fields[LastName.fieldApiName]=this.conFields.Lname;
        fields[con_Image.fieldApiName]=this.conFields.Image;
        fields[prop.fieldApiName]= this.selectedPro;
        let input={apiName:Contact.objectApiName,fields};
        console.log("come"+fields);
        createRecord(input).then(res=>{
           
           this.conFields={} 
        }).catch(err=>{
            console.log(err)
        });
     


    }
    
    Back(){
        this.viewSection=false
        this.addPro=false
        this.viewCon=false
        this.addCon=false

    }

}