Node.js-vs-Vert.x
=================

A benchmark competition between Node.js &amp; Vert.x


Apache Bench - Concurrent Request Test
-----------------
### What to test
This test is intended to test how many concurrent request can both handle.
<br/> 

Both .js file will return "Hello" immediately after receiving the request
and then return "World" after exactly 1 second.

### Expected test result
Ideally, we would expect, for an async library like node.js & vert.x, the time to complete all requests to be around 1 second.

<br/> 
### Command used to run the servers
```
node node.js
vertx run vert.js
```

<br/> 
### Command used to test (Might need to try a few times.)
```
ab -rS -n 1000 -c 1000 http://127.0.0.1:2000/
```

### Result
<br/>
I've tested both script for over 10 times. The result is surprising.

#### Node.js
On a 2013 retina macbook pro, time to complete 1000 concurrent requests on a node.js server is averaging 2.038 second with 80% of the test results (8 out of 10) between 1.000 to 1.500 second.

#### Vert.js
Vert.x claimed to be much faster than node.js.
On the contrary, time to complete 1000 concurrent request on a vert.x server is averaging 12.656 second with 60% of the test results over 14.000 second.

#### Thoughts
Yes, Vert.x is not not your grandpa's node, it's your while(true) { System.out.println("grandpa's "); } Vert.x.

### To be continued (with cluster & multiple verticles) 