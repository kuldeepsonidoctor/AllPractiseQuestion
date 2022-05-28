import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class NavToRecordPage extends NavigationMixin(LightningElement) {
        navigateToContactEdit(){
            this[NavigationMixin.Navigate]({
                type:'standard__recordPage',
                attributes:{
                    recordId:'003N000001tIr4ZIAS',
                    objectApiName:'Contact',
                     actionName:'edit'   
                }
            })
        }
        navigateToCustomRecordPage(){
            this[NavigationMixin.Navigate]({
                type:'standard__recordPage',
                attributes:{
                    recordId:'a00N000000Qa5L1IAJ',
                    objectApiName:'practiseNavigation__c',
                     actionName:'view'   
                }
            })
        }
}