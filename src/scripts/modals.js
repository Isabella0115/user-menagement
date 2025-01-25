
export function openEditModal(card, user) {
    const modal = document.getElementById('edit-modal');
    document.getElementById('edit-first-name').value = user.name;
    document.getElementById('edit-surname').value = user.surname;
    document.getElementById('edit-email').value = user.email;
    document.getElementById('edit-phone').value = user.phoneNumber;
    modal.style.display = 'flex';

    const saveEdit = document.getElementById('save-edit');
    saveEdit.onclick = () => {
        // Update user data
        user.name = document.getElementById('edit-first-name').value;
        user.surname = document.getElementById('edit-surname').value;
        user.email = document.getElementById('edit-email').value;
        user.phoneNumber = document.getElementById('edit-phone').value;

        // Update the card content
        const nameElement = card.querySelector('h3');
        nameElement.textContent = `${user.name} ${user.surname}`;
        alert('User updated successfully!');
        modal.style.display = 'none';
    };
}


// Close the Edit modal
const closeEditModal = document.getElementById('close-edit-modal');
closeEditModal.addEventListener('click', () => {
    const modal = document.getElementById('edit-modal');
    modal.style.display = 'none';
});

const closeEditIcon = document.getElementById('close-edit-icon');
closeEditIcon.addEventListener('click', () => {
    const modal = document.getElementById('edit-modal');
    modal.style.display = 'none';
});

export function confirmDelete(name) {
    const deleteModal = document.getElementById('delete-modal');
    deleteModal.style.display = 'flex';

    const confirmDeleteBtn = document.getElementById('confirm-delete');
    confirmDeleteBtn.onclick = () => {
        const cardToRemove = Array.from(document.querySelectorAll('.card')).find(card => {
            const cardName = card.querySelector('h3')?.innerText.trim();
            return cardName.startsWith(name);
        });

        if (cardToRemove) {
            cardToRemove.remove();
            alert(`${name} has been deleted.`);
        } else {
            console.warn(`Card with name "${name}" not found.`);
        }

        deleteModal.style.display = 'none';
    };

    const cancelDeleteBtn = document.getElementById('cancel-delete');
    cancelDeleteBtn.onclick = () => {
        deleteModal.style.display = 'none';
    };
}

  // Open Details Modal
 export function openDetailsModal(user) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.style.display = 'flex';

    modal.innerHTML = `
        <div class="modal-content">
            <i class="fa-solid fa-x" id="close-details-icon"></i>
            <p><strong>Role:</strong> ${user.role || 'N/A'}</p>
            <p><strong>Occupation:</strong> ${user.occupation || 'N/A'}</p>
            <p><strong>Email Address:</strong> ${user.email}</p>
            <p><strong>Phone Number:</strong> ${user.phoneNumber || 'N/A'}</p>
        </div>
    `;

    document.body.appendChild(modal);

    const closeModal = () => {
        document.body.removeChild(modal);
    };

    modal.querySelector('#close-details-icon').addEventListener('click', closeModal);
}


// export function openDetailsModal(user) {
//     const modal = document.createElement('div');
//     modal.classList.add('modal');
//     modal.style.display = 'flex';

//     modal.innerHTML = 
//         <div class="modal-content">
//             <i class="fa-solid fa-x" id="close-details-icon"></i>
//             <p><strong>Role:</strong> ${user.role || 'N/A'}</p>
//             <p><strong>Occupation:</strong> ${user.occupation || 'N/A'}</p>
//             <p><strong>Email Address:</strong> ${user.email}</p>
//             <p><strong>Phone Number:</strong> ${user.phoneNumber || 'N/A'}</p>
//         </div>
//     ;

//     document.body.appendChild(modal);

//     const closeModal = () => {
//         document.body.removeChild(modal);
//     };

//     modal.querySelector('#close-details-icon').addEventListener('click', closeModal);
// }