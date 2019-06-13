axios.get('https://gabrielalves96.github.io/test.json')
    .then( (response)=> {
        //console.log(response.data[0]);
        const stdData = response.data[Math.floor((Math.random() * response.data.length) + 1)];
        document.getElementById('stadiumName').innerHTML = stdData.stadium ;

        /*Firefox is caching the iframe src, making it appear 
        always the same thing every time you refresh the page.
        So instead of changing the src in the iframe tag,
        I'm using InnerHTML to simply put the entire iframe tag inside a div.
        Maybe I'm just doing it wrong and there is a better way to do this.*/
        document.getElementById('mainIframe').innerHTML = `<iframe src="${stdData.link}" width="1090" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>`;
        
        document.getElementById('countryname').innerHTML = stdData.country ;
        document.getElementById('cityname').innerHTML = stdData.city ;
        document.getElementById('teamname').innerHTML = stdData.team ;
        document.getElementById('capacitynum').innerHTML = stdData.capacity ;
        
    })
    .catch( (err) =>{
        console.log(err);
        document.getElementById('stadiumName').innerHTML = 'Oh no! No stadium found. Please refresh the page!' ;
    });