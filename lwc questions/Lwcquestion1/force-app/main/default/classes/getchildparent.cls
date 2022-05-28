public with sharing class getchildparent {
    @AuraEnabled(cacheable=true)
    public static List<string> getallchild(String name){
        List<string> sa=new List<string>(); 
Schema.DescribeSObjectResult R = Account.SObjectType.getDescribe();
        for (Schema.ChildRelationship cr: R.getChildRelationships()) {
       String s = String.valueOf(cr.getChildSObject());
          sa.add(s);  
        }
        return sa;
      }
      @AuraEnabled(cacheable=true)
    public static List<string> getallparent(String name){
        List<string> sa=new List<string>(); 
        for(Schema.SobjectField strFld: Account.SobjectType.getDescribe().fields.getMap().Values()){
            if(strFld.getDescribe().getType() == Schema.DisplayType.REFERENCE){
            //system.debug('==parent object='+strFld.getDescribe().getReferenceTo());
            String s = String.valueOf(strFld.getDescribe().getReferenceTo());
            sa.add(s); 
            }
        }
            return sa;

      }
      @AuraEnabled(cacheable=true)
      public static SObject getallparent(String name,Id i){
        string s='select name from '+name+' where accountId=:'+i;
         SObject ss=Database.query(s);
         return ss;
      }
}
