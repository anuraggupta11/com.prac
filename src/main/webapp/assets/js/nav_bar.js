/**
 * 
 * 
 */

/* orgadmin menu starts */

var orgNavBarList=[];
orgNavBarList.push({display_name:"Dashboard",is_visible_in_menu:false,url:"#/org_dashboard",valid_role:"org_admin"});
orgNavBarList.push({display_name:"Reports",is_visible_in_menu:false,url:"#/roles_report",valid_role:"org_admin"});
orgNavBarList.push({display_name:"Groups",is_visible_in_menu:false,url:"#/groups",valid_role:"org_admin"});
orgNavBarList.push({display_name:"Users",is_visible_in_menu:false,url:"#/list_users",valid_role:"org_admin"});
orgNavBarList.push({display_name:"Scheduler",is_visible_in_menu:false,url:"#/scheduler_list",valid_role:"org_admin"});
orgNavBarList.push({display_name:"Notification",is_visible_in_menu:false,url:"#/notification",valid_role:"org_admin"});
orgNavBarList.push({display_name:"Document Repository",is_visible_in_menu:false,url:"#/document_repo",valid_role:"org_admin"});
/* orgadmin menu ends */


/**
 * 
 * 
 */

/* user menu starts */
var userNavBarList=[];
userNavBarList.push({display_name:"Dashboard",is_visible_in_menu:false,url:"#/user_dashboard",valid_role:"user"});
userNavBarList.push({display_name:"Roles",is_visible_in_menu:false,url:"#/user_roles",valid_role:"user"});
userNavBarList.push({display_name:"Skill Profile",is_visible_in_menu:false,url:"#/skill_profile",valid_role:"user"});
/* user menu ends */

/*rest url and  viksit admin url starts*/
var viksitUrl = 'http://business.talentify.in/';
var core = 	'http://business.talentify.in:9090/istar/rest/';
/*rest url and  viksit admin url ends*/