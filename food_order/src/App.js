import {useState} from 'react';
import CardList from './components/CardList/CardList';
import Header from './components/Layouts/Header'
import Meals from './components/Meals/Meals';
import CardProvider from './store/CartProvider'

function App() {
  const [showCardList,setShowCardList]= useState(false);
    const showCardListHandler=()=>{
      setShowCardList(true)
    }
    const closeShowCardListHandler =()=>{
      setShowCardList(false)
    }

  return (
    <CardProvider>
    {showCardList && <CardList onClose={closeShowCardListHandler}/>}
   <Header onShowCardList={showCardListHandler} />
     <main>
     <Meals />
     </main>
   </CardProvider>
  );
}

export default App;
