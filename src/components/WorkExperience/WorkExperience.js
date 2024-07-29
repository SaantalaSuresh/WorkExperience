// import React from 'react';

// const WorkExperience = () => {
//   return (
//     <div className="work-experience">
//       <h3>Work Experience</h3>
//       <form>
//         <div className="form-group">
//           <label htmlFor="company">Company</label>
//           <input type="text" id="company" name="company" required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="position">Position</label>
//           <input type="text" id="position" name="position" required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="duration">Duration</label>
//           <input type="text" id="duration" name="duration" required />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default WorkExperience;


import React, { useState } from 'react';
import "./index.css"


const WorkExperience = () => {
  const [isFresher, setIsFresher] = useState(true);
  const [experiences, setExperiences] = useState([
    { company: '', jobTitle: '', startDate: '', endDate: '', responsibilities: '', reasonForLeaving: '', salary: '' },
  ]);

  const handleFresherChange = (event) => {
    setIsFresher(event.target.value === 'yes');
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newExperiences = [...experiences];
    newExperiences[index][name] = value;
    setExperiences(newExperiences);
  };

  const addExperience = () => {
    setExperiences([
      ...experiences,
      { company: '', jobTitle: '', startDate: '', endDate: '', responsibilities: '', reasonForLeaving: '', salary: '' },
    ]);
  };

  return (
    <div className="work-experience">
      <h2>Work Experience</h2>
      <div className="fresher-section">
        <label>Are you a fresher (no prior work experience)?</label>
        <select onChange={handleFresherChange}>
          <option value="yes">Yes, I am a fresher</option>
          <option value="no">No, I have work experience</option>
        </select>
      </div>
      {!isFresher && (
        <div className="experience-details">
          {experiences.map((experience, index) => (
            <div key={index} className="experience">
              <div className="form-group">
                <label>Company Name:</label>
                <input
                  type="text"
                  name="company"
                  value={experience.company}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </div>
              <div className="form-group">
                <label>Job Title:</label>
                <input
                  type="text"
                  name="jobTitle"
                  value={experience.jobTitle}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </div>
              <div className="form-group">
                <label>Employment Dates:</label>
                <div className="date-picker">
                  <label>Start Date:</label>
                  <input
                    type="date"
                    name="startDate"
                    value={experience.startDate}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </div>
                <div className="date-picker">
                  <label>End Date:</label>
                  <input
                    type="date"
                    name="endDate"
                    value={experience.endDate}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Responsibilities and Achievements:</label>
                <textarea
                  name="responsibilities"
                  value={experience.responsibilities}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </div>
              <div className="form-group">
                <label>Reason for Leaving Previous Job:</label>
                <input
                  type="text"
                  name="reasonForLeaving"
                  value={experience.reasonForLeaving}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </div>
              <div className="form-group">
                <label>Previous Salary:</label>
                <input
                  type="text"
                  name="salary"
                  value={experience.salary}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </div>
            </div>
          ))}
          <button className="add-experience-button" onClick={addExperience}>
            Add Another Job Experience
          </button>
        </div>
      )}
      
    </div>
  );
};

export default WorkExperience;