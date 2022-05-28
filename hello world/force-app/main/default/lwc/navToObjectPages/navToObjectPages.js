import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils';
export default class NavToObjectPages extends NavigationMixin(LightningElement) {
           navigateToFilesHome(){
               this[NavigationMixin.Navigate]({
                   type:'standard__objectPage',
                   attributes:{
                       objectApiName:'ContentDocument',
                       actionName:'home'
                   }
               })
           }
           navigateToContactPage(){
               this[NavigationMixin.Navigate]({
                   type:'standard__objectPage',
                   attributes:{
                       objectApiName:'Contact',
                       actionName:'new'
                   }
               })
           }
           navigateToContactPageDefautValues(){
            const defaultValus=encodeDefaultFieldValues(
                {
                    FirstName:'kuldeep',
                    LastName:'Soni',
                    LeadSource:'Other'
               }   
            )
            this[NavigationMixin.Navigate]({
                   type:"standard__objectPage",
                   attributes:{
                       objectApiName:'Contact',
                       actionName:'new'
                   },
                   state:{
                     defaultFieldValues:defaultValus
                   }
               })
           }
           navigateToRecentContactPage(){
               this[NavigationMixin.Navigate]({
               type:'standard__objectPage',
               attributes:{
                   objectApiName:'Contact',
                   actionName:'list'
               },
               state:{
                    filterName:'Recent'
               }

               })
           }
}