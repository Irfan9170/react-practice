import CardList from './components/CardList/CardList';
import Header from './components/Layouts/Header'
import Meals from './components/Meals/Meals'

function App() {
  return (
    <>
    <CardList/>
   <Header />
     <main>
     <Meals />
     </main>
   </>
  );
}

export default App;
