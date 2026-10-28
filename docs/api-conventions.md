# FitForge — API Conventions & Protocols

All REST API endpoints in FitForge adhere to the conventions documented below to ensure predictable, secure, and typed client-server communication.

---

## 1. Route Prefixing & Versioning

- All API routes are strictly prefixed with `/api/v1`.
- URL path naming follows kebab-case (e.g., `/api/v1/exercises`, `/api/v1/user-profiles`).
- HTTP verbs are used semantically according to REST specifications.

---

## 2. Standard Success Response Format

All successful responses return JSON wrapped in a predictable container:

```json
{
  "success": true,
  "message": "Resource retrieved successfully",
  "data": { ... },
  "timestamp": "2026-10-29T02:00:00.000Z"
}
```

### TypeScript Interface

```typescript
export interface StandardSuccessResponse<T> {
  success: true;
  message?: string;
  data: T;
  timestamp: string;
}
```

---

## 3. Standard Error Response Format

Errors are captured by the centralized error-handling middleware (`errorHandler.ts`) and serialized into a uniform structure:

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "One or more validation constraints failed.",
    "details": [
      {
        "path": "email",
        "message": "Invalid email address format",
        "code": "invalid_string"
      }
    ],
    "stack": "Error: ... (development only)"
  },
  "timestamp": "2026-10-29T02:00:00.000Z"
}
```

> **Security Rule**: The `stack` property is strictly excluded in production environments (`NODE_ENV === 'production'`) to avoid leaking server internals.

---

## 4. HTTP Status Code Conventions

| Status Code               | Meaning                 | Usage Scenario                                                         |
| :------------------------ | :---------------------- | :--------------------------------------------------------------------- |
| **200 OK**                | Success                 | Standard successful read (`GET`), update (`PUT`/`PATCH`), or process.  |
| **201 Created**           | Resource Created        | Successful resource creation (`POST`).                                 |
| **204 No Content**        | Empty Success           | Successful deletion or state change with no response body.             |
| **400 Bad Request**       | Client Syntax Error     | Malformed JSON, unparseable parameter, or illegal request argument.    |
| **401 Unauthorized**      | Authentication Required | Missing, invalid, or expired authentication token.                     |
| **403 Forbidden**         | Authorization Denied    | Authenticated user lacks permission (Role / Subscription entitlement). |
| **404 Not Found**         | Missing Resource        | Endpoint does not exist or database record cannot be found.            |
| **409 Conflict**          | State Conflict          | Duplicate unique key (e.g. email already registered).                  |
| **422 Unprocessable**     | Validation Failed       | Data failed Zod schema constraints.                                    |
| **429 Too Many Requests** | Rate Limited            | Exceeded permitted request quota in time window.                       |
| **500 Server Error**      | Internal Fault          | Unexpected runtime error caught by server.                             |
| **503 Unavailable**       | Service Degraded        | Critical service dependency (e.g. database) unavailable.               |

---

## 5. Request Validation Rules

Incoming request payloads (`body`), query strings (`query`), and URL parameters (`params`) are validated at the application boundary using **Zod** via `validateRequest` middleware:

```typescript
import { validateRequest } from '../common/middleware/validateRequest.js';
import { z } from 'zod';

const createItemSchema = z.object({
  name: z.string().min(2).max(100),
  category: z.enum(['strength', 'cardio', 'flexibility']),
});

router.post('/', validateRequest({ body: createItemSchema }), controller.create);
```

---

## 6. Pagination & Query Conventions

Endpoints returning collections support standardized pagination query parameters:

| Parameter | Type      | Default     | Description                                        |
| :-------- | :-------- | :---------- | :------------------------------------------------- |
| `page`    | `integer` | `1`         | 1-based page index.                                |
| `limit`   | `integer` | `20`        | Number of items per page (maximum allowed: `100`). |
| `sort`    | `string`  | `createdAt` | Field name to sort results by.                     |
| `order`   | `string`  | `desc`      | Sort direction (`asc` or `desc`).                  |

### Paginated Response Structure

```json
{
  "success": true,
  "data": {
    "items": [ ... ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "totalItems": 142,
      "totalPages": 8,
      "hasNextPage": true,
      "hasPrevPage": false
    }
  },
  "timestamp": "2026-10-29T02:00:00.000Z"
}
```
