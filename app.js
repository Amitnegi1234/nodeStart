const express=require('express');
const studentRoute=require('./route/student')
const courseRoute=require('./route/courses')
const app=express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to the Student & Course Portal API!');
});
app.use('/students',studentRoute)
app.use('/courses',courseRoute)

app.use((req, res) => {
    res.status(404).send('Page not found');
});
const port=3000
app.listen(port,()=>{
    console.log(`Server is running`);
})