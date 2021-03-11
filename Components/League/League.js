import React from 'react';
import { useHistory } from 'react-router';
import { Card, Button } from 'react-bootstrap';

const League = (props) => {
    const {idLeague, strCountry, strLeague, strBadge } = props.league
    const history = useHistory();
    const showDetails = idLeague => {
        const url = `/league/${idLeague}`;
        history.push(url);
    }
    return (
        <div className="col-md-3 my-3">
            <Card>
                <Card.Img variant="top" src={strBadge} />
                <Card.Body>
                    <div className="text-center">
                        <Card.Title className="text-white">{strLeague}</Card.Title>
                        <Card.Subtitle className="mb-2 text-white"> {strCountry}</Card.Subtitle>
                        <Button onClick={() => 
                            { showDetails(idLeague) }} variant="primary">
                                Explore
                            </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default League;