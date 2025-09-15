// object literals (name,age,color) agy peechy ho skta
let student=
{
    name:"zumer",
    age:24,
    color:"brown",
}
console.log(student);

let student2=
{
    name:"zumer",
    age:24,
    color:["brown","pink"],
}
console.log(student2);

// practice
let post={
    username:"@zumer",
    content:"This is my first post.",
    likes:23,
    reposts:12,
    tags:["#zum","#er"],


}
console.log(post);
console.log(post.content);
console.log(post["content"]);
console.log(post.tags[0]);


let post2={
    1:"@zumer",
    2:"This is my first post.",
    null:23,
    undefined:12,

}
// console.log(post2.1); error
console.log(post2["1"]);

//  change
post.likes=26;
console.log(post);

// add
// console.log(post.coments);
post.coments="yes";
console.log(post);

// delete
delete post.coments;
console.log(post);





