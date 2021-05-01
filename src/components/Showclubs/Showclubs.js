import React from 'react';
import { Link } from 'react-router-dom';
import './Showclubs.css';
import { Button } from 'react-bootstrap';


const Showclubs = (props) => {
    const {strTeam , strCountry, strSport, strTeamBadge, idTeam} = props.club;
    // console.log(props);
    return (
         <div className='card-position'>
             <div className='team-card'>
                 <img src={strTeamBadge} alt=''/>
                 <h2>{strTeam}</h2>
                 <h3>Sport Type : {strSport}</h3>
                 <h3>Team From : {strCountry}</h3>
                 <Button className="explore-btn" variant='light'><Link to ={`/clubdetails/${idTeam}`} style={{ textDecoration: 'none' }}>Explore</Link></Button>          
             </div>
         </div>    
    );
};

export default Showclubs;