import ShowProperty from './components/ShowProperty';
import AddProperty from './components/AddProperty';
import {React,useState} from 'react';
import './App.css';
const DUMMY_DATA = [
  {
    id: 'e1',
    name: 'XYZ',
    description: " 3BHK",
    size: "500 sq",
  },
  {
    id: 'e2',
    name: 'XYZ',
    description: " 1BHK",
    size: "900 sq",
  },
  {
    id: 'e3',
    name: 'XYZ',
    description: " 2BHK",
    size: "5000 sq",
  },
  
];

function App() {

  const [properties,setproperties]=useState(DUMMY_DATA);
  
  const onAddProperty=(property)=>{
    setproperties(prevProperties =>{
      return [property,...prevProperties]
    })

  };
  
  return (
    <div>
        <h1>Property Management</h1>
        <AddProperty onAdd={onAddProperty} />
        {/* {properties.map((property)=>{
           return <ShowProperty key={property.id} name={property.name} description={property.description} size={property.size} />
        })} */}
        <ShowProperty properties={properties}/>
        
    </div>
  );
}

export default App;
