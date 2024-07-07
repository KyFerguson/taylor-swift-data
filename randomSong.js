(function() {
    const randomSongAPI = "http://localhost:8080/randomSong";
    const display = document.querySelector('#display-data');

    const getData = async () => {
        const res = await fetch(randomSongAPI);
        const data = await res.json();
        console.log(data);
        return data;
    }

    const displayLyrics = async () => {
        const payload = await getData();
        console.log(payload);

        let dataDisplay = payload.map((object) => {
            console.log(object);
            const {name, lyrics} = object;

            return `
            <div class='container'>
            <div class='titleLabel'>Recommended Song</div>
            <div class='songName'>${name}</div>
            <div class='lyrics'>${lyrics}</div>
            </div>
            `
        });

        display.innerHTML = dataDisplay.join('');
    }

    document.getElementById('button').addEventListener('click', () => {
        displayLyrics();
    });
})();