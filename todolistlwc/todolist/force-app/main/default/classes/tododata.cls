public with sharing class tododata {
    @AuraEnabled(cacheable=true)
    public static List<Task> taskda(){
        return [SELECT Subject from Task where OwnerId=:UserInfo.getUserId()];
         
    }
    @AuraEnabled
    public static Task insertTask(String subject){
        try{
        Task t=new Task(
       Subject=subject,
       OwnerId=UserInfo.getUserId(),
       Status='Not Started',
       Priority='Normal'
        );
        insert t;
        return t;
        }
        catch(Exception e){
            System.debug(e.getMessage());
            return null;
        }
    }
    @AuraEnabled
    public static Boolean deleteTask(Id recordId){
        try{
            Database.delete(recordId);
            return true;
        }
        catch(Exception e){
           System.debug(e.getMessage());
           return false;
        }
    }
}
