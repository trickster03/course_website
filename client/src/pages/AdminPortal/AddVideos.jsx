import React,{ useEffect,useState } from "react";
import axios from "axios";
import Admincss from '../AdminPortal/AdminPortal.module.css';

function AddVideos() {
    const [videos, setVideos]=useState([]);
    const [courseNamesMap, setCourseNamesMap] = useState({}); 
    const [formData,setFormData]= useState({
        course:"",
        title:"",
        videoLink: ""
    });

    useEffect(()=>{
        fetchVideos();
    },[]);

    const fetchVideos= async()=>{
        try{
            const response = await axios.get(`https://course-website-backend1.onrender.com/api/v1/videos`);
            // console.log(response.data);
            // const data= await response.json();
            setVideos(response.data.videos);
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

      const handleAddVideo = async(e) =>{
        e.preventDefault()
        try{
            const token = localStorage.getItem('token');
            // console.log('Token:', token);
            const res =await axios.post("https://course-website-backend1.onrender.com/api/v1/videos", formData,{
              headers:{ authorization:`Bearer ${token}`}
            });
            // const data = await res.json();
            console.log(res.data)
            setVideos([...videos,res.data.vid])
            setFormData({course:'',title:'' , videoLink:''});
        }catch(e){
            console.log(e);
            alert("Failed to add Video",e);
        }
      };

      const handleDeleteVideo=async(id) =>{
        let conf=window.confirm("Are you sure want to delete this Video?")
        if(conf){
            try{
                await axios.delete(`https://course-website-backend1.onrender.com/api/v1/videos/${id}`,{
                  headers:{ authorization:`Bearer ${localStorage.getItem('token')}`}
                });
                setVideos(videos.filter((x)=> x.id!==id))
            }catch(e){
                alert("Failed to Delete the Video",e);
            }
        }
      }

      useEffect(() => {
        fetchVideos();
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

            <select className={Admincss.select} onChange={(e)=>setFormData({...formData,course:e.target.value})}>
            <option className={Admincss.option} value="">Select Course</option>
            <option className={Admincss.option} value="Physics">Physics</option>
            <option className={Admincss.option} value="Bio Medical">Bio Medical</option>
            </select>
 



            <div >
            <label className={Admincss.label}>Add video Title</label>
                <input
                className={Admincss.input}
                 type="text"
                 placeholder="Title"
                 name="title"
                 value={formData.title}
                 onChange={handleInputChange}
                 />
                   <label className={Admincss.label}>Enter URL</label>
          <input className={Admincss.input}
            type="url"
            id="assignment"
            value={formData.videoLink}
            onChange={(e) => setFormData({ ...formData, videoLink: e.target.value })}
          />
                
            </div>
            <button className={Admincss.button} onClick={handleAddVideo}>Add Video</button>
        </div>
      

        <div className={Admincss.deleteDiv}>
        <h2>List of Videos</h2>
        <table className={Admincss.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(videos) && videos.length > 0 ? (
              videos.map((video) => (
                <tr key={video._id}>
                   <td>{getCourseName(video.course)}</td>
                  <td>{video.title}</td>
                  <td>
                    <button onClick={() => handleDeleteVideo(video._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No Videos available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      </form> 
        </>
       
    )

}


export default AddVideos;