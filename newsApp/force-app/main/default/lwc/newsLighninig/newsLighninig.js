import { LightningElement } from 'lwc';
import getnews from '@salesforce/apex/newsController.getnews'
export default class NewsLighninig extends LightningElement {
  connectedCallback(){
    this.fetchNews();
  }
  fetchNews(){
    getnews().then(r=>{console.log(r)
    this.formData(r.articles);
    }).catch(c=>{console.log(c)});
  }
  formData(data){
      data.map((item,index)=>{
        let id=`new_${index+1}`;
        let name=item.source.name;
        return {...item,id:id,name:name}
      })
  }
}