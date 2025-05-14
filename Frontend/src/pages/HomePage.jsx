import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';
import Developer from '../components/HomePageComponents/Developer';
import TeamLeader from '../components/HomePageComponents/TeamLeader';
import Manager from '../components/HomePageComponents/Manager';


function HomePage(){

    const [allData , setAllData] = useState({})
    const nav = useNavigate()

    useEffect(()=>{
        fetch("http://localhost:8080/home", {
            method: "POST",
            body: JSON.stringify({session:Cookies.get("session")}),
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          }).then((resp) => resp.json())
          .then((data)=>{
            if(data.err){
              throw new Error(data.err)
            }
            setAllData({...data.data,role:data.role})
            console.log(JSON.stringify({...data.data,role:data.role}))
          })
          .catch((err)=> {
            alert(err)
            nav("/login")
          }
        )
        }
        ,[])

    return(
        <div className='w-screen h-screen overflow-x-hidden overflow-y-auto'>
            {
                allData?.role=="DEV"?(
                    <Developer userData={allData}/>
                ):allData?.role=="TL"?(
                    <TeamLeader userData={allData}/>
                ):allData?.role=="MG"?(
                    <Manager userData={allData}/>
                ):(
                    <></>
                )
            }
        </div>
    )
}

export default HomePage