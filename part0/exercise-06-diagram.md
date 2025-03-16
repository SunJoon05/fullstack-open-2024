# Diagrama de secuencia crear una nueva nota(SPA)

```mermaid
sequenceDiagram

    participant Browser
    participant Server
    participant User

    User->>Browser: Write note
    User->>Browser: Clik save
    Note right of User: Write a note and save it

    Browser->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Server->>Browser: Status Code 201 CREATED
    Note right of Server: The server saves the note

    Note right to Browser: The Browser update the notes list
```
