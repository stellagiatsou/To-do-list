document.addEventListener('DOMContentLoaded', function() {
    //By default the submit button is disabled
    document.querySelector('#submit').disabled = true;

    document.querySelector('#task').onkeyup = () => {
        if (document.querySelector('#task').value.length > 0){
            document.querySelector('#submit').disabled = false;
        } else{
            document.querySelector('#submit').disabled = true;
        }
        
    }

    document.querySelector('form').onsubmit = () =>{
        const task = document.querySelector('#task').value;
        //console.log(task); //appears on the console
        
        //create new element that i'm going to add into the body of html
                            //create a list item
        const li = document.createElement('li')
        li.innerHTML = task; //variable on line 8

        document.querySelector('#tasks').append(li); //append the li value to the end of this element (#tasks)
        
        document.querySelector('#task').value = ''; //clear the value after submitting
        document.querySelector('#submit').disabled = true;

        //Stop form from submitting
        return false;
    }
});