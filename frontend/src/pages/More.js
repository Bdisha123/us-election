import React, { useState } from 'react';

const More = () => {
    const [selectedYear1, setSelectedYear1] = useState('');
    const [selectedYear2, setSelectedYear2] = useState('');
    const [selectedParty, setSelectedParty] = useState('');
    const [mostWonParty, setMostWonParty] = useState('');
    const [maxVotesState, setMaxVotesState] = useState('');

    // Function to handle most won party between two years
    const handleMostWonParty = () => {
        // Implement logic to determine most won party between selectedYear1 and selectedYear2
        // Set the mostWonParty state accordingly
    };

    // Function to handle maximum votes for a particular party
    const handleMaxVotes = () => {
        // Implement logic to determine maximum votes for selectedParty in selectedYear
        // Set the maxVotesState accordingly
    };

    // Function to handle year selection change
    const handleYearChange1 = (event) => {
        setSelectedYear1(event.target.value);
    };

    const handleYearChange2 = (event) => {
        setSelectedYear2(event.target.value);
    };

    // Function to handle party selection change
    const handlePartyChange = (event) => {
        setSelectedParty(event.target.value);
    };

    // Generate options for years from 1976 to 2020 with 4 years gap
    const yearOptions = [];
    for (let year = 1976; year <= 2020; year += 4) {
        yearOptions.push(
            <option key={year} value={year}>
                {year}
            </option>
        );
    }

    // Array of party options
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
                    <button onClick={handleMostWonParty}>Show</button>
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
                    <button onClick={handleMaxVotes}>Show</button>
                </div>
                <p>Maximum votes for {selectedParty} from {selectedYear1}: {maxVotesState}</p>
            </div>
        </div>
    );
};

export default More;
