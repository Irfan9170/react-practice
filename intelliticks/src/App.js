import ShowProperty from './components/ShowProperty';
import AddProperty from './components/AddProperty';
import {React,useState,useEffect} from 'react';
import Airtable from 'airtable';
import './App.css';
// import Button from './components/UI/Button';
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
const base = new Airtable({apiKey:"keyYpfaKayLIEZb9i"}).base('appVT3Cj4myFwsAGC');
function App() {

  const [properties,setproperties]=useState([]);
  useEffect(()=>{
    base("property").select().eachPage((records,fetchNextPage)=>{
      console.log(records);
      setproperties(records)
      fetchNextPage();
    })
  },[]);
  const onAddProperty=(property)=>{
    // console.log(property)
    base("property").create({...property},(err,records)=>{
      if(err){
        console.log(err)
        return
      }
      setproperties( prev =>{
        const properties= [...prev,records];
        return properties
      })
    })

  };
  const onDeleteHandler=(id)=>{
   console.log(id)
   base('property').destroy([id], (err, deletedRecords) =>{
    if (err) {
      console.error(err);
      return;
    }
    // setproperties(properties)
    console.log('Deleted', deletedRecords, 'records');
  });
  // setproperties( prev =>{
  //   const properties= prev.filter(property => property.id !== id);
  //   return properties
  // })

};
const onClickHandler=()=>{
  //  console.log(properties);
   
   
  const sortProp=properties.sort((a,b)=> {
     
    return a.fields.size - b.fields.size;
  }) 
 
   setproperties(prev=>{
     const newProp = [...sortProp]
     return newProp;
   });
}
  return (
    <div>
        <h1>Property Management</h1>
        <AddProperty onAdd={onAddProperty} />
        {/* {properties.map((property)=>{
           return <ShowProperty key={property.id} name={property.name} description={property.description} size={property.size} />
        })} */}
        <button onClick={onClickHandler}>Sort</button>
        <ShowProperty onDelete={onDeleteHandler} properties={properties}/>
        
    </div>
  );
}

export default App;
