var express = require("express");
var fs = require("fs");
var app = express();
var formidable = require("formidable");
app.get("/",function(_,res){
    res.sendFile(__dirname+"/index.html");
});
app.post("/fupload",function(req,res){
    var file = new formidable.IncomingForm();
    file.parse(req,function(err,filename,fname){
        var oldpath = fname.app.filepath;
        var newpath = __dirname+"./../../"+fname.app.originalFilename;
        fs.rename(oldpath,newpath,function(err){
            if(err){
                console.log(err);
            }
            else{
                res.sendFile(__dirname+"/json's.html");
            }
        });
    });
});
app.listen(9090,function(err){
    if(err){
        console.log(err);
    }    
    else{
        console.log("server is running at 9090");
    }
});