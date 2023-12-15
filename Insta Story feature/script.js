let arr = [
    { dp: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60", story: "https://images.unsplash.com/photo-1566827833194-2e4b5626bd1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2NlbmFyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60" },
    { dp: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60", story: "https://images.unsplash.com/photo-1489321336462-efe12c02d099?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2NlbmFyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60" },
    { dp: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60", story: "https://images.unsplash.com/photo-1622165339344-c550ef0cffad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2NlbmFyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60" },
    { dp: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60", story: "https://plus.unsplash.com/premium_photo-1667235923118-408ef419ad8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNjZW5hcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60" },
    { dp: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60", story: "https://images.unsplash.com/photo-1514241516423-6c0a5e031aa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNjZW5hcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60" },
    { dp: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60", story: "https://images.unsplash.com/photo-1566928120010-40686b83019e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNjZW5hcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60" }
]

var stories = document.querySelector("#stories");

let clutter = ""
arr.forEach((elem, idx) => {
    clutter += `<div class="story"><img id="${idx}" src="${elem.dp}" alt=""></div>`
});

stories.innerHTML = clutter;

stories.addEventListener("click", (e) => {
    document.querySelector("#fullscreen").style.display = "block";
    document.querySelector("#fullscreen").style.backgroundImage = `url(${arr[e.target.id].story})`
    setTimeout(() => {
        document.querySelector("#fullscreen").style.display = "none";
        
    }, 1000);
});