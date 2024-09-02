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

Here is the README for the user side of the CitiSafeguard app:

---

# CitiSafeguard User Dashboard

CitiSafeguard is a user portal designed for citizens to report traffic violations, view traffic laws, and track their civic points. The platform enables users to stay informed about city regulations and contribute to maintaining law and order through reporting and interacting with the system. This project is built using Next.js with a MongoDB database.

## Features

- **Report Violations**: Users can report traffic violations, including location, description, and evidence (e.g., photo or video).
- **View Traffic Laws**: Access up-to-date information on traffic laws, penalties, and regulations in the city.
- **Civic Points**: Track civic points earned for reporting violations and other contributions to the city's safety.
- **Notifications**: Receive notifications for updates on reported violations, changes in traffic laws, and other relevant information.
- **Profile Management**: Manage user information such as username, email, and password.

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
   git clone https://github.com/your-username/citi-safeguard-user.git
   cd citi-safeguard-user
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Setup environment variables:**

   Create a `.env` file at the root of your project and add the following variables:

   ```bash
   DATABASE_URL="Your_MongoDB_URL"
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY= ""
   CLERK_SECRET_KEY="Your_Clerk_Secret_Key"
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   CLERK_WEBHOOK_SIGNING_SECRET="Your_Clerk_Webhook_Secret"
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

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

## API Endpoints

### Violations

- **POST /api/violations**

  Create a new traffic violation report.

- **GET /api/violations**

  Fetch a list of all violations reported by the user.

### Laws

- **GET /api/laws**

  Fetch all traffic laws available to users.

### Civic Points

- **GET /api/civic-points**

  Fetch the user's civic points and transaction history.

## Testing the API with Thunder Client/Postman

To test the API endpoints, you can use Thunder Client (VS Code extension) or Postman. Set up the necessary headers and body for each request according to the API documentation above.

## Contributing

Feel free to fork this repository, create new branches, and submit pull requests for new features or bug fixes.

## Contact

For any questions or support, please reach out to:

- GitHub: [dshreyash-108](https://github.com/dshreyash-108/)

--- 
