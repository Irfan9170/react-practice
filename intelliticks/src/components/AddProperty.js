import {React,useState} from 'react';

const AddProperty=(props)=>{
    const [name,setName]=useState('');
    const [description,setDescription]=useState('');
    const [size,setSize]=useState('');
    const[isEditing,setEditing]=useState(false);
    const onNameHandler =(event)=>{
        setName(event.target.value)
    }
    const onDescriptionHandler =(event)=>{
        setDescription(event.target.value)
    }
    const onSizeHandler =(event)=>{
        setSize(event.target.value)
    }
    const onSubmitHandler=(event)=>{
               event.preventDefault();
               const property = {
                //    id:Math.random().toString(),
                   name : name,
                   description:description,
                   size:size
               }
               setDescription('');
               setName('');
               setSize('');
               
               props.onAdd(property);
    }
    const startEditingHandler = () => {
		setEditing(true);
	  };
	
	  const stopEditingHandler = () => {
		setEditing(false);
	  };
    return (
        <div>
        {!isEditing && (
			<button onClick={startEditingHandler}>Add New Property</button>
		  )}
          {isEditing &&  <div>
                <form  onCancel={stopEditingHandler} onSubmit={onSubmitHandler} >
                        <label>Name</label>
                    <input value={name} onChange={onNameHandler} /> 
                    <label>Description</label>
                    <input value={description} onChange={onDescriptionHandler}  /> 
                    <label>Size</label>
                    <input value={size} onChange={onSizeHandler} /> 
                    <button  > Submit</button>
                </form>
             
           </div>}
          
           </div>
    )
}

export default AddProperty;