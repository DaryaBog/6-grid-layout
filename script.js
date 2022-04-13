const swords = [
    {id: 1, title: 'Bloodskal Blade', description: `During the quest "The Final Descent," travel into the depths of Bloodskal Barrow. There, the Bloodskal Blade can be found on the remains of Gratian Caerellius.`, image: 'img/bladskal.png',},
    {id: 2, title: 'Windshear', description: `This sword can be obtained during the Dark Brotherhood quest "Hail Sithis!" on a ship called The Katariah; this ship can only be accessed during or after the quest is finished.`, image: 'img/vet.png',},
    {id: 3, title: `Bolar's Oathblade`, description: `It can be found in Bloated Man's Grotto along with his written oath, under the shrine of Talos.`, image: `img/bolar's.png`,},
    {id: 4, title: 'Dragonbane', description: `It can be obtained in Sky Haven Temple during the quest "Alduin's Wall." It is located on a table in an atrium just off to the left of the main chamber, along with a full set of Blades armor. However, if the sword is not taken during the quest, it will count as stolen, along with the Blades Armor, until Paarthurnax is killed during "Paarthurnax."`, image: 'img/dragonborn.png',},
    {id: 5, title: 'Ghostblade', description: `The Ghostblade can be obtained in Ansilvund after defeating Lu'ah Al-Skaven and the reanimated bodies of Fjori and Holgeir during the quest "A Love Beyond Death." It bears resemblance to the Drainheart Swords found on draugr ghosts encountered within Labyrinthian.`, image: 'img/Ghostblade.png',},
    {id: 6, title: 'Miraak sword', description: `Miraak's Sword can be looted from the skeletal remains of Miraak, along with his staff and outfit, upon his death at the end of the quest "At the Summit of Apocrypha."`, image: 'img/Miraak_sword.png',},
    {id: 7, title: 'Nightingale Blade', description: `Karliah gives the blade to the Dragonborn as a reward for completing the Thieves Guild quest "Hard Answers."`, image: 'img/Nightingale_Blade.png',},
    {id: 8, title: 'Gauldur Blackblade', description: `It can be obtained in the ruins of Folgunthur by defeating Mikrul Gauldurson during the quest "Forbidden Legend."`, image: 'img/Draugrsword.webp',},
]

const aboutModal = $.modal(swords[1])


const cards = document.createElement('div')
cards.classList.add('sword__items')
for(let sword of swords){
    cards.insertAdjacentHTML('beforeend',
    `<div class="sword__item">
    <div class="sword__image">
        <img src="${sword.image}" alt="${sword.title}">
    </div>
    <div class="sword__name">${sword.title}</div>
    <button class="sword__btn" data-btn="about" data-id="${sword.id}">To learn more</button>
</div>`)
document.getElementById('sword').appendChild(cards)
}


document.addEventListener('click', event => {
    //event.preventDefault()
    const id = +event.target.dataset.id
    const btnType = event.target.dataset.btn
    if(btnType ==='about'){
        const sword = swords.find(s => s.id === id)
        aboutModal.setContent(`
        <h2>${sword.title}</h2>
        <h4>Acquisition</h4>
        <div class="modal__about">
            <p>${sword.description||''}</p>
            <div class="modal__img">
                <img src="${sword.image||''}" alt="${sword.title}">
            </div>
        </div>
        `)
        aboutModal.open()
    }
})


