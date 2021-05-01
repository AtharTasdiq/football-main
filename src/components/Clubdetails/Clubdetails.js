import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MenImage from '../../images/male.png';
import FemaleImage from '../../images/female.png';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Clubdetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faHistory, faFlag, faMarsStroke, faFutbol,} from '@fortawesome/free-solid-svg-icons'

const Clubdetails = () => {
    const [clubDetails , setClubDetails] = useState({});
    const {clubId} = useParams();
    console.log(clubDetails);
    const {strTeam,strDescriptionEN,intFormedYear,strCountry,strSport,strGender,strTeamBadge,strStadiumThumb,strFacebook,strTwitter,strYoutube} = clubDetails;
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${clubId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setClubDetails(data.teams[0]))
    },[clubId]);

    //men-women condition
    let showImage;
    if(strGender === "Female"){
        showImage = FemaleImage;
    }
    else{
        showImage = MenImage;
    }

    return (
        <Container fluid>
        <Row>
            <Col md={12}>
            <div style={{backgroundImage: `url(${strStadiumThumb})`}} className='header'>
            <div className="team-logo">
                <img src={strTeamBadge} alt=''/>
            </div>
            </div>
            </Col>
        </Row>   
        <div className="team-details">
            <Row>
                <Col md={8} className='team-details-text'>
                    <div>
                        <h1>{strTeam}</h1>
                        <h2><FontAwesomeIcon icon={faHistory}/> Founded : {intFormedYear}</h2>
                        <h2><FontAwesomeIcon icon={faFlag}/> Country : {strCountry}</h2>
                        <h2><FontAwesomeIcon icon={faFutbol}/> Sports Type : {strSport}</h2>
                        <h2><FontAwesomeIcon icon={faMarsStroke}/> Gender : {strGender}</h2>
                    </div>
                </Col>
                <Col md={4}>
                    <img src={showImage} alt=''/>
                </Col>
            </Row>

            <Row>
                <Col md={12}>
                <div>
                    <p>{strDescriptionEN}</p>   
                </div>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                <div className="icons">
                    <a className='socialIcons' href={strFacebook}><FontAwesomeIcon icon={faFacebook} /></a>
                    <a className='socialIcons' href={strTwitter}><FontAwesomeIcon icon={faTwitter} /></a>
                    <a className='socialIcons' href={strYoutube}><FontAwesomeIcon icon={faYoutube} /></a>
                </div>
                </Col>
            </Row>
        </div>   
      </Container>
    );
};

export default Clubdetails;  