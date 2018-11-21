function solve() {

    class Post {

        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`
        }
    }

    class SocialMediaPost extends Post {

        constructor(title, content, postLikes, postDislikes) {
            super(title, content);
            this.postLikes = postLikes;
            this.postDislikes = postDislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            return super.toString() + "\n"
                + `Rating: ${this.postLikes - this.postDislikes}`
                + (this.comments.length > 0 ?
                    `\nComments:\n * ${this.comments.join("\n * ")}`
                    : "");
        }
    }

    class BlogPost extends Post {

        constructor(title, content, postViews) {
            super(title, content);
            this.postViews = postViews;
        }

        view() {
            this.postViews++;
            return this;
        }

        toString() {
            return super.toString() + "\n"
                + `Views: ${this.postViews}`;
        }
    }

    return {Post, SocialMediaPost, BlogPost};
}

let classesObj = solve();
let Post = classesObj.Post;
let SocialMediaPost = classesObj.SocialMediaPost;
let BlogPost = classesObj.BlogPost;

let newPost = new Post("Post", "Content");

console.log(newPost.toString());

// Post: Post
// Content: Content

let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
