//https://teamtreehouse.com/paweingielewicz.json
const https = require('https');
const username = "pawelingielewicz";
function printMessage (username, badgeCount, points) {
   const message = `${username} has ${badgeCount} total badge(s) and ${points} points in Javascript`;
   console.log(message);
}
const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
   let body = "";
   response.on('data', data => {
      body += data.toString();
   });

   response.on('end', () => {
      console.log(body);
       console.log(typeof body);
   })
});