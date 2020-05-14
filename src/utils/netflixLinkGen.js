let firstEpisode = 70273997;
const url = `https://www.netflix.com/watch/`;
let seasons = [];
let i = 0;
let j = 0;
let count = 0;

for (i = 0; i <= 9; i++) {
    seasons[i] = [];
    for (j = 0; j <= 23; j++) {
        switch (i) {
            case 0:
            case 1:
            case 3:
            case 4:
            case 6:
            case 7:
                seasons[i][j] = url + (firstEpisode + count);
                if (j !== 23) {
                    count++;
                } else {
                    count = 0;
                    firstEpisode = firstEpisode + 24;
                }
                break;
            case 2:
            case 5:
                seasons[i][j] = url + (firstEpisode + count);
                if (j !== 23) {
                    count++;
                } else {
                    count = 0;
                    seasons[i][24] = url + (firstEpisode + 24);
                    firstEpisode = firstEpisode + 25;
                }
                break;
            case 8:
                if (j < 22) {
                    seasons[i][j] = url + (firstEpisode + count);
                    count++;
                } else if(j === 22) {
                    seasons[i][j] = url + 80057887;
                } else if (j === 23) {
                    seasons[i][j] = url + 80057887;
                    count++;
                } else {
                    count = 0;
                    firstEpisode = firstEpisode + 23;
                }
                break;
            case 9:
                if (j < 17) {
                    count++;
                    seasons[i][j] = url + (firstEpisode + count);
                } else if (j === 17) {
                    seasons[i][j] = url + 70274231;
                }
                break;
            default:
                break;
        }

    }
}

export {seasons};
