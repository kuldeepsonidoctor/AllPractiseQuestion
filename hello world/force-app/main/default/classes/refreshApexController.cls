public with sharing class refreshApexController {
    @AuraEnabled(cacheable=true)
    //if you want to get the data then user true but if you want to perform some dml 
    // then not use it
    public static List<contact> getRecords(){
      return [select Id,firstName,LastName,Email from Contact LIMIT 10];
  }
}
