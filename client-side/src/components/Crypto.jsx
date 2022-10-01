import React, { useEffect, useState } from 'react';
import './Crypto.css';

export default function Crypto(){

    const [data, setData] = useState([]);

    const fetchApi = async () => {
    const url = `https://api.coinstats.app/public/v1/coins?skip=0&limit=100&currency=INR`;
    const response = await fetch(url);
    const resjson = await response.json();
    setData(resjson.coins);
    }

    useEffect(() => {
        fetchApi();
    },[]);

    return(
      <>
            <div className="table-data">
                <h1>Crypto Currency API</h1>
                <table className="text-center" id="table-crypto">
                    <thead>
                        <tr>
                            <th className="name">Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((currele, idx) => {  
                                return (
                                    <tr key={idx}>
                                        <td>{currele.name}</td>
                                        <td>{currele.price}</td>
                                    </tr>
                                );
                            })
                        
                        }
                    </tbody>
                </table>
            </div>
      </>
    )
  }