import React, { useState, useEffect } from 'react';
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
import axios from "axios";
ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    ArcElement,
    Tooltip,
    Legend
);

const Compare = () => {
    const [selectedYear, setSelectedYear] = useState(""); 
    const [chartData2, setChartData2] = useState([]);
    const [chartData3, setChartData3] = useState([]);
    const [chartData4, setChartData4] = useState([]);
    const [chartData5, setChartData5] = useState([]);
    const [selectedState, setSelectedState] = useState('');


    //----------------------------------------chart 1-----------------------------------------------------------
    const [chartData, setChartData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:8800/chart1");
                setChartData(res.data)
                console.log(res.json(data))


            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);


    //----------------- Function to handle changes in the dropdown selection----------------------------
    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
    };
    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
    };

    // ---------------------------------------------------bar chart 2 -------------------------
    const fetchData2 = async () => {
        try {
            const response = await axios.get(`http://localhost:8800/chart2?year=${selectedYear}`);
            // const data = response.data;
            console.log(response.data)
            setChartData2(response.data)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // useEffect to fetch data when the selected year changes
    useEffect(() => {
        if (selectedYear !== "") {
            fetchData2();
        }
    }, [selectedYear]);

    // ----------------------chart 3-----------bar chart 3---------------------------------------------
    const fetchData3 = async () => {
        try {
            const response = await axios.get(`http://localhost:8800/chart3?year=${selectedYear}`);
            // const data = response.data;
            console.log(response.data)
            setChartData3(response.data)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // useEffect to fetch data when the selected year changes
    useEffect(() => {
        if (selectedYear !== "") {
            fetchData3();
        }
    }, [selectedYear]);


    // ---------------------- chart 4 ----------pie chart 1---------------
    const fetchData4 = async () => {
        try {
            const response = await axios.get(`http://localhost:8800/chart4?year=${selectedYear}`);
            // const data = response.data;
            console.log(response.data)
            setChartData4(response.data)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // useEffect to fetch data when the selected year changes
    useEffect(() => {
        if (selectedYear !== "") {
            fetchData4();
        }
    }, [selectedYear]);



    // ---------------chart 5 -------------pie chart 2-----------------
    const fetchData5 = async () => {
        try {
            const response = await axios.get(`http://localhost:8800/chart5?year=${selectedYear}&state=${selectedState}`);
            // const data = response.data;
            console.log(response.data)
            setChartData5(response.data)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // useEffect to fetch data when the selected year changes
    useEffect(() => {
        if (selectedYear !== "") {
            fetchData5();
        }
    }, [selectedYear,selectedState]);



    // Generating the years from 1976 to 2020 with a 4-year gap
    const years = [];
    for (let year = 1976; year <= 2020; year += 4) {
        years.push(year);
    }


      // -----------------------------barchart 1 data------------------------
    var data = {
        labels: chartData.map(x => x.year),  // 
        datasets: [{
            label: 'Year Vs Total Votes',
            data: chartData.map(x => x.total_votes_sum),  //
            color: 'white',
            backgroundColor: ['pink', 'rgba(219, 249, 255, 1)'],
            borderColor: 'black',
            borderWidth: 1,
            barThickness: 60,
            barPercentage: 0.5, 
            categoryPercentage: 0.8 
        }]
    };

    
    
    // -----------------------------barchart 2 data------------------------

    const data2 = {
        labels: chartData2.map(x => x.state),     // add states here
        datasets: [{
            label: 'State Vs Total Votes',
            data: chartData2.map(x => x.totalvotes),  // total votes
            color: 'white',
            backgroundColor: ['pink', 'rgba(219, 255, 223, 1)'],
            borderColor: 'black',
            borderWidth: 1,
            barThickness: 18,
            barPercentage: 0.5, 
            categoryPercentage: 0.8 
        }]
    };

    // -----------------------------barchart 3 data------------------------

    const data3b = {
        labels: chartData3.map(x => x.state),     // add states here
        datasets: [{
            label: 'democrat',
            data: chartData3.map(x => x.democrat_votes),  // total votes
            color: 'white',
            backgroundColor: 'rgba(255, 234, 120, 0.67)',
            borderColor: 'white',
            borderWidth: 1,
            barThickness: 10,
            barPercentage: 0.5, 
            categoryPercentage: 0.8 
        },
        {
            label: 'republican',
            data: chartData3.map(x => x.republican_votes),  // total votes
            color: 'white',
            backgroundColor: 'rgba(0, 216, 255, 1)',
            borderColor: 'black',
            borderWidth: 1,
            barThickness: 10,
            barPercentage: 0.5, // Adjust bar width as a percentage of available space
            categoryPercentage: 0.8 // Adjust space between bars as a percentage of available space
        }]
    };


    // ------------- pie chart 1 data----------------------------------
    const data3n = {
        labels: chartData4.map(x => x.party),   
        datasets: [{
            label: 'State Vs Total Votes',
            data: chartData4.map(x => x.percentage), 

            backgroundColor: ['rgba(255, 205, 86)',
                'rgba(75, 192, 80)',
                'rgba(54, 162, 235)',
                'rgba(255, 0, 0,70)'],

        }]
    };
    // -------------------pie charrt 2 data-----------------------------
    const data5 = {
        labels: ['democrat','republican','others'],   
        datasets: [{
            label: 'State Vs Total Votes',
            data: [chartData5.demo,chartData5.rep,chartData5.others], 

            backgroundColor: ['rgba(255, 205, 86)',
                'rgba(75, 192, 80)',
                'rgba(54, 162, 235)',
                'rgba(255, 0, 0,70)'],

        }]
    };

    const opt = {
        maintainAspectRatio: false, 
        responsive: true, 

    }

    const options = {
        maintainAspectRatio: false, 
        responsive: true, 
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: 'white' 
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Value', 
                    color: 'white'
                }
            },
            x: {
                ticks: {
                    color: 'white' 
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Day', // Label for x-axis
                    color: 'white' // Change color of x-axis label
                }
            }
        }
    };
    
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
                    <div style={{ width: '90%', margin: 'auto', height: '400px' }}>
                        <Bar
                            data={data3b}
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
                                data={data3n}
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

                        <select value={selectedState} onChange={handleStateChange}>
                            <option value="">Select State</option>
                            {stateOptions.map((state, index) => (
                                <option key={index} value={state}>
                                    {state}
                                </option>
                            ))}
                        </select>
                        <div style={{ width: '50%', height: '350px' }}>
                            <Pie
                                data={data5}
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
