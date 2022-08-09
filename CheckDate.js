 const prompts = require("prompt-sync")();
 let day = prompts("Enter day in dd format : ");
 let month = prompts("Enter month in words : ");
 month.toLowerCase;
 if ((month == "march" || month == "april" || month == "may" || month == "june") && (day >= 20 & day <= 31)) console.log(true);
 else console.log(false);
