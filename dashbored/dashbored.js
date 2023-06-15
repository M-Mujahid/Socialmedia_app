const isLoggedInUser = JSON.parse(localStorage.getItem("isLoggedInUser"));

let logout = document.querySelector(".logout");
let leftDiv = document.querySelector(".leftDiv");
let rightDiv = document.querySelector(".rightDiv");
let placeholderName = document.querySelector(".placeholderName");
let porfilePage = document.querySelector(".porfilePage");
let homePage = document.querySelector(".homePage");


const postDiv = document.querySelector(".postDiv");

const [first, last] = [isLoggedInUser.firstName, isLoggedInUser.surName];
const firstName =
  first.slice(0, 1).toUpperCase() + first.slice(1).toLowerCase();
const lastName = last.slice(0, 1).toUpperCase() + last.slice(1).toLowerCase();


// homePage.addEventListener('click',()=>{
//    window.location.href = "#"
// })

logout.addEventListener("click", () => {
  window.location.href = "../index.html";
});

if (!isLoggedInUser) {
  window.location.href = "../index.html";
}

const objLeftDiv = [
  { img: `avt-2-removebg-preview.png`, text: `${firstName} ${lastName}` },
  { img: "avt-3-removebg-preview.png", text: "Friends" },
  { img: "recent.png", text: "Feeds" },
  { img: "group.png", text: "Groups" },
  { img: "marketplace.png", text: "Marketplace" },
  { img: "watch.png", text: "Watch" },
  { img: "memmory.png", text: "Memories" },
  { img: "save.png", text: "Saved" },

];

const leftData = objLeftDiv.map((item) => {
  return `  <div class="itemImgName">
    <img src="./assets/${item.img}"  style="height: 40px; width: 40px; font-weight:bold;">
    <p>${item.text}</p>
</div>`;
});
leftDiv.innerHTML = leftData.join("");

const objRightData = [
  { img: `avt-2-removebg-preview.png`, text: "Umer Butt" },
  { img: `avt-3-removebg-preview.png`, text: "Abdul Wahid" },
  { img: `avt-2-removebg-preview.png`, text: "Muhammad Tahir" },
  { img: `avt-3-removebg-preview.png`, text: "Aliyan Ghani" },
  { img: `avt-2-removebg-preview.png`, text: "Shayan Ahmed" },
];

const rightData = objRightData.map((item) => {
  return `<div class="itemImgName">
      <img src="./assets/${item.img}" alt="" style="height: 40px; width: 40px; font-weight:bold;">
      <p>${item.text}</p>
  </div>`;
});
rightDiv.innerHTML = rightData.join("");

// Profile Name Change

const posts = JSON.parse(localStorage.getItem("posts")) || [];


posts.forEach((post) => {
  var div1 = document.createElement("div");
  div1.setAttribute('class', 'appendDiv')
  div1.innerHTML = `<div class="postDivUpper">
  <div class="d-flex">
    <div class="postProfileImg">
      <img src="./assets/avt-2-removebg-preview.png" alt="" />
    </div>
    <div class="postNameDateTime">
      <h4 class="ProfileName">${post.userName}</h4>
      <span>${post.date}</span><span> at</span>
      <span>${post.time}</span>
    </div>
  </div>
  <div class="postDivEditDelete">
    <img src="./assets/3Dots.png" alt="" />
    <img src="./assets/cross.png" alt="" />
  </div>
</div>
<h6 class="m-3 text-white">${post.postContent}</h6>
<div class="postDivImg">
  <img class="postImg" src="./assets/post.jpg" alt="">
</div>
<div class="likeLogoCounterComment d-flex justify-content-between">
  <div class="d-flex">
    <img class="m-1" src="./assets/like.png" alt="" style="width: 20px ; height: 20px;" >
    <h6 class="text-white">1</h6>
  </div>
</div>
<div class="d-flex justify-content-evenly text-white my-4 commentBox">
  <div><img src="./assets/like.png" alt="" style="width: 30px ; height: 30px;">&ThinSpace;Like</div>
  <div><img src="./assets/comment.png" alt="" style="width: 30px ; height: 30px;">&ThinSpace;Comment</div>
  <div><img src="./assets/share1.png" alt="" style="width: 30px ; height: 30px;">&ThinSpace;Share</div>
  
</div>
<div class="postCommentLastDiv">
  <img src="./assets/avt-2-removebg-preview.png"  />
  <input type="text" placeholder="Leave a comment here..." />
  <button>Post</button>
</div>
`;
postDiv.prepend(div1)

})
// document.querySelector('.ProfileName').innerHTML = `${firstName} ${lastName}`;
document.querySelector(
  ".placeholderName"
).placeholder = `What's on your mind, ${firstName} ${lastName}`;



placeholderName.addEventListener('keypress',(e)=>{
if(e.key === 'Enter'){
  postHandler()

}

})

function postHandler() {
  var div1 = document.createElement("div");
  div1.setAttribute('class', 'appendDiv')
  div1.innerHTML = `<div class="postDivUpper">
  <div class="d-flex">
    <div class="postProfileImg">
      <img src="./assets.3DFots.png />
    </div>
    <div class="postNameDateTime">
      <h4 class="ProfileName">${firstName} ${lastName}</h4>
      <span>${new Date().toLocaleDateString()}</span><span> at</span>
      <span>${new Date().toLocaleTimeString()}</span>
    </div>
  </div>
  <div class="postDivEditDelete">
    <img src="./assset/3Dots.png" alt="" />
    <img src="./assset/cross.png" alt="" />
  </div>
</div>
<h6 class="m-3 text-white">${placeholderName.value}</h6>
<div class="postDivImg">
  <img class="postImg" src="./assset/postPic.jpg" alt="">
</div>
<div class="likeLogoCounterComment d-flex justify-content-between">
  <div class="d-flex">
    <img class="m-1" src="./assset/like.png" alt="" style="width: 20px ; height: 20px;" >
    <h6 class="text-white">1</h6>
  </div>
  <div class="d-flex text-white">
    <h6 class="text-white"> 1 </h6>&ThinSpace;
    <span>comment</span>&ThinSpace;
    <span>.</span>&ThinSpace;
    <h6>2</h6>&ThinSpace;
    <span>reposts</span>

  </div>
</div>
<div class="d-flex justify-content-evenly text-white my-4 commentBox">
  <div><img src="./assset/likeShow.png" alt="" style="width: 30px ; height: 30px;">&ThinSpace;Like</div>
  <div><img src="./assset/comment.png" alt="" style="width: 30px ; height: 30px;">&ThinSpace;Comment</div>
  <div><img src="./assset/repost.png" alt="" style="width: 30px ; height: 30px;">&ThinSpace;Repost</div>
  <div><img src="./assset/send.png" alt="" style="width: 30px ; height: 30px;">&ThinSpace;Send</div>
  
</div>
<div class="postCommentLastDiv">
  <img src="./assset/profile.png" alt="" />
  <input type="text" placeholder="Write a comment..." />
  <button>Post</button>
</div>
`;
postDiv.prepend(div1)

const postObj = {
  userName: `${firstName} ${lastName}`,
  postContent: placeholderName.value,
  date: new Date().toLocaleDateString(),
  time: new Date().toLocaleTimeString()
}

posts.push(postObj)

localStorage.setItem('posts', JSON.stringify(posts))

placeholderName.value = "";
}
