import logo from './logo.svg';
import './App.css';
import dogs from "./firebase/dogs.json"
import user from "./firebase/person.json"
import { useState } from 'react';
function App() {

  const [state, setstate] = useState(user.likedDogs)


  const addDelFavourites=(name)=>{
    //// qui va la query de firebase+

  //EN EL THEN VA TODO ESTO
    console.log("THIS ARE THE LIKE DOGS",state)
   const findedDog = state.find(item=>item===name)
    console.log("THIS IS THE FINDED STATE",findedDog);

    if (findedDog) {
      ///FILTRAN
      const newList = state.filter(item=>item!==name) 
      console.log("THIS IS THE LIST WITH DELETE",newList)
      //REEMPLAZARIAN EL VALOR
      setstate(newList)
    }
    else{

        const newList =[...state,name ]
        console.log("THIS WILL THE NEX LIST",newList)
        ///USETEDES HARIAN UN PUSH A LA LISTA
        //REEMPLAZARIAN
        setstate(newList)
    }

  }

  return (
    <div className="App">
      <div>
        <p>
          lista de perros
        </p>
        {
          dogs.map(({name})=>(
          <div style={{display:"flex", justifyContent:"center"}}>
            <p>{name}</p>
            <button onClick={()=>addDelFavourites(name)} >favorito</button>
          </div>))
        }

      </div>
      <div>
        <p>
          info de uisuario
        
        </p>
        <div>
          <p>{user.name}</p>
          <p>{user.lastname}</p>
        </div>
        <div>
          <h2>liked dogs</h2>
{
  state.map(item=><p>{item}</p>)
}


        </div>
      </div>
    </div>
  );
}

export default App;
