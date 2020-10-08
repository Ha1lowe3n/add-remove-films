'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const marketing = document.querySelectorAll('.promo__adv img'),
          genre = document.querySelector('.promo__genre'),
          bg = document.querySelector('.promo__bg'),
          moviesList = document.querySelector('.promo__interactive-list'),
          btn = document.querySelector('button'),
          addForm = document.querySelector('form.add'),
          addMovie = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');
    
        
    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let newFilm = addMovie.value;
        // checked - проверяем на наличие галочки
        const favorite = checkbox.checked;

        if (newFilm) {
            if (favorite) {
                console.log('Добавляем любимый фильм');
            }
            // обрезаем название фильма
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, moviesList);
        }



        addMovie.value = '';
    });


    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
    deleteAdv(marketing);


    const makeChanges = () => {
        genre.textContent = 'ДРАМА';
        bg.style.backgroundImage = "url('../img/bg.jpg')";
    };
    makeChanges();
    

    const sortArr = (arr) => {
        arr.sort();
    };
    
    

    const createMovieList = (films, parent) => {
        parent.innerHTML = '';

        films.forEach((item, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} - ${item}
                    <div class="delete"></div>
                </li>
            `;
        });

        sortArr(films);

        // При клике на мусорную корзину - элемент будет удаляться из списка
        document.querySelectorAll('.delete').forEach((item, i) => {
            item.addEventListener('click', () => {
                item.parentElement.remove();
                // i - с какого номера начинаем, 1 - сколько элементов нужно удалить
                movieDB.movies.splice(i, 1);
                // чтоб нумерация обновлялась
                createMovieList(films, parent);
            });
        });
    };
    createMovieList(movieDB.movies, moviesList);
});










