//load updateVisitorCount function on webpage load
window.addEventListener(('DOMContentLoaded'), (e) =>{
    updateVisitorCount();
});

const funcApiUrl = "https://getayazureresumecounter.azurewebsites.net/api/GetResumeCounter?code=X9bBEMZHwtQf2xv3q44GHEeEmQLb0AYqfNwXX6fyMxvNAzFuJ_Gcuw=="

// holder for the api data
const localhostApi = 'http://localhost:7071/api/GetResumeCounter'

// function to update the website visit counts on the homepage
const updateVisitorCount = () => {
    let count = 10;

    fetch(funcApiUrl)
    .then(res => res.json())
    .then(data => {
        console.log('succesful connect')
        document.getElementById('website-count').innerText = data.count;
    })
    .catch(err => console.log(err));

}