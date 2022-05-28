public with sharing class newsController {
   @AuraEnabled(cacheable=true)
     public static Map<String, Object> getnews(){
        
        HttpRequest hp=new HttpRequest();
        hp.setEndpoint('https://newsapi.org/v2/everything?q=tesla&from=2022-01-04&sortBy=publishedAt&apiKey=9659e8f1ef8d403a99ba15247f741762');
        hp.setMethod('GET');
        Map<String,Object> newJsonData=new Map<String, Object>();
        String jsResponse=null;
        try{
            Http requ=new Http();
            HttpResponse hs=requ.send(hp);
            if(hs.getStatusCode()==200){
                jsResponse=hs.getBody();  
                
            }
            else{
                throw new CalloutException(hs.getBody());
            }
        }
        catch(Exception e){
          throw e;
        }
        if(!String.isBlank(jsResponse)){
            newJsonData=(Map<String, Object>)JSON.deserializeUntyped(jsResponse);
        }
        if(!newJsonData.isEmpty()){
            return newJsonData;
        }
        else{
            return null;
        }
    }
}