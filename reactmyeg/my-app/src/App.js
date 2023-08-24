import Employee from "./components/Employee";
import "./components/Emp.css"
function App(){
  const emp = [{
    id:1,
    name:"Nivashini",
    email:"nivashini@gmail.com",
    button1:"update",
    button2:"delete"
  },
  {
    id:2,
    name:"Jeevitha",
    email:"jeevitha@gmail.com",
    button1:"update",
    button2:"delete"
  },
  {
    id:3,
    name:"Abinaya",
    email:"abinaya@gmail.com",
    button1:"update",
    button2:"delete"
  }];
  return <div>
    <h1 style={{color:"blue"}}><marquee>Employee List</marquee></h1>
    <table className="emp1"  style={{ border: 'solid 3px blue' }} cellPadding={5} cellSpacing={3}>
     
      
        <Employee emp={emp} />
      
    </table>
  </div>
}
export default App;