const express = require('express');
const { uuid } = require('uuidv4');


const app = express();

app.use(express.json());
const projects = [];

app.get('/projects', (request, response)=>{
    const {title, owner} = request.query;

    console.log(title)
    return response.json(projects);
});
app.post('/projects', (request, response)=>{
    const { title, owner} = request.body;

    const project = { id: uuid(), title, owner}

    projects.push(project);

    return response.json(project);
});
app.put('/projects/:id', (request, response)=>{
    
    const body = request.body;
    // const id = request.params;
    const {id} = request.params;
    const project = projects.find(project => projects.id === param.id);
    console.log(id);
    // console.log(project)

    return response.json({ message: "Hello GOstackPut" });
});
app.delete('/projects/:id', (request, response)=>{
    return response.json({ message: "Hello GOstackdel" });
});
app.listen(3333, ()=>{
    console.log('sua vó')
});