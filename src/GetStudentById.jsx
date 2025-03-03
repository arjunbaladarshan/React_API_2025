import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function GetStudentById(){
    const [data, setData] = useState({});
    const { id } = useParams();

    useEffect(()=>{
        fetch('https://62d6c51451e6e8f06f12bd5d.mockapi.io/faculties/'+id)
        .then(res=>res.json())
        .then(res=>setData(res));
    },[]);

    return (
        <>
            <h1>{data.subjectName}</h1>
            <h4>{data.subjectCode}</h4>
            <h4>{data.subjectFaculty}</h4>
            <h6>{data.id}</h6>
        </>
    );
}

export default GetStudentById;