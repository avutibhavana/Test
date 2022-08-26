import React, { useEffect,useState} from 'react'

const App = () => {
  const [posts,setPosts]=useState([])
  const [checks,setChecks]=useState(false)
  const [count,setCount]=useState(0)

  let json;
  useEffect(()=>{
    const loadAsync=async()=>{
      try{
      const response=await fetch("https://jsonplaceholder.typicode.com/users")
      json=await response.json()
      console.log(json)
      setPosts(json)
      }catch(e){
        console.log(e)
      }
    }
    loadAsync()
  },[])

const targetElement=(e)=>{

}
const check=(e)=>{
  if(e.target.element===posts.company.name){
    return true
  }
  else{
    return false
  }
  }
console.log(posts)
  return (
    <div>
    <form>
      <label>input:</label>
      <input type="text" onChange={targetElement}></input>
      <button onClick={check}>Search</button>
    checks?"<div><h4>{posts.company.name}</h4></div>
    <div><h4>{posts.company.email}</h4></div>":"<div><h4>Not found</h4></div>"

    </form>

    </div>
  )
}

export default App