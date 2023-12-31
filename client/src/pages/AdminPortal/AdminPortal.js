import React,{useState} from 'react'
import AdminCss from './Admin.module.css'
import AddVideos from './AddVideos'
import AddNotes from './AddNotes'
import AddAssignment from './AddAssign'
function AdminPortal()
{
    const [selectedFilter, setSelectedFilter] = useState("Videos");
    const handleFilterChange = (event) => {
        setSelectedFilter(event.target.value);
      };


    return (
        <>
        <div className={AdminCss.main}>
            <h1 className={AdminCss.heading}>Admin Portal</h1>

            <select 
            className={AdminCss.select}
            value={selectedFilter}
            onChange={handleFilterChange}>
            <option value="Videos">Videos</option>
            <option value="Notes">Notes</option>
            <option value="Assignment">Assignment</option>
          </select>
          {selectedFilter === "Videos" &&  <AddVideos />}
          {selectedFilter === "Notes" &&  <AddNotes />}
          {selectedFilter === "Assignment" &&  <AddAssignment />}
            </div>
        </>
    )
}

export default AdminPortal;