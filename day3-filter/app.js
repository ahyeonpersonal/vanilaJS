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

    //3. clear task event
    clearBtn.addEventListener('click', clearTask);

    //4. Filter tasks
    filter.addEventListener('keyup', filterTasks);
    
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


//3. innerHTML VS removeChild()
//3. ClearTask (3-1)
/*function clearTask(){
    taskList.innerHTML = '';
}*/

//3-2. Faster way
function clearTask(){
    while(taskList.firstChild){
        //while firstchile is exist = meaning if there is something in task list,
        //we delete firstChild of tasklist
        taskList.removeChild(taskList.firstChild);
    }
}

//4.
function filterTasks(e){
    const text = e.target.value.toLowerCase(); //make inputed text to losercase
    //console.log(text);

    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }else{
            task.style.display='none';
        }
    });
}
