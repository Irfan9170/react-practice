import React from 'react';

const ShowProperty = (props) => {
	const onDeleteHandler=(props)=>{
        console.log("Deleted")
        console.log(props.id);
    }
	return (
		<table>
			<tr>
				<th>Name</th>
				<th>Description</th>
                <th>Size</th>
			</tr>
           {props.properties.map((property)=>{
              return  <tr key={property.id}>
				<td>{property.name} </td>
				<td> {property.description}</td>
				<td>{property.size} </td>
                <td><button  id ={property.id}onClick={onDeleteHandler}> Delete </button></td>
			</tr>
           })}
			
		</table>
	);
};

export default ShowProperty;
