import "./AttractionDetails.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function AttractionDetails() {
    const [attractionDetails, setAttractionDetails] = useState({});
    const { id } = useParams();    

   
    useEffect(() => {
        const getAttractionDetails = async () => {
          try {
            const response = await axios.get(`http://localhost:8080/attractions/details/${id}`);
            setAttractionDetails(response.data);
          } catch (error) {
            console.log(error);
          }
        };
        getAttractionDetails();
      }, [id]);

      const handleAddToBucketlist = async (id,city,Description,image,name) => {
        console.log(id,city,Description,image,name);
        
        const data = {
          attraction_id:id,
          attraction_city: city,
          attraction_name: name,
          attraction_description: Description,
          attraction_image: image,
        };
        console.log(data);
        try {
          const response = await axios.post('http://localhost:8080/bucketlist/bucketlist', data);
          console.log("Data added to bucket list:", response.data);
        } catch (error) {
          console.log("Failed to add data to bucket list:", error);
        }
      };
    
      return (
        <div className="attractiondetails">
          <h2 className="attractiondetails__title">Attraction Details</h2>
          <p className="attractiondetails__city">Attraction City: {attractionDetails.attraction_city}</p>
          <p className="attractiondetails__name">Attraction Name: {attractionDetails.attraction_name}</p>
          <p className="attractiondetails_description">Attraction Description: {attractionDetails.attraction_description}</p>
          <button className="attractionsdetails__button" onClick={() =>{handleAddToBucketlist(id,attractionDetails.attraction_city,attractionDetails.attraction_description,attractionDetails.attraction_image,attractionDetails.attraction_name)}}>Add to bucketlist</button>
        </div>
      );
    }


export default AttractionDetails;






    