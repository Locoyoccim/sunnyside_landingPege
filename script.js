(function(){
    let hamburguer = document.getElementsByClassName('hamburguer')[0];
    let navbar = document.getElementsByClassName('navbar')[0];
    let creative = document.querySelector('.creative');
    

    hamburguer.addEventListener('click', () => {
        navbar.classList.toggle('open');
    })
    window.addEventListener('scroll', () => {
        navbar.classList.remove('open');  
    })

    setTimeout(() => {
        creative.classList.add('carga')
    },500)

    /*Observador*/
    const egg_img = document.querySelector('.egg_container');
    const standImg = document.querySelector('.stand_img_container')
    const cereza =document.querySelector('.cereza')
    const orange =document.querySelector('.orange')
    function cargaImagen(entries, observador) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }
    
    const observador = new IntersectionObserver(cargaImagen, {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: 0.40
    });
    
    observador.observe(egg_img);
    observador.observe(standImg);
    observador.observe(cereza);
    observador.observe(orange);
    


    
}())