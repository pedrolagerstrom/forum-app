import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";


const sandbox = 'PedrosAPI';
const baseURL = `https://forum-api-jkrop.ondigitalocean.app/sandbox/${sandbox}`;


const GetCategories = () => {
  const getCategoriesURL = baseURL + '/category';
  const [categoryState, setCategoryState] = useState([]);

  useEffect(() => {    
    fetch(getCategoriesURL)
      .then(res => res.json()
        .then(data => {
            setCategoryState(data)          
        }));
  }, []);

   return (
    <>
      <h2>Kategorier i forumet</h2>
      <ul class="list-group">        
        {categoryState.map( category => (
          <dl>
            <Link to={`/category/${category._id}/thread`}>
              <dt class="list-group-item list-group-item-action list-group-item-dark">
                <h3>{category.name}</h3>
              </dt>
            </Link>
            <dd class="list-group-item list-group-item-warning">Antal trådar: <span class="badge bg-primary rounded-pill">{category.threads.length}</span></dd>
          </dl>
          ))}                 
      </ul>
    </>
    )
};

export default GetCategories;