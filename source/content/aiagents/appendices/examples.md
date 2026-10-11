# Appendix A: Configuration File Examples

{% if build == "slides" %}
<!-- BUILDING THE SLIDES -->

## Theoretical Examples

These examples illustrate the structure and content of various AI configuration files.

---

## AGENTS.md Example

Project instructions and context for AI agents.

---

## .vibe/config Example

Vibe CLI configuration.

---

## CLAUDE.md Example

Claude Code project-specific directives.

---

## .env Example (What NOT to do)

Shows what environment files should look like (and why they should not be committed).

---

## .aiignore Example

AI-specific ignore patterns.

{% else %}
<!-- BUILDING THE PAGES -->

This appendix provides **theoretical examples** of various AI agent configuration files. These are illustrative examples meant to clarify the concepts discussed in the main document. Remember, as requested, these are **theoretical examples only** - we are not including actual configuration files in the repository.

## AGENTS.md - Project Instructions Example

The `AGENTS.md` file provides AI agents with context about your project, coding standards, architectural patterns, and other information they need to generate appropriate outputs. Below is a comprehensive theoretical example showing what such a file might contain.

```markdown
# AGENTS.md - E-Commerce Platform AI Instructions

## Project Overview

**Name**: ShopEase - E-Commerce Platform  
**Version**: 2.1.0  
**Description**: A full-featured e-commerce platform enabling small and medium businesses to sell products online.  
**Primary Language**: Python (Django backend), TypeScript (React frontend)  
**License**: MIT  
**Repository**: https://github.com/acme-corp/shop-ease

## Target Audience

This project serves:
- Small business owners with limited technical expertise
- Customers making online purchases
- Internal team managing the platform

## Development Environment

### Backend
- **Framework**: Django REST Framework 3.14+
- **Python Version**: 3.11+
- **Database**: PostgreSQL 15+
- **Cache**: Redis 7+
- **Message Queue**: Celery with RabbitMQ
- **Search**: Elasticsearch 8+

### Frontend
- **Framework**: React 18+
- **TypeScript**: 5.0+
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS + custom SCSS modules
- **Build Tool**: Vite 4+

### Infrastructure
- **Containerization**: Docker
- **Orchestration**: Kubernetes (production), Docker Compose (development)
- **CI/CD**: GitHub Actions
- **Cloud Provider**: AWS (ECS, RDS, S3, CloudFront)

## Architecture Overview

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         Client Applications                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐          │
│  │ Web Browser  │  │ Mobile App   │  │ Admin Panel  │          │
│  └──────┬────────┘  └──────┬────────┘  └──────┬────────┘          │
└─────────┼────────────────────┼────────────────────┼─────────────┘
          │                    │                    │
          └────────────────────┴────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────┐
│                      API Gateway & Load Balancer                │
│                         (AWS CloudFront + ALB)                  │
└─────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────┐
│                         Backend Services                         │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────┐  │
│  │  Django REST API │  │  Auth Service    │  │ Payment     │  │
│  │  (Main Service)  │  │  (JWT/OAuth2)    │  │ Service     │  │
│  └────────┬──────────┘  └────────┬──────────┘  └──────┬─────┘  │
│           │                      │                   │         │
└───────────┼──────────────────────┼───────────────┼─────────┘
            │                      │                   │
            ▼                      ▼                   ▼
┌─────────────────────────────────────────────────────────────┐
│                         Data Layer                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐      │
│  │ PostgreSQL  │  │   Redis      │  │ Elasticsearch   │      │
│  │ (Primary)   │  │  (Cache)      │  │ (Search)         │      │
│  └─────────────┘  └─────────────┘  └─────────────────┘      │
└─────────────────────────────────────────────────────────────┘
```

### Directory Structure

```
shop-ease/
├── src/
│   ├── backend/
│   │   ├── core/                  # Core Django applications
│   │   │   ├── __init__.py
│   │   │   ├── settings/          # Django settings (split by env)
│   │   │   │   ├── __init__.py
│   │   │   │   ├── base.py        # Base settings
│   │   │   │   ├── development.py
│   │   │   │   ├── staging.py
│   │   │   │   └── production.py
│   │   │   ├── urls.py            # Main URL routing
│   │   │   └── wsgi.py
│   │   │
│   │   ├── apps/                  # Django apps
│   │   │   ├── products/          # Product management
│   │   │   ├── orders/           # Order processing
│   │   │   ├── users/            # User management & auth
│   │   │   ├── payments/         # Payment processing
│   │   │   └── search/           # Search functionality
│   │   │
│   │   ├── manage.py
│   │   └── requirements.txt
│   │
│   └── frontend/
│       ├── public/               # Static assets
│       │   ├── images/
│       │   ├── css/
│       │   └── js/
│       │
│       ├── src/
│       │   ├── assets/            # Processed assets
│       │   ├── components/        # React components
│       │   │   ├── common/
│       │   │   ├── products/
│       │   │   ├── cart/
│       │   │   └── checkout/
│       │   │
│       │   ├── pages/            # Page components
│       │   ├── hooks/             # Custom React hooks
│       │   ├── services/          # API service layer
│       │   ├── stores/            # Redux stores
│       │   ├── types/             # TypeScript types
│       │   ├── utils/             # Utility functions
│       │   └── App.tsx
│       │
│       ├── index.html
│       ├── package.json
│       └── vite.config.ts
│
├── tests/
│   ├── backend/
│   │   ├── unit/
│   │   ├── integration/
│   │   └── e2e/
│   └── frontend/
│       ├── unit/
│       └── integration/
│
├── docs/
│   ├── api/
│   └── user/
│
├── scripts/                      # Deployment and utility scripts
│   ├── deploy/
│   └── db/
│
├── docker/
│   ├── development/
│   └── production/
│
├── .github/
│   └── workflows/
│
├── .dockerignore
├── .gitignore
├── .aiignore                     # AI-specific ignore patterns
├── AGENTS.md                     # This file
├── README.md
├── CONTRIBUTING.md
└── LICENSE
```

## Coding Standards

### Python Standards

**Style Guide**: PEP 8 with the following modifications:
- **Line Length**: 100 characters (instead of 79)
- **Indentation**: 4 spaces (standard)
- **Quotes**: Single quotes for strings, double quotes for strings containing single quotes
- **Imports**: Grouped by standard library, third-party, local (with blank line between groups)

**Type Hints**:
- Use type hints for all function parameters and return values
- Use `from __future__ import annotations` for forward references
- Use `typing` module types (List, Dict, Optional, etc.) for Python < 3.9
- Use built-in types (list, dict, etc.) for Python ≥ 3.9

**Naming Conventions**:
- **Variables**: `snake_case` for variables and functions
- **Classes**: `PascalCase` for class names
- **Constants**: `UPPER_SNAKE_CASE` for module-level constants
- **Private**: `_leading_underscore` for "private" variables
- **Dunder**: `__double_underscore__` for special methods

**Example**:

```python
from typing import List, Dict, Optional, TypedDict
from datetime import datetime


class ProductData(TypedDict):
    id: int
    name: str
    price: float
    description: Optional[str]
    in_stock: bool


def get_products(limit: int = 10, category: Optional[str] = None) -> List[ProductData]:
    """
    Retrieve a list of products from the database.
    
    Args:
        limit: Maximum number of products to return (default: 10)
        category: Optional category filter
        
    Returns:
        List of product dictionaries matching the criteria
    """
    # Implementation would go here
    pass
```

### TypeScript Standards

**Style Guide**: Based on Airbnb TypeScript style guide with modifications:
- **Line Length**: 100 characters
- **Indentation**: 2 spaces
- **Quotes**: Double quotes for strings
- **Semicolons**: Required
- **Trailing Commas**: Required in multi-line objects/arrays

**Type Safety**:
- Use strict mode (`"strict": true` in tsconfig.json)
- Avoid `any` type - use proper types or `unknown`
- Use type aliases for complex types
- Use interfaces for object shapes

**Naming Conventions**:
- **Variables/Functions**: `camelCase`
- **Classes**: `PascalCase`
- **Constants**: `UPPER_SNAKE_CASE`
- **Types/Interfaces**: `PascalCase`
- **Private**: `_leadingUnderscore` for "private" members

**Example**:

```typescript
interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
  inStock: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface ProductFilters {
  limit?: number;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
}

const getProducts = async (
  filters: ProductFilters = {}
): Promise<Product[]> => {
  // Default values
  const { 
    limit = 10, 
    category,
    minPrice,
    maxPrice,
    inStock 
  } = filters;

  // Implementation would go here
  // This is a placeholder - actual implementation would
  // call the API or fetch from a service
  const products: Product[] = [];
  
  return products;
};

export default getProducts;
```

### General Standards

**Error Handling**:
- Use custom exceptions for business errors
- Use HTTP status codes appropriately in APIs
- Include meaningful error messages (without sensitive data)
- Log errors with sufficient context for debugging

**Testing**:
- Follow AAA pattern (Arrange, Act, Assert) in tests
- Use descriptive test names
- Test both happy paths and error cases
- Aim for high test coverage (80%+ for critical paths)

**Documentation**:
- Use Google-style docstrings for Python
- Use JSDoc for TypeScript
- Include type information in docstrings
- Document edge cases and special behaviors

## Common Workflows

### Feature Development

1. **Create Branch**:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/add-product-search
   ```

2. **Implement Feature**:
   - Create necessary files in appropriate directories
   - Follow coding standards
   - Write tests for new functionality
   - Update documentation

3. **Test Locally**:
   - Run unit tests: `pytest` (backend) or `npm test` (frontend)
   - Run integration tests
   - Test manually in development environment

4. **Create Pull Request**:
   - Push branch to remote
   - Open PR with descriptive title and detailed description
   - Link to issue/ticket if applicable
   - Request review from appropriate team members

5. **Address Feedback**:
   - Respond to review comments
   - Make necessary changes
   - Update commit messages with AI attribution if applicable

6. **Merge**:
   - Ensure all tests pass
   - Ensure code review is approved
   - Merge using appropriate strategy (rebase or merge commit)

### Bug Fixes

1. **Reproduce Issue**:
   - Identify steps to reproduce
   - Confirm issue exists in current environment
   - Check for existing reports or fixes

2. **Investigate**:
   - Review relevant code
   - Check logs for error messages
   - Identify root cause

3. **Implement Fix**:
   - Write test that reproduces the issue
   - Implement fix
   - Verify fix resolves the issue

4. **Test**:
   - Run existing tests to ensure no regressions
   - Run new test to verify fix
   - Test manually if needed

5. **Document**:
   - Update changelog
   - Document fix in PR description
   - Note any workarounds or temporary solutions

### Code Review

**Review Criteria**:
- Does the code follow project standards?
- Is the code well-documented?
- Are there appropriate tests?
- Does the code handle errors gracefully?
- Is the code secure (no hardcoded secrets, proper validation)?
- Is the code performant?
- Does the code integrate well with existing code?

**Review Process**:
1. Initial review by assigned reviewer
2. Address comments and push changes
3. Re-review after changes
4. Approval by at least one other team member
5. Final check by PR author before merge

## Important Files and Directories

### Core Files

| File | Purpose | Key Considerations |
|------|---------|---------------------|
| `src/backend/core/settings/` | Django settings | Environment-specific configurations |
| `src/backend/manage.py` | Django management | Entry point for Django commands |
| `src/frontend/src/App.tsx` | Main React component | Root of React application |
| `src/frontend/src/main.tsx` | React entry point | Mounts React app to DOM |
| `package.json` | Frontend dependencies | Version pinning for reproducibility |
| `requirements.txt` | Backend dependencies | Version pinning for reproducibility |

### Configuration Files

| File | Purpose | Environment |
|------|---------|-------------|
| `.env.development` | Local development | Never commit |
| `.env.staging` | Staging environment | Never commit |
| `.env.production` | Production environment | Never commit |
| `.env.example` | Template for new developers | Can commit |
| `docker-compose.yml` | Local development services | Can commit (non-sensitive) |
| `docker-compose.override.yml` | Local overrides | Can commit (usually) |

## API Guidelines

### REST API Design

- Use noun-based URLs (e.g., `/products`, `/orders`)
- Use HTTP methods appropriately (GET, POST, PUT, PATCH, DELETE)
- Use plural nouns for collections
- Use singular nouns for individual resources
- Use query parameters for filtering/sorting
- Use nested resources for relationships (e.g., `/products/{id}/reviews`)

**Example Endpoints**:

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/products` | GET | List all products (with filtering) |
| `/products` | POST | Create a new product |
| `/products/{id}` | GET | Get a specific product |
| `/products/{id}` | PUT | Replace a product (full update) |
| `/products/{id}` | PATCH | Update a product (partial update) |
| `/products/{id}` | DELETE | Delete a product |
| `/products/{id}/reviews` | GET | List reviews for a product |
| `/products/{id}/reviews` | POST | Add a review to a product |

### Request/Response Standards

**Request Headers**:
- `Content-Type: application/json` for JSON requests
- `Authorization: Bearer <token>` for authenticated requests
- `Accept: application/json` for JSON responses
- `X-Request-ID: <uuid>` for request tracing

**Response Format**:

```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 100,
      "total_pages": 5
    }
  },
  "links": {
    "self": "https://api.shop-ease.com/v1/products?page=1",
    "next": "https://api.shop-ease.com/v1/products?page=2",
    "prev": null
  }
}
```

**Error Response Format**:

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Validation failed",
    "details": {
      "name": ["This field is required"],
      "price": ["Must be a positive number"]
    }
  },
  "trace_id": "abc123-xyz456"
}
```

## Database Schema Overview

### Core Tables

| Table | Description | Key Fields |
|-------|-------------|------------|
| `users` | User accounts | id, email, password_hash, first_name, last_name |
| `products` | Product listings | id, name, description, price, stock_quantity |
| `categories` | Product categories | id, name, slug, description |
| `orders` | Customer orders | id, user_id, status, total, created_at |
| `order_items` | Items in orders | id, order_id, product_id, quantity, price |
| `payments` | Payment records | id, order_id, amount, method, status |
| `reviews` | Product reviews | id, product_id, user_id, rating, comment |

### Relationships

- User **has many** Orders
- Order **has many** OrderItems
- Order **has one** Payment
- Product **belongs to** Category
- Product **has many** Reviews
- Review **belongs to** User and Product

## Deployment Information

### Environments

| Environment | URL | Purpose | Access |
|-------------|-----|---------|--------|
| Development | http://localhost:3000 | Local development | All developers |
| Staging | https://staging.shop-ease.com | Pre-production testing | Team members |
| Production | https://shop-ease.com | Live application | Public |

### Deployment Process

1. **Development**: Local development with Docker Compose
2. **Staging**: Automated deployment from `develop` branch
3. **Production**: Manual deployment from `main` branch with tag

**Deployment Commands**:

```bash
# Development
make up          # Start all services
docker compose up -d

# Staging (automated via CI/CD)
# Triggered by push to develop branch

# Production (manual)
make deploy-prod TAG=v1.2.3
```

## External Services

### Integrated Services

| Service | Purpose | Configuration |
|---------|---------|---------------|
| Stripe | Payment processing | STRIPE_SECRET_KEY |
| SendGrid | Email delivery | SENDGRID_API_KEY |
| AWS S3 | File storage | AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY |
| Elasticsearch | Search | ELASTICSEARCH_URL, ELASTICSEARCH_API_KEY |
| Redis | Caching | REDIS_URL |
| PostgreSQL | Database | DATABASE_URL |

**Note**: All service credentials are stored in environment variables and **must never be committed to Git**. Use `.env.example` as a template for local development.

## AI-Specific Instructions

### What AI Agents Should Know

1. **Always follow coding standards** - This is non-negotiable
2. **Write comprehensive tests** - All new functionality should have tests
3. **Document thoroughly** - Code should be self-documenting with clear comments
4. **Handle errors gracefully** - Never expose sensitive information in errors
5. **Validate all inputs** - Assume all user input is malicious
6. **Follow security best practices** - OWASP guidelines, no hardcoded secrets
7. **Consider performance** - Optimize for common cases, handle edge cases
8. **Maintain consistency** - Follow existing patterns in the codebase

### What AI Agents Should NOT Do

1. **Don't commit secrets** - Never include API keys, passwords, or tokens
2. **Don't modify critical files** without explicit instruction (settings, migrations, etc.)
3. **Don't make architectural decisions** - Leave system design to humans
4. **Don't delete data** - Never implement destructive operations
5. **Don't bypass validation** - Always include proper input validation
6. **Don't hardcode values** - Use configuration and environment variables
7. **Don't ignore existing tests** - Ensure new code passes all existing tests
8. **Don't use deprecated patterns** - Follow current best practices

### Example Prompts for Common Tasks

**Creating a new API endpoint**:
```
"Create a Django REST Framework API endpoint for managing product categories. 
The endpoint should support CRUD operations at /api/v1/categories/.
Include proper authentication, validation, and error handling.
Follow the existing patterns in the codebase."
```

**Writing tests**:
```
"Write comprehensive pytest tests for the product service. 
Include tests for:
- Creating a new product
- Retrieving a product by ID
- Updating a product
- Deleting a product
- Listing products with filtering and pagination

Follow the existing test patterns in the tests/backend/unit/ directory."
```

**Adding a new model**:
```
"Add a new Django model called 'Discount' with the following fields:
- code (CharField, max_length=50, unique=True)
- description (TextField, blank=True, null=True)
- discount_type (CharField, choices=['PERCENTAGE', 'FIXED'])
- value (FloatField)
- start_date (DateTimeField)
- end_date (DateTimeField)
- is_active (BooleanField, default=True)
- created_at (DateTimeField, auto_now_add=True)
- updated_at (DateTimeField, auto_now=True)

Create the model, migration, and basic CRUD operations."
```

## Resources

### Documentation
- [Project Documentation](https://docs.shop-ease.com)
- [API Documentation](https://api.shop-ease.com)
- [Developer Guide](https://docs.shop-ease.com/developers)

### Learning Resources
- [Django Documentation](https://docs.djangoproject.com)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook)
- [Python Documentation](https://docs.python.org)

### Support
- Internal Slack channel: `#shop-ease-dev`
- Issue tracker: https://github.com/acme-corp/shop-ease/issues
- Architecture decisions: https://github.com/acme-corp/shop-ease/wiki

---

## .vibe/config - Vibe CLI Configuration Example

The `.vibe/config` file configures the Vibe CLI agent, defining its behavior, capabilities, and limitations. This theoretical example shows what such a configuration might look like for a project.

```json
{
  "$schema": "https://raw.githubusercontent.com/vibe-cli/config/main/schema.json",
  "version": "1.0",
  
  "settings": {
    "model": "gpt-4",
    "max_tokens": 8192,
    "temperature": 0.7,
    "top_p": 0.9,
    "frequency_penalty": 0.1,
    "presence_penalty": 0.1
  },
  
  "context": {
    "include": [
      "src/**/*.py",
      "src/**/*.ts",
      "src/**/*.tsx",
      "tests/**/*.py",
      "AGENTS.md",
      "README.md",
      "package.json",
      "requirements.txt"
    ],
    "exclude": [
      "**/node_modules/**",
      "**/.git/**",
      "**/.env*",
      "**/migrations/**",
      "**/__pycache__/**",
      "**/*.log",
      "**/*.tmp",
      "dist/**",
      "build/**"
    ],
    "max_context_length": 16000,
    "embeddings": {
      "enabled": true,
      "model": "text-embedding-3-small"
    }
  },
  
  "tools": {
    "bash": {
      "enabled": true,
      "allowed_commands": [
        "ls",
        "cd",
        "cat",
        "grep",
        "find",
        "git",
        "docker",
        "make"
      ],
      "blocked_commands": [
        "rm -rf",
        "dd",
        "> /dev/s",
        "chmod 777",
        "wget",
        "curl"
      ],
      "timeout": 30
    },
    
    "git": {
      "enabled": true,
      "allowed_operations": [
        "status",
        "log",
        "show",
        "diff",
        "blame",
        "checkout",
        "branch",
        "add",
        "commit",
        "push",
        "pull"
      ],
      "blocked_operations": [
        "reset --hard",
        "clean -fd",
        "rebase",
        "force push"
      ]
    },
    
    "file": {
      "enabled": true,
      "allowed_operations": [
        "read",
        "write",
        "create",
        "delete"
      ],
      "blocked_paths": [
        ".env*",
        "*.key",
        "*.secret",
        "*.pem",
        "credentials*",
        "config/prod*"
      ],
      "max_file_size": 1024000,
      "max_files_per_operation": 10
    },
    
    "http": {
      "enabled": true,
      "allowed_domains": [
        "api.github.com",
        "raw.githubusercontent.com",
        "pypi.org",
        "npmjs.com"
      ],
      "blocked_domains": [],
      "timeout": 10,
      "max_connections": 5
    },
    
    "python": {
      "enabled": true,
      "version": "3.11",
      "virtual_env": "venv",
      "allowed_packages": [],
      "blocked_packages": [
        "os.system",
        "subprocess.run",
        "pickle",
        "eval",
        "exec"
      ],
      "timeout": 60,
      "memory_limit": "1GB"
    }
  },
  
  "skills": {
    "enabled": true,
    "directories": [
      "~/.vibe/skills",
      "./vibe-skills"
    ],
    "auto_load": [
      "python-developer",
      "django-expert",
      "react-specialist",
      "testing-pro"
    ]
  },
  
  "workflows": {
    "enabled": true,
    "directories": [
      "~/.vibe/workflows",
      "./vibe-workflows"
    ],
    "auto_approve": false,
    "max_steps": 20
  },
  
  "security": {
    "scan_for_secrets": true,
    "block_secrets": true,
    "scan_patterns": [
      "aws_access_key_id",
      "aws_secret_access_key",
      "password",
      "secret",
      "token",
      "api_key",
      "private_key",
      "authorization"
    ],
    "allowed_secrets": []
  },
  
  "logging": {
    "level": "info",
    "output": "stdout",
    "file": ".vibe/vibe.log",
    "max_file_size": "10MB",
    "max_files": 5
  },
  
  "updates": {
    "check_for_updates": true,
    "auto_install": false
  }
}
```

**Key Security Notes**:
- The `blocked_commands`, `blocked_operations`, and `blocked_paths` settings prevent Vibe from performing potentially dangerous actions
- The `security.scan_for_secrets` setting enables automatic scanning for sensitive information
- The `context.exclude` patterns prevent Vibe from accessing sensitive files and directories
- This configuration assumes Vibe is used in a **non-sensitive context** - for sensitive projects, additional restrictions would be needed

---

## CLAUDE.md - Claude Code Project Directives Example

The `CLAUDE.md` file provides Claude Code with project-specific instructions, similar to `AGENTS.md` but tailored for the Claude AI assistant.

```markdown
# CLAUDE.md - E-Commerce Platform Directives

## Project Context

**Project**: ShopEase E-Commerce Platform  
**Primary Language**: Python (Django), TypeScript (React)  
**Framework**: Django REST Framework, React  
**Domain**: E-commerce, online retail  

## Your Role

You are a **Senior Full-Stack Developer** with expertise in:
- Django REST Framework
- React and TypeScript
- PostgreSQL and database optimization
- AWS cloud services
- E-commerce systems
- Payment processing integration

Your primary responsibility is to **assist the development team** in building, maintaining, and improving the ShopEase platform. You should provide **high-quality, production-ready code** that follows all project standards and best practices.

## Code Generation Guidelines

### Always Do

1. **Follow project coding standards** as documented in AGENTS.md
2. **Write comprehensive tests** for all new functionality
3. **Document thoroughly** with clear comments and docstrings
4. **Handle errors gracefully** with appropriate error messages
5. **Validate all inputs** - never trust user input
6. **Follow security best practices** (OWASP guidelines)
7. **Consider performance implications** of your suggestions
8. **Maintain consistency** with existing code patterns
9. **Check for existing implementations** before suggesting new ones
10. **Ask for clarification** if requirements are unclear

### Never Do

1. **Don't commit secrets** - Never include API keys, passwords, or tokens in code
2. **Don't modify critical files** without explicit instruction:
   - `settings/*.py` (Django settings)
   - `docker-compose*.yml` (Docker configurations)
   - `migrations/*` (Database migrations)
   - `.env*` (Environment files)
   - `requirements*.txt` (Dependencies)
   - `package*.json` (Frontend dependencies)

3. **Don't make architectural decisions** - Leave system design to human developers
4. **Don't delete data** - Never implement destructive operations (DELETE, DROP, etc.)
5. **Don't bypass validation** - Always include proper input validation
6. **Don't hardcode values** - Use configuration and environment variables
7. **Don't ignore existing tests** - Ensure new code passes all existing tests
8. **Don't use deprecated patterns** - Follow current best practices
9. **Don't execute arbitrary code** - Be cautious with code execution
10. **Don't access external services** without explicit permission

## Response Format

### For Code Requests

```
## Analysis
[Brief analysis of the problem or requirements]

## Solution
[Clear explanation of the proposed solution]

## Implementation
[Code implementation with comments]

## Testing
[Suggested tests or test approach]

## Notes
[Any important notes, warnings, or considerations]
```

### For Questions

```
## Understanding
[Clarify your understanding of the question]

## Answer
[Direct answer to the question]

## Explanation
[Detailed explanation with reasoning]

## References
[Relevant documentation or resources]
```

### For Debugging

```
## Problem Identification
[What the issue might be]

## Possible Causes
- Cause 1
- Cause 2
- Cause 3

## Debugging Steps
1. Step 1
2. Step 2
3. Step 3

## Recommended Fix
[Code or configuration fix]

## Prevention
[How to prevent this issue in the future]
```

## Domain-Specific Knowledge

### E-Commerce Concepts

Understand these key e-commerce concepts:
- **Product**: An item for sale with price, description, inventory
- **Category**: Grouping of similar products
- **Cart**: Temporary storage of products a user intends to purchase
- **Order**: Completed purchase with payment
- **Payment**: Financial transaction for an order
- **Customer**: User who makes purchases
- **Inventory**: Tracking of product stock levels
- **Shipping**: Delivery of physical products
- **Tax**: Government-imposed fees on sales
- **Discount**: Price reduction for products or orders

### Common Workflows

1. **Product Browsing**: User views products → Filter/Sort → Select product → View details
2. **Add to Cart**: User selects product → Select options → Add to cart → View cart
3. **Checkout**: View cart → Enter shipping info → Enter payment info → Review order → Place order
4. **Order Processing**: Order placed → Payment processed → Inventory updated → Confirmation sent
5. **Returns**: Customer requests return → Approval → Refund processed → Return shipping

### Business Rules

1. **Pricing**:
   - Products have base prices
   - Discounts can be applied at product or order level
   - Taxes are calculated based on customer location
   - Shipping costs vary by destination and method

2. **Inventory**:
   - Track stock levels per product variant
   - Prevent overselling (negative inventory)
   - Alert when stock is low
   - Reserve inventory when added to cart (for logged-in users)

3. **Orders**:
   - Orders have statuses: pending, processing, shipped, delivered, cancelled, returned
   - Order totals include: subtotal + tax + shipping - discounts
   - Order history is immutable (cannot be changed, only cancelled/refunded)

4. **Payments**:
   - Multiple payment methods: credit card, PayPal, etc.
   - Payment statuses: pending, completed, failed, refunded
   - PCI compliance required for credit card handling

## File-Specific Instructions

### Backend (Django)

**Models**:
- Follow Django best practices
- Use appropriate field types
- Include proper validators
- Implement `__str__` methods
- Use `get_absolute_url` for web models
- Include `Meta` classes with ordering and verbose names

**Views**:
- Use Django REST Framework
- Follow DRY (Don't Repeat Yourself) principle
- Use class-based views where appropriate
- Implement proper authentication and permissions
- Include comprehensive error handling

**Serializers**:
- Use Django REST Framework serializers
- Include all necessary fields
- Use `source` for computed fields
- Implement `create` and `update` methods for writable serializers
- Use nested serializers for relationships

**URLs**:
- Use RESTful URL patterns
- Group related endpoints under common prefixes
- Use `path` for simple routes, `re_path` for complex patterns
- Include appropriate `name` parameters for reverse URL lookups

### Frontend (React)

**Components**:
- Use functional components with TypeScript
- Follow component composition patterns
- Use React hooks for state and effects
- Implement proper error boundaries
- Include loading states

**State Management**:
- Use Redux Toolkit for global state
- Use local state for component-specific state
- Consider React Query for server state
- Implement proper state synchronization

**API Calls**:
- Use axios for HTTP requests
- Implement request and response interceptors
- Handle errors gracefully
- Include proper headers (Content-Type, Authorization)
- Use environment variables for base URLs

## Example Prompts

### Backend Examples

**Create a new model**:
```
"Create a Django model called 'Wishlist' that allows users to save products they're interested in. The model should have:
- A many-to-many relationship with Product
- A foreign key to User
- A name field (CharField, max_length=100)
- A is_public field (BooleanField, default=False)
- A created_at field (DateTimeField, auto_now_add=True)
- A updated_at field (DateTimeField, auto_now=True)

Include:
- The model definition
- Serializer
- ViewSet with appropriate permissions
- URL routing
- Basic tests

Follow all project coding standards and include proper documentation."
```

**Create an API endpoint**:
```
"Create a Django REST Framework API endpoint at /api/v1/wishlist/ that allows users to:
- View their wishlists
- Add products to their wishlist
- Remove products from their wishlist
- Create new wishlists
- Delete wishlists they own

Include:
- Proper authentication (JWT)
- Permission checks (only owners can modify)
- Input validation
- Error handling
- Tests

The endpoint should follow RESTful conventions and return appropriate HTTP status codes."
```

### Frontend Examples

**Create a React component**:
```
"Create a React component called ProductCard that displays a product in a card format. The component should:
- Accept a Product type prop
- Display product image, name, price, and rating
- Include an 'Add to Cart' button
- Show 'Out of Stock' badge if inventory is 0
- Show discount percentage if on sale
- Be responsive (work on mobile and desktop)
- Follow project styling conventions

Use TypeScript and include proper type definitions. Add basic tests for the component."
```

**Create a custom hook**:
```
"Create a custom React hook called useCart that manages the shopping cart state. The hook should:
- Return cart items, total, and item count
- Provide functions to add, remove, and update items
- Persist cart to localStorage
- Calculate subtotal, tax, and total
- Include type definitions

The hook should be reusable across the application and handle edge cases gracefully."
```

## Performance Considerations

### Backend

- Use `select_related` and `prefetch_related` to avoid N+1 queries
- Implement database indexing for frequently queried fields
- Use caching (Redis) for expensive computations
- Consider pagination for large datasets
- Use bulk operations for bulk updates

### Frontend

- Implement code splitting for large bundles
- Use React.memo for expensive component renders
- Implement virtualization for large lists
- Use useMemo and useCallback for expensive calculations
- Optimize images (compression, lazy loading, CDN)

## Security Considerations

### Backend

- Never expose database credentials
- Use parameterized queries to prevent SQL injection
- Validate all user input
- Implement proper authentication and authorization
- Use Django's built-in security features
- Sanitize output to prevent XSS

### Frontend

- Never store sensitive data in client-side state
- Sanitize user input to prevent XSS
- Implement CSRF protection
- Use HTTPS for all API calls
- Validate API responses
- Implement proper error handling (don't expose sensitive errors)

---


**⚠️ CRITICAL SECURITY WARNING ⚠️**:

This `.env` file contains **highly sensitive information** including:
- Database credentials
- API keys for various services
- Secret keys for authentication
- Payment processing credentials

**NEVER, EVER commit this file to Git.**

**Instead**:
1. Add `.env` to your `.gitignore` file
2. Add `.env.*` to your `.gitignore` file (except `.env.example`)
3. Create a `.env.example` file with **placeholder values** (no real secrets)
4. Use environment variables in your code
5. Set up pre-commit hooks to prevent accidental commits
6. Enable secret scanning on your Git hosting platform

**Example .env.example (safe to commit)**:

```bash
# .env.example - SAFE TO COMMIT (contains no real secrets)

# Database Configuration
DB_NAME=shop_ease_dev
DB_USER=shop_ease_user
DB_PASSWORD=  # Set in your local .env file
DB_HOST=localhost
DB_PORT=5432

# Django Configuration
SECRET_KEY=  # Generate a new one: python -c "import secrets; print(secrets.token_urlsafe(50))"
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1

# AWS Configuration
AWS_ACCESS_KEY_ID=  # Set in your local .env file
AWS_SECRET_ACCESS_KEY=  # Set in your local .env file
AWS_DEFAULT_REGION=us-east-1

# Payment Processing
STRIPE_SECRET_KEY=  # Set in your local .env file
STRIPE_PUBLISHABLE_KEY=  # Set in your local .env file

# Email Configuration
SENDGRID_API_KEY=  # Set in your local .env file

# etc...
```

---

## .aiignore - AI-Specific Ignore Patterns Example

The `.aiignore` file specifies which files and directories AI tools should **not** access. This is similar to `.gitignore` but specifically for AI agent access control.

```
# .aiignore - AI-specific ignore patterns for ShopEase

# ==========================================
# Sensitive Files and Directories
# ==========================================

# Environment files (NEVER access these!)
.env
.env.*
! .env.example
! .env.template

# Credential files
*credentials*
*secret*
*key*
*token*
*password*

# Specific sensitive files
.vibe/credentials
.claude/credentials
.cursor/credentials
ai-credentials.json
api-keys.json
secrets.yml
secrets.yaml

# ==========================================
# Local Development
# ==========================================

# Local database files
*.sqlite3
*.db
*.mdb

# Local overrides
*.local
*.override
*.dev

# IDE-specific
.idea/
.vscode/
*.swp
*.swo
*~
.DS_Store
Thumbs.db

# ==========================================
# Build and Distribution
# ==========================================

# Python
__pycache__/
*.py[cod]
*$py.class
*.so
.Python
build/
develop-eggs/
dist/
downloads/
eggs/
.eggs/
lib/
lib64/
parts/
sdist/
var/
wheels/
*.egg-info/
.installed.cfg
*.egg

# Node.js
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnp/
.pnp.js

# Frontend build outputs
dist/
build/
.out/
.next/

# ==========================================
# Logs and Temporary Files
# ==========================================

# Log files
*.log
logs/
.logs/

# Temporary files
*.tmp
*.temp
tmp/
temp/

# Cache
.cache/
.vibe/cache/
.claude/cache/
.cursor/cache/

# ==========================================
# Test and Coverage
# ==========================================

# Test coverage
.coverage
.nyc_output
.pytest_cache/
.tox/
.nox/

# Test databases
test.db
test.sqlite3

# ==========================================
# Documentation Build
# ==========================================

_docs/
_docs_html/
.dox/

# ==========================================
# OS-Specific
# ==========================================

.DS_Store
Thumbs.db
.ehthumbs.db
.DS_Store?

# ==========================================
# Version Control
# ==========================================

.git/
.gitmodules

# ==========================================
# Specific Directories
# ==========================================

# Local Docker volumes
docker/volumes/

# Local SSL certificates
ssl/
certs/

# Backup files
backups/
*.bak
*.backup

# ==========================================
# AI-Specific Exclusions
# ==========================================

# AI tool configurations (may contain sensitive info)
.vibe/config*
.claude/config*
.cursor/config*

# AI tool history and sessions
.vibe/history/
.claude/history/
.cursor/history/
.vibe/sessions/
.claude/sessions/

# AI tool plugins and extensions
.vibe/plugins/
.claude/plugins/
.vibe/extensions/

# AI tool logs
.vibe/*.log
.claude/*.log
.cursor/*.log
```

**Notes on .aiignore**:
- This file is **similar to but separate from** `.gitignore`
- `.gitignore` tells Git which files to ignore
- `.aiignore` tells AI tools which files **not to access**
- A file might be in Git but still excluded from AI access (e.g., local configuration templates)
- Conversely, a file might be ignored by Git but accessible to AI (e.g., documentation files)

---

## Summary

This appendix has provided theoretical examples of common AI configuration files:

1. **AGENTS.md** - Comprehensive project instructions and context for AI agents
2. **.vibe/config** - Configuration for the Vibe CLI agent
3. **CLAUDE.md** - Project-specific directives for Claude Code
4. **.env** - Environment file example showing **what NOT to commit**
5. **.aiignore** - AI-specific ignore patterns for access control

These examples illustrate the **structure, content, and purpose** of various AI configuration files. Remember:

- **AGENTS.md, CLAUDE.md, .vibe/config** (non-sensitive versions) can typically be **tracked in Git**
- **.env files** and other credential files should **never be tracked in Git**
- **.aiignore** files can typically be **tracked in Git** (they don't contain sensitive data)

Always **carefully review** any configuration file before deciding whether to track it in version control, and **always prioritize security** by keeping sensitive information out of Git.

{% endif %}
