import { LightningElement ,api} from 'lwc';

export default class ChildDispatchEvent extends LightningElement {
    @api header
    @api footer
    dispatch(){
        this.dispatchEvent(new CustomEvent('close'))
    }
    
}