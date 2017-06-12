# MyRSSFeedReader

>Server (nodejs) => node server.js to start the server

>Client (reactjs, redux) => npm start to start the client

>>src
>>>index.js
>>>localStorage.js

>>>actions : contains all actions

>>>api : contains API calls to server

>>>containers : contains components/containers 

>>>css : contains all css code

>>>reducers : contains all reducers

On load, the application loads all News from server and orders them by most recent
The menu allows you to load news for specific categories
The tab "My Feed" allows you to check your favorite categories in order to display them all at once

Local storage saves your preferences so they stay checked and visible when you come back to your feed.

There's still one bug : when the preferences are saved and you want to uncheck a preference you had before, it won't uncheck.
(the preferences will still be updated, as will the newsfeed, but the checkbox itself won't uncheck, unless you leave the page and come back.)
I suspect it might be because I should've created a whole component for the checkbox in order to save its 'checked/unchecked' property in the state.
The checkbox needs to be controlled, but it's uncontrolled for now.


Also I just noticed my node_modules folder in the client won't upload to git, so I'm trying to work on this issue, as the project my not compile without it.
