# Diagrama de secuencia pagina notas (SPA)

```mermaid
sequenceDiagram

    participant Browser
    participant Server
    participant User

    User->>Browser: User acceses notes

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    Server->>Browser: Status Code 200 OK
    Note right Browser: The Browser gets (HTML) code

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    Server->>Browser: Status Code 200 OK
    Note right Browser: The Browser gets (CSS) code

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    Server->>Browser: Status Code 200 OK
    Note right Browser: The Browser gets (JS) code

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    Server->>Browser: Status Code 200 OK
    Note right Browser: The Browser gets (JSON) and displays the information
```
