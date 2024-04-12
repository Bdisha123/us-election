import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate


const Form = () => {
    //const navigate = useNavigate(); // Initialize useNavigate
    const [selectedYear, setSelectedYear] = useState('');
    const [winner, setWinner] = useState('');
    const [totalVotes, setTotalVotes] = useState(0);
    const [partyVotes, setPartyVotes] = useState([]);
    const [winningCandidates, setWinningCandidates] = useState([]);

    // Function to handle year selection
    const handleYearChange = (event) => {
        const selectedYear = event.target.value;
        // You can implement logic to fetch data based on the selected year here
        // For now, let's just set some dummy data
        setSelectedYear(selectedYear);
        setWinner('Sample Party');
        setTotalVotes(1000);
        setPartyVotes([
            { party: 'Sample Party', votes: 700 },
            { party: 'Opposition Party', votes: 300 }
        ]);
        setWinningCandidates(['Candidate 1', 'Candidate 2']);
        // Use navigate to navigate to the same page with the selected year as a query parameter
        // navigate(`?year=${selectedYear}`);
    };

    // Generate options for years from 1976 to 2020
    const yearOptions = [];
    for (let year = 1976; year <= 2020; year += 4) {
        yearOptions.push(
            <option key={year} value={year}>
                {year}
            </option>
        );
    }

    // If year is not selected, render welcome message
    if (!selectedYear) {
        return (
            <div className="home-container">
                <h2>Welcome... Select your year</h2>
                <select value={selectedYear} onChange={handleYearChange}>
                    <option value="">Select Year</option>
                    {yearOptions}
                </select>
            </div>
        );
    }

    // If year is selected, render election results
    return (
        <div className="form-container">
            <div className="home-container">
                <h2>Select a Year</h2>
                <select value={selectedYear} onChange={handleYearChange}>
                    <option value="">Select Year</option>
                    {yearOptions}
                </select>
                <div className="result-container">
                    <h3>Results for {selectedYear}</h3>
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
