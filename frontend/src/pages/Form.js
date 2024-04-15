
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Form = () => {
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [winner, setWinner] = useState('');
    const [totalVotes, setTotalVotes] = useState(0);
    const [partyVotes, setPartyVotes] = useState([]);
    const [winningCandidates, setWinningCandidates] = useState([]);

    useEffect(() => {
        if (selectedYear && selectedState) {
            fetchData(selectedYear, selectedState);
        }
    }, [selectedYear, selectedState]);

    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
    };

    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
    };

    const fetchData = async (year, state) => {
        try {
            const res = await axios.get(`http://localhost:8800/form?year=${year}&state=${state}`);
            const data = res.data;
            setWinner(data.party_simplified);
            setTotalVotes(data.totalvotes);
            setPartyVotes([
                { party: data.party_simplified, votes: data.candidatevotes },
                // { party: 'Opposition Party', votes: data.totalvotes - data.candidatevotes }
            ]);
            setWinningCandidates([data.candidate]);
        } catch (error) {
            console.error("Error fetching data:", error);
            // Handle error if necessary
        }
    };

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

    return (
        <div className="form-container">
            <div className="home-container">
                <h2>Select a Year and State</h2>
                <select value={selectedYear} onChange={handleYearChange}>
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
                <div className="result-container">
                    <h3>Results for {selectedYear} in {selectedState}</h3>
                    <p>Winner: {winner}</p>
                    <p>Total Votes: {totalVotes}</p>
                    <div>
                        <h4>Party Votes</h4>
                        <ul>
                            {partyVotes.map((party, index) => (
                                <li key={index}>
                                    {party.party}: {party.votes} votes
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4>Winning Candidates</h4>
                        <ul>
                            {winningCandidates.map((candidate, index) => (
                                <li key={index}>{candidate}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
