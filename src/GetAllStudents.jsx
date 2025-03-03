import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function GetAllStudents(){
    const [data, setData ] = useState([]);
    const navigate = useNavigate();
    const [isUpdated, setIsUpdated] = useState(false);
    useEffect(()=>{
        fetch('https://62d6c51451e6e8f06f12bd5d.mockapi.io/faculties')
        .then(res=>res.json())
        .then(res=>setData(res));
    },[isUpdated]);

    const formatedData = data.map(res=>{
        return(
            <>
                <tr>
                    <td>{res.id}</td>
                    <td>{res.subjectName}</td>
                    <td>
                        <Link to={"/students/"+res.id}>Detail Link</Link>
                    </td>
                    <td>
                        <button onClick={()=>{
                            let ans = confirm("Are you sure you want to delete??")
                            if(ans){
                                let apiUrl = 'https://62d6c51451e6e8f06f12bd5d.mockapi.io/faculties/';
                                fetch(apiUrl+res.id, {method:"DELETE"})
                                .then(res=>res.json())
                                .then(res=>{
                                    setIsUpdated(!isUpdated);
                                });
                            }
                            
                        }}>Delete</button>
                    </td>

                    <td>
                        <button onClick={()=>{
                            navigate("/students/edit/"+res.id)
                        }}>Edit</button>
                    </td>
                </tr>
            </>
        );
    });

    return (<>
        <Link to={"./add"}>Add Student</Link>
        <table>
            {formatedData}
        </table>
    </>);
}

export default GetAllStudents;