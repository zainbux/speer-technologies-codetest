## Speer-Technologies Code-test
Submission Link: https://speer-technologies-codetest.vercel.app/

by: Zain Bux

### First hand issues
The API endpoint provided in the code-test was down and did not work, I checked and tested via postman. 
I emailed clement.shum@speer.io for support but as of now have not received a reply so I went ahead and did as much as I could without an endpoint. I created some dummy data that resembled the structure of the Call Object provided and worked with that, but I could only do so much for example I could not update even tho the logic has been implemented. I also have created the actual api in my APIs folder that does work if the endpoint was running. I was also having some issues with Babel so I created a new react app and used tailwind to style my application.

### Alternate approach
An alternate approach to creating this app could be using Next.js 13+, The reason is that it will run far better and will require less if not, no API aswell for example the routing can be done simply via the Folder structure, this includes the dynamic routing. Taking advantage of the Layout.js file would be ideal too as The nav and header can simply stay in there giving the code further abstraction and simplicity. Also server components can be used in any component that requires data fetching such as the Activity feed, the fetch request can be done directly in the component allowing for super quick load times, further abstraction where the components are less tied together and more modular and finally less code in terms of writting an API.
