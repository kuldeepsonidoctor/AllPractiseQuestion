import { LightningElement,track } from 'lwc';
import my_Resource_Train from '@salesforce/resourceUrl/myTrain';
import my_Resource_master from '@salesforce/resourceUrl/myMaster';
import my_Resource_watch from '@salesforce/resourceUrl/myWatch';
import my_Resource_track from '@salesforce/resourceUrl/myTrack';
import getAllList from '@salesforce/apex/getAlltrainEDetails.getAllList'
export default class TrainComponent extends LightningElement {
    train=my_Resource_Train
    master=my_Resource_master
    watch=my_Resource_watch
    track=my_Resource_track
    allTrainData
    @track timeToGet
    timeee(e){
        this.timeToGet=e.target.value
    }
    showData(){
        console.log(this.timeToGet);
    getAllList({tim:this.timeToGet}).then(res=>{
        this.allTrainData=res;
        console.log(res);
    }).catch(err=>{
        console.log(err);
    });
    }

}