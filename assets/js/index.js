const speakers= [
{
    name:'Ninja',
    img:'assets/img/speakers/ninja.png',
    infos:'Richard Tyler Blevins, better known as Ninja, is an American Twitch streamer, YouTuber and professional gamer.',
    word :'I cant wait to visit the biggest world gaming event ... make sure to be there'
},
{
    name:'Pokiman',
    img:'assets/img/speakers/pokiman.png',
    infos:'Imane Anys, better known as Pokimane, is a Moroccan-Canadian Internet personality',
    word :'E-sport world cup is here ! remember , Make your wonderful dream a reality, it will become your truth.'
},
{
    name:'LuluLuvely',
    img:'assets/img/speakers/lulu.png',
    infos:'Content Creator',
    word :'Im so excited to be there next month ! and meet the fans all over the world'
},
{
    name:'Asmongold',
    img:'assets/img/speakers/asm.png',
    infos:'Zack, better known as Asmongold, is an American Twitch streamer and YouTuber',
    word :'Hello fellas , see you in the world cup event ! its going to be easy clap for us'
},
{
    name:'XQc',
    img:'assets/img/speakers/xqc.png',
    infos:'Félix Lengyel, better known as xQc or xQcOW, is a Canadian Twitch streamer, internet personality',
    word :'I cant wait to visit the biggest world gaming event ... make sure to be there'
},
{
    name:'Tfue',
    img:'assets/img/speakers/tfue.png',
    infos:'Turner Tenney, better known as Tfue, is an American streamer and esports player',
    word :'Im so excited to be there next month ! and meet the fans all over the world'
},
];
const SpeakerList = document.querySelector('.speakers-list');
let count =0;
speakers.forEach(speaker => {
    const single = document.createElement('li');
    single.classList.add('single-speaker');
    if (count > 1) {
        single.classList.add('hidden-speaker');
        single.classList.add('hide');
    }
    single.innerHTML=`<div class="speaker-img"><img class="speaker-image" src=${speaker.img} alt=${speaker.name}></div><div class="speaker-description">
    <h3 class="speaker-name"> ${speaker.name}</h3>
    <h6 class="speaker-info"> ${speaker.infos}</h6>
    <div class="line-feature"></div>
    <p class="speaker-details">${speaker.word}</p>
</div>`
SpeakerList.appendChild(single);
count++;
})

document.getElementById('open-mobile-menu').addEventListener('click',() => {
    document.querySelector('.mobile-menu-container').classList.toggle('hide');
})
document.getElementById('close-mobile-menu').addEventListener('click',() => {
    document.querySelector('.mobile-menu-container').classList.toggle('hide');
})

document.querySelectorAll('.title-link').forEach(link=> {
link.addEventListener('click',() => {
        document.querySelector('.mobile-menu-container').classList.toggle('hide');
    })
})
document.getElementById('btn-more').addEventListener('click',() => {
    document.querySelectorAll('.hidden-speaker').forEach(speaker => {
        speaker.classList.toggle('hide');
    })
    if (document.getElementById('btn-more').innerHTML === ' MORE <i class="fa-solid fa-angle-down"></i>') {
        document.getElementById('btn-more').innerHTML='LESS <i class="fa-solid fa-angle-up"></i>';
    } else {
        document.getElementById('btn-more').innerHTML=' MORE <i class="fa-solid fa-angle-down"></i>'
    }
})
