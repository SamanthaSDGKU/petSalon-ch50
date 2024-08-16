// add the storemanager to your service.html
function save(item){
    let list = read();// getting [] or LS info
    list.push(item); //push the new item
    console.log(list);
    //parse into an string the array
    let val=JSON.stringify(list); //parse obj into string
    console.log(val);//string
    localStorage.setItem("services",val);
}

function read(){
    let data=localStorage.getItem("services"); //read the LS (string)
    if(!data){//NOT data?
        //the LS is empty
        return []; //empty array
    }else{
        //we have info on the LS
        let list = JSON.parse(data); //convert the string into an array/obj
        //return the obj/array
        return list;//the array
    }
    
}