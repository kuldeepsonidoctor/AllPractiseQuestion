import { LightningElement,wire } from 'lwc';
import {NavigationMixin,CurrentPageReference} from 'lightning/navigation';
export default class GetCurrentPageReference extends NavigationMixin(LightningElement) {
@wire(CurrentPageReference)
pageRefee
get PageRef(){
    console.log("this.pagerefeence "+JSON.stringify(this.pageRefee))
    return this.pageRefee.state.c__test ? this.pageRefee.state.c__test:''
}
}