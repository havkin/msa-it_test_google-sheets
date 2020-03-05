const submitBtn = document.querySelector('.js-submit');
submitBtn.addEventListener('click', function () {

   const title = document.querySelector('.js-title').value;
   const comment = document.querySelector('.js-comment').value;

   const params = `?p1=${title}&p2=${comment}`;

   const url = "https://script.google.com/macros/s/AKfycbxIXj8iv8_3kbYhr0nsOjwZ1ev3hPOb-ZgWFd-tkv0WsYStO9g/exec";


   fetch(url + params, {
      mode: 'no-cors',
   });
});