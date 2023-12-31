import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Admincss from '../AdminPortal/AdminPortal.module.css'

function AddAssignment()
{

  const [assign,setAssign]=useState([]);
  const [courseNamesMap, setCourseNamesMap] = useState({}); 
  const [FormData,setFormData]=useState({
    course:"",
    assignDescription:"",
    assignment:"",
  })

  useEffect(()=>{
       fetchAssignment();
  },[]);



const fetchAssignment=async()=>{
  try{
   const response = await axios.get(`https://course-website-backend1.onrender.com/api/v1/assignments`)
   console.log(response.data);
   setAssign(response.data.assignments)
  }
  catch(e){
     console.log("Error",e);
  }
}

const handleInputChange=(e)=>{
  setFormData({
    ...FormData,
    [e.target.name]:e.target.value,
   
  })
}

  const handleAddAssignment=async(e)=>{
    e.preventDefault()
    try{
      const token = localStorage.getItem('token');
      const res =await axios.post("https://course-website-backend1.onrender.com/api/v1/assignments", FormData,{
        headers:{ authorization:`Bearer ${token}`}
    });

    console.log(res.data);
    setAssign([...assign,res.data.assignments])
    setFormData({course:'',assignDescription:'',assignment:''});
  }
  catch(e)
  {
    console.log(e);
    alert("Failed to add assignment");
  }
  }

  const handleDeleteAssignment=async(id) =>{
    let conf=window.confirm("Are you sure want to delete this Assignment?")
    if(conf){
        try{
            await axios.delete(`https://course-website-backend1.onrender.com/api/v1/assignments/${id}`,{
              headers:{ authorization:`Bearer ${localStorage.getItem('token')}`}
            });
            setAssign(assign.filter((x)=> x.id!==id))
        }catch(e){
            alert("Failed to Delete the Assignment",e);
        }
    }
  }


  useEffect(() => {
    fetchAssignment();
    const fetchedCourseNames = {
      '658266e23241bfe287f4c18c' : 'Physics',
      '658266f33241bfe287f4c18e': 'Bio Medical',
    };
    setCourseNamesMap(fetchedCourseNames);
  }, []);
  

  const getCourseName = (courseId) => {
    return courseNamesMap[courseId] || 'Unknown Course';
  };
  

  return(
    <>
    <form className={Admincss.form}>


    <div className={Admincss.main}>
    <label className={Admincss.label}>Select Course</label>
    <select className={Admincss.select} onChange={(e)=>setFormData({...FormData,course:e.target.value})}>
            <option className={Admincss.option} value="">Select Course</option>
            <option className={Admincss.option} value="Physics">Physics</option>
            <option className={Admincss.option} value="Bio Medical">Bio Medical</option>
            </select>
            <div >
            <label className={Admincss.label}>Add Assignment Title</label>
           <input 
           className={Admincss.input}
           type='text'
           placeholder='Title'
           name='assignDescription'
           value={FormData.assignDescription}
           onChange={handleInputChange}
           />

           <label className={Admincss.label}>Add URL</label>
           <input 
           className={Admincss.input}
           type='url'
           id='assignment'
           value={FormData.assignment}
           onChange={(e)=>setFormData({...FormData,assignment:e.target.value})}

           />
            </div>
            <button className={Admincss.button} onClick={handleAddAssignment}>Add Assignment</button>

    </div>  

    <div className={Admincss.deleteDiv}>
        <h2>List of Assignments</h2>
        <table className={Admincss.table}>
          <thead>
            <tr>
              <th>Course</th>
              <th>Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(assign) && assign.length > 0 ? (
              assign.map((assignment) => (
                <tr key={assignment._id}>
                 <td>{getCourseName(assignment.course)}</td>
                  
                  <td>{assignment.assignDescription}</td>
                  <td>
                    <button onClick={() => handleDeleteAssignment(assignment._id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No Assignments available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </form>
    </>
    )
}

export default AddAssignment;




