import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class NavigateToNavItemPage extends NavigationMixin(LightningElement) {
    navToTab(){
        this[NavigationMixin.Navigate]({
            type:'standard__navItemPage',
            attributes:{
            apiName:'home'
            }
        })
       
    }
    
}