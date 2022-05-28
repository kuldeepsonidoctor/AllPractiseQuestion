import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class NavigateToRelatedList extends NavigationMixin(LightningElement){
    navigateToRelatedList(){
    this[NavigationMixin.Navigate]({
        type:'standard__recordRelationshipPage',
        attributes:{
            recordId:'001N00000259hdKIAQ',
            objectApiName:'Account',
            relationshipApiName:'Contacts',
            actionName:'view' 
        }
    })
    }
    navigateToWebPage(){
        this[NavigationMixin.Navigate]({
            "type":"standard__webPage",
            "attributes":{
                "url":"https://www.youtube.com/"
            }
        })
    }
}