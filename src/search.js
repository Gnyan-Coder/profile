function SearchPhotos(){

    let clintId="yYSo1QyYlq66T7tUF2pNBBAT92KyMuWu_oCq_MSIjes";
    let query=document.getElementById("search").value;
    let url="https://api.unsplash.com/search/photos?query="+query+"&client_id=Sa5iCe6pu_a1_m3EpC5LagCtFdbaeoXNRUndfjmlEpI&per_page=5"
    
    // make request to the api
    fetch(url)
    .then(function(data){
            return data.json();
        })
    .then(function(data){
        console.log(data);
    
        data.results.forEach(photo => {
            $("#result").append(`
            <img src="${photo.urls.thumb}"/>
            `)
            
        }); 
    
    
        });
    }
    

    
    
    