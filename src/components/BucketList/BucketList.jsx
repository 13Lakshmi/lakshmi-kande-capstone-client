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
            console.error('failed to delete all bucketlist:',error.response.data);
        }

    };

    const deleteAllBucketList = async() =>{
        try{
            const response = await axios.delete('http://localhost:8080/bucketlist');
            console.log("deleting all bucketlist successfully");
            setBucketListData([]);
        }catch(error){
            console.error('failed to delete all bucket list',error.response.data);
        }
    }
    return (
        <div className="bucketlist">
            
            <h3 className="bucketlist__title">Welcome to your bucket list</h3>
            <ul className="bucketlist__list">
                    {bucketListData.map((item) => (
                        <li className="bucketlist__item" key={item.id}>
                        <div className="bucketlist__details">
                            <h4 className="bucketlist__city">{item.city}</h4>
                            <h5 className="bucketlist__attraction-name">{item.attraction_name}</h5>
                            <p className="bucketlist__description">{item.attraction_description}</p>
                        </div>
                        <img
                            className="ware-house__deleteicon"
                            src={remove}
                            alt="delete"
                            onClick={() => deleteBucketList(item.id)}
                        />
                        </li>
                    ))}
                    </ul>
                    <button className="attractions__button" onClick={deleteAllBucketList}>Delete all</button>
            {/* <table className="bucketlist__table">
                <thead>
                    <tr className="bucketlist__row">
                        <th className="bucketlist__cell"></th>
                        <th className="bucketlist__cell">City</th>
                        <th className="bucketlist__cell">Attraction Name</th>
                        <th className="bucketlist__cell">Attraction Description</th>
                        <th className="bucketlist__cell">
                            
                        </th>
                    </tr>
                </thead>
                <tbody>
                    
                    {bucketListData.map((item) => (
                        
                        <tr className="bucketlist__row" key={item.id}>
                            <button className="attractions__button" onClick={() => deleteAllBucketList(item.id)} >Delete all</button>
                            <td className="bucketlist__cell">{item.city}</td>
                            <td className="bucketlist__cell">{item.attraction_name}</td>
                            <td className="bucketlist__cell">{item.attraction_description}</td>
                            <td className="bucketlist__cell">
                            <img
                    className="ware-house__deleteicon"
                    src={remove}
                    alt="delete"
                    onClick={deleteBucketList}
                  />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
            <div className="bucketlist__separate"></div>
        </div>
    );

}

export default BucketList;