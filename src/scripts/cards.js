import { createUserCard } from './userCard.js';

export function fetchAndRenderUsers() {
    fetch('https://mocki.io/v1/fe7ebfbd-fe73-449a-8408-1cd4eb79395e')
        .then(response => response.json())
        .then(users => {
            const cardContainer = document.getElementById('card-container');
            users.forEach(user => {
                const card = createUserCard(user);
                cardContainer.appendChild(card);
            });
        })
        .catch(err => {
            console.error('Failed to load users:', err);
            const cardContainer = document.getElementById('card-container');
            const errorMessage = document.createElement('div');
            errorMessage.classList.add('error-message');
            errorMessage.textContent = 'Failed to load users. Please try again later.';
            cardContainer.appendChild(errorMessage);
        });
}

