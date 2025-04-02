function openModal() {
    document.getElementById('userModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('userModal').classList.add('hidden');
}

// Event Listeners
document.getElementById('closeModal').addEventListener('click', closeModal);
document.getElementById('cancelButton').addEventListener('click', closeModal);

// Close modal when clicking outside
document.getElementById('userModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('userModal')) {
        closeModal();
    }
});

// Prevent modal close when clicking modal content
document.querySelector('.modal-content').addEventListener('click', (e) => {
    e.stopPropagation();
});