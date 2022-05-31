<h1>IbraSpeaksAPI</h1>

![](https://img.shields.io/twitter/follow/IamAbir82?color=Black&label=Abir%20Bhattacharya&logo=Twitter&logoColor=Blue&style=flat-square)

<img src="src/img.png">
<p>On the Occasion of AC Milan's 26th Serie A title this is a tribute to the man who was a key reason in their success. Zlatan Ibrahimovic, the 40 year old Sweedish Footballer who is often refered to as the Lion is renowned for his acrobatic strikes and volleys. However there is another key aspect to his game. He is often called as an arrogant and egoist footballer, but his PSG Team mate Lucas Moura says, "Zlatan is a very nice guy".</p>
<h3>This API fetches Zlatan's most iconic Quotes randomly when called. Thanks to <a href="https://www.espn.in/football/blog/the-toe-poke/65/post/2962023/zlatan-ibrahimovic-35-best-quotes-as-manchester-united-release-him">ESPN</a> for providing the Quotes.</h3>
<h2>Implementation</h2>
<p>To implement this API, we can curl or fetch the following url</p>

```
ibra-speaks-api.herokuapp.com/
```
<p>Implementation in JavaScript</p>

```
fetch('https://ibra-speaks-api.herokuapp.com/').then(
        (arr)=>{
            arr.json().then(
                (res)=>{
                    console.log(res[0]["quote"]);
                }
            )
        }
    )
```

<h4>This is Repository is created using Node and Express. If you like it do give a star.</h4>
