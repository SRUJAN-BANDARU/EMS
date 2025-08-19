import React, { useState } from 'react'
import NewTask from '../TaskList/NewTask';
import { setLocalStorage } from '../../utils/localStorage';

const CreateTask = () => {

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDesc, setTaskDesc] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [taskCategory, setTaskCategory] = useState('');
    const [assignTo, setAssignTo] = useState('');

    const [task, setTask] = useState({});


    const submitHandler = (e)=>{
        e.preventDefault();
        // console.log(taskTitle, taskCategory, taskDate, taskDesc, assignTo);

        const newTask = {title : taskTitle, description : taskDesc, date : taskDate, category :  taskCategory, assignTo, active:false, newTask:true, completed:false, failed : false};

        setTask(newTask);
        // console.log(task);

        const data = JSON.parse(localStorage.getItem('employees'));
        // console.log(data);

        data.forEach((elem)=>{
            if(assignTo == elem.firstName){
                elem.tasks.push(task);
                elem.taskCount.newTask = elem.taskCount.newTask + 1;
                console.log(elem);                
            }
            
        })

        setLocalStorage('employees', JSON.stringify(data));
        

        setTaskTitle('');
        setTaskDesc('');
        setTaskDate('');
        setTaskCategory('');
        setAssignTo('');
        
    }

  return (
    <div>
      <div className='p-5 bg-[#282525] mt-7 rounded-md'>
            <form onSubmit={(e)=>{
                submitHandler(e);
            }} className='flex w-full flex-wrap items-start justify-between'>

                <div className='w-1/2'>
                    <div>
                        <label htmlFor="title"><h3>Title</h3></label>
                        <input
                        value={taskTitle}
                        onChange={(e) =>{
                            setTaskTitle(e.target.value);
                        }}
                         type="text" placeholder='Make a UI Design' id='title' className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'/>
                    </div>
                    <div>
                        <label htmlFor="date"><h3>Date</h3></label>
                        <input
                        value={taskDate}
                        onChange={(e) =>{
                            setTaskDate(e.target.value);
                        }}
                        type="date" name="" id="date" 
                        className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'/>
                    </div>

                    <div>
                        <h3>Assign to</h3>
                        <input 
                        value={assignTo}
                        onChange={(e) =>{
                            setAssignTo(e.target.value);
                        }}
                        type="text" placeholder='Employee name'
                        className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'/>
                    </div>

                    <div>
                        <h3>Category</h3>
                        <input 
                        value={taskCategory}
                        onChange={(e) =>{
                            setTaskCategory(e.target.value);
                        }}
                        type="text" placeholder='Design, Dev, etc..'
                        className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'/>
                    </div>
                </div>

                <div className='w-1/2'>
                    <label htmlFor="des"><h3>Description</h3></label>
                    <textarea 
                    value={taskDesc}
                        onChange={(e) =>{
                            setTaskDesc(e.target.value);
                        }}
                    name="" id="des" rows="10" cols="30" 
                    className='text-sm py-2 px-4 w-full h-44 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'></textarea>

                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>

            
                
            </form>
        </div>
    </div>
  )
}

export default CreateTask
