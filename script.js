    //Toggle ingredient checkboxes 
    document.querySelectorAll('.ingredient-check').forEach(item=>
{
    item.addEventListener('click',function(){
        const icon = this.querySelector('i');
        if
        (icon.classList.contains('fa-square'))
        {
            icon.classList.remove('fa-square');
            icon.classList.add('fa-check-square');
            this.parentElement.style.opacity = "0.6";
        }else{
            icon.classList.remove('fa-check-square');
            icon.classList.add('fa-square');
            this.parentElement.style.opacity = "1";
        }
    });
});
    // Print recipe functionality
    document.querySelector('.action-btn:nth-child(1)')
    .addEventListener('click',function(){
        alert('Print functionality would open a print-friendly version of this recipe.');
    });
    // Save recipe functionality
    document.querySelector('.action-btn:nth-child(2)')
    .addEventListener('click',function(){
        this.innerHTML='<i class="fas fa-save"></i> Saved!';
        setTimeout(()=>{
            this.innerHTML = '<i class="far fa-save"></i> Save';
        }, 2000);
    });
    // Share recipe functionality
    document.querySelector('.action-btn:nth-child(3)')
    .addEventListener('click',function(){
        alert('Share functionality would open sharing options for social media and email.');
    });
document.querySelectorAll('.filter-buttons button').forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            document.querySelectorAll('.recipe-hero').forEach(card => {
                if (category === 'all' || card.dataset.categories.includes(category)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });