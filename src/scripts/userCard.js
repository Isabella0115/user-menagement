import { openDetailsModal } from './modals.js';
import { confirmDelete } from './modals.js';
import { openEditModal } from './modals.js';



export function createUserCard(user) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <button class="more-btn fa-solid fa-ellipsis-vertical"></button>
        <img src="/src/images/User-Avatar-Profile-PNG-Pic-Clip-Art-Background.png" alt="${user.name}'s photo" class="user-image">
        <h3>${user.name} ${user.surname}</h3>
        <button class="details-btn">Details</button>
        <div class="more-menu hidden">
            <span class="edit">Edit</span>
            <span class="delete">Delete</span>
        </div>
    `;

    const moreMenu = card.querySelector('.more-menu');
    card.querySelector('.more-btn').addEventListener('click', () => {
        moreMenu.classList.toggle('hidden');
    });

    // Add event listeners for details, edit, delete
    card.querySelector('.details-btn').addEventListener('click', () => openDetailsModal(user));
    card.querySelector('.edit').addEventListener('click', () => openEditModal(card, user));
    card.querySelector('.delete').addEventListener('click', () => confirmDelete(user.name));

    return card;
}
