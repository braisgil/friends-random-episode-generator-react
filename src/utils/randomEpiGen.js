let randomSeason = 0;
let randomEpisode = 0;

function randomGen() {
    randomSeason = Math.floor(Math.random() * 10);
    switch (randomSeason) {
        case 0:
        case 1:
        case 3:
        case 4:
        case 6:
        case 7:
        case 8:
            randomEpisode = Math.floor(Math.random() * 24);
            break;
        case 2:
        case 5:
            randomEpisode = Math.floor(Math.random() * 25);
            break;
        case 9:
            randomEpisode = Math.floor(Math.random() * 18);
            break;
        default:
            break;
    }
    return {
      season: randomSeason+1, 
      episode: randomEpisode+1
    };
}

export {randomGen};
