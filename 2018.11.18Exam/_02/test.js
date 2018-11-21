let expect = require("chai").expect;

let SoftUniFy = require("./solution.js");


describe("test SoftUniFy", function () {

    let softuni;

    beforeEach(() => {
        softuni = new SoftUniFy();
    });

    it('Should contain allSongs property that is initialized as an empty object', function () {
        expect(softuni.allSongs).eql({});
    });

    describe("test downloadSong", function () {

        it('downloadSong(artist, song, lyrics) adds the given information to the allSongs in format: artist: {rate: 0, votes: 0, songs: []}.', function () {
            let obj = softuni.downloadSong("artist", "song", 'lyrics');
            expect(obj.allSongs.artist.rate).eql(0);
            expect(obj.allSongs.artist.votes).eql(0);
            expect(obj.allSongs.artist.songs.length).eql(1);
            expect(obj.allSongs.artist.songs).eql(["song - lyrics"]);
        });

        it('downloadSong(artist, song, lyrics) should add same artist', function () {
            let obj = softuni.downloadSong("artist", "song", 'lyrics')
                .downloadSong("artist", "song", 'lyrics');

            expect(obj.allSongs.artist.rate).eql(0);
            expect(obj.allSongs.artist.votes).eql(0);
            expect(obj.allSongs.artist.songs.length).eql(2);
            expect(obj.allSongs.artist.songs[0]).eql("song - lyrics");
            expect(obj.allSongs.artist.songs).eql(["song - lyrics", "song - lyrics"]);

        });

        it('downloadSong(artist, song, lyrics) should add different artist', function () {
            let obj = softuni.downloadSong("artist", "song", 'lyrics')
                .downloadSong("artist2", "song2", 'lyrics2');

            expect(obj.allSongs.artist.rate).eql(0);
            expect(obj.allSongs.artist.votes).eql(0);
            expect(obj.allSongs.artist.songs.length).eql(1);
            expect(obj.allSongs.artist.songs).eql(["song - lyrics"]);

            expect(obj.allSongs.artist2.rate).eql(0);
            expect(obj.allSongs.artist2.votes).eql(0);
            expect(obj.allSongs.artist2.songs.length).eql(1);
            expect(obj.allSongs.artist2.songs).eql(["song2 - lyrics2"]);
        });
    });


    describe("test playSong", function () {

        it('playSong(song) searches all already downloaded songs and returns them in format:\n' +
            'artist:\n' +
            'song - lyrics\n' +
            '...\n', function () {
            let obj = softuni.downloadSong("artist", "song", 'lyrics')
                .downloadSong("artist2", "song2", 'lyrics2')
                .downloadSong("artist3", "song2", 'lyrics3');

            expect(obj.playSong("song2")).eql("artist2:\n" +
                "song2 - lyrics2\n" +
                "artist3:\n" +
                "song2 - lyrics3\n");
        });

        it('playSong(song) no match', function () {
            let obj = softuni.downloadSong("artist", "song", 'lyrics')
                .downloadSong("artist2", "song2", 'lyrics2')
                .downloadSong("artist3", "song2", 'lyrics3');

            expect(obj.playSong("song4")).eql(`You have not downloaded a song4 song yet. Use SoftUniFy's function downloadSong() to change that!`);
        });

        it('playSong(song) no downloads', function () {
            expect(softuni.playSong("song4")).eql(`You have not downloaded a song4 song yet. Use SoftUniFy's function downloadSong() to change that!`);
        });
    });

    describe("test songsList", function () {

        it('•\tsongsList() gets all already downloaded songs in format:\n' +
            'song1 - song1Lyrics\n' +
            'song2 - song2Lyrics\n' +
            'song3 - song3Lyrics\n' +
            '...\n', function () {
            let obj = softuni.downloadSong("artist", "song", 'lyrics')
                .downloadSong("artist2", "song2", 'lyrics2')
                .downloadSong("artist3", "song2", 'lyrics3');

            let result = obj.songsList;

            expect(result).eql("song - lyrics\n" +
                "song2 - lyrics2\n" +
                "song2 - lyrics3");
        });

        it('songsList() gets empty list', function () {
            let result = softuni.songsList;

            expect(result).eql("Your song list is empty");
        });
    });

    describe("test rateArtist", function () {

        it('rateArtist() sums the values of all votes on the current artist and return the average rate.', function () {
            let obj = softuni.downloadSong("artist", "song", 'lyrics')
                .downloadSong("artist2", "song2", 'lyrics2')
                .downloadSong("artist3", "song2", 'lyrics3');

            expect(obj.rateArtist("artist2", 2)).eql(2);
        });

        it('rateArtist()no such artist', function () {
            let obj = softuni.downloadSong("artist", "song", 'lyrics')
                .downloadSong("artist2", "song2", 'lyrics2')
                .downloadSong("artist3", "song2", 'lyrics3');

            expect(obj.rateArtist("artist4", 2)).eql(`The artist4 is not on your artist list.`);
        });

        it('rateArtist() with string num', function () {
            let obj = softuni.downloadSong("artist", "song", 'lyrics')
                .downloadSong("artist2", "song2", 'lyrics2')
                .downloadSong("artist3", "song2", 'lyrics3');

            expect(obj.rateArtist("artist2", "2")).eql(2);
        });

        it('rateArtist() with NAN', function () {
            let obj = softuni.downloadSong("artist", "song", 'lyrics')
                .downloadSong("artist2", "song2", 'lyrics2')
                .downloadSong("artist3", "song2", 'lyrics3');

            expect(obj.rateArtist("artist2", "two")).eql(0);
        });
    });
});




// describe("test TODO...", function () {
//
//     it('TODO...', function () {
//
//         // expect(lookupChar()).be.undefined;
//         // expect(1).eql(1);
//         // expect(sum(1.11111, 0)).closeTo(1.11, 0.01);
//         // expect(() => Console.writeLine()).throw(RangeError);
//     });
// });