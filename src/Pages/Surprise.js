import React from 'react';
import Header from '../Components/Header';

const Surprise = () => {

    return (
        <div className="container">
            <Header
                backLink={'/menu'}
            />

            <div className="machine">
                <div className="wrap">
                    <div className="column">
                        <div id="machine1" className="optionContainer">
                            <span className="option">
                                <span>Example A</span>
                            </span>
                            <span className="option">
                                <span>Example B</span>
                            </span>
                        </div>
                    </div>
                    <div className="column">
                        <div id="machine2" className="optionContainer">
                            <span className="option">
                                <span>Example C</span>
                            </span>
                            <span className="option">
                                <span>Example D</span>
                            </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mashupButton">
                            <button id="randomizeButton" className="button" onClick={handleClick}>Go</button>
                        </div>
                    </div>
                    <div className="row">
                        <div id="results">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Surprise;