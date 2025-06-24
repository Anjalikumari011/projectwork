import { App2 } from "./components/App2";
function App() {
    const element = <h1>Hello, World!</h1>;  
        const name = "John";

  return (
    <>
    {element}
    
    {/*simple jsx element */}
    {/*<h1>i am Anjali</h1>*/}
    {/* jsx with javascript expression */}
   {/* <h1>Hello, {name}!</h1>; */}
  
   <App2/>
  </>
  )
}

export default App
