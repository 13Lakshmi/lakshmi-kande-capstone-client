import "./AttractionDetails.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {  Link} from "react-router-dom";
import pin from "../../assets/Icons/pin.png";

function AttractionDetails() {

    const [attractionDetails, setAttractionDetails] = useState({});
    const { id } = useParams();    

   
    useEffect(() => {
        const getAttractionDetails = async () => {

          try {

            const response = await axios.get(`http://localhost:8080/attractions/details/${id}`);
            console.log(response);
            setAttractionDetails(response.data);
          } catch (error) {
            console.log(error);
          }
        };
        getAttractionDetails();
      }, [id]);

      const handleAddToBucketlist = async (id,city,Description,image,name,url) => {
        
        
        const data = {
          attraction_id:id,
          attraction_city: city,
          attraction_name: name,
          attraction_description: Description,
          attraction_image: image,
          attraction_url:url,
        };
        try {
          const response = await axios.post('http://localhost:8080/bucketlist/bucketlist', data);
          console.log(response);
          console.log("Data added to bucket list:", response.data);
        } catch (error) {
          console.log("Failed to add data to bucket list:", error);
        }
      };
      const handleViewMap = (url) => {
        window.open(url, '_blank'); // Navigate to the map location
      };
    
      return (
        <div className="attractiondetails">
          <h2 className="attractiondetails__title">Attraction Details</h2>
          <p className="attractiondetails__city">Attraction City: {attractionDetails.attraction_city}</p>
          <p className="attractiondetails__name">Attraction Name: {attractionDetails.attraction_name}</p>
          <p className="attractiondetails__description">Attraction Description: {attractionDetails.attraction_description}</p>
          <div className="attractiondetails__container">
          <div className="attractiondetails__sub-container">
          <img className="attractiondetails__map" src={pin} alt= "map"></img>
          </div>
          <div className="attractiondetails__sub-container">
          <Link
            className="attractiondetails__url"
            onClick={() => handleViewMap(attractionDetails.attraction_url)}
          > Location
          </Link>
          </div>
          
          <button className="attractiondetails__button" onClick={() =>{handleAddToBucketlist(id,attractionDetails.attraction_city,attractionDetails.attraction_description,attractionDetails.attraction_image,attractionDetails.attraction_name,attractionDetails.attraction_url)}}>Add to bucketlist</button>
        </div>
        </div>
      );
    }


export default AttractionDetails;






    