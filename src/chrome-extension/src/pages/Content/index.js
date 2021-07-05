import $ from 'jquery';
import slugify from 'slugify';

// Pay creators on youtube
$(document).ready(function () {
  setInterval(() => {
    console.log('GO');

    $('article').each(function (index) {
      console.log(index + ': ' + $(this).text());
      if($(this).find('a.polycash-tip').length === 0) {
        let username = $(this).find("span:contains('@')").text();
        if(username) username = username.replace('@', '');

        $(this).append(`<a class="polycash-tip" href="https://polycash.net/buy?username=${username}" target="_blank" style="color: #6e767d;
        position: absolute;
        bottom: 13px;
        right: 30px;
        width: 24px;
        height: 24px;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKnSURBVHgBtVVfUtpgEN/dAC8dR71BPIF4AuEE1hPAAWoI04IP/iFo6UzNdMxAH/qIJ6g9gXiC4gmkJ2hmfCqQb7sbRKUVTJjxN8Mkm2+//X27328XhCXh1I4rDPwWEfJirgFwnxn7I7Ka3z57g6kfQkq4+55tOLqSV5uZe0hwA4ZDRtqUYIUJGXrts5Om+tOSwcFEptjxPxYNQw+RVjtnp7uE1pZkciE/z6kfN1Jn4Hw47AJhaYjWhpahUm+cM5jy5NRxuLKc/MKpHQaAWBlztJVJGvz+9CWpeaDB3f2DgmHjit1lY36pz5Cy1/qkUcYzuaiUISonJhiPx3myENBEF2pHhm0JLuWHm47fCp76BoEXOvXDH8C4k5iAiPNa0cD/1FfbGuUuTdZUEPncqR9VWO7CGt1VgyAI4w3MAylTKfElM1O80XXdtekp2/7Jll62rF5LNuUou/L9cQeqX5g4A2bTRxHd2Hqjuu9Nv3/90tL33l79aJWQ7ccdtC0y7icm0EBSihCJGlMCsW/lYT8eAmPt79WOyoCclxsrp+oDqXNVSlGYalzsJgNc6rsB3m37p56qTXx0faCSTd3JTu3AA4yzGBBwFYaZ3jALdo4gFNmWhNaVtVB6pahyTk2g0BLcn9L+d00CXv5BqzqdR6jOMqB6TwdUUrx7f1AgsjalK9Zl8A1UuqquGSe5KI7TfiWgEix2YWksCvTCYAnEMtUuRDDXz4YH3JZu7YrO12ViBpASkwzYNNt+y5vnJHOlK647NLzbeBgFCZGZH3S2iRQmt/Jbvj/YmrlM0uZ9N6cj0CaSstmwAPJHU0KLrkRNxXkkcwk6/mkXXoDreoHM/Z9Px8fzBNKZknoDUsJANNmO/zfcDMEiFSUCWreLCAaI2G2ftZbS+Uv4C8MsQdqRhYKAAAAAAElFTkSuQmCC');" />`);
      }
    });

    // $('div[role="menuitem"]')
  }, 1000)

});

