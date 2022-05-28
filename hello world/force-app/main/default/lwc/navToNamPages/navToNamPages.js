import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class NavToNamPages extends NavigationMixin(LightningElement) {
    navigaeToChatter(){
        this[NavigationMixin.Navigate]({
            type:'standard__namedPage',
            attributes:{
                pageName:'chatter'
            }
        })
    }
}