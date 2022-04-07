const a = new Date()
let printDate =function(){
    console.log("Date is ",a.getDate())
}
let printMonth = function(){
    console.log("month is",a.getMonth() +1)
}
let getBatchInfo = function(){
    console.log("uranium the topic for today is nodejs module")
}

module.exports.a = {printDate,printMonth,getBatchInfo}