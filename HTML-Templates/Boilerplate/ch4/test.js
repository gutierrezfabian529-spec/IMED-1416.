//This is the method
function mSoftware(){
    sTitle= "<b>Title:</b>" + this.title +"<br>\n";
    nPrice= "<b>Price:</b>" + this.price +"<br>\n";
    sDescription= "<b>Description:</b>" +this.description +"<br>\n<hr>";
    document.write(sTitle, nPrice, sDescription);
}
//The object function
function oSWList(title,price,description){
    this.title= title;
    this.price= "$"+price;
    this.description= description;
    this.mSoftware= mSoftware
}
//Create instance of the objects
accounts= new oSWList("The millennium Accountant", 100, "A handy software to manage to manage finance of an organization");
imports= new oSWList("The Import Manager", 200, "A software to manage your import processes");
demo= new oSWList("Demo Creator", 300, "Create professional videos of your products");
//And print them
accounts.mSoftware();
imports.mSoftware();
demo.mSoftware();