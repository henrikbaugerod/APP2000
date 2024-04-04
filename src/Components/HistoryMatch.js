import React from 'react';
import { Link } from 'react-router-dom';

const HistoryMatch = (props) => {
    console.log(new Date(8.64e15).toString());
        const setPlayerId = () => {
            sessionStorage.setItem('playerId', props.id)
        }
function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Månedene starter på 0, så legg til 1 for å få riktig måned
    const year = date.getFullYear();

    // Legg til null foran dagen eller måneden hvis de er mindre enn 10
    const formattedDay = day < 10 ? '0' + day : day;
    const formattedMonth = month < 10 ? '0' + month : month;

    return `${formattedDay}/${formattedMonth}/${year}`;
}
        


    return (
        <div className="col-12 mb-2 text-white border-0 text-decoration-none">
            <div className="p-3 historyBox" style={{ borderBottom: '1px solid #7900FF' }}>
                <div className='row gx-2 align-items-center'>
                    <div className="col-4">
                        <h5 className="mb-0">{formatDate(props.date)}</h5>
                    </div>
                    <div className="col-4">
                        <div className='row gx-2 align-items-center'>
                            <div className="col-auto">
                                <Link to="/playerprofile" className="text-decoration-none" onClick={() => sessionStorage.setItem("playerId", props.player1)}>
                                    <img src={props.image} alt="" className='img-fluid rounded-circle' />
                                </Link>
                            </div>
                            <div className="col-auto">
                                <h5>vs</h5>
                            </div>
                            <div className="col-auto">
                                <Link to="/playerprofile" className="text-decoration-none" onClick={ () => sessionStorage.setItem("playerId",props.player2)}>
                                    <img src={props.image2} alt="" className='img-fluid rounded-circle' />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 text-end">
                        <h5 className="mb-0 fw-semibold">{props.score} - {props.score2}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoryMatch;
