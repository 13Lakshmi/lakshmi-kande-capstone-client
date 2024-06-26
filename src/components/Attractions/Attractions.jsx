import "./Attractions.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import arrow from "../../assets/Icons/arrow.png"


function Attractions() {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    const getCities = async () => {
      try {
        const response = await axios.get("http://localhost:8080/cities");
        setCities(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCities();
  }, []);

  useEffect(() => {
    const getAttractions = async () => {
      if (selectedCity) {
        try {
          const response = await axios.get(
            `http://localhost:8080/attractions/${selectedCity}`
          );
          const attractionsDataRes = response.data;
          setAttractions(attractionsDataRes);
        } catch (err) {
          console.log(err);
        }
      }
    };
    getAttractions();
  }, [selectedCity]);


  const handleAddToBucketlist = async (id,city,Description,image,name) => {
    
    const data = {
      attraction_id:id,
      attraction_city: city,
      attraction_name: name,
      attraction_description: Description,
      attraction_image: image,
    };
    try {
      const response = await axios.post('http://localhost:8080/bucketlist/bucketlist', data);
      console.log("Data added to bucket list:", response.data);
    } catch (error) {
      console.log("Failed to add data to bucket list:", error);
    }
  };



  return (
    <div className="attractions">
      <div className="attractions__block">
        <div className="attractions__select-container">
          <h2 className="attractions__title">Explore Nearby wonders</h2>
          <select
            className="attractions__dropdown"
            name="mySelect"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option>Please select</option>
            {cities.map((city) => {
              return (
                <option key={city.id} value={city.id}>
                  {city.city}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      {selectedCity && <div className="attractions__separate"></div>}
      <div className="attractions__container">
        {attractions.map((attraction) => {
          return (
            <div className="attractions__card" >
              <img
                className="attractions__image"
                src={attraction.attraction_image}
                alt="attraction"
              />
              <p className="attractions__city">{attraction.attraction_name}</p>
              <Link className="attractions__readmore" to={`/attraction/${attraction.id}`}>
                Read More
              <img className="attractions__icon" src={arrow} alt="Read More" />
            </Link>
              
            </div>
            
            //</Link>
           
          );
        })}
      </div>
    </div>
  );
};

export default Attractions;

