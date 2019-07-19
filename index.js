var howManyCustomers = 1;

var takeANewNumber = function (){
  return `Welcome you are ticket number ${howManyCustomers++}`;
};

var takeANumber = function (katzDeli, newCustomer) {
  if (katzDeli.length > 0);
  katzDeli.push(newCustomer);
  return "Welcome, " + newCustomer + ". You are number " + katzDeli.length + " in line.";
};


var nowServing = function (katzDeliLine){
if (katzDeliLine.length===0){
return "There is nobody waiting to be served!";
}

let nextInline = 
katzDeliLine.shift();
return "Currently serving " + nextInline + ".";
};

var currentLine = function(katzDeliLine){
  if (katzDeliLine.length === 0){
return "The line is currently empty.";
}

var currentList = [];
for (var i=0; i<katzDeliLine.length;i++) { 
  currentList.push(i+1 + ". " + katzDeliLine[i]);} 
  return "The line is currently: " +  currentList.join(", ");
  

  
};