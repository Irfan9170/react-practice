import React from 'react';
import Button from './UI/Button'
const ShowProperty = (props) => {
	// const deleteHandler=(id)=>{
	// 	props.onDelete(id);
	// }
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
                <td><Button id={property.id} onDelete={props.onDelete} type="button">Delete </Button></td>
			</tr>
           })}
			
		</table>
	);
};

export default ShowProperty;
