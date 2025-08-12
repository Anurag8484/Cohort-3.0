# Course Selling Website - AI Coding Instructions

## Architecture Overview
This is a Node.js/Express REST API for a course selling platform with dual authentication (users and admins). The app follows a modular structure with separate routes, middleware, and database models.

**Key Components:**
- **Entry Point**: `index.js` - Sets up Express server, connects to MongoDB, and mounts route handlers
- **Database Models**: `db.js` - Mongoose schemas for users, admins, courses, and purchases
- **Route Handlers**: `routes/` - Separate routers for user, admin, and course operations
- **Middleware**: `middleware/` - JWT authentication for users and admins

## Authentication Pattern
The app uses **dual JWT authentication** with separate secrets:
- Users: `JWT_USER_SECRET` for customer operations
- Admins: `JWT_ADMIN_SECRET` for content management

**Token Flow:**
```javascript
// Middleware extracts token from headers.token (not Authorization header)
const token = req.headers.token;
// Sets req.userId for downstream route handlers
req.userId = decoded.id;
```

## Database Schema Patterns
- **ObjectId References**: Uses `mongoose.Types.ObjectId` for relationships (not populate)
- **Unique Constraints**: Email fields have `unique: true` on user/admin schemas
- **Purchase Linking**: `purchaseSchema` links `userId` and `courseId` via ObjectIds
- **Creator Ownership**: Courses have `creatorId` field linking to admin who created them

## Route Patterns & Conventions

### API Structure
All routes are prefixed with `/api/v1/`:
- `/api/v1/user/*` - User authentication and purchases
- `/api/v1/admin/*` - Admin authentication and course management  
- `/api/v1/course/*` - Public course viewing and purchasing

### Validation Pattern
Uses Zod for request validation with consistent structure:
```javascript
const reqBody = z.object({
    email: z.string().min(3).max(20).email(),
    // ... other fields
});
// Note: There's a bug - should check safeParse().success
```

### Error Handling Pattern
Consistent error response structure:
```javascript
res.json({ error: "Error message" });
// Or for HTTP status codes:
res.status(403).json({ error: "Forbidden message" });
```

## Development Workflow

### Environment Setup
Create `.env` file with required variables:
```
JWT_USER_SECRET=your_user_secret
JWT_ADMIN_SECRET=your_admin_secret  
MONGO_URI=mongodb://localhost:27017/course-db
PORT=3000
```

### Running the App
```bash
npm start  # Uses nodemon for auto-reload
```

### Project Dependencies
- **express**: Web framework (v5.1.0)
- **mongoose**: MongoDB ODM
- **bcrypt**: Password hashing (salt rounds: 3)
- **jsonwebtoken**: JWT authentication
- **zod**: Schema validation
- **dotenv**: Environment variables

## Code Conventions & Patterns

### File Organization
- Routes export named objects: `{ userRouter }`, `{ adminRouter }`
- Database models export object with all models: `{ userModel, adminModel, ... }`
- Middleware export named functions: `{ userMiddleware }`

### Common Patterns
- **Password Hashing**: `bcrypt.hash(password, 3)` - uses 3 salt rounds
- **Database Queries**: Direct model methods, no complex aggregations
- **JWT Signing**: `jwt.sign({ id: user._id.toString() }, secret)`
- **Owner Validation**: Admin routes check `creatorId` matches `req.userId`

### Known Issues to Fix
1. Zod validation bug in signup routes (missing `.success` check)
2. Missing validation on course purchase (duplicate purchases allowed)
3. No pagination on course listing endpoints
4. Inconsistent error response status codes

## Testing Endpoints
Use tools like Postman/curl with token in headers:
```bash
curl -H "token: your_jwt_token" http://localhost:3000/api/v1/user/purchases
```

## Database Relationships
- Users can purchase multiple courses (many-to-many via purchases table)
- Admins can create multiple courses (one-to-many)
- No soft deletes - use direct model operations
