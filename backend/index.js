import express from "express"
// import mysql from "mysql2"
import cors from "cors"
import mysql from "mysql"

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "B14032003@b",
    database: "dbms_project"
})
app.use(express.json())
app.use(cors())



//---------------------------**********    1   ********----------------------------------- 
app.get("/chart1", (req, res) => {
    const q = "SELECT * FROM TABLE1"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data);
    })
})



//---------------------------**********    2   ********----------------------------------- 
app.get("/chart2", (req, res) => {
    const q = "SELECT * from table2 where year = (?)"
    const year = req.query.year
    db.query(q, [year], (err, data) => {
        if (err) return res.json(err)
        return res.json(data);
    })
})


//---------------------------**************          3          ******************----------------------------------- 
app.get("/chart3", (req, res) => {
    const q = "SELECT * from table3 where year = (?)"
    const year = req.query.year
    db.query(q, [year], (err, data) => {
        if (err) return res.json(err)
        return res.json(data);
    })
})


//---------------------------**********    4   ********----------------------------------- 
app.get("/chart4", (req, res) => {
    const q = "SELECT * from table4 where year = (?)"
    const year = req.query.year
    db.query(q, [year], (err, data) => {
        if (err) return res.json(err)
        return res.json(data);
    })
})



//---------------------------**********    5   ********----------------------------------- 
app.get("/chart5", (req, res) => {
    const year = req.query.year;
    const state = req.query.state;
    const q = "SELECT * FROM pie where year=(?) and state=(?)";
    db.query(q, [year, state], (err, data) => {
        if (err) {
            console.error("Error fetching data:", err);
            return res.status(500).json({ error: "Internal server error" });
        }
        if (data.length === 0) {
            return res.status(404).json({ error: "Data not found" });
        }
        return res.json(data[0]);
    });
});



//---------------------------*****************    form ------     7  ****************----------------------------------- 
app.get("/form", (req, res) => {
    const year = req.query.year;
    const state = req.query.state;
    const q = "SELECT * FROM president WHERE year = ? AND state = ? ORDER BY candidatevotes DESC LIMIT 1";
    db.query(q, [year, state], (err, data) => {
        if (err) {
            console.error("Error fetching data:", err);
            return res.status(500).json({ error: "Internal server error" });
        }
        if (data.length === 0) {
            return res.status(404).json({ error: "Data not found" });
        }
        return res.json(data[0]);
    });
});

// ---------------------****************            8             ************------------------
app.get("/max_votes_party", (req, res) => {
    const year = req.query.year;
    const party = req.query.party;
    const q = `
        SELECT state
        FROM president
        WHERE year = ? AND party_simplified = ?
        ORDER BY candidatevotes DESC
        LIMIT 1;
    `;
    db.query(q, [year, party], (err, data) => {
        if (err) {
            console.error("Error fetching data:", err);
            return res.status(500).json({ error: "Internal server error" });
        }
        if (data.length === 0) {
            return res.status(404).json({ error: "Data not found" });
        }
        return res.json({ state: data[0].state });
    });
});

// ----------------------***********         7           ************----------------------
app.get("/most_won_party", (req, res) => {
    const { startYear, endYear } = req.query;

    // Construct the SQL query with input years
    const query = `
        SELECT winner_party, COUNT(*) AS wins_count
        FROM winner
        WHERE year BETWEEN ? AND ?
        GROUP BY winner_party
        ORDER BY wins_count DESC
        LIMIT 1;
    `;

    db.query(query, [startYear, endYear], (err, results) => {
        if (err) {
            console.error("Error executing query:", err);
            return res.status(500).json({ error: "Internal server error" });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: "No data found" });
        }

        const mostWonParty = results[0].winner_party;
        const winsCount = results[0].wins_count;
        return res.json({ mostWonParty, winsCount });
    });
});


//--------------------******************          9          *********--------------------
app.get("/most_won_party_state", (req, res) => {
    const startYear = req.query.startYear; 
    const endYear = req.query.endYear; 
    const state = req.query.state; 

    const q = `
        SELECT winner_party , COUNT(*) AS wins_count
        FROM winner
        WHERE year BETWEEN ? AND ?
        AND state = ?
        GROUP BY state, winner_party
        ORDER BY wins_count DESC
        LIMIT 1;
    `;
    db.query(q, [startYear, endYear, state], (err, data) => {
        if (err) {
            console.error("Error fetching data:", err);
            return res.status(500).json({ error: "Internal server error" });
        }
        if (data.length === 0) {
            return res.status(404).json({ error: "Data not found" });
        }
        return res.json(data[0]);
    });
});



app.listen(8800, () => {
    console.log("connected ! ")
})