import { LightningElement } from 'lwc';

export default class ParentExample extends LightningElement {
    percentage=10;
    userDetails=[
        {
            name:"kuldeep",
            age:20 
        },
        {
            name:"Deepesh",
            age:19
        },
        {
            name:"Aayushman",
            age:40
        },
    ]
    setvalue=(e)=>{
        this.percentage=e.target.value;
    }
    changeColor(){
        for(let a of this.template.querySelectorAll('c-extra-childcompoinent')){
            a.getcolor();
        }
    }
   
}