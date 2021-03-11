import React from 'react';
import { useEffect, useState } from 'react';
import League from '../League/League';

const Home = () => {
    const [leagues, setLeagues] = useState([]);


    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeagues(data.countrys));
            // console.log(data.teams[])
    }, [])

    return (
        <div className="container mt-5">
           
            <div className="row">
            {
                leagues.map(league => <League league={league}></League>)
            }
            </div>
        </div>
    );
};


export default Home;