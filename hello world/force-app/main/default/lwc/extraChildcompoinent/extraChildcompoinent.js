import { LightningElement ,api} from 'lwc';

export default class ExtraChildcompoinent extends LightningElement {
@api details
className='redhat'
@api getcolor(){
    this.className='grnHat'
}
}