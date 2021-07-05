import $ from 'jquery';
import slugify from 'slugify';

// Pay creators on youtube
$(document).ready(function () {
  setInterval(() => {
    console.log('GO');

    $('article').each(function (index) {
      console.log(index + ': ' + $(this).text());
      $(this).append(`<a class="polycash-tip" href="https://polycash.net/buy?twitter=user" style="color: #6e767d;">Tip</button>`);
    });

    // $('div[role="menuitem"]')
  }, 3000)

});

