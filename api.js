const train_data=()=>{
    var date =  document.getElementById("date");
    var to =  document.getElementById("to");
     var from =  document.getElementById("from");
     
     console.log(date)
     let p= fetch(`https://railway-w6eh.onrender.com/proxy?from=${from.value}&to=${to.value}&date=${date.value}`) 
     p.then((data)=>{
        console.log(data)
         return data.json()
         
        })
        .then((objectData)=>{
            // console.log(objectData[0].train_no);
            let tableData="";
            objectData.data.map((values)=>{
                tableData+= `<tr>
<td >${values.train_base.train_no}</td>
<td>${values.train_base.train_name}</td>
<td>${values.train_base.from_time}</td>
<td>${values.train_base.to_time}</td>
</tr>`
console.log("table created",tableData)
const bod= document.getElementById("table_body")
document.getElementById("table_body").innerHTML=tableData

console.log(bod);
// `<hi>${values.title}</hi>`;
});
document.getElementById("t_head").innerHTML=`<tr>
<th scope="col">train-no.</th>
<th scope="col">train-name</th>
<th scope="col">departure</th>
<th scope="col">Arrival</th>
</tr>`

console.log("table data is",tableData)
})

}

            
            