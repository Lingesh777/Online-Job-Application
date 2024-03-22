import axios from "axios";

let jwtToken=localStorage.getItem('Token');
const authheader=`Bearer${jwtToken}`;
console.log(jwtToken);
const headers={
    'Authorization':authheader,
    'Content-Type':'application/json',
};

const URI="http://localhost:8080";

const userregister=(register)=> axios.post(`${URI}/auth/signup`,register)
const userlogin=(logdata)=> axios.post(`${URI}/auth/login`,logdata)
const userdata=()=>axios.get(`${URI}/auth/getuserdata`)
const edituser=(uid,user)=>axios.put(`${URI}/auth/edituser/${uid}`,user)

const getjob=()=> axios.get(`${URI}/auth/getjob`)
const getjobbyid=(id)=> axios.get(`${URI}/auth/getjob/${id}`,id)
// const getproductbyname=(pname)=> axios.get(`${URI}/auth/getproductname/${pname}`,{headers})
// const getproductbycat=(pcategory)=> axios.get(`${URI}/auth/getproductcategory/${pcategory}`,{headers})
const addjob=(job)=> axios.post(`${URI}/auth/addjob`,job,{headers})
const editjob=(id,job)=> axios.put(`${URI}/auth/updatejob/${id}`,job,{headers})
const deletejob=(id)=> axios.delete(`${URI}/auth/deletejob/${id}`,{headers})

const addapply=(apply)=>axios.post(`${URI}/auth/postapply`,apply,{headers})
const getapply=()=>axios.get(`${URI}/auth/getapply`)
const getapplybyid=(aid)=> axios.get(`${URI}/auth/getapply/${aid}`,aid)

// const getreview=()=> axios.get(`${URI}/auth/getreview`)
// const addreview=(rev)=> axios.post(`${URI}/auth/postreview`,rev)
// const deleterev=(rid)=> axios.delete(`${URI}/delete/${rid}`,{headers})

export{userregister,userlogin,userdata,edituser,addjob,editjob,deletejob,getjob,getjobbyid,addapply,getapply,getapplybyid}