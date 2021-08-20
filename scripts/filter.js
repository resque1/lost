(function(){
    const elem = document.querySelector('.products_list');
    const iso = new Isotope( elem, {
        // options
        itemSelector: '.products_item',
        filter: '.popular'

});
    
    const controlls = document.querySelectorAll('.filter_link');
    const activeClass = 'filter__item--active';

    controlls.forEach(function(control){
        control.addEventListener('click', function(e){
            e.preventDefault();
            
            const filterName= control.getAttribute('data-filter')

            controlls.forEach(function(link){
                link.closest('.filter_item').classList.remove(activeClass);

            })

            control.closest('.filter_item').classList.add(activeClass);
            
            iso.arrange({
                filter: `.${filterName}`

            })
        })

    })
})();