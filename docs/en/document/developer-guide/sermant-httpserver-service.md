# HTTP Server Service

This document explains how to implement HTTP API development within the Sermant plugin.

## Feature Overview

Sermant provides a built-in HTTP Server feature that allows developers to quickly set up services that offer HTTP interfaces through simple configurations and the implementation of related interfaces. This functionality enables external systems to access these interfaces for data interaction and processing. The HTTP Server supports common HTTP methods such as GET, POST, PUT, and DELETE, allowing developers to flexibly design and implement functionalities based on different business needs, such as health check interfaces, monitoring metrics, and service status toggling.

## Development Example

Below is a development example demonstrating how to utilize the HTTP Server feature within the Sermant framework to develop an HTTP API in a plugin:

1. Implement the `HttpRouteHandler` interface and add the `@HttpRouteMapping` annotation to the implementing class to specify routing information. Here’s a specific example:

```java
@HttpRouteMapping(path = "/health", method = HttpMethod.GET)
public class HealthHttpRouteHandler implements HttpRouteHandler {
    private static final int SUCCESS_CODE = 200;

    @Override
    public void handle(HttpRequest request, HttpResponse response) throws Exception {
        // Set response status code
        response.setStatus(SUCCESS_CODE)
                // Set response content type
                .setContentType("application/json;charset=utf-8")
                // Write response body
                .writeBody("{}");
    }
}
```

In this example, we created a `HealthHttpRouteHandler` class that is mapped to the `/{package.plugin.name}/health` path and only accepts GET requests. In the `handle` method, we set the response status code, content type, and body.

2. Enable the HTTP service by configuring the `agent/config/config.properties` file as follows:

  ```propert
  # HTTP server switch
  agent.service.httpserver.enable=true
  ```

3. The API can be accessed via the following URL: `http://localhost:47128/{package.plugin.name}/health`

> Note: `{package.plugin.name}` is the name of the plugin where the current HTTP API resides. For example, if a health check HTTP API is added to the `service-router` plugin, the final request path will be: `http://localhost:47128/service-router/health`

## API & Configuration

### API

The `HttpRequest` interface provides a rich set of methods to obtain detailed information about the request, including the request URI, path, method, content type, IP address, request headers, query parameters, and request body. Some key methods of the `HttpRequest` interface include:

- `getUri()`: Retrieves the URI object of the request.
- `getPath()`: Retrieves the parsed request path.
- `getMethod()`: Retrieves the HTTP method.
- `getContentType()`: Retrieves the request content type.
- `getIp()`: Retrieves the IP address of the request.
- `getFirstHeader(String name)`: Retrieves the first value of the specified request header.
- `getParams()`: Retrieves all query parameters.
- `getBody()`: Retrieves the content of the request body.
- ...

The `HttpResponse` interface is used to construct and send HTTP responses, providing methods to set status codes, response headers, content types, and write response bodies:

- `setStatus(int status)`: Sets the response status code.
- `addHeader(String name, String value)`: Adds a response header.
- `setContentType(String contentType)`: Sets the response content type.
- `writeBody(String str)`: Writes a string as the response body.
- ...

### Configuration

The HTTP Server functionality in Sermant can be configured using the following configuration items:

- `agent.service.httpserver.enable`: HTTP Server switch, default is off;
- `httpserver.type`: Specifies the type of HTTP Server, default is `simple`, using the built-in HTTP Server from JDK;
- `httpserver.port`: Specifies the port number that the HTTP Server listens on, default is `47128`;
- `httpserver.serverCorePoolSize`: Specifies the core thread count of the HTTP Server thread pool, default is the number of CPU cores;
- `httpserver.serverMaxPoolSize`: Specifies the maximum thread count of the HTTP Server thread pool, default is the number of CPU cores.
  
Here is an example configuration:

```properties
# HTTP service switch
agent.service.httpserver.enable=true
# Use the built-in Http Server from JDK
httpserver.type=simple
# Listening port
httpserver.port=8080
# Core thread count for thread pool
httpserver.serverCorePoolSize=10
# Maximum thread count for thread pool
httpserver.serverMaxPoolSize=20
```
