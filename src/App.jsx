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

  //we need the new id to be generated so we call useEffect straight to get the posts list
  useEffect(()=>{
    axios.get(endpoint).then((resp)=>{
      setPostList(resp.data);
    })
  });

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
              
                <div className="d-flex justify-content-between">
                  <div className="form-group mb-2 p-2 w-50">
                    <label for="author">Author</label>
                    <input type="text" className="form-control" placeholder="Author..."/>
                </div>
                <div className="form-group mb-2 p-2 w-50">
                  <label for="title">Title</label>
                  <input type="text" className="form-control" id="title" placeholder="Title..."/>
                </div>
                </div>
                <div className="form-group mb-2 p-2">
                  <label for="title">Message</label>
                  <input type="text" className="form-control" id="body" placeholder="Write something here..."/>
                </div>
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                  <label className="form-check-label" for="exampleCheck1">public</label>
                </div>
                <button className="btn btn-primary">Submit</button>
              
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

export default App
