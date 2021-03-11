import React from 'react';

const LeagueData = (props) => {
    const [strLeague, intFormedYear] =props.data();
    return (
        <div>
            <h1>THIS IS LEAGUE DATA : </h1>
            <h2>League Name : {strLeague}</h2>
        </div>
    );
};

export default LeagueData;