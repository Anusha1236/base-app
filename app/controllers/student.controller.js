// const { student } = require('../models');
const db = require('../models');
const student = require('../models/student.model');
const Student = db.student;

exports.createStudent = (req,res)=>{
    console.log("reqqqq came");
    let body = req.body;
    let student = new Student();
    for(let p in body){
        console.log("pppppp", p, body[p])
        student[p]=body[p];
    }
    student.save((err,data)=>{
if(err){
    return res.status(500).send({message:err})
}
res.status(201).send({message:data})
    })
}

exports.getStudent=(req,res)=>{
student.find((err,data)=>{
if(err){
    return res.status(500).send({message:err})
}
res.status(201).send({message:data});
})
}

exports.getById=(req,res)=>{
    console.log("inside ",req.query.id);
student.findById(req.query.id,(err,data)=>{
    if(err){
        return res.status(500).send({message:err});
    }
    res.send({message:data})
})
}

exports.update=(req,res)=>{
    console.log("reqqqqqq",req.body);
    student.updateOne(req.body,(err,data)=>{
        if(err){
            return res.status(500).send({message : err});
        }
        console.log("data",data)
        res.status(201).send({message : data})
    })
}