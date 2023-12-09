//This file returns the Current Date
function getCurrentDate(){
    const currentDate = new Date();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear();
    const day = currentDate.getDate().toString().padStart(2, '0');
    const dateFolderName = `${day}-${month}-${year}`;    
    console.log(dateFolderName);
    return dateFolderName;
}

module.exports= getCurrentDate;

