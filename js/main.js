document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('headerToggle');
    const navMenu = document.getElementById('headerNav');
    const menuItems = navMenu.querySelectorAll('.nav-list__item a');


    toggleButton.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Закрытие меню при клике на вкладки меню
    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Закрытие меню при клике вне его области
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnToggleButton = toggleButton.contains(event.target);
        if (!isClickInsideMenu && !isClickOnToggleButton) {
            navMenu.classList.remove('active');
        }
    });

    // Закрытие меню при скролле страницы
    window.addEventListener('scroll', function() {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });



});

   // переключение цвета клавиш при наведении
document.addEventListener('DOMContentLoaded', function() {
    const btn1 = document.querySelector('.intro_btn1');
    const btn2 = document.querySelector('.intro_btn2');

    btn1.addEventListener('mouseover', function() {
        btn1.style.backgroundColor = '#9a1414';
        btn1.style.color = '#ffffff';
        btn2.style.backgroundColor = '#ffffff';
        btn2.style.color = '#000000';
    });

    btn2.addEventListener('mouseover', function() {
        btn1.style.backgroundColor = '#ffffff';
        btn1.style.color = '#000000';
        btn2.style.backgroundColor = '#9a1414';
        btn2.style.color = '#ffffff';
    });

    btn2.addEventListener('mouseout', function() {
        btn1.style.backgroundColor = '#9a1414';
        btn1.style.color = '#ffffff';
        btn2.style.backgroundColor = '#ffffff';
        btn2.style.color = '#000000';
    });

});


// карусель reviews
document.addEventListener('DOMContentLoaded', function() {
    const reviews = document.querySelectorAll('.review');
    let currentIndex = 0;

    function showReview(index) {
        reviews.forEach(review => review.classList.remove('active'));
        reviews[index].classList.add('active');
    }

    function prevReview() {
        if (currentIndex === 0) {
            currentIndex = reviews.length - 1;
        } else {
            currentIndex--;
        }
        showReview(currentIndex);
    }

    function nextReview() {
        if (currentIndex === reviews.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        showReview(currentIndex);
    }

    document.getElementById('prevButton').addEventListener('click', prevReview);
    document.getElementById('nextButton').addEventListener('click', nextReview);

    // Показываем первый отзыв при загрузке страницы
    showReview(currentIndex);
});




// redirect onclick function
function redirectToPage(url) {
    window.location.href = url;
}

