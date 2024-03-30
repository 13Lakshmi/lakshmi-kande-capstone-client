// import React from "react";
// import axios from "axios";

// function AttractionDetails({ attraction }) {
    
//     if (!attraction) {
//         console.log("Attraction details not available");
//         return <div>Loading...</div>;
//       }

//       const { id, attraction_image, attraction_city, attraction_name, attraction_description } = attraction;

//       const handleAddToBucketlist = async () => {
//         // Use destructured variables directly in the function
//         const data = {
//           attraction_id: id,
//           attraction_city,
//           attraction_name,
//           attraction_description,
//           attraction_image,
//         };
    
//         try {
//           const response = await axios.post('http://localhost:8080/bucketlist/bucketlist', data);
//           console.log("Data added to bucket list:", response.data);
//         } catch (error) {
//           console.log("Failed to add data to bucket list:", error);
//         }
//       };
// //     const handleAddToBucketlist = async (id,city,Description,image,name) => {
// //     console.log(id,city,Description,image,name);
    
// //     const data = {
// //       attraction_id:id,
// //       attraction_city: city,
// //       attraction_name: name,
// //       attraction_description: Description,
// //       attraction_image: image,
// //     };
// //     console.log(data);
// //     try {
// //       const response = await axios.post('http://localhost:8080/bucketlist/bucketlist', data);
// //       console.log("Data added to bucket list:", response.data);
// //     } catch (error) {
// //       console.log("Failed to add data to bucket list:", error);
// //     }
// //   };

//   return (
//     <div className="attraction-details">
//       <img
//         className="attraction-details__image"
//         src={attraction_image}
//         alt="attraction"
//       />
//       <p className="attraction-details__location">
//         Destination: {attraction_city}
//       </p>
//       <p className="attraction-details__name">
//         Attraction name: {attraction_name}
//       </p>
//       <p className="attraction-details__description">
//         Description: {attraction_description}
//       </p>
//       <button className="attractions__button" onClick={() =>{handleAddToBucketlist(attraction.id,attraction.attraction_city,attraction.attraction_description,attraction.attraction_image,attraction.attraction_name)}}>Add to bucketlist</button>
//     </div>
//   );
// }

// export default AttractionDetails;