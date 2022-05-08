
// Regular one
module.exports.getDate = getDate;
function getDate(){
const today = new Date();
const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
};

return today.toLocaleDateString("en-US", options);

}

// Shortcut one
exports.getDay = function(){
const today = new Date();
const options = {
  weekday: "long"
};

return today.toLocaleDateString("en-US", options);

}
