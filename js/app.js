
import Times from "./time.js";

const d = document;
d.addEventListener("DOMContentLoaded",(e)=>{
    Times('#daily', 'daily', 'Day');
    Times('#weekly', 'weekly', 'Week');
    Times('#monthly', 'monthly', 'Month')
    
})
