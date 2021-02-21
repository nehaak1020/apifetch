import React, { useEffect, useState } from 'react'
import GithubUsers from './Github/GithubUsers';
import Loading from './Github/Loading';
import './UseEffectApi.css'

const UseEffectApi = () => {
    const [users, updateUsers] = useState([]);
    const [loading, updateLoading] = useState(true);
    
    const getUsers = async() => {
        try{
            updateLoading(false)
            const response = await fetch('https://api.github.com/users')
            updateUsers(await response.json());
        }
        catch(error){
            console.log("my error is " + error);
        }
    }
    useEffect(() => {
        getUsers();
    }, []);

    if(loading){
        return <Loading />
    }
    return (
        <>
           <GithubUsers users={users}/>
        </>
    )
}

export default UseEffectApi
