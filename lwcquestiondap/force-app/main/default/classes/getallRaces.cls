public with sharing class getallRaces {
   public class AccountWrapper
{
    @auraenabled
    public string Subject{get;set;}
    @auraenabled
    public ID WhoId{get;set;}
    @AuraEnabled
    public ID WhatId { get; set; }
    @AuraEnabled
    public ID OwnerId { get; set; }
    @AuraEnabled
    public Datetime StartDateTime { get; set; }
    @AuraEnabled
    public Datetime EndDateTime { get; set; }
}
   @AuraEnabled(cacheable=true)
   public static List<Contact> getallrelatedcon(){
     
      return[select name from contact where AccountId='0015j00000Yui4gAAB'];
   }
   @AuraEnabled(cacheable=true)
   public static Datetime getstarttimr(String stim,String datim){
      string[] s1=stim.split(':');
       string[] s2=datim.split('-');
       
       Datetime startmyDate = Datetime.newInstance(Integer.valueOf(s2[0]), Integer.valueOf(s2[1]), Integer.valueOf(s2[2]), Integer.valueOf(s1[0])-8, Integer.valueOf(s1[1]), Integer.valueOf(s2[2]));
       return startmyDate;
}
   @AuraEnabled(cacheable=true)
   public static Datetime getendtime(String etim,String datim ){
      string[] s1=etim.split(':');
       string[] s2=datim.split('-');
      
       Datetime endtimed = Datetime.newInstance(Integer.valueOf(s2[0]), Integer.valueOf(s2[1]), Integer.valueOf(s2[2]), Integer.valueOf(s1[0])-8, Integer.valueOf(s1[1]), Integer.valueOf(s2[2]));
       return endtimed;
}
@AuraEnabled
public static Boolean insertevent(String subject,Id WhoI,ID OwwnerId, Id WhatI,String startdate,String starttime,String endtime){
   //  String subject,ID WwhoId,ID OwwnerId, ID WwhatId,Datetime SwtartDateTime,Datetime EndDateTime
   // Account a=new Account(Name='kuldeep');
   //DurationInMinutes
   //integer n=
   // Datetime endTime = SwtartDateTime.addSeconds(25);
  
   string[] s1=starttime.split(':');
   string[] s2=startdate.split('-');
   string[] s3=endtime.split(':');
   Datetime startmyDate = Datetime.newInstance(Integer.valueOf(s2[0]), Integer.valueOf(s2[1]), Integer.valueOf(s2[2]), Integer.valueOf(s1[0])-8, Integer.valueOf(s1[1]), Integer.valueOf(s2[2]));
   Datetime endd = Datetime.newInstance(Integer.valueOf(s2[0]), Integer.valueOf(s2[1]), Integer.valueOf(s2[2]), Integer.valueOf(s3[0])-8, Integer.valueOf(s3[1]), Integer.valueOf(s3[2]));
   List<Event> getpredata=[select WhoId, StartDateTime from Event where WhoId=:WhoI AND StartDateTime=:startmyDate];
   // DateTime SwtartDateTime=getstarttimr(starttime,startdate);
   // DateTime endd=getstarttimr(endtime,startdate);
  Date dToday = Date.today();
   //Datetime endd=SwtartDateTime.addDays(1);
   //DateTime dt = DateTime.newInstance(dToday.year(), dToday.month(),dToday.day());
   Event E = new Event(Subject='Meeting',WhoId=WhoI,OwnerId='0055j000005HFfaAAG',WhatId=WhatI,StartDateTime=startmyDate,EndDateTime=endd);
   insert E;
   return false;
    
   //insert a ;
    
    
     
 }
 @AuraEnabled(cacheable=true)
 public static String[] getallevent(Date dat){
   string[] s1=new String[30];
   List<Event> ee= [select StartDateTime from Event where ActivityDate=:dat];
   for(Event s:ee){
      String sa = s.StartDateTime.format('HH:mm:ss') ;
      s1.add(sa);
  }
  return s1;
  
 }
 @AuraEnabled
    public static List<Event> fetchAllEvents(){
        List<Event> eventList = new List<Event>();
        eventList = [Select Id, Subject, WhatId, WhoId, 
                    Description, EndDate, EndDateTime, OwnerId,
                    ActivityDate, ActivityDateTime From Event LIMIT 100];
        return eventList;
    }
   
}
