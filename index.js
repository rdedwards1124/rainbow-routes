
require("dotenv").config()

const express = require('express')
const app = express()

app.get("/", (req,res)=>{
    res.send(`
    <body style="margin: 0;">
        <div style="border: 1px solid black; height: 10vh; background-color: white;">
            <h2 style="text-align: center;">NAV BAR</h2>
        </div>
        <h1 style="padding:8px 20px;">White Page</h1>
    </body>
    `)
})

app.get("/:color", (req,res)=>{
    const color = req.params.color
    res.send(`
    <body style="margin: 0;">
        <div style="border: 1px solid black; height: 10vh; background-color: ${color};">
            <h2 style="text-align: center;">NAV BAR</h2>
        </div>
        <h1 style="padding:8px 20px; color:${color};">${color.charAt(0).toUpperCase() + color.slice(1)} Page</h1>
    </body>
    `)
})

// app.get("/crimson", (req,res)=>{
//     res.send(`
//     <body style="margin: 0;">
//         <div style="border: 1px solid black; height: 10vh; background-color: crimson;">
//             <h2 style="text-align: center;">NAV BAR</h2>
//         </div>
//         <h1 style="padding:8px 20px; color:crimson;">Crimson Page</h1>
//     </body>
//     `)
// })

app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT}`)
    console.log(`my secret is ${process.env.MYSECRET}`)
})