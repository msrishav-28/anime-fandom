# API Documentation (OpenAPI 3.0)

This document outlines the API specification for the Neuro-Archive project. We adhere to the OpenAPI 3.0 standard.

## Overview

- **Base URL:** `/api`
- **Version:** v1
- **Formats:** JSON

## Authentication

All secured endpoints require a JWT token in the `Cookie` header (managed by NextAuth.js) or `Authorization: Bearer <token>` for programmatic access.

## OpenAPI Specification (Snippet)

For the full interactive documentation, successful build will generate a Swagger UI at `/api/docs`.

```yaml
openapi: 3.0.0
info:
  title: Neuro-Archive API
  description: API for the immersive gamified anime wiki.
  version: 1.0.0
servers:
  - url: https://api.neuroarchive.com/api
    description: Production server
  - url: http://localhost:3000/api
    description: Local development server

components:
  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT
  
  schemas:
    Artifact:
      type: object
      properties:
        _id:
          type: string
          example: "507f1f77bcf86cd799439011"
        slug:
          type: string
          example: "sung-jin-woo"
        title:
          type: string
          example: "Sung Jin-Woo"
        type:
          type: string
          enum: [character, item, location, episode]
        ram_earned:
          type: integer
          example: 50
    
    Error:
      type: object
      properties:
        error:
          type: string
          example: "Invalid input"

paths:
  /wikis/{wiki_slug}/artifacts:
    post:
      summary: Create new artifact (character/item/location)
      security:
        - bearerAuth: []
      tags:
        - Artifacts
      parameters:
        - in: path
          name: wiki_slug
          required: true
          schema:
            type: string
          description: The slug of the wiki (e.g., 'solo-leveling')
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - title
                - type
              properties:
                title:
                  type: string
                  example: "Sung Jin-Woo"
                subtitle:
                  type: string
                  example: "Shadow Monarch"
                type:
                  type: string
                  enum: [character, item, location]
                assets:
                  type: object
                  properties:
                    hero_image:
                      type: string
                      format: uri
      responses:
        '201':
          description: Artifact created successfully
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Artifact'
        '400':
          description: Validation error
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Error'
        '401':
          description: Unauthorized
  
  /wikis/{wiki_slug}/artifacts/{slug}:
    get:
      summary: Get artifact details
      tags:
        - Artifacts
      parameters:
        - in: path
          name: wiki_slug
          required: true
          schema:
            type: string
        - in: path
          name: slug
          required: true
          schema:
            type: string
      responses:
        '200':
          description: Artifact details returned
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Artifact'
```

## Best Practices

1. **Versioning**: Changes that break backward compatibility will require a URL version bump (e.g., `/api/v2`).
2. **Filtering**: Use query parameters for filtering, e.g., `?type=character`.
3. **Common Responses**:
   - `200 OK`: Success (GET, PUT, PATCH)
   - `201 Created`: Success (POST)
   - `204 No Content`: Success (DELETE)
   - `400 Bad Request`: Validation failure
   - `401 Unauthorized`: Missing or invalid token
   - `403 Forbidden`: Token valid but permissions lacking
   - `404 Not Found`: Resource does not exist
   - `500 Internal Server Error`: Generic server error
