#### [talkE](https://talke-1d539.firebaseapp.com/) is a prototype chat application written in AngularJS, utilizing Google Firebase for the database, and featuring a fun and simple 80's retro theme.
<br>



## Explanation

The overall goal of talkE was to create a chat client that utilized three-way binding, which is something I was unfamiliar with. Fortunately, Angular makes this incredibly intuitive. Unfortunately, Angular isn't the easiest language to work with.

## Problems

Angular is a beast to tame, and it doesn't help that it's challenging to nail down consistent and accurate information on Angular. There was a lot of trial and error involved in this project. This was my first experience using Firebase. Learning how to manage a database (even on such a small scale) was a bit of a challenge.

I struggled the most with linking the messages with the appropriate rooms while storing the messages outside of the rooms as [suggested](https://www.airpair.com/firebase/posts/structuring-your-firebase-data).

## Solutions

The short version of how I resolved this, was by linking the `roomId` in Firebase with a `roomId` assigned to each message in my controller. Basically, every message was sent to the database as an object assigned and organized by each 'roomId'. As messages were injected into Angular, I pulled and sorted the data by `roomId`.

## Results

For me, the biggest result is that I'm confident enough to use Angular in a project. At this point I feel confident enough that I could build the front-end equivalent of a small online forum with Angular including all the standard features (Admins, logins, avatars, etc...).

## Conclusion

To be honest, I really disliked Angular at the start. The more I used it, the more I realized the power of Angular in developing a SPA. The two-way (or in this case three-way) binding alone, is an amazing feature. I also believe that modularity is a big part of the future for technology. Angular works very well when built modularly, and that feature is something I hope that I can better learn to use in all future projects.
