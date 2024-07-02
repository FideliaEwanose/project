//   function createData(){
//     event.preventDefault();
//     let url ="https://jsonplaceholder.typicode.com/todos";
//     const title = document.getElementById('title').value;
//     const Body = document.getElementById('body').value;
//     const userId = document.getElementById('UserId').value;
    
//     const data = {
//         title: title,
//         body: Body,
//         userId: userId
//     };

//     axios.post(url, data, {
//     header:{
//         "Accept": "application/json",
//         "content": "application/json"
//     }
// })  
//   .then(({data})=>{
    
//     console.log(data);
    
//   })
//   .catch(err=>{
//     console.log(err);
//   })
// }

function getData(){
    event.preventDefault()
    try{
        let url="https://jsonplaceholder.typicode.com/todos";
        let option ={
            method: "GET",
            header : {
                "Accept" : "application/json",
                "content-type": "application/json",
            }
        }
    
        fetch(url, option)
        .then((response)=> response.json())
            .then((data)=>{
                console.log(data);
                const titlebody = document.querySelector("#Api");
                data.forEach(items => {
                    
                    const row = document.createElement('tr');

                    const userId = document.createElement('td');
                    userId.textContent = items.userId;
                    row.appendChild(userId);

                    const ID= document.createElement('td');
                    ID.textContent = items.id;
                    row.appendChild(ID);
                    ID.style.color = "blue";
                    ID.style.color=""


                    const title= document.createElement('td');
                    title.textContent = items.title;
                    row.appendChild(title);

                    const complete= document.createElement('td');
                    complete.textContent = items.completed ? "yes" : "no";
                    row.appendChild(complete);

                    titlebody.appendChild(row);
                    
                });
            })
    }   
    catch(error){
console.log(error)
    }

}
getData()