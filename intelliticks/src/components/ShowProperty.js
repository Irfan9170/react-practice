import React from 'react';
import Button from './UI/Button'
const ShowProperty = (props) => {
	// const deleteHandler=(id)=>{
	// 	props.onDelete(id);
	// }
	// {props.properties.map((property)=>{
	// 	console.log(property.fields.name)
	// })}
	return (
		<table>
			<tr>
				<th>Name</th>
				<th>Description</th>
                <th>Size</th>
			</tr>
           {props.properties.map((property)=>{
              return  <tr key={property.fields.id}>
				<td>{property.fields.name} </td>
				<td> {property.fields.description}</td>
				<td>{property.fields.size} </td>
                <td><Button id={property.id} onDelete={props.onDelete} type="button">Delete </Button></td>
			</tr>
           })}
			
		</table>
	);
};

export default ShowProperty;
