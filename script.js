document.addEventListener('DOMContentLoaded', function() {
    const saveButton = document.getElementById('save-note');
    const noteInput = document.getElementById('note-input');
    const notesContainer = document.getElementById('notes-container');

    saveButton.addEventListener('click', function() {
        const noteText = noteInput.value.trim();

        if (noteText) {
            const noteDiv = document.createElement('div');
            noteDiv.classList.add('note');
            noteDiv.textContent = noteText;
            notesContainer.appendChild(noteDiv);

            noteInput.value = ''; // Clear the textarea after saving the note
        } else {
            alert('Please write a note before saving.');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const saveButton = document.getElementById('save-note');
    const noteInput = document.getElementById('note-input');
    const notesContainer = document.getElementById('notes-container');

    function deleteNote(event) {
        // Get the note to delete
        const noteToDelete = event.target.closest('.note');
        // Remove the note from the container
        notesContainer.removeChild(noteToDelete);
    }

    saveButton.addEventListener('click', function() {
        const noteText = noteInput.value.trim();

        if (noteText) {
            const noteDiv = document.createElement('div');
            noteDiv.classList.add('note');
            
            // Create delete button for the note
            const deleteBtn = document.createElement('img');
            deleteBtn.src = '/Users/adisingh/Documents/Projects/NotesApp/3405244.png'; // Update with the path to your uploaded icon
            deleteBtn.classList.add('delete-icon');
            deleteBtn.alt = 'Delete';
            deleteBtn.onclick = deleteNote;

            // Add text and delete button to note
            noteDiv.textContent = noteText;
            noteDiv.appendChild(deleteBtn);
            notesContainer.appendChild(noteDiv);

            // Clear the textarea after saving the note
            noteInput.value = ''; 
        } else {
            alert('Please write a note before saving.');
        }
    });
});
