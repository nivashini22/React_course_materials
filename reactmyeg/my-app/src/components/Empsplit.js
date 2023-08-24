import "./Emp.css"
function Empsplit(props){
    return <div className="emp">
        <tr>
    <th>Employee Name</th>
    <th>Employee Email Id</th>
    <th colSpan={2}>Action</th>
    </tr>
        
        <td>{props.name}</td>
        <td>{props.email}</td>
        <td>{props.button1}</td>
        <td>{props.button2}</td>
       
    </div>
}
export default Empsplit; 