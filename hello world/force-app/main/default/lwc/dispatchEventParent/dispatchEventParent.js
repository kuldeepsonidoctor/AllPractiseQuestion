import { LightningElement } from 'lwc';

export default class DispatchEventParent extends LightningElement {
    header="Game Of Thrones"
    footer="I relly want tio show the seroes"
    status=false
    showHandler(){
        this.status=true;
    }
    hideHandler(){
        this.status=false;
    }
}