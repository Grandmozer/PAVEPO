"use script"

document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('form');
    const btn =document.getElementById('btn');

    form.addEventListener('submit', formSend);
    
    async function formSend(e){
        e.preventDefault();
        
        let error = formValidate(form);
        
        let formData = new FormData(form);
        
        
        if(error === 0){
            // form.classList.add('_sending');
            let response = await fetch('https://script.google.com/macros/s/AKfycbzCqX6jdPynMhWl5ICVNSo5RXIwmF1FPospocdUUfKGY_6BQLNtoo4LMoLg_Gic3ciSmA/exec',{
                method: 'Post',
                body: formData,
            });
            if(response.ok){
                let result = await response.json();
                console.log(result.message);
                form.reset();
                // popUp.classList.add('open');
                // form.classList.remove('._sending');
            }
            // else{
            //     alert("Ошибка");
            //     form.classList.remove('._sending');
            // }
        }else{
            alert('Заполните обязательные поля')
        }
    }
    function formValidate(form){
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++){
            const input = formReq[index];
            formRemoveError(input);

            if(input.classList.contains('email')){
                if(emailTest(input)){
                    formAddError(input);
                    error++;
                }
            // }else if(input.getAttribute("type") === "checkbox" && input.checked === false){
            //     formAddError(input);
            //     error++;
            }else{
                if (input.value === ''){
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }
    function formAddError(input){
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input){
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
    // Функция теста email
    function emailTest(input){
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
});
