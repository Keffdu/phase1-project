const sidebar = document.querySelector(`#side-bar`)
const sadSpanish = document.querySelector(`#sad-spanish`) 
const wrapper = document.querySelectorAll(`button`)
// fetch data
function fetchSpotify(playId){
    fetch(`https://api.spotify.com/v1/playlists/${playId}`, {
        method: `get`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':  `Bearer ` + token
        }
    })
        .then(resp => resp.json())
        .then(result => {
            console.log(result.id)
            sad(result.id)
        })
}
//set id src to frame
function setSideBar(id){
       sidebar.src = `https://open.spotify.com/embed/playlist/${id}?si=zLUn-H4DTl2SxyKlpLo5gA&amp&size=detail&amp;theme=light`
}

function sad(result){
    console.log(result)
    wrapper.forEach(btn => {
        btn.addEventListener(`click`, (e) => {
            console.log(e.target.id)
             var id = e.target.id
             setSideBar(id)
        })
    })
}
 







document.addEventListener(`DOMContentLoaded`, (e) => {
   sad()
  
})