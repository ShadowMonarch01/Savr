document.addEventListener('DOMContentLoaded',()=>{
    const toggleButton = document.getElementsByClassName('toggle_button')[0];

    const nav_button = document.getElementsByClassName('top-btn-wrapper')[0];

    const price_link_pg = document.getElementsByClassName('price-link-pg')[0];
    const price_link_pg1 = document.getElementsByClassName('price-link-pg')[1];

    const v_btn = document.getElementsByClassName('tinactive')[0];

    const x_btn = document.getElementsByClassName('tactive')[0];

    console.log(toggleButton);
    toggleButton.addEventListener('click',()=>{
        console.log('Hi')
        nav_button.classList.toggle('active')
        price_link_pg.classList.toggle('active')
        price_link_pg1.classList.toggle('active')
        v_btn.classList.toggle('active')
        x_btn.classList.toggle('active')
    });
})
