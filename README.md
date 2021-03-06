# Realtime Markdown Editor

### What is this?

Type your markdown into the box on the left and immediately see it on the box on the right. If you send a friend a link to a pad URL (other than the home page) you both can edit the document at the same time!

### How to use this?

1. git clone https://github.com/btav/RealtimeMarkdownEditor
2. cd RealtimeMarkdownEditor
3. npm install
4. bower install
5. Run a redis server.
6. node server.js
7. Type anything after the slash in "http://localhost:3000" and just start creating markdown. 

### How was this built?

This website uses the following to work:

 - [Showdown](https://github.com/showdownjs/showdown) - Converts markdown text to beautiful HTML
 - [ShareJS](http://sharejs.org/) - allows for realtime editing of this textbox
 - [Node.js](https://nodejs.org/) - backend framework 
 - [Redis](http://redis.io/) - where we store our markdown documents
 - [Twitter Bootstrap](http://getbootstrap.com/) - makes everything a little prettier
        
