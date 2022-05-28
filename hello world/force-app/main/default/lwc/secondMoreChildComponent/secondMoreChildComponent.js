import { LightningElement,api } from 'lwc';

export default class SecondMoreChildComponent extends LightningElement {
    @api percentage
    get width(){
      return `width:${this.percentage}%;background-color: hotpink `;
    }

}