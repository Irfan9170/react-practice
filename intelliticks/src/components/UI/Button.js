import React from 'react';

const Button = (props)=>{
    // console.log(props.id)
    const onDeleteHandler=()=>{
        // console.log("Deleted")
        // console.log(props.id);
        props.onDelete(props.id);
    }
    return (
        <button onClick={onDeleteHandler}  className="button" >
        {props.children}
      </button>
    )
}

export default Button;