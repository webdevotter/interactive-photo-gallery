// Source: https://www.geeksforgeeks.org/search-bar-using-html-css-and-javascript/
// Source: https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttributeNode
// Source: https://www.w3schools.com/jsref/met_element_getattribute.asp


    let input = document.getElementById('searchbar'); //Takes user input
    let x = document.querySelectorAll('a'); //pulls values from anchor tags containing data captions
   
    input.addEventListener("keyup", customSearch); // performs function below against user's input


    
    function customSearch() {
    
    for (i = 0; i < x.length; i++) { 
        let j = x[i].getAttribute('data-caption').toLowerCase(); //convert data captions to lower case
        if (j.includes(input.value.toLowerCase())){ //converts user's input to lower case and compares against data captions
            x[i].style.display="grid"; //display images in grid where user's input matches data captions
        }
        else {
            x[i].style.display="none";     // don't display if no matches            
        }
    }
}
