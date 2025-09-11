import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
const endpoint="https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";

function App() {
  const [postList,setPostList]=useState([]);
  const [newPost,setNewPost]= useState({
    id: "",
    author: "",
    public: false,
    title: "",
    body: ""
  });

  

  const handleSubmit = (e)=> {
    e.preventDefault();
  setNewPost({...newPost, id: postList[postList.length - 1].id - 1});
  axios({
  method: 'post',
  url: endpoint,
  data: {newPost}
  }).then((resp)=>{
    console.log(resp)
   }).catch((err)=>{console.log(err)})
  };

  const handleChange = (e)=> {
    e.preventDefault();
 
    setNewPost({
      ...newPost,
      [e.target.name]:e.target.value,
    }
)
 
    
  } 
 
   // we need the new id to be generated so we call useEffect straight to get the posts list
  useEffect(()=>{
    axios.get(endpoint).then((resp)=>{
      
      setPostList(structuredClone(resp.data));
    })
  },[]);

  return (
    <>
    <header className='p-3 text-center'>
      <h1> react Post Form</h1>
    </header>
    <main>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card p-5">
              <form>
                
                <div className="d-flex justify-content-between">
                  <div className="form-group mb-2 p-2 w-50">
                    <label>Author</label>
                    <input type="text" className="form-control"  placeholder="Author..." name="author"
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group mb-2 p-2 w-50">
                  <label >Title</label>
                  <input type="text" className="form-control"  placeholder="Title..." name="title" onChange={handleChange}/>
                </div>
                </div>
                <div className="form-group mb-2 p-2">
                  <label >Message</label>
                  <input type="text" className="form-control" placeholder="Write something here..." name="body" onChange={handleChange}/>
                </div>
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input"
                  name="public"
                  onChange={(e)=>{
                    setNewPost({
                      ...newPost,
                      public:e.target.checked
                    })
                  }}
                  
                  />
                  <label className="form-check-label"  >public</label>
                </div>
                <button className="btn btn-primary"
                type="submit" onClick={handleSubmit} >Submit</button>
                </form> 
              
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

export default App
