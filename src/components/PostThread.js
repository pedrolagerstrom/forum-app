import React, { useState } from 'react'
import {
    useParams
  } from "react-router-dom";


  const baseURL = `https://forum-api-jkrop.ondigitalocean.app`;

  const PostThread = () => {
      let {categoryId} = useParams();

      const postThreadURL = `${baseURL}/category/${categoryId}/thread`

      const [newTitle, setNewTitle] = useState('');
      const [newContent, setNewContent] = useState('');
      //const [response, setResponse] = useState('');

      const handleOnChange = (e) => {
          setNewTitle(e.target.value);
          //setResponse('');
      }

      const handleOnChange2 = (e) => {        
        setNewContent(e.target.value);
        //setResponse('');
    }

      const submitThread = () => {
          const requestBody = {
              "title": newTitle,
              "content": newContent
          };

          fetch(postThreadURL, {
              method: 'POST',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(requestBody)
          }).then(res => res.json().then(data => {
              setNewTitle('');
              setNewContent('');
              //setResponse(JSON.stringify(data));
          }));
      }

      return (
            <div>
                <h2>Ny tråd</h2>
                <form>
                    <div class="mb-3">
                        <label class="form-label">Rubrik *</label>
                        <input
                            class="form-control" 
                            type="text"
                            value={newTitle}
                            onChange={(e) => handleOnChange(e)}>
                        </input>
                        <div class="form-text">En tydlig och beskrivande rubrik gör det lättare att få svar.</div>
                    </div>
                    <div class="mb-3">                            
                        <label class="form-label">Meddelande *</label>
                        <textarea
                            class="form-control"
                            rows="3" 
                            type="text"
                            value={newContent}
                            onChange={(e) => handleOnChange2(e)}>
                        </textarea>
                    </div>
                    <button class="btn btn-outline-dark" onClick={() => submitThread()}>Skapa tråd</button>
                </form>
                {/* <p>Svar</p>
                <textarea value={response}></textarea> */}
            </div>
        )
    };


  export default PostThread;