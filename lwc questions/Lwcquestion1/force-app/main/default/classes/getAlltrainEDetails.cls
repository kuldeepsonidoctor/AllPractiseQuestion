public with sharing class getAlltrainEDetails {
    @AuraEnabled(cacheable=true)
    public static List<Platform__c> getAllList(String tim){
       string[] s=tim.split(':');
       Time tims=Time.newInstance(Integer.valueOf(s[0]),Integer.valueOf(s[1]),00,00);
        return[select Number_Of_Tracks__c,(select name,Arrival_Time__c from Trains_Schedule__r where Arrival_Time__c=:tims)trains from Platform__c];
    }
   
}
