 import Empsplit from "./Empsplit";

function Employee(props){
    return <div> 
        
    
        
       <Empsplit name={props.emp[0].name} email={props.emp[0].email} button1={props.emp[0].button1} button2={props.emp[0].button2} />
       <Empsplit name={props.emp[1].name} email={props.emp[1].email} button1={props.emp[1].button1} button2={props.emp[1].button2} />
       <Empsplit name={props.emp[2].name} email={props.emp[2].email} button1={props.emp[2].button1} button2={props.emp[2].button2} />
       
       


    </div>
}
export default Employee;