import React, { useState, useEffect } from 'react';
import axios from 'axios';
const More = () => {
    const [selectedYear1, setSelectedYear1] = useState('');
    const [selectedYear2, setSelectedYear2] = useState('');
    const [selectedParty, setSelectedParty] = useState('');
    const [mostWonParty, setMostWonParty] = useState('');
    const [maxVotesState, setMaxVotesState] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [mostWonPartyState, setMostWonPartyState] = useState('');

    const handleYearChange1 = (event) => {
        setSelectedYear1(event.target.value);
    };
    const handleYearChange2 = (event) => {
        setSelectedYear2(event.target.value);
    };
    const handlePartyChange = (event) => {
        setSelectedParty(event.target.value);
    };
    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
    };


    // ---------- ---------------------------------------- *********  1   **************     --------------------------------------------------------
    const fetchMostWonParty = async () => {
        if (selectedYear1 && selectedYear2) {
            try {
                const response = await fetch(`http://localhost:8800/most_won_party?startYear=${selectedYear1}&endYear=${selectedYear2}`);
                const data = await response.json();
                setMostWonParty(data.mostWonParty);
            } catch (error) {
                console.error('Error fetching most won party:', error);
            }
        }
    };
    useEffect(() => {
        fetchMostWonParty();
    }, [selectedYear1, selectedYear2]);


    // --------------------------------------------------*****   2  ****** --------------------------------------------------------------
    useEffect(() => {
        if (selectedYear1 && selectedParty) {
            fetchMaxVotesState();
        }
    }, [selectedYear1, selectedParty]);

    const fetchMaxVotesState = async () => {
        try {
            const res = await axios.get(`http://localhost:8800/max_votes_party?year=${selectedYear1}&party=${selectedParty}`);
            setMaxVotesState(res.data.state);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };


    // -------------------------------------**************    3       ***********-------------------------------------------

    useEffect(() => {
        if (selectedYear1 && selectedYear2 && selectedState) {
            fetchMostWonPartyState();
        }
    }, [selectedYear1, selectedYear2, selectedState]);

    // Function to fetch most won party from backend
    const fetchMostWonPartyState = async () => {
        try {
            const response = await fetch(`http://localhost:8800/most_won_party_state?startYear=${selectedYear1}&endYear=${selectedYear2}&state=${selectedState}`);
            const data = await response.json(); // Extract JSON data from response body
            setMostWonPartyState(data.winner_party); // Update state with winner party
        } catch (error) {
            console.error('Error fetching most won party:', error);
            // Handle error here
        }
    };
// ******************-------------------------------------------------------------------------------*******************************
    const yearOptions = [];
    for (let year = 1976; year <= 2020; year += 4) {
        yearOptions.push(
            <option key={year} value={year}>
                {year}
            </option>
        );
    }

    const stateOptions = [
        'ALABAMA', 'ALASKA', 'ARIZONA', 'ARKANSAS', 'CALIFORNIA', 'COLORADO', 'CONNECTICUT', 'DELAWARE',
        'DISTRICT OF COLUMBIA', 'FLORIDA', 'GEORGIA', 'HAWAII', 'IDAHO', 'ILLINOIS', 'INDIANA', 'IOWA',
        'KANSAS', 'KENTUCKY', 'LOUISIANA', 'MAINE', 'MARYLAND', 'MASSACHUSETTS', 'MICHIGAN', 'MINNESOTA',
        'MISSISSIPPI', 'MISSOURI', 'MONTANA', 'NEBRASKA', 'NEVADA', 'NEW HAMPSHIRE', 'NEW JERSEY', 'NEW MEXICO',
        'NEW YORK', 'NORTH CAROLINA', 'NORTH DAKOTA', 'OHIO', 'OKLAHOMA', 'OREGON', 'PENNSYLVANIA', 'RHODE ISLAND',
        'SOUTH CAROLINA', 'SOUTH DAKOTA', 'TENNESSEE', 'TEXAS', 'UTAH', 'VERMONT', 'VIRGINIA', 'WASHINGTON',
        'WEST VIRGINIA', 'WISCONSIN', 'WYOMING'
    ];

    const partyOptions = ['DEMOCRAT', 'REPUBLICAN', 'OTHER', 'LIBERTARIAN'];

    return (
        <div className="more-container">
            <div className="class1">
                <h2>Most Won Party between two years:</h2>
                <div>
                    <select value={selectedYear1} onChange={handleYearChange1}>
                        <option value="">Select Year</option>
                        {yearOptions}
                    </select>
                    <select value={selectedYear2} onChange={handleYearChange2}>
                        <option value="">Select Year</option>
                        {yearOptions}
                    </select>
                </div>
                <p>Most Won Party: {mostWonParty}</p>
            </div>
            <div className="class2">
                <h2>Maximum votes for a particular party:</h2>
                <div>
                    <select value={selectedYear1} onChange={handleYearChange1}>
                        <option value="">Select Year</option>
                        {yearOptions}
                    </select>
                    <select value={selectedParty} onChange={handlePartyChange}>
                        <option value="">Select Party</option>
                        {partyOptions.map((party, index) => (
                            <option key={index} value={party}>
                                {party}
                            </option>
                        ))}
                    </select>
                </div>
                <p>Maximum votes for {selectedParty} from {selectedYear1}: {maxVotesState}</p>
            </div>
            <div className="class3">
                <h2>Most Won Party between two years for a particular state:</h2>
                <div>
                    <select value={selectedYear1} onChange={handleYearChange1}>
                        <option value="">Select Year</option>
                        {yearOptions}
                    </select>
                    <select value={selectedYear2} onChange={handleYearChange2}>
                        <option value="">Select Year</option>
                        {yearOptions}
                    </select>
                    <select value={selectedState} onChange={handleStateChange}>
                        <option value="">Select State</option>
                        {stateOptions.map((state, index) => (
                            <option key={index} value={state}>
                                {state}
                            </option>
                        ))}
                    </select>
                </div>
                <p>Most Won Party: {mostWonPartyState}</p>
            </div>
        </div>
    );
};

export default More;
