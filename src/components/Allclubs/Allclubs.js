import React, { useEffect, useState } from 'react';
import Showclubs from '../Showclubs/Showclubs';
import './Allclubs.css';

const Allclubs = () => {

    const [clubs , setClubs] = useState([]);
    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then(data => setClubs(data.teams))
    },[]);
   
    return (
        <div className='allclubs'>
            {
                clubs.map(club => <Showclubs
                    key ={club.idAPIfootball}
                    club={club}></Showclubs> 
                    )   
            }
        </div>
    );
};

export default Allclubs;