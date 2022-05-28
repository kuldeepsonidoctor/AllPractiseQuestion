public with sharing class accountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> accountData(){
       return [Select Name,Phone,Rating from Account limit 7];
    }
}
