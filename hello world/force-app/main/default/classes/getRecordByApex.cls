public with sharing class getRecordByApex {
   @AuraEnabled(cacheable=true)
   public static List<Account> getRecords(){
    
     return [SELECT Name from Account LIMIT 5]; 
   }
   @AuraEnabled(cacheable=true)
   public static Account gtRecordsById(Id I){

   
       return [SELECT Name From Account Where ID=:I];
   }
}
