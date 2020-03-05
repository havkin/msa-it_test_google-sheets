const submitBtn = document.querySelector('.js-submit');
submitBtn.addEventListener('click', function () {

   const titleField = document.querySelector('.js-title');
   const commentField = document.querySelector('.js-comment');

   const params = `?p1=${titleField.value}&p2=${commentField.value}`;

   const url = "https://script.google.com/macros/s/AKfycbxIXj8iv8_3kbYhr0nsOjwZ1ev3hPOb-ZgWFd-tkv0WsYStO9g/exec";


   fetch(url + params, {
      mode: 'no-cors',
   });

   titleField.value = '';
   commentField.value = '';
});