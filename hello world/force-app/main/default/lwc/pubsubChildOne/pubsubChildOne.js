import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class PubsubChildOne extends LightningElement {
   
    buttonHandler(evt){
        this.eventPublisher('Hello From Child One');
     }
     eventPublisher(data){
         console.log('aaya 1');
         pubsub.publish("sayHello",data);
     }
}