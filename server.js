var express=require("express");
var bodyParser=require("body-parser");
var path=require("path");
var app=express();
var products=[
{
name:"Golam",
id:10
},
{
name:"Kibria",
id:20
}
];
var currentId=2;

app.use(bodyParser.urlencoded({extened:false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"/")));


app.get("/products",function(req,res){
res.send({products:products});
});
app.get("/new",function(req,res){
	
	res.sendFile("./myPrac.html");
});
app.post("/products",function(req,res){
	currentId++;
	products.push({
		name:req.body.name,
		id:currentId
	});
	res.send("SuccessFully Inserted");
	
});

app.delete("/products/:val",function(req,res){
	products.forEach(function(product){
		if(req.params.val==product.id){
			products.splice(product,1);
		}
	});
	res.send("File Deleted");
	
	
});

app.put("/products/:val",function(req,res){
	products.forEach(function(product){
		if(req.params.val==product.id){
			product.name=req.body.name;
		}
		
	});
	res.send("SuccessFully updated");
});




app.listen(8080);


