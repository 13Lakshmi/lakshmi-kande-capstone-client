import './BucketList.scss';
import axios from 'axios';
import { useState,useEffect } from 'react';
import remove from "../../assets/Icons/delete_outline-24px.svg";



function BucketList () {

    const [bucketListData,setBucketListData] = useState([]);


    useEffect(() =>{
        const getBucketList = async() =>{
            try{
                const response = await axios.get('http://localhost:8080/bucketlist');
                console.log(response.data);
                setBucketListData(response.data);
            }catch(error){
                console.log('error fetching bucketlist',error);
            }
        }
        getBucketList();
    },[]);


    const deleteBucketList = async(id) =>{
        try{
            const response = await axios.delete('http://localhost:8080/bucketlist/${id}');
            console.log("deleted all buckelist");
            setBucketListData(bucketListData.filter(item => item.id !== id));
        }catch(error){
            console.error('failed to delete bucketlist:',error.response.data);
        }

    };

    const deleteAllBucketList = async() =>{
        try{
            const response = await axios.delete('http://localhost:8080/bucketlist');
            console.log("deleting all bucketlist successfully");
            setBucketListData([]);
        }catch(error){
            console.error('failed to delete all bucketlist',error.response.data);
        }
    }
    return (
        <div className="bucketlist">
            
            <h3 className="bucketlist__title">Welcome to your bucket list</h3>
            <ul className="bucketlist__list">
                    {bucketListData.map((item) => (
                        <li className="bucketlist__item" key={item.id}>
                        <div className="bucketlist__details">
                            <img className="bucketlist__image" src={item.attraction_image} alt={item.city} />
                            <h4 className="bucketlist__city">{item.attraction_city}</h4>
                            <h5 className="bucketlist__attraction-name">{item.attraction_name}</h5>
                            <p className="bucketlist__description">{item.attraction_description}</p>
                        </div>
                        <img
                            className="bucketlist__deleteicon"
                            src={remove}
                            alt="delete"
                            onClick={deleteBucketList}
                        />
                        </li>
                    ))}
                    
                    </ul>
                    <button className="bucketlist__button" onClick={deleteAllBucketList}>Delete all</button>
            

        </div>
    );

}

export default BucketList;