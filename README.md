Rock, Paper, Scissor App
=================

This is a simple application for users to play the famous Rock, Paper, Scissors game. The game is implemented with node.js, angularJS, Karma, and Grunt tools.

### Requirements
Below are the tools I used to develop this app:
* AngularJS
* Node.js
* bower
* Karma
* Grunt

### Installation
* download/clone the code into your directory
* run the following command
* <code>
bower install
</code>
* go to http://localhost:3000 to view the app

### Usage

* From the main page, click on one of the images (Rock, Paper, Scissors)
* A modal will appear showing the results after the app makes a selection against you
* 

### Tests

to run javascript unit tests, run the following commands:

* <code>
npm install && grunt test
</code>

* <pre>
zangee3-home-MBP:survey-jasmine zangee3$ grunt karma
Running "karma:unit" (karma) task
INFO [karma]: Karma v0.12.31 server started at http://localhost:8080/
INFO [launcher]: Starting browser PhantomJS
WARN [watcher]: Pattern "/Users/zangee3/Desktop/work/rock-paper-scissor-angular/test/mock/**/*.js" does not match any file.
INFO [PhantomJS 1.9.8 (Mac OS X)]: Connected on socket dhr9VK-F4lQxo6kB_FjU with id 99816719
PhantomJS 1.9.8 (Mac OS X): Executed 9 of 9 SUCCESS (0.003 secs / 0.021 secs)

Done, without errors.


Execution Time (2015-03-10 23:19:25 UTC)
karma:unit  2.9s  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 99%
Total 2.9s
</pre>
