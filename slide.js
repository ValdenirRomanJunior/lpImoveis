
        const btns= document.querySelectorAll('.nav-btn');
        const slides =document.querySelectorAll('.video-slider');
        const conteudos = document.querySelectorAll('.conteudo');

        var sliderNav = function(index){
            btns.forEach((btn) => {
                btn.classList.remove('active');
            });
            slides.forEach((slide) => {
                slide.classList.remove('active');
            });

            conteudos.forEach((conteudo) => {
                conteudo.classList.remove('active');
            });

            btns[index].classList.add('active');
            slides[index].classList.add('active');
            conteudos[index].classList.add('active');
        }

        btns.forEach((btn,i) => {
            btn.addEventListener('click', () => {
                sliderNav(i);
            })
        })
