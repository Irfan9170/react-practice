import {useState} from 'react';
import CardList from './components/CardList/CardList';
import Header from './components/Layouts/Header'
import Meals from './components/Meals/Meals'

function App() {
  const [showCardList,setShowCardList]= useState(false);
    const showCardListHandler=()=>{
      setShowCardList(true)
    }
    const closeShowCardListHandler =()=>{
      setShowCardList(false)
    }

  return (
    <>
    {showCardList && <CardList onClose={closeShowCardListHandler}/>}
   <Header onShowCardList={showCardListHandler} />
     <main>
     <Meals />
     </main>
   </>
  );
}

export default App;
