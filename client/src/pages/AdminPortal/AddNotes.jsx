import React,{ useEffect,useState } from "react";
import axios from "axios";
import Admincss from '../AdminPortal/AdminPortal.module.css';

function AddNotes() {
    const [notes, setNotes]=useState([]);
    const [courseNamesMap, setCourseNamesMap] = useState({}); 
    const [formData,setFormData]= useState({
        course:"",
        notesDescription:"",
        notesLink: ""
    });

    useEffect(()=>{
        fetchNotes();
    },[]);

    const fetchNotes= async()=>{
        try{
            const response = await axios.get(`https://course-website-backend1.onrender.com/api/v1/notes`);
            console.log(response.data);
            // const data= await response.json();
            setNotes(response.data.notes);
        }catch(e){
            console.log("Error",e);
        }
    }

    const handleInputChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

      const handleAddNotes = async(e) =>{
        e.preventDefault()
        try{
            const token = localStorage.getItem('token');
            // console.log('Token:', token);
            console.log(formData);
            const res =await axios.post("https://course-website-backend1.onrender.com/api/v1/notes", formData,{
              headers:{ authorization:`Bearer ${token}`}
            });
            // const data = await res.json();
            console.log(res.data)
            setNotes([...notes,res.data.notes])
            setFormData({course:'',notesDescription:'' , notesLink:''});
        }catch(e){
            console.log(e);
            alert("Failed to add Notes");
        }
      };

      const handleDeleteNotes=async(id) =>{
        let conf=window.confirm("Are you sure want to delete this Notes?")
        if(conf){
            try{
                await axios.delete(`https://course-website-backend1.onrender.com/api/v1/notes/${id}`,{
                  headers:{ authorization:`Bearer ${localStorage.getItem('token')}`}
                });
                setNotes(notes.filter((x)=> x.id!==id))
            }catch(e){
                alert("Failed to Delete the Notes",e);
            }
        }
      }

      useEffect(() => {
        fetchNotes();
        const fetchedCourseNames = {
          '658266e23241bfe287f4c18c' : 'Physics',
          '658266f33241bfe287f4c18e': 'Bio Medical',
        };
        setCourseNamesMap(fetchedCourseNames);
      }, []);
      
    
      const getCourseName = (courseId) => {
        console.log("Course ID:", courseId);
        console.log("Course Names Map:", courseNamesMap);
      
        if (courseId && courseNamesMap && courseId in courseNamesMap) {
          return courseNamesMap[courseId];
        } else {
          return 'Unknown Course';
        }
      };
      

    return(
        <>
        <form className={Admincss.form} >
    <div className={Admincss.main}>
    <label className={Admincss.label}>Select Course</label>
    <select className={Admincss.select} onChange={(e)=>setFormData({...formData,course:e.target.value})}>
            <option className={Admincss.option} value="">Select Course</option>
            <option className={Admincss.option} value="Physics">Physics</option>
            <option className={Admincss.option} value="Bio Medical">Bio Medical</option>
            </select>

            <div >
            <label className={Admincss.label}>Add Notes Title</label>
           <input 
           className={Admincss.input}
           type='text'
           placeholder='Title'
           name='notesDescription'
           value={formData.notesDescription}
           onChange={handleInputChange}
           />

           <label className={Admincss.label}>Add URL</label>
           <input 
           className={Admincss.input}
           type='url'
           id='notes'
           value={formData.notesLink}
           onChange={(e)=>setFormData({...formData,notesLink:e.target.value})}

           />
            </div>
            <button className={Admincss.button} onClick={handleAddNotes}>Add Notes</button>
     
    </div>  

    
    <div className={Admincss.deleteDiv}>
        <h2>List of Notes</h2>
        <table className={Admincss.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(notes) && notes.length > 0 ? (
              notes.map((note) => (
                <tr key={note._id}>
                  {/* <td>{getCourseName(note.course)}</td> */}
                  {/* <td>{note.course}</td> */}
                  <td>{note.notesDescription}</td>
                  <td>
                    <button onClick={() => handleDeleteNotes(note._id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No Notes available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </form>


            
        </>
       
    )

}


export default AddNotes;