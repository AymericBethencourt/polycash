import $ from 'jquery';

// Pay creators on youtube
$(document).ready(function () {
  setInterval(() => {
    console.log('GO');

    if (window.location.href.indexOf('twitter') >= 0) {
      $('article').each(function (index) {
        // console.log(index + ': ' + $(this).text());
        if ($(this).find('a.polycash-tip').length === 0) {
          let username = encodeURI(
            $(this).find("span:contains('@')").eq(0).text()
          );
          if (username) username = username.replace('@', '');

          $(this)
            .append(`<a class="polycash-tip" href="https://polycash.net/buy?twitter=${username}&currency=MATIC&amount=0.1&title=Twitter%20Tip&description=Support%20this%20user%20with%20a%20tip&image=https://hub.textile.io/thread/bafkv4t2uqgblrc2gsgjrgc7gg2hthcu5jhnedx46gfpjj3axe6ahtuy/buckets/bafzbeig3vsanyp6xhzyduubyqh3zas4qapbc7hv75lxsngwrxxlnvfgtli/twitter2.png" target="_blank" style="color: #6e767d;
          position: absolute;
          bottom: 13px;
          right: 30px;
          width: 24px;
          height: 24px;
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKnSURBVHgBtVVfUtpgEN/dAC8dR71BPIF4AuEE1hPAAWoI04IP/iFo6UzNdMxAH/qIJ6g9gXiC4gmkJ2hmfCqQb7sbRKUVTJjxN8Mkm2+//X27328XhCXh1I4rDPwWEfJirgFwnxn7I7Ka3z57g6kfQkq4+55tOLqSV5uZe0hwA4ZDRtqUYIUJGXrts5Om+tOSwcFEptjxPxYNQw+RVjtnp7uE1pZkciE/z6kfN1Jn4Hw47AJhaYjWhpahUm+cM5jy5NRxuLKc/MKpHQaAWBlztJVJGvz+9CWpeaDB3f2DgmHjit1lY36pz5Cy1/qkUcYzuaiUISonJhiPx3myENBEF2pHhm0JLuWHm47fCp76BoEXOvXDH8C4k5iAiPNa0cD/1FfbGuUuTdZUEPncqR9VWO7CGt1VgyAI4w3MAylTKfElM1O80XXdtekp2/7Jll62rF5LNuUou/L9cQeqX5g4A2bTRxHd2Hqjuu9Nv3/90tL33l79aJWQ7ccdtC0y7icm0EBSihCJGlMCsW/lYT8eAmPt79WOyoCclxsrp+oDqXNVSlGYalzsJgNc6rsB3m37p56qTXx0faCSTd3JTu3AA4yzGBBwFYaZ3jALdo4gFNmWhNaVtVB6pahyTk2g0BLcn9L+d00CXv5BqzqdR6jOMqB6TwdUUrx7f1AgsjalK9Zl8A1UuqquGSe5KI7TfiWgEix2YWksCvTCYAnEMtUuRDDXz4YH3JZu7YrO12ViBpASkwzYNNt+y5vnJHOlK647NLzbeBgFCZGZH3S2iRQmt/Jbvj/YmrlM0uZ9N6cj0CaSstmwAPJHU0KLrkRNxXkkcwk6/mkXXoDreoHM/Z9Px8fzBNKZknoDUsJANNmO/zfcDMEiFSUCWreLCAaI2G2ftZbS+Uv4C8MsQdqRhYKAAAAAAElFTkSuQmCC');" />`);
        }
      });
    }

    if (window.location.href.indexOf('facebook') >= 0) {
      $('div[data-visualcompletion="ignore-late-mutation"]').each(function (
        index
      ) {
        if ($(this).find('a.polycash-tip').length === 0) {
          let username = encodeURI($(this).find('h4').eq(0).text());
          $(this).css('position', 'relative');
          $(this)
            .append(`<a class="polycash-tip" href="https://polycash.net/buy?facebook=${username}&currency=MATIC&amount=0.1&title=Facebook%20Tip&description=Support%20this%20user%20with%20a%20tip&image=https://hub.textile.io/thread/bafkv4t2uqgblrc2gsgjrgc7gg2hthcu5jhnedx46gfpjj3axe6ahtuy/buckets/bafzbeig3vsanyp6xhzyduubyqh3zas4qapbc7hv75lxsngwrxxlnvfgtli/facebook2.png" target="_blank" style="color: #6e767d;
          position: absolute;
          bottom: 13px;
          right: 30px;
          width: 24px;
          height: 24px;
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKnSURBVHgBtVVfUtpgEN/dAC8dR71BPIF4AuEE1hPAAWoI04IP/iFo6UzNdMxAH/qIJ6g9gXiC4gmkJ2hmfCqQb7sbRKUVTJjxN8Mkm2+//X27328XhCXh1I4rDPwWEfJirgFwnxn7I7Ka3z57g6kfQkq4+55tOLqSV5uZe0hwA4ZDRtqUYIUJGXrts5Om+tOSwcFEptjxPxYNQw+RVjtnp7uE1pZkciE/z6kfN1Jn4Hw47AJhaYjWhpahUm+cM5jy5NRxuLKc/MKpHQaAWBlztJVJGvz+9CWpeaDB3f2DgmHjit1lY36pz5Cy1/qkUcYzuaiUISonJhiPx3myENBEF2pHhm0JLuWHm47fCp76BoEXOvXDH8C4k5iAiPNa0cD/1FfbGuUuTdZUEPncqR9VWO7CGt1VgyAI4w3MAylTKfElM1O80XXdtekp2/7Jll62rF5LNuUou/L9cQeqX5g4A2bTRxHd2Hqjuu9Nv3/90tL33l79aJWQ7ccdtC0y7icm0EBSihCJGlMCsW/lYT8eAmPt79WOyoCclxsrp+oDqXNVSlGYalzsJgNc6rsB3m37p56qTXx0faCSTd3JTu3AA4yzGBBwFYaZ3jALdo4gFNmWhNaVtVB6pahyTk2g0BLcn9L+d00CXv5BqzqdR6jOMqB6TwdUUrx7f1AgsjalK9Zl8A1UuqquGSe5KI7TfiWgEix2YWksCvTCYAnEMtUuRDDXz4YH3JZu7YrO12ViBpASkwzYNNt+y5vnJHOlK647NLzbeBgFCZGZH3S2iRQmt/Jbvj/YmrlM0uZ9N6cj0CaSstmwAPJHU0KLrkRNxXkkcwk6/mkXXoDreoHM/Z9Px8fzBNKZknoDUsJANNmO/zfcDMEiFSUCWreLCAaI2G2ftZbS+Uv4C8MsQdqRhYKAAAAAAElFTkSuQmCC');" />`);
        }
      });
    }

    if (window.location.href.indexOf('youtube') >= 0) {
      $('ytd-channel-name').each(function (index) {
        if ($(this).find('a.polycash-tip').length === 0) {
          let username = encodeURI($(this).find('yt-formatted-string').eq(0).text());
          $(this).css('position', 'relative');
          $(this)
            .append(`<a class="polycash-tip" href="https://polycash.net/buy?youtube=${username}&currency=MATIC&amount=0.1&title=Youtube%20Tip&description=Support%20this%20user%20with%20a%20tip&image=https://hub.textile.io/thread/bafkv4t2uqgblrc2gsgjrgc7gg2hthcu5jhnedx46gfpjj3axe6ahtuy/buckets/bafzbeig3vsanyp6xhzyduubyqh3zas4qapbc7hv75lxsngwrxxlnvfgtli/youtube2.png" target="_blank" style="color: #6e767d;
          position: absolute;
          bottom: -10px;
          right: -40px;
          width: 24px;
          height: 24px;
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKnSURBVHgBtVVfUtpgEN/dAC8dR71BPIF4AuEE1hPAAWoI04IP/iFo6UzNdMxAH/qIJ6g9gXiC4gmkJ2hmfCqQb7sbRKUVTJjxN8Mkm2+//X27328XhCXh1I4rDPwWEfJirgFwnxn7I7Ka3z57g6kfQkq4+55tOLqSV5uZe0hwA4ZDRtqUYIUJGXrts5Om+tOSwcFEptjxPxYNQw+RVjtnp7uE1pZkciE/z6kfN1Jn4Hw47AJhaYjWhpahUm+cM5jy5NRxuLKc/MKpHQaAWBlztJVJGvz+9CWpeaDB3f2DgmHjit1lY36pz5Cy1/qkUcYzuaiUISonJhiPx3myENBEF2pHhm0JLuWHm47fCp76BoEXOvXDH8C4k5iAiPNa0cD/1FfbGuUuTdZUEPncqR9VWO7CGt1VgyAI4w3MAylTKfElM1O80XXdtekp2/7Jll62rF5LNuUou/L9cQeqX5g4A2bTRxHd2Hqjuu9Nv3/90tL33l79aJWQ7ccdtC0y7icm0EBSihCJGlMCsW/lYT8eAmPt79WOyoCclxsrp+oDqXNVSlGYalzsJgNc6rsB3m37p56qTXx0faCSTd3JTu3AA4yzGBBwFYaZ3jALdo4gFNmWhNaVtVB6pahyTk2g0BLcn9L+d00CXv5BqzqdR6jOMqB6TwdUUrx7f1AgsjalK9Zl8A1UuqquGSe5KI7TfiWgEix2YWksCvTCYAnEMtUuRDDXz4YH3JZu7YrO12ViBpASkwzYNNt+y5vnJHOlK647NLzbeBgFCZGZH3S2iRQmt/Jbvj/YmrlM0uZ9N6cj0CaSstmwAPJHU0KLrkRNxXkkcwk6/mkXXoDreoHM/Z9Px8fzBNKZknoDUsJANNmO/zfcDMEiFSUCWreLCAaI2G2ftZbS+Uv4C8MsQdqRhYKAAAAAAElFTkSuQmCC');" />`);
        }
      });
    }

  }, 1000);
});
