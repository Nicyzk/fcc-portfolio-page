function eventLoop (className, fn){
    let arr=document.getElementsByClassName(className);
    for(let i=0; i<arr.length; i++){
        arr[i].addEventListener("click", fn);
    }
}


function addCount(e){
    let count=e.currentTarget.querySelector("span").innerHTML;
    count = Number(count)+1;
    e.currentTarget.querySelector("span").innerHTML=count;
}


eventLoop("heart-btn", addCount);
eventLoop("comment-btn", addCount);
eventLoop("eye-btn", addCount);





//NOTE the handler function by default is passed the EVENT OBJECT
/* IMPT MISTAKE two ways to use the event object to reference the element clicked
1) to reference element clicked use e.target
2) to reference the element on which you've hooked the event use e.currentTarget */
//also this will only work for a normal function definition as an arrow function
//DOES NOT have its own this to refer the object that called it. 



 /*first a loop to add event listener to all elements of same classname accept a classname as Parameter and function
 second a counter function 
 third pass all three class names to give them the event listener required, combining one and two 
 without one and two being dependent on each other.
*/



/*window.matchMedia("()") method is a way to call a media query through js and returns a MediaQueryList Object
representing the results of the specified CSS media query string.
The property of the object we're interested in is matches:true/false

to look out for state changes(ie change in size of window) We use the addListener method on the 
MediaQueryList interface.

Adding a listener is similar to how eventlisteners work for other elements. The actual event is called CHANGE.
This listener however is specific to mql object and looks out for whether there are state changes in the mql
object ie the matches property has changed from true to false or vice versa. 


insertAdjacentHTML(position, ELEMENT);
legal position values
"afterbegin"
"afterend"
"beforebegin"
"beforeend"


In js, you are only allowed to insert elements at positions. To add element plus text, must create
a text node and append it to the element node. 

*/
let mql= window.matchMedia("(max-width:576px)");

function addBreak(){
    let x=document.querySelector(".fa-mobile-alt");
    let div=document.getElementById("con");
    if(mql.matches){
    x.insertAdjacentElement("afterend", document.createElement("br"));
    }
    else {
        if(div.querySelector("br")){div.querySelector("br").remove();}
    }
}

addBreak();



mql.addListener(addBreak); //after runtime look out for changes.
//remember that the handler function of a listener is by default handed an object.
//in here, the object passed to the listener is the MQL object. 


/*IMPORTANT UNDERSTANDING - higher order functions
sss
the add/remove event listener/listener methods are predefined methods and are also HIGHER-ORDER FUNCTIONS.
Thus they behave similar to methods like reduce as they accept a predefined number of arguments
eg addEventListener accepts event and CALLBACK function. 

The callback function is also PREDEFINED just like in reduce. In reduce, the callback accepts two arguments.
Here, the callback only accepts one argument which is the event object. Or in the case of mql, the 
mql object
*/



