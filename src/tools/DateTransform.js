const DateTransform=(datetime="")=>{
    if(datetime!==""){
        
        const arraydate = datetime.substring(0, 10).split("-");
        return (arraydate[2] + "-" + arraydate[1] + "-" + arraydate[0]);
    }else{
        const datetime = new Date().toISOString().slice(0,10);
        return DateTransform(datetime);
    }
}
module.exports = DateTransform;