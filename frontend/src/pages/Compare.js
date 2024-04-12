import React, { useState } from 'react';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    ArcElement
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import { Container } from 'react-bootstrap';
ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    ArcElement,
    Tooltip,
    Legend
);

const Compare = () => {
    const [selectedYear, setSelectedYear] = useState(""); // State to store the selected year

    // Function to handle changes in the dropdown selection
    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
    };

    // Generating the years from 1976 to 2020 with a 4-year gap
    const years = [];
    for (let year = 1976; year <= 2020; year += 4) {
        years.push(year);
    }

    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Mon', 'Tue', 'Wed', 'Mon', 'Tue', 'Wed', 'Mon', 'Tue', 'Wed', 'Mon', 'Tue', 'Wed', 'Mon', 'Tue', 'Wed'],  // 
        datasets: [{
            label: 'Year Vs Total Votes',
            data: [3, 6, 20, 8, 4, 8, 5, 15,],  //
            color: 'white',
            backgroundColor: 'pink',
            borderColor: 'black',
            borderWidth: 1,
            barThickness: 60,
            barPercentage: 0.5, // Adjust bar width as a percentage of available space
            categoryPercentage: 0.8 // Adjust space between bars as a percentage of available space
        }]
    };
    const data2 = {
        labels: ['Mon', 'Tue', 'Wed', 'Mon', 'Tue', 'Wed', 'Mon', 'Tue', 'Wed', 'Mon', 'Tue', 'Wed', 'Mon', 'Tue', 'Wed', 'Mon', 'Tue', 'Wed'],     // add states here
        datasets: [{
            label: 'State Vs Total Votes',
            data: [3, 6, 20, 8, 4, 8, 5, 15,],  // total votes
            color: 'white',
            backgroundColor: 'pink',
            borderColor: 'black',
            borderWidth: 1,
            barThickness: 60,
            barPercentage: 0.5, // Adjust bar width as a percentage of available space
            categoryPercentage: 0.8 // Adjust space between bars as a percentage of available space
        }]
    };
    const data4 = {
        labels: ['Mon', 'Tue', 'Wed', 'Mon', 'Tue', 'Wed', 'Mon', 'Tue', 'Wed', 'Mon', 'Tue', 'Wed', 'Mon', 'Tue', 'Wed', 'Mon', 'Tue', 'Wed'],     // add states here
        datasets: [{
            label: 'State Vs Total Votes',
            data: [3, 6, 20, 8, 4, 8, 5, 15,],  // total votes
            color: 'white',
            backgroundColor: 'pink',
            borderColor: 'black',
            borderWidth: 1,
            barThickness: 60,
            barPercentage: 0.5, // Adjust bar width as a percentage of available space
            categoryPercentage: 0.8 // Adjust space between bars as a percentage of available space
        }]
    };
    const data3 = {
        labels: ['Mon', 'Tue', 'Wed', 'Mon'],     // add states here
        datasets: [{
            label: 'State Vs Total Votes',
            data: [3, 8, 15,],  // total votes

            backgroundColor: ['rgba(255, 205, 86)',
                'rgba(75, 192, 80)',
                'rgba(54, 162, 235)'],

        }]
    };
    const opt = {
        maintainAspectRatio: false, // This option will allow the chart to not maintain aspect ratio
        responsive: true, // This option will make the chart responsive to the size of its container

    }

    const options = {
        maintainAspectRatio: false, // This option will allow the chart to not maintain aspect ratio
        responsive: true, // This option will make the chart responsive to the size of its container
        scales: {
            y: {
                beginAtZero: true, // Start y-axis from zero
                ticks: {
                    color: 'white' // Change color of y-axis labels
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Value', // Label for y-axis
                    color: 'white' // Change color of y-axis label
                }
            },
            x: {
                ticks: {
                    color: 'white' // Change color of x-axis labels
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Day', // Label for x-axis
                    color: 'white' // Change color of x-axis label
                }
            }
        }
    };

    return (
        <section className="compare" id="compare">
            <Container>
                <div className="class1">
                    <h1>Yearwise Total Votes</h1>
                    <div style={{ width: '80%', margin: 'auto', height: '400px' }}>
                        <Bar
                            data={data}
                            options={options}
                        />
                    </div>
                </div>
                <div className="class2">
                    <h1>Statewise Total Votes</h1>
                    <h2>Select Year: </h2>
                    {/* Dropdown box for selecting the year */}
                    <select value={selectedYear} onChange={handleYearChange}>
                        <option value="">Select a Year</option>
                        {years.map((year) => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                    {/* Displaying the selected year */}
                    {selectedYear && <p>You selected: {selectedYear}</p>}
                    <div style={{ width: '80%', margin: 'auto', height: '400px' }}>
                        <Bar
                            data={data2}
                            options={options}
                        />
                    </div>
                </div>
                <div className="class2">
                    <h1>Democrate vs Republican State-wiseTotal Votes</h1>
                    <h2>Select Year: </h2>
                    {/* Dropdown box for selecting the year */}
                    <select value={selectedYear} onChange={handleYearChange}>
                        <option value="">Select a Year</option>
                        {years.map((year) => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                    {/* Displaying the selected year */}
                    {selectedYear && <p>You selected: {selectedYear}</p>}
                    <div style={{ width: '80%', margin: 'auto', height: '400px' }}>
                        <Bar
                            data={data2}
                            options={options}
                        />
                    </div>
                </div>
                <div className="container-1">
                    <div className="class3">
                        <h1>Party-wise Total Votes</h1>
                        <h2>Select Year: </h2>
                        {/* Dropdown box for selecting the year */}
                        <select value={selectedYear} onChange={handleYearChange}>
                            <option value="">Select a Year</option>
                            {years.map((year) => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                        {/* Displaying the selected year */}
                        {selectedYear && <p>You selected: {selectedYear}</p>}
                        <div style={{ width: '50%', height: '350px' }}>
                            <Pie
                                data={data3}
                                options={opt}
                            >

                            </Pie>
                        </div>
                    </div>
                    <div className="class4">
                        <h1>Party-wise in each state</h1>
                        <h2>Select Year: </h2>
                        {/* Dropdown box for selecting the year */}
                        <select value={selectedYear} onChange={handleYearChange}>
                            <option value="">Select a Year</option>
                            {years.map((year) => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                        {/* Displaying the selected year */}
                        {selectedYear && <p>You selected: {selectedYear}</p>}
                        <div style={{ width: '50%', height: '350px' }}>
                            <Pie
                                data={data3}
                                options={opt}
                            >
                            </Pie>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Compare;
