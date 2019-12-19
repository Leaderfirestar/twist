Students: Eric Webb, Jon Martin, Shea Clark, Wesley Elliot, Alex Windhorst

The main learning objective of this project was to build and solidify our knowledge of how to use express. Everything from MVC to Routing and pulling database info into our project.

I contributed quite a bit to the project. I made the initial html files and styled them, did the routes, set up the initial models, set up the file structure of the views, and did the auth.js and room.js controllers. In essence, I'm the reason we can navigate the project from the browser, and the reason why we cna log in. I also set up the edit controllers for Speakers, Rooms, Blocks, and Attendees. It's not perfect, but I was under a major time constraint. On the Add-Room, I implemented some form validation server-side simply to prove that it could be done, but didn't focus on it much elsewhere. I was more concerned with making the project run.

There were several challenges that this project presented. The Er-Diagram was the biggest waste of our time. It was heavily focused on by our professors, but we hadn't even decided at that point if we were using a sql back end or not. We didnt, and the diagram since has plagued or project with invalid data types and wrong names. How did we navigate that? We did our best.

Another issue we had was that nobody had any idea how to pull from the database, except for Jon and I who had a little bit of expreience with it from Hack-K-State 2019. So Jon and I worked through this by Staying up and making sure we got our for loops straight, and teaching ourselves how to populate forms.

Another issue we encountered was with using the controllers. Initially, we had no idea how to make them work properly. Jon and I each tackled the controllers, and learned how the exports worked and how we could handle the routes through them. Once we had it figured out, our sailing got a little bit smoother.

In essence, our problems came from lack of experience. Our problems were rampant, but we were able to use previous projects and ask our professors, and for the most part we got through it. This site isn't completely functional, but considering how much we learned in the process, I'm not even mad. I'm a little disappointed in myself for not figuring out some of the problems we had, but very proud with how far we got it.

Speaking of incomplete and unimplemented features, we have some: Our edit speaker isn't 100%, as it can't modify topic information, as I couldnt figure out how to pass the topic_id. None of our deletes work. By that, I mean we didn't implement anything. I probably could have gotten them to work if we had more time, but we would have had to check if dependencies were in use before letting the user delete, and that was going to take time to figure out. Our Schedule doesn't get displayed anywhere. We Have sessions able to be created, but we don't have a page that displays them in a format that can be printed. Once again, if we had more time, that could have been implemented. Our edit session isn't implemented. With more time, I could have, but because of Jons availability and mine conflicting, we couldn't collaborate on it like we could for the previous things we had done, and we didn't end up finishing it.

Assuming we had to start this over, we would completely ignore the er diagram until we started making forms and selected a database type. We would choose better names for our stored data, and keep them consistent. We would design it better too, because some aspects were designed for a sql db that ended up hindering us later. Maybe have more controllers, as a couple fo them got pretty full. Maybe have a couple more router files, as the admin.js got really full. I appreciated the challenge, but this project was tough with our lack of experience.

https://twist-final-2019.herokuapp.com
Live site
