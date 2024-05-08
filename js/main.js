const fetchUser = async () => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const users = response.json()
        return users
    }catch(error){
        console.log(error);
    }
}


const creatTable = (users) =>{
    const tableContainer = document.getElementById("table-container")
    
    const table = document.createElement("table")

    const headers = ["T/R", "Name", "Username", "Phone", "Email"]
    const headerRow = table.insertRow()
    headers.forEach(headerText=>{
        const header = document.createElement("th")
        header.textContent = headerText
        headerRow.appendChild(header)
    })
    users.forEach(item=>{
        const row = table.insertRow()
        row.insertCell().textContent = item.id
        row.insertCell().textContent = item.name
        row.insertCell().textContent = item.username
        row.insertCell().textContent = item.phone
        row.insertCell().textContent = item.email
    })
    tableContainer.appendChild(table)
    table.classList.add("table")
}




const finish =async () => {
    const users = await fetchUser()
    if(users){
        creatTable(users)
    }
}
finish()
