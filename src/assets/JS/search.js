const inputSearch = document.querySelectorAll('.search');
const articleList = document.querySelectorAll('.article-list');

const cards = [...articleList];

/**
 * @param {boolean} boolean
 */
/*inputSearch.addEventListener('input', (e) => {
    cards.forEach(card => {

        let searchString = card.getAttribute('data-search').toLowerCase();
    
        if (searchString.includes(inputSearch.value.toLowerCase())){
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
});*/