import React, { useState } from 'react';
import axios from 'axios';
import "./AddAttraction.scss";

function AddAttraction() {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/attractions', formData);
      console.log(response.data);
     
    } catch (error) {
      console.error('Failed to add attraction:', error);
     
    }
  };

  return (
    <div className='addattraction__card'>
      <h2 className="addattraction__title">Add Attraction</h2>
    <div  className="addattraction__form" onSubmit={handleSubmit}>
    <input type="text" name="city"  className="addattraction__city" placeholder="City" value={formData.city} onChange={handleChange} />
      <input type="text" name="name" className="addattraction__input" placeholder="Attraction Name" value={formData.name} onChange={handleChange} />
      <input type="text" name="description"  className="addattraction__description" placeholder="Description" value={formData.description} onChange={handleChange}></input>
      <button type="submit" className="addattraction__button">Add Attraction</button>
    </div>
    </div>
  );
}

export default AddAttraction;