import { LightningElement } from 'lwc';
import a from './signIn.html'
import b from './signUp.html'
import c from './multipletemplate.html' 
export default class Multipletemplate extends LightningElement {
    status=null;
    handerClick=(event)=>{
        this.status=event.target.innerText
    }
    render(){
        return this.status==='Sign In'?a:this.status==='Sign Up'?b:c;
    }
    handleClick=()=>{
        if(this.status==='Sign In'){
            console.log('You are Signed In');
        }
        else if(this.status==='Sign Up'){
            console.log('You are SignedUp');
        }
        
    }
}