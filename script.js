console.log("Hello GUVI GEEKS");
console.log("Welcome to Zen class");
console.log("Road Map Day 2");
console.log("Document Object:");
console.log("The document object represents a web page that is loaded in the browser."); 
console.log("By accessing the document object, we can access the element in the HTML page. With the help of document objects, we can add dynamic content to our web page. The document object can be accessed with a window.document or just document.");
console.log("Syntax:");
console.log("document.property_name;");

console.log("___________________Window Object___________________");
console.log("The window object is the top most object of the DOM hierarchy."); 
console.log("It represents a browser window or frame that displays the contents of the webpage."); 
console.log("Whenever a window appears on the screen to display the contents of the document, the window object is created."); 

console.log("Syntax:");

console.log("window.property.name;");
console.log("__________________////////////////////////_______________________");

let company = {
    name : "GUVI GEEK NETWORK PVT LTD",
    location : "IIT MADRAS PARK CHENNAI",
    established : "2014",
    founder : "Mr. ARUN PRAKASH",
    cofounder1 : "Late Mrs. SRIDEVI ARUN PRKASH",
    cofounder2: "SP BALA MURUGAN",
    special : "Teaching in six regional languages like Tamil, Malayalam, Hindi and more",
    displayinfo : function(){
        console.log(`${company.name} was established 
          in ${company.established} at ${company.location} 
          founder ${company.founder} and 
          co-founders ${company.cofounder1} and ${company.cofounder2}
          special is GUVI offered ${company.special}`);
    }
  
}
company.displayinfo();

console.log("________________absolute beginner 14--You are given with Principle amount($), Interest Rate(%) and Time (years) in that order. Find Simple Interest.Print the output up to two decimal places (Round-off if necessary).(S.I. = P*T*R/100)");

let p = 1000; // capital
let t = 2; // intrest rate
let r = 5; // time duriation years
map = (p*t*r)/100;
console.log(map.toFixed(2));
