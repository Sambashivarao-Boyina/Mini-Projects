let bot_messages=[
    "Hey! How's it going?",
    "What's up?",
    "Did you hear about that new movie?",
    "I can't believe it's already been a year!",
    "Guess what happened today!",
    "Any plans for the weekend?",
    "I'm craving pizza, you in?",
    "Just finished a great book. Have any recommendations?",
    "Remember that time we went on that road trip?",
    "Missing the good old days!",
    "What's your favorite type of music?",
    "I need a vacation. Where should I go?",
    "Have you tried the new restaurant in town?",
    "Thinking about starting a new hobby. Any suggestions?",
    "Can you believe how fast time is flying?",
    "Random question: cats or dogs?",
    "I found this interesting article. Check it out!",
    "Just wanted to say hi! 😊",
    "Do you believe in aliens?",
    "Plans for the holidays?",
    "Hey! How's your day going so far? Mine's been a bit hectic, but I'm hanging in there.",
    "What's the latest gossip? Spill the tea!",
    "I stumbled upon an amazing recipe today. Can't wait to try it out!",
    "It's such a beautiful day outside. Thinking of going for a walk later.",
    "I had the weirdest dream last night. Do you ever have bizarre dreams?",
    "Work has been crazy busy lately. I could use a break!",
    "Have you ever been to a live concert? The energy is electrifying!",
    "Just finished a workout session. Feeling pumped and ready to conquer the day.",
    "I'm in the mood for a movie marathon. Any movie recommendations?",
    "Life is like a rollercoaster, full of ups and downs.",
    "Sending you positive vibes for a fantastic day ahead!",
    "I can't stop listening to this new song. It's on repeat!",
    "Thinking about redecorating my room. Any design ideas?",
    "What's your go-to comfort food? Mine is definitely mac and cheese.",
    "I'm daydreaming about a tropical vacation. Sun, sand, and relaxation!",
    "Feeling grateful for the little moments that make life special.",
    "Just adopted a pet! Meet my new furry friend.",
    "Woke up with a smile today. Gratitude changes everything.",
    "I believe in the power of kindness. It can truly make a difference.",
    "Life's too short to hold grudges. Forgiveness is liberating.",
    "Chasing dreams and creating memories. That's the way to live!",
    "I'm on a quest for the perfect cup of coffee. Any recommendations?",
    "Spontaneity leads to some of the best adventures.",
    "Learn from yesterday, live for today, hope for tomorrow.",
    "Just discovered a hidden gem of a bookstore. Bliss!",
    "Surround yourself with positivity and watch your world change.",
    "Sometimes, all you need is a good laugh. What's your favorite joke?",
    "Strive for progress, not perfection.",
    "The best is yet to come. Keep moving forward!",
    "Life is a journey, not a destination.",
    "Savoring the simple joys of life.",
    "Sunsets are proof that no matter what happens, every day can end beautifully.",
    "Dancing like nobody's watching is the best therapy.",
    "Cheers to new beginnings and endless possibilities!",
    "Embrace the glorious mess that you are.",
    "Finding joy in the ordinary.",
    "The more you praise and celebrate your life, the more there is in life to celebrate.",
    "Life is short. Do more of what makes you happy.",
    "Happiness is homemade.",
    "In the end, we only regret the chances we didn't take.",
    "You are stronger than you think.",
    "Every day may not be good, but there is something good in every day.",
    "Dream big, work hard, stay focused.",
    "The best way to predict the future is to create it.",
    "Your vibe attracts your tribe.",
    "Be kind, for everyone you meet is fighting a battle you know nothing about.",
    "Radiate positivity and good things will happen.",
    "Life is tough, but so are you.",
    "Do something today that your future self will thank you for.",
    "Believe you can, and you're halfway there.",
    "Your only limit is you.",
    "The secret of getting ahead is getting started.",
    "You've got this!",
    "Keep shining, beautiful one. The world needs your light.",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "Life is tough, my darling, but so are you.",
    "Your time is now. Start where you are, use what you have, do what you can.",
    "The only way to do great work is to love what you do."
  ]
const getRandomMsg=()=>{
    let randIdx=Math.floor(Math.random()*bot_messages.length);
    return bot_messages[randIdx];
}

const createMsgBox=(msg)=>{
    let msgBox=document.createElement("div");
    msgBox.classList.add("message");
    msgBox.innerText=msg;
    
    return msgBox;
}

let form=document.querySelector("form")
let input=document.querySelector("input");
let messages=document.querySelector(".messages");

form.addEventListener("submit",(event)=>{
    event.preventDefault();    
    let sendMsg=input.value;
    input.value="";

    let sendMsgBox=createMsgBox(sendMsg);
    sendMsgBox.classList.add("send"); 
    messages.appendChild(sendMsgBox);

    let receivedMsg=getRandomMsg();
    let receivedMsgBox=createMsgBox(receivedMsg);
    receivedMsgBox.classList.add("received");
    
    setTimeout(()=>{
        messages.append(receivedMsgBox);
    },1500);

});

