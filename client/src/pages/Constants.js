


export const DEBUG = true

// HISTORY of users logins
// POST current user: ownerid , epoch
export const url_logger = "http://localhost:3001/api/logger"
export const url_current = "http://localhost:3001/api/current"
export const url_currentinfo = "http://localhost:3001/api/currentinfo" 

// every one who's logged in
export const url_getloggers ='http://localhost:3001/api/getloggers'


export const url_getusers = "http://localhost:3001/api/getusers"
export const url_getincidents = "http://localhost:3001/api/getincidents"

export const url_addresource = "http://localhost:3001/api/addresource" 

export const url_addincident = "http://localhost:3001/api/addincident" 

export const url_search = "http://localhost:3001/api/search" 

export const url_resourcereport = "http://localhost:3001/api/resourcereport" 


export const url_dbresource = "http://localhost:3001/api/dbresource"

export const url_categoryid = "http://localhost:3001/api/categoryid"
export const url_resourceid = "http://localhost:3001/api/resourceid"

// these are the same
export const url_costid = "http://localhost:3001/api/costid"
export const url_units = "http://localhost:3001/api/costid"

// used in TestTextBox.js to get the roles to create a new user person
export const url_roleid = "http://localhost:3001/api/dbroleid"

export const url_loginjwt = "http://localhost:3001/api/loginjwt"

// used in test routines
// TestTextBox.js
// insert a sample user
export const url_insertuser = "http://localhost:3001/api/insertuser"