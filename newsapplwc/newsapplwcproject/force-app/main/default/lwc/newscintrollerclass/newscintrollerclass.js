import { LightningElement ,track} from 'lwc';
import retrievenews from '@salesforce/apex/newscontrollerclasslwc.retrievenews'
export default class Newscintrollerclass extends LightningElement {
  //connected callback is a lifecycle
  connectedCallback(){
      this.fetchNews();
  }
  @track results=[];
  @track selectedNews={};
  @track showModal=false;
  get modalClass(){
      return this.showModal?"slds-modal slds-fade-in-open":"slds-modal";
  }
  get modalbackdrop(){
      return this.showModal?"slds-backdrop slds-backdrop_open":"slds-backdrop";
  }
  closebar(){
    this.showModal=false;
  }
  fetchNews(){
    retrievenews().then(response=>{
        console.log(response);
        this.formatNewsData(response.articles);
    }).catch(error=>{
        console.log(error);
    });
  }
  formatNewsData(res){
           this.results=res.map((item,index)=>{
               let id=`news_${index+1}`;
               let date=new Date(item.publishedAt).toDateString();
               let name=item.source.name;
               return {...item,id:id,name:name,publishedAt:date} ;
               
           });
  }
  showHndler(event){
      let id=event.target.dataset.item;
  this.results.map(item=>{
        if(item.id===id){
            this.selectedNews= {...item};
            this.showModal=true;
        }
    })
  }

}