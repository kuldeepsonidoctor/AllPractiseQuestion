import { LightningElement ,api} from 'lwc';

export default class ChildExample extends LightningElement {
    @api className
    get colo(){
        return this.className==='Red'?'grn':'red';
    }
    //Not use this here colo()=>{return }
}