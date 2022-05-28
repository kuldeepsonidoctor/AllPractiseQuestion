public with sharing class newscontrollerclasslwc {
    @AuraEnabled
    public static Map<String,Object> retrievenews(){
        HttpRequest htpreq=new HttpRequest();
        htpreq.setEndpoint('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9659e8f1ef8d403a99ba15247f741762');
        htpreq.setMethod('GET');
        Map<String,Object> newsJsonData=new Map<String,Object>();
        String strResponse=null;
        try{
            Http http=new Http();
            HttpResponse httpResponse=http.send(htpreq);
            if(httpResponse.getStatusCode()==200){
                strResponse=httpResponse.getBody();
            }
            else{
                throw new CalloutException(httpResponse.getBody());
            }
        }
        catch(Exception e){
            throw e;
        }
        if(!String.isBlank(strResponse)){
            newsJsonData=(Map<String,Object>)JSON.deserializeUntyped(strResponse);
            System.debug(newsJsonData);
        }
        if(!newsJsonData.isEmpty()){
            return newsJsonData;
        }
        else{
            return null;
        }
    }
}
