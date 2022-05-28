import { LightningElement, wire ,track} from 'lwc';
import accountData from '@salesforce/apex/getAcountList.accountData';
import updateAccount from '@salesforce/apex/getAcountList.updateAccount';
import deleteAccount from '@salesforce/apex/getAcountList.deleteAccount';
import getRelatedOpportunity from '@salesforce/apex/getAcountList.getRelatedOpportunity';
import getRelatedContact from '@salesforce/apex/getAcountList.getRelatedContact';
const oppcolumn=[
    {label:'Name',fieldName:'Name'},
    {label:'Stagename',fieldName:'StageName'},
    {label:'CloseDate',fieldName:'CloseDate'},
    {label:'Amount',fieldName:'Amount'}
]
const contactcolumn=[
    {label:'Name',fieldName:'Name',editable:true},
    {label:'Phone',fieldName:'MobilePhone',editable:true},
    {label:'Email',fieldName:'Email',type:'email'},
    {label:'Birth Date',fieldName:'Birthdate',type:'date'}
]
export default class LwcAssignment4 extends LightningElement {
   oppCol=oppcolumn;
   concol=contactcolumn
@track relatedShowModal=false;
@track relatedOpportunity
@track relatedContact
@track newData={}
@track recordId=''
@track showModal=false
@wire(accountData)
accList;

editRecords(e){
    this.showModal=true;
    this.recordId=e.target.dataset.item;
    console.log(this.showModal);
   
    console.log(e.target.dataset.item);
   
   this.accList.data.map((item)=>{
        if(item.Id==this.recordId){
           this.newData={...item};
        }
    })
    console.log(this.newData);
    

}
deleteRecords(e){
    console.log("delete hone aa gaya");
    this.recordId=e.target.dataset.item;
    console.log(this.recordId);
    deleteAccount({recordId:this.recordId}).then(res=>{
        console.log("delet res")
        console.log(res);
    }).catch(err=>{
        console.log(err);
    });

}
viewRelatedList(e){
    this.relatedShowModal=true;
    this.recordId=e.target.dataset.item;
    getRelatedOpportunity({recordId:this.recordId}).then(res=>{
        this.relatedOpportunity=res
        console.log("opportunity mil gaya")
        console.log(res);
    }).catch(err=>{
        console.log(err);
    });
    getRelatedContact({recordId:this.recordId}).then(res=>{
        this.relatedContact=res
        console.log("contact mil gaya")
        console.log(res);
    }).catch(err=>{
        console.log(err);
    });
     
}
get modalClass(){
    console.log("aaya the");
    return this.showModal==true?"slds-modal slds-fade-in-open":"slds-modal";
}
get modalBackdrop(){
    console.log("aaya the again");
    return this.showModal==true?"slds-backdrop slds-backdrop_open":"slds-backdrop";
}
closeBar(){
        this.showModal=false;
        console.log('aaya '+this.showModal);
}
updateRecords(){
    this.showModal=false;
    console.log("update hua tha ");
    console.log(this.newData);
    updateAccount({recordId:this.recordId,field:this.newData}).then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
    });
   
}
updateData(e){
   
    console.log("change ho nga ");
    console.log(e);
    const{name,value}=e.target;
    console.log(name,value);
    this.newData={...this.newData,[name]:value};
    console.log("ab dekhna ");
    console.log(this.newData);
   
}
back(){
    this.relatedShowModal=false;
}

}