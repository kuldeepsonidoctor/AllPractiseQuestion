public with sharing class getAllData {
    @AuraEnabled(cacheable=true)
     public static List<sObject> getAllProperties(){
        return [select ID,Name,Address__c,Property_Image__c from Client_Property__c];
    }
    @AuraEnabled(cacheable=true)
     public static List<sObject> getAllPropertiesCobtact(ID recordId){
        return [select ID,FirstName,LastName,Contact_Image__c from Contact where Client_Property__c=:recordId];
    }
}

