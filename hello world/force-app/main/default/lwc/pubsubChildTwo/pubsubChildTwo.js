import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';
export default class PubsubChildTwo extends LightningElement {
   //connnectedCallback is a hook
    connectedCallback(){
        console.log('hook');
        this.callsubsciber();
    }
    callsubsciber(){
        pubsub.subscribe('sayHello',this.subscriberCallBack);
    }
    subscriberCallBack(event){
        console.log(event);
    }
}