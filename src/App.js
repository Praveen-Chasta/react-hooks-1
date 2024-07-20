import { useEffect, useState , memo , useCallback} from "react";
import axios from 'axios';

// useEffect 

// function App() {
//   const [num, setNum] = useState(1);

//   const changeNumber = (num) => {
//      setNum(num)
//   } 

//   return(
//     <>
//       <button onClick={() => setNum(1)}>1</button>
//       <button onClick={() => setNum(2)}>2</button>
//       <button onClick={() => setNum(3)}>3</button>
//       <button onClick={() => setNum(4)}>4</button>
//         <Todo id = {num} />
//     </>
//   )
// }

// function Todo({id}) {
//   const [todos, setTodo] = useState([]);

//   useEffect(() =>{
//     axios.get(`https://sum-server.100xdevs.com/todo/?id=${id}`)
//     .then(function(response){
//       setTodo([response.data.todo])
//     })
//     .catch(function(){
//       console.log("Something Went Wrong")
//     })
//   },[id])

//   return(
//     <>
//     {todos.map((todo) => (
//         <div>
//           <h1>{todo.title}</h1>
//           <p>{todo.description}</p>
//         </div>
//     ))}
//     </>
//   )
// }

// export default App


function App () {

  const [count, setCount] = useState(0);

  const inputFunction = useCallback(() => {      // Without useCallback this function is triggered everytime but as a different function which is looking similar to this function but in reality those are different , we use useCallback , in that when we put some condition (in dependency area []) then change the function otherwise function is same.
    console.log("hi there")
  } ,[])

  return(
    <>
      <ButtonComponent inputFunction = {inputFunction} />
      <button onClick = {() => setCount(count + 1)}> Count : {count}</button>
    </>
  )
}

const ButtonComponent = memo(({inputFunction}) => {                  // without using memo the chile component render everytime , it doesn't matter it changed value or not . But when we use memo here it doesn't Rerender because of memo , (memo work's here as memorized the data is changed or not) 

  console.log("child render")

  return(
    <>
      <button>Button Clicked</button>
    </>
  )
})



export default App