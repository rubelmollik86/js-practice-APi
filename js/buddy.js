const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(Response => Response.json())
    .then(data => displayBuddis(data));
}
loadBuddies();
const displayBuddis = data =>{
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddies');
    for(buddy of buddies){
        // console.log(buddy.name);
        const p = document.createElement('p');
        p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} Email: ${buddy.email}` ;
        buddiesDiv.appendChild(p)
        
    }
}