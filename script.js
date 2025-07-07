// Add active class to category buttons on click
document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        this.classList.add('active');
    });
});
// Add animation to save buttons
document.querySelectorAll('.save-btn').forEach(button => {
    button.addEventListener('click', function() {
        const icon = this.querySelector('i');
        if (icon.classList.contains('far')) {
            icon.classList.replace('far', 'fas');
            this.style.backgroundColor = '#4ecdc4';
            this.innerHTML = '<i class="fas fa-bookmark"></i> Saved' ;

            // Reset after 2 seconds
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-bookmark"></i> Saved' ;
            }, 2000);
        } else {
            icon.classList.replace('fas', 'far');
            this.style.backgroundColor = '';
            this.innerHTML = '<i class="fas fa-bookmark"></i> View & Save' ;
        }
    });
});
// Simple search functionallity
document.querySelector('.search-bar button').addEventListener('click', function() {
    const searchTerm = document.querySelector('.search-bar input').valuetoLowerCase();
    if (searchTerm) {
        alert('Searching for: ${searchTerm}');
        // In a real app, you would filter recipes here
    }
});
        // Add ingredient functionality
        document.querySelector('.ingredient-list + .add-btn').addEventListener('click', function() {
            const newIngredient = document.createElement('div');
            newIngredient.className = 'list-item';
            newIngredient.innerHTML = `
                <input type="text" class="list-input" placeholder="e.g., 1 tbsp olive oil">
                <button type="button" class="remove-btn"><i class="fas fa-times"></i></button>
            `;
            document.querySelector('.ingredient-list').appendChild(newIngredient);
            
            // Add event to new remove button
            newIngredient.querySelector('.remove-btn').addEventListener('click', function() {
                this.parentElement.remove();
            });
        });

        // Add instruction step functionality
        document.querySelector('.instruction-list + .add-btn').addEventListener('click', function() {
            const newStep = document.createElement('div');
            newStep.className = 'list-item';
            newStep.innerHTML = `
                <input type="text" class="list-input" placeholder="e.g., Bake for 25 minutes">
                <button type="button" class="remove-btn"><i class="fas fa-times"></i></button>
            `;
            document.querySelector('.instruction-list').appendChild(newStep);
            
            // Add event to new remove button
            newStep.querySelector('.remove-btn').addEventListener('click', function() {
                this.parentElement.remove();
            });
        });

        // Remove existing items
        document.querySelectorAll('.remove-btn').forEach(button => {
            button.addEventListener('click', function() {
                this.parentElement.remove();
            });
        });

        // Tag selection
        document.querySelectorAll('.tag-option').forEach(tag => {
            tag.addEventListener('click', function() {
                this.classList.toggle('selected');
            });
        });

        // Form submission
        document.getElementById('recipe-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Recipe submitted successfully! In a real application, this would save your recipe.');
            // Reset form after submission
            this.reset();
            // Clear dynamic lists
            document.querySelectorAll('.list-item:not(:first-child)').forEach(item => {
                item.remove();
            });
            // Reset tags
            document.querySelectorAll('.tag-option').forEach(tag => {
                tag.classList.remove('selected');
            });
            // Set default selected tag
            document.querySelectorAll('.tag-option')[1].classList.add('selected');
        });

        // Image upload interaction
        document.querySelector('.image-upload').addEventListener('click', function() {
            alert('Image upload dialog would open here. This is a frontend demo.');
        });
