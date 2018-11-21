let solution = function monkeyPatcher(command) {

    let post = this;
    let totalVotes = post.upvotes + post.downvotes;
    let balance = post.upvotes - post.downvotes;

    switch (command) {
        case "upvote":
            return upvote(post);
        case "downvote":
            return downvote(post);
        case "score":
            return score(post);
    }


    function upvote(post) {
        post.upvotes++;
    }

    function downvote(post) {
        post.downvotes++;
    }

    function score(post) {

        let reportedUpvotes = post.upvotes;
        let reportedDownvotes = post.downvotes;

        if (totalVotes > 50) {
            let inflate = Math.ceil(Math.max(reportedUpvotes,
                reportedDownvotes) * 0.25)

            reportedUpvotes += inflate;
            reportedDownvotes += inflate;
        }

        let rating = "";

        if (totalVotes < 10) {
            rating = "new";
        } else {
            if (post.upvotes > totalVotes * 0.66) {
                rating = "hot";
            } else if (balance >= 0
                && (post.upvotes > 100 || post.downvotes > 100)) {
                rating = "controversial";
            } else if (balance < 0) {
                rating = "unpopular";
            } else {
                rating = "new";
            }
        }

        return [reportedUpvotes, reportedDownvotes, balance, rating];
    }
};

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score);
for (let i = 0; i < 50; i++) {
    solution.call(post, 'downvote');         // (executed 50 times)
}
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
console.log(score);


post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 0,
    downvotes: 0
};
solution.call(post, 'upvote');
score = solution.call(post, 'score');
console.log(score);



