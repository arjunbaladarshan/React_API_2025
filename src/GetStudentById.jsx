import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function GetStudentById(){
    const [data, setData] = useState({});
    const { id } = useParams();

    useEffect(()=>{
        fetch('https://67ac08d45853dfff53d922b0.mockapi.io/students/'+id)
        .then(res=>res.json())
        .then(res=>setData(res));
    },[]);

    return (
        <>
            <h1>{data.StudentName}</h1>
            <h4>{data.StudentMobile}</h4>
            <h4>{data.StudentEmail}</h4>
            <h6>{data.createdAt}</h6>
        </>
    );
}

export default GetStudentById;