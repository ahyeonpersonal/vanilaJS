//define UI
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task'); //input 

//function to load all event listner
loadEventListeners();

function loadEventListeners (){
    //add task event
    form.addEventListener('submit',addTask);

    //2. remove task event
    taskList.addEventListener('click', removeTask);

    
};

function addTask (e){
    
    if(taskInput.value === ''){
        //if input is empty
        alert('Add a task');
    }

    //Create li element
    const li = document.createElement('li');
    li.className='collection-item';
    
   //create text node and append to li
   li.appendChild(document.createTextNode(taskInput.value));
   //create new link element
   const link = document.createElement('a');
   link.className= 'delete-item secondary-content';
   link.innerHTML='<i class="fa fa-remove"></i>';
   li.appendChild(link);
    
   
   
    taskList.appendChild(li);

    taskInput.value="";
    
    e.preventDefault();
}

//2.
function removeTask (e) {
    if(e.target.parentElement.classList.contains('delete-item')){
        
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
        }
        
        //console.log(e.target) = <i>
        //e.target.parentElement = <a>
        //e.target.parentElement.parentElement = <li>

        console.log(e.target);
    }
}
