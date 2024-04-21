import React, { useState } from 'react';

const Contact = () => {
  const [showForm, setShowForm] = useState(false);

  const handleGetSupport = () => {
    setShowForm(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowForm(false); 
  };

  return (
    <div>
      <div style={{fontWeight:"bold", fontSize:"47px", marginTop:"5%", marginLeft:"6%"}}>Hi, how can we help?</div>
      <div style={{marginLeft:"4.2%", fontSize:"35px", padding:"2%", fontWeight:"initial"}}>Help & Support</div>
      <div style={{marginLeft:"6%", width:"40%", fontSize:"25px", fontWeight:"lighter"}}>
        Have questions or need to report an issue with a Google product or service? We've got you covered.
      </div>
      <button style={{width:"9%", color:"white", backgroundColor:"blue", marginLeft:"6%", marginTop:"3%", padding:"0.5%"}} onClick={handleGetSupport}>Get Support</button>
      {showForm && (
        <form onSubmit={handleSubmit} style={{marginTop:"4%", marginLeft:"8%"}}>
          <label htmlFor="issue" style={{fontSize:"25px"}}>Describe your issue</label>
          <br></br>
          <textarea id="issue" name="issue" rows="3" style={{width: "50%", marginLeft: "18%", marginTop: "-4%",border:"1px solid black"}}></textarea>
          <br></br>
          <button type="submit" style={{marginTop:"1%", backgroundColor:"blue", color:"white", padding:"0.5%",marginLeft:"37%"}}>Submit</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
