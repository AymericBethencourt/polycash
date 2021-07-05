# polycash.net

DEMO: [polycash.net](https://polycash.net)

Hello, my name is Aymeric and for this hackathon, I decided to compete in the Polygon track on builduing a truly great donation app in the likes of Stripe Payment Links. I also added a few new unique feature to compete in the open track as well. So let's get started.

The app is running live on [polycash.net](https://polycash.net). Right away you can see the care that has been given to the design of the app. Inspired from Stripe, I wanted to make Polycash look really clean and proffesional. Click "Create New Payment Link" and you will see a beautiful form to fill all the data of your product or service. First off let's upload an image. Note that I'm using Textile and Filecoin to upload and store images so this project also qualifies for the Protocol Labs track. Once the image is uploaded, it is immediatly displayed on the form, so you can see what your payment page will look like. Enter a title and description for your product, then set up the price. You can choose among a few tokens like MATIC or miMATIC (More are coming soon). Finally, enter your recipient eth address. That's all! Your link is now ready to use. How easy is that? Note that the link is automatically generated as you fill the form. For instance, if I change my address, you can see that the link changes too. Everything is encoded into the url, even the image, so you can actually change data directly in the url if you want to. You can now give this url to anyone to get paid, let's open it.

Once again, note the pixel-perfect design of the page. Your client can see the image, title, description and price of your product. I also added a dollar equivalent using the CoinMarketCap API so your clients know exactly how much they are paying. Click Pay. Metamask opens. Confirm the payment, and if everything goes well, the page now shows that the payment is successful. You can check the transaction on Metamask to confirm it. I can also check the destination wallet to see that the funds have indeed arrived.

Now, if I want to modify something like the price, I can just change it in the url. If I refresh the page I can the new price. Note also that all the html metas about the payment page have been properly implemented, so if I share my link on twitter, facebook, etc... my product image and title properly appear in the preview. 

That's all, I hope you liked this project. Thank you for watching.

Oh wait, one more thing! Why not go a little further with a new inovative feature. Wouldn't it be great to easily pay or tip anyone on twitter, facebook or youtube? Well, here it is, the polycash chrome extension. Add it to your Chrome by clicking 'Load unpacked extension' and selecting the folder src/chrome-extension/build. The Polycash extension appears in your Chrome. Now let's go on Twitter. 

Next to every tweet, you can now see a new icon showing a hand offering money to illustrate tipping. This icon is injected into twitter by the chrome extension. Now let's say I really like this tweet and want to tip its author, I can click this tip icon and it will open a preconfigured polycash payment link. There I can send 0.1 MATIC to this person. But wait, we don't know the eth address of that user. The Polycash page indeed shows that it has no eth adress for that user. However if you are the owner of that twitter account, you can link one. Click here and the linking page open. To link an eth adress, to your twitter username, you need to create a new tweet that shows your eth address. Then copy the tweet url and enter it in polycash. The server will then fetch the tweet and associate the eth address with your twitter username and save it. It's easy and tamper-proof. I actualy got the idea from the rinkeby faucet that works in a similar fashion.

Now if I refresh the payment page from before, Polycash will automatically fill in the saved eth address, and payment can be made to the author. Any further payments to that author will always get filled with that eth address. I've implemented the same system for facebook and youtube so it is super easy to tip you favorite creators. Youtubers that get their videos demonetized by Youtube can now get paid for those. There are no limit, we could implement it for all social platforms like reddit, 9gag, instagram and so on... making it the ultimate tiping and payment platform!

Ok this time I'm done, I hope you liked this demonstration. See you soon. Bye.


---
Taking part in :

Polygon Best implementation of a donation app
Polygon Open track (Tipping Chrome extension)
Protocol Labs track
Metamask track