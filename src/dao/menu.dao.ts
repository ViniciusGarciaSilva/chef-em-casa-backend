var sqlite = require('sqlite-sync');
sqlite.connect('chef-em-casa.db');

export function getMenus() {  
  var rows = sqlite.run("SELECT * FROM menu");
  console.log('rows:', rows);
  return(rows);
}