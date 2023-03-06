function abrirGaleria() {
    const galeria = document.getElementById('galeria')
    galeria.classList.add('open-page')

    const main = document.getElementById('main')
    main.classList.remove('open-page')

    const select = document.getElementById('button-galeria')
    select.classList.add('selecionado')
    select.addEventListener('click', function() {
        window.scrollTo(0,0)
    })
    const unselect = document.getElementById('button-home')
    unselect.classList.remove('selecionado')
}
function abrirHome() {
    const main = document.getElementById('main')
    main.classList.add('open-page')

    const galeria = document.getElementById('galeria')
    galeria.classList.remove('open-page')

    const select = document.getElementById('button-home')
    select.classList.add('selecionado')
    select.addEventListener('click', function() {
        window.scrollTo(0,0)
    })

    const unselect = document.getElementById('button-galeria')
    unselect.classList.remove('selecionado')
}