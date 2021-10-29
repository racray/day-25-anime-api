/////////// USED TRY AND CATCH FOR ERRORS //////////////

document.body.innerHTML += `<section class="anime-list"></section>`;

///// ASYNC FUNCTION FOR GETTING DATA OF ANIMES //////
async function getanime() {
    const data_anime = await fetch("https://anime-facts-rest-api.herokuapp.com/api/v1");
    const animes = await data_anime.json();
    console.log(animes);
    const animecontainer = document.querySelector(".anime-list");

    animes.data.forEach((Anime)=>{
        console.log(Anime.anime_name);
        animecontainer.innerHTML += `
        <div class="anime-container">
            <h1 class="anime-name">${Anime.anime_name}</h1>
            <img class="anime-img" src="${Anime.anime_img}">
        </div>
            `;
    });

}


getanime();












