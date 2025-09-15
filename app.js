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


// nested (objects of objects)
const info={
    zumer:{
        color:"brown",
        city:"lahore"

    },
      asma:{
        color:"red",
        city:"lahore"

    },
      wahab:{
        color:"pink",
        city:"lahore"

    },
}
console.log(info);
console.log(info.asma.city);



// nested (arrays of objects)
const info1=[
    {
        name:"zumer",
        color:"brown",
        city:"lahore"

    },
    {
        name:"asma",
        color:"red",
        city:"lahore"

    },
    {
        name:"wahab",
        color:"pink",
        city:"lahore"

    },
]
console.log(info1);
console.log(info1[1].name);


// objects build in
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

// METHODS
console.log(Math.abs(-5));   //negative to positive
console.log(Math.pow(2,4)); //2**4
console.log(Math.floor(5.5)); //round off (smallest  da ga 5)
console.log(Math.floor(-5.5)); //round off (smallest  da ga -6)

console.log(Math.ceil(5.5)); //round off (largest  da ga 6)
console.log(Math.ceil(-5.5)); //round off (largest  da ga -5)
console.log(Math.random());   // {0--1}   1 is not included


// 1--10
console.log(Math.floor(Math.random()*10 +1));  //+1        bcz random 0-9 da ga {phir 1-10 }
console.log(Math.floor(Math.random()*10+1));
console.log(Math.floor(Math.random()*10+1));
console.log(Math.floor(Math.random()*10 +1));
console.log(Math.floor(Math.random()*10+1));
console.log(Math.floor(Math.random()*10+1));





// 1-100
console.log(Math.floor(Math.random()*100+1));

// 1-5
console.log(Math.floor(Math.random()*5+1));

21-25
console.log(Math.floor(Math.random()*5+21)); //*5(0,1,2,3,4)       +20(20,21,22,23,24)      +21(21,22,23,24,25)








