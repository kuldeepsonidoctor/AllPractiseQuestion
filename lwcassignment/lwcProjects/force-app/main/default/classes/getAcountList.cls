public with sharing class getAcountList {
    @AuraEnabled(cacheable=true)
    public static List<Account> accountData(){
       return [Select Name,Phone,Rating from Account limit 7];
    }
    @AuraEnabled(cacheable=true)
    public static List<Contact> getRelatedContact(ID recordId){
        return [select Name,MobilePhone,Email,Birthdate from Contact where AccountId=:recordId];
    }
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getRelatedOpportunity(ID recordId){
        return [select Name,StageName,CloseDate,Amount from Opportunity where AccountId=:recordId];
    }
    @AuraEnabled
    public static String updateAccount(ID recordId,Map<String,Object> field){
        Account acc=[select Name,Phone,Rating from Account where Id=:recordId];
        acc.Name=(String)field.get('Name');
        acc.Phone=(String)field.get('Phone');
        acc.Rating=(String)field.get('Rating');
        update acc; 
        return recordId;
      
    }
    @AuraEnabled
    public static string deleteAccount(ID recordId){
          Account a=[select Name from Account where Id=:recordId];
          delete a;
          return recordId;
    }
}
