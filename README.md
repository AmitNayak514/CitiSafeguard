# CitiSafeguard Admin Dashboard

CitiSafeguard is an admin dashboard for managing traffic laws, reports, and cases within a city. It includes features for adding and managing laws, handling user reports, and assigning investigations to admins. This project is built using Next.js with a MongoDB database.

## Features

- **Traffic Law Management**: Create, update, and delete traffic laws within the system.
- **User Reports**: View and manage user reports regarding traffic violations.
- **Admin Management**: Assign admins to investigate cases, view and manage admin details.
- **Notifications**: Send notifications to users and admins based on specific actions or updates.
- **Civic Points System**: Track user civic points and manage transactions.

## Tech Stack

- **Frontend**: Next.js
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Prisma ORM
- **Authentication**: Clerk for user authentication

## Installation

### Prerequisites

- Node.js v18+
- MongoDB (Local or Cloud Instance)
- Prisma CLI

### Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/citi-safeguard.git
   cd citi-safeguard
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Setup environment variables:**

   Create a `.env` file at the root of your project and add the following variables:

   ```bash
  DATABASE_URL="Your_Mongo_url"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_Y29taWMtc2VhbC02NS5jbGVyay5hY2NvdW50cy5kZXYk
CLERK_SECRET_KEY= ""
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
CLERK_WEBHOOK_SIGNING_SECRET=""
NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Generate Prisma client:**

   Run the following command to generate the Prisma client:

   ```bash
   npx prisma generate
   ```

5. **Run the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

## API Endpoints

### Laws

- **GET /api/laws/{lawId}**
  - Fetch details of a specific law by its ID.

- **PATCH /api/laws/{lawId}**
  - Update the name of a specific law by its ID.

- **DELETE /api/laws/{lawId}**
  - Delete a specific law by its ID.

### Reports

- **GET /api/reports**
  - Fetch all reports made by users.

- **POST /api/reports**
  - Create a new report.

### Admins

- **GET /api/admins**
  - Fetch a list of all admins.

- **POST /api/admins**
  - Create a new admin.

## Testing the API with Thunder Client/Postman

To test the API endpoints, you can use Thunder Client (VS Code extension) or Postman. Set up the necessary headers and body for each request according to the API documentation above.


## Contributing

Feel free to fork this repository, create new branches, and submit pull requests for new features or bug fixes.

## License

This project is licensed under the MIT License.

## Contact

For any questions or support, please reach out to:

- **GitHub**: https://github.com/dshreyash-108/

---
