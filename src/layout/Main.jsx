import React from 'react'
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
const Main = (props) => {
  const mainData= props.data;
  //set state variable to show only one post 
  const [currentPost,setCurrentPost]=useState("");
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-12">

            <div className="accordion p-4" id="post-list">
            {
              mainData.map((post,index)=>{
                //because the data integrity breach given by the json received, with duplicate id's,  i will use the index as keys as they will always be unique
                if (post){
                   return(
                   <div className="accordion-item m-3" key={index}>
                    <h2 className="accordion-header">
                      
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`}>
                        <div>
                          <span>
                            Author : {post.author!="" ? post.author : "anonymous"}   
                          </span>
                          <h3>
                            {post.title!="" ? post.title : "untitled"}
                          </h3>
                          <span>access: {post.public ? "public" : "private"}</span>
                          
                        </div>
                      </button>
                    </h2>
                    <div id={`collapse${index}`} className="accordion-collapse collapse " data-bs-parent="#post-list">
                      
                      <div className="accordion-body">
                        <div className="option-bar">
                          <button className='edit-btn mod'>modify</button>
                          <button className='edit-btn del'>delete</button>
                        </div>
                        <div className="post-body">
                          <p>
                        {post.body!=="" ? post.body : " empty message "}
                          </p>
                        </div>

                      </div>
                    </div>
                  </div>

                        
                )

                  
                }
               
              })
            }
            </div> 
          </div>
        </div>
      </div>
       
    </main>
  )
}

export default Main