import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import LeagueData from '../LeagurData/LeagueData';
import css from './158930851_423559068712469_7880183188325655302_n.png';


const LeagueDetails = (props) => {
    const { idLeague } = useParams();
    const [league, setLeague] = useState({});
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=
        ${idLeague}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeague(data.leagues));
            // console.log(data)
    }, [idLeague])

    return (
        <div className="container text-white">
            <h1>ID : {idLeague}</h1>
            <h2>Country : {league.length}</h2>
            <h3> League Name : {league.data.strLeague}</h3>
            {/* {
                league.map(data=> <LeagueData data={data}></LeagueData>)
            }
             */}


            {/* <h2>Id : {idLeague}</h2> */}
           
            

            {/* <div className="container logo">
                <div className="container text-white">
                    <img src={league.strLogo} alt="Logo" />
                </div><br />

                <div className="container text-white">
                    <div className="row">
                        <div class="col-6">
                            <li>Founded : {league.intFormedYear}</li>
                            <li>Country : {league.strCountry}</li>
                            <li>id : {idLeague}</li>
                            <li>Gender : {league.strGender}</li>
                        </div>
                        <div className="col-6">
                            <img src={league.strLogo} alt="Logo" />
                        </div>
                    </div>
                </div><br />

                <div className="container text-white">
                    <p> Description :{league.strDescriptionEN}</p>
                </div> <br />
                <div className="container text-white">
                    <p>Description : {league.strDescriptionEN}</p>
                </div>

                <div className="container text-white">
                    <div className="row">
                        <FontAwesomeIcon icon={["fal", "coffee"]} />
                        <FontAwesomeIcon icon={["fal", "coffee"]} />
                        <FontAwesomeIcon icon={["fal", "coffee"]} />
                    </div>
                </div>

            </div> */}
        </div>
    );
};

export default LeagueDetails;