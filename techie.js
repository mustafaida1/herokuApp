const express=require("express");
const hbs=require('hbs');
 var asig=express();
 
 asig.use(express.static(__dirname+'/public'));
 asig.set('view engines','hbs');
 hbs.registerPartials(__dirname+'/views/partials');
 
 
 hbs.registerHelper('getCurrentYear',()=>{
     return new Date().getFullYear()
 })
 asig.get('/',(req,res)=>{
     res.render('Home_page.hbs',{
         pageTitle:'TECHIE'
         



     });


 });
 
 asig.get('/About_Page',(req,res)=>
	{
		res.render("about_page.hbs",{
         
            pageTitle:'About Us'


		});
	});
asig.get('/Contact_Us',(req,res)=>
{
    res.render("contact_us.hbs",{
    
        pageTitle:'Contact Us'
        

    });
});
asig.get('/Reach_Us',(req,res)=>
{
    res.render("reach_us.hbs",{
        
        pageTitle:'Reach Us'
        
        

    });
});

asig.listen(1500,()=>{

    console.log('sever running successfully in port no:-1500');
});