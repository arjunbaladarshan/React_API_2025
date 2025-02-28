import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function GetAllStudents(){
    const [data, setData ] = useState([]);
    const navigate = useNavigate();
    const [isUpdated, setIsUpdated] = useState(false);
    useEffect(()=>{
        fetch('apiUrl_here')
        .then(res=>res.json())
        .then(res=>setData(res));
    },[isUpdated]);

    const formatedData = data.map(res=>{
        return(
            <>
                <tr>
                    <td>{res.id}</td>
                    <td>{res.FacultyName}</td>
                    <td>
                        <Link to={"/students/"+res.id}>Detail Link</Link>
                    </td>
                    <td>
                        <button onClick={()=>{
                            let ans = confirm("Are you sure you want to delete??")
                            if(ans){
                                let apiUrl = 'apiUrl_here';
                                fetch(apiUrl+res.id, {method:"DELETE"})
                                .then(res=>res.json())
                                .then(res=>{
                                    setIsUpdated(!isUpdated);
                                });
                            }
                            
                        }}>Delete</button>
                    </td>
                </tr>
            </>
        );
    });

    return (<>
        <table>
            {formatedData}
        </table>
    </>);
}

export default GetAllStudents;