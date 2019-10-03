# How HTTP Request is Served
**The steps are listed below for resolving request:-**


When we enter the url and hit enter the browser convert that url into particular **ipv4** address by using **DNS**(Domain Name server) resolver.

* After resolving into ipv4 address.Now browser try to establish the **TCP**(Transfer Control Protocol) connection.

* Once the connection is established we send the request it can be **get,post,put or delete**.

* This request composed of three parts:-
  
	1. Request line- HTTP method /resource location/protocol version.
	```
	Get /HTTP/1.1

	Post /HTTP/1.1 
	```
	2. Request header-It consists of key value pair of Host and connection
	```
		HOST:xyz.com
		CONNECTION:close
	```
	3. Request body-This is not for get request.This contains the parameter which is passed while raising request.

* Once the request is served the server sends back the response with the status code and the message.
		




