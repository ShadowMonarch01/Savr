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

    const Array_of_data = [
        {
            cl1:"Benefits",
            cl2:"",
            cl3:""
        },
        {
            cl1:"Android APK",
            cl2:"✓",
            cl3:"✓"
        },
        {
            cl1:"Android bundle",
            cl2:"✓",
            cl3:"✓"
        },
        {
            cl1:"IOS IPA",
            cl2:"✓",
            cl3:"✓"
        },
        {
            cl1:"Total projects",
            cl2:"10",
            cl3:"1"
        },
        {
            cl1:"Daily Stats",
            cl2:"✕",
            cl3:"✓"
        },
        {
            cl1:"Remote Push Notifications",
            cl2:"✕",
            cl3:"✓"
        },
        {
            cl1:"Remote Campaings",
            cl2:"✕",
            cl3:"✓"
        },
    ]

    const output = document.getElementById('add_to_me');

    for(let i = 0; i < Array_of_data.length; i++){

        output.innerHTML += `<div class="table-data" id="the-price"> 
                            <p>${Array_of_data[i].cl1}<p/>  
                            <p class="ser-avabe">${Array_of_data[i].cl2}<p/> 
                            <p class="ser-avabe">${Array_of_data[i].cl3}<p/> 
                            </div>`
    }
})
