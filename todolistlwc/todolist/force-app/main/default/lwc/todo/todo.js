import { LightningElement, track, wire} from 'lwc';
import taskda from '@salesforce/apex/tododata.taskda';
import {refreshApex} from '@salesforce/apex';
import insertTask from '@salesforce/apex/tododata.insertTask';
import deleteTask from '@salesforce/apex/tododata.deleteTask';
export default class Todo extends LightningElement {
 @track 
 allTask=[];
 spinnerStatus=true
 todoTaskResponse;
    //use allTask immediately after @track otherwise the task will not update
    newTask='';
    @wire(taskda)
    getAllTasks(response){
        this.todoTaskResponse=response;
        let data=response.data;
        let error=response.error;
        console.log(error);
        console.log(data);
        if(data || error){
            this.spinnerStatus=false;
        }
        if(data){
           this.allTask=[];
            data.forEach(task => {
                console.log(this.allTask)
                this.allTask.push({
                    id:this.allTask.length+1,
                    name:task.Subject,
                    recordId:task.Id
                });
              
            });
            console.log(JSON.stringify(this.allTask));
          
        }
       
        else if(error) {
            console.log(error);
        }
    };
   
    updateTask(event){
        this.newTask=event.target.value;
    }
    addTask(){
        if(this.newTask==""){
            return;
        }
        // task={}
        // task={
        //     id:this.allTask.length+1,
        //     name:this.newTask
        // }
        //error=> task is not defined
        this.spinnerStatus=true;
        console.log(JSON.stringify(this.allTask));
       //this is imperatively call
        insertTask({subject:this.newTask}).then(result=>{
            this.spinnerStatus=false;
        this.allTask.unshift({ 
            id:this.allTask[this.allTask.length-1]?this.allTask[this.allTask.length-1].id+1:0,
            name:this.newTask,
            recordId:result.Id          
        });
             //importnat
              this.newTask='';}).
             catch(error=>{  this.spinnerStatus=false; console.log(error)});
        
        // console.log(this.allTask)
    }
    deletetask(e){
        this.spinnerStatus=true; 
        let id=e.target.name;
        let all= this.allTask;
        console.log(id);
        console.log(e.target);
        
       
        deleteTask({recordId:id}).then(res=>{
            this.spinnerStatus=false;
            if(res){
            this.alltask=all.splice(all.findIndex(e=>e.recordId===id),1);
            }
        }).catch(err=>{console.log(err)
            this.spinnerStatus=false;
        });
        //if there is same code in then and catch block then you can use finally
        //catch().finally(()=>this.spinnerStatus=false)
        //for understanding the proxy object use the json.stringfy(object)

        
      
    }
    refreshToDoList(){
        //it refresh the data in the browser cache only if there is a change on the server side
        this.spinnerStatus=true;
        console.log("come");
        refreshApex(this.todoTaskResponse).finally(()=>  this.spinnerStatus=false);
        //spinnerstatus for loading icon
    }

    
}