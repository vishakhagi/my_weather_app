const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')

//set hbs view engine
app.set('view engine', 'hbs')

// specifying path for assets
const assets_path= path.join(__dirname,'../assets')
const views_path = path.join(__dirname,'../templates/views')
const partials_path = path.join(__dirname,'../templates/partials')
app.set('views',views_path)
app.use(express.static(assets_path))

//register partials
hbs.registerPartials(partials_path)

//app.com    app.com/about     app.com/help
app.get('/index',(req,res)=>{
    res.render('index',{
        name :"Vish"
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        name :"Hit"
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        name:"Vihu"
    })
})

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.render('404',{
            "error":"Address not found."
        })
    }
    //call geocode and forecast.
})

//in case the / part is not found we use wildcard character *
app.get('/*',(req,res)=>{
    res.render('404',{
        error:"Invalid input provided."
    })
})




app.listen(3000,(req,res)=>{
    console.log("The server is running.")
})