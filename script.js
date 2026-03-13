function showScreen2(firstBox,secondBox){
  document.getElementById("firstBox").classList.remove("show");
  setTimeout(function(){
    document.getElementById("secondBox").classList.add("show");
  },300);
  expandHeight();
  createConfetti();
  playmusic();
  startCelebration();
}

function showScreen3(secondBox, thirdBox){
  document.getElementById("secondBox").classList.remove("show");
  setTimeout(function(){
    document.getElementById("thirdBox").classList.add("show");
  },300);
  typeWriter();
  startHearts();
}

function showScreen5(thirdBox, fifthBox){
  document.getElementById("thirdBox").classList.remove("show");
  setTimeout(function(){
    document.getElementById("fifthBox").classList.add("show");
  },300);
  startHearts();
}

function showNoScreen(firstBox, fourthBox){
  document.getElementById("firstBox").classList.remove("show");
  setTimeout(function(){
    document.getElementById("fourthBox").classList.add("show");
  },300);
}

function showScreen4(fourthBox,secondBox){
  document.getElementById("fourthBox").classList.remove("show");
  setTimeout(function(){
    document.getElementById("secondBox").classList.add("show");
  },300);
  expandHeight();
  createConfetti();
  playmusic();
  startCelebration();
}

function playmusic() {
  const musicFile = document.getElementById("music");
  musicFile.play();
}

const text = "Hii, Happy Birthday Annu ji🎂🎉, I hope you are doing great😊. Maine apne hatho se ye website banai hai, thodi bahot coding mujhe aati thi toh bana liya 😎 aur vaise bhi aaj kal Humari baate kam ho gayi hain, isliye socha ek chhota sa birthday gift de doon, jisme baat bhi ho jaye aur Birthday Gift bhi ho jaye. Annu Ji Sabse pehle Aapse thank you kehna chahunga kyu ki Aapne mujhe kabhi judge nahi kiya, bina bole meri feelings samjhi, aur hamesha mera sath diya. Main khudko bahot lucky samajhta hoon ki aap meri life me aaye, mujhe apna bestfriend mana, mujhpe trust kiya. Thank you. Aur haan Mujhe aapse baate karna, aapki baate sunna, aapka ruthna mene aapko manana, aapke baare me har ek cheez mujhe bahot pasand hai. College me bhi humesha sochta rhta tha ki kab aapse baat hogi. Jab bhi aap call karte the bhale hi me chup hi rhta tha lekin mujhe wo sab bahot pasand tha mujhe aapki awaz bahot pasand thi aur aaj bhi hai. Time badla, responsibilities badh gayi, aur aap busy rhne lage, aur humari baate band si ho gyi. Me chahta hoon aap bahot aage badho aur sabko dikha do ki aap kya cheez ho. aur uske liye agar humari baate na bhi ho toh koi gham nahi. Ek baat aur... main aapka special din kharab nahi karna chahta agar aapko achha na lage toh aap ignore kar dena. theek hai, toh in sab baaton ke beech mujhe aapke liye feelings aa gayi. Mujhe aap bahot pasand ho. Mujhe pata hai shayad aap ab relationship se door hi rhna chahte ho lekin fir bhi keh rha hoon. I love you💝🌹. mujhe aapse bahot pyar hai💝. Main aapse koi jawab expect nahi karta. Agar aapka jawab na bhi ho, toh don't worry mujhe bura nahi lagega. Aapko jo bhi jawab dena hai bass bol dijiye ya fir jawab nahi dena toh ignore kar dijiye. Bas aapko ye baat kehni thi toh keh diya. Kuch jyada hi time le liya shayad sorry. Aur Hamesha khush rehna. Aur humesha mere sath rhna. Happy Birthday ❤️.";

let index = 0;
function typeWriter(){
  if(index < text.length){
    const box = document.getElementById("confessionText");
    box.innerHTML += text.charAt(index);
    index++;
    box.scrollTop = box.scrollHeight;
    setTimeout(typeWriter,50);
  }
  document.getElementById("nextBtn").style.opacity = "1";
  document.getElementById("nextBtn").style.visibility = "visible";
}

function expandHeight() {
  let container = document.getElementById("secondBox");
  container.style.height = "200px";
}

/* Confetti Script */
function createConfetti(){
  for(let i=0;i<120;i++){
    const confetti=document.createElement("div")
    confetti.classList.add("confetti")
    confetti.style.left=Math.random()*100+"vw"
    confetti.style.backgroundColor=`hsl(${Math.random()*360},100%,50%)`
    confetti.style.animationDuration=(Math.random()*3+2)+"s"
    document.body.appendChild(confetti)
    setTimeout(()=>{
      confetti.remove()
    },5000)
  }
}

/* Floating Hearts */
var heartsStarted = false;
function startHearts(){
  if(heartsStarted) return;
  heartsStarted = true;
  setInterval(function(){
    var heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 15) + "px";
    document.body.appendChild(heart);
    setTimeout(function(){
      heart.remove();
    },6000);
  },500);
}

/* Answer Code */
function sendAnswer(answer){
  let message = "";
  if(answer === "yes"){
    message = "Yess🥰, I Love You Hitu Jii💞";
  }
  if(answer === "no"){
    message = "Sorry Hitu Jii🙂, Main Aapko Sirf Bestfriend Manti hoon🫠";
  }
  if(answer === "time"){
    message = "Mujhe Sochne ke liye time chahiye😌";
  }
  let phone = "919022476949";
  let url = "https://api.whatsapp.com/send?phone=" + phone + "&text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}

function startCelebration() {
  // vibration check
  if (navigator.vibrate) {
    navigator.vibrate([3000]);
  }
}

let sound = document.getElementById("clickSound");
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", function(){
    sound.currentTime = 0;
    sound.play();
  });
});