// Menu mobile
let nav_control = document.getElementById("nav-control");
let menu_links = document.querySelectorAll(".lytbox-navigation ul li a");

menu_links.forEach(function(item, idx){
    item.addEventListener("click", function(e) {
        //e.preventDefault();
        nav_control.click(); 
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío normal del formulario
        
        // Capturar los datos del formulario
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            if(key === 'g-recaptcha-response'){
                data['gRecaptchaResponse'] = value;
            }else{
                data[key] = value;
            }
        });

        // Enviar los datos a la API externa
        fetch('https://web.api.recomotor.com/vinaros/contacto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            // Manejar la respuesta de la API
            console.log('Success:', result);
        })
        .catch(error => {
            // Manejar cualquier error que ocurra
            console.error('Error:', error);
        });
    });
});