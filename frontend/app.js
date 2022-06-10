//load updateVisitorCount function on webpage load
window.addEventListener(('DOMContentLoaded'), (e) =>{
    updateVisitorCount();
});

// holder for the api data
const apiData = ''

// function to update the website visit counts on the homepage
const updateVisitorCount = () => {
    let count = 10;

    fetch(apiData)
    .then(res => res.json())
    .then(data => {
        console.log('succesful connect')
        document.getElementById('website-count').innerText = data.count;
    })
    .catch(err => console.log(err));

}