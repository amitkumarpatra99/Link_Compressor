# URL Shortener

A web application that converts long URLs into short, manageable links.

## Features

- URL shortening with custom aliases
- Quick copy to clipboard functionality
- Secure and unique short URL generation
- Analytics for link clicks (if implemented)
- User-friendly interface

# URL Shortener

A web application that converts long URLs into short, manageable links.

## Features

- URL shortening with custom aliases
- Quick copy to clipboard functionality
- Secure and unique short URL generation
- User-friendly interface
- (Optional) Analytics for link clicks

## Tech Stack

- **Frontend:**  
  - Next.js (React)
  - Tailwind CSS

- **Backend:**  
  - Next.js API Routes
  - MongoDB (with Mongoose)

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/url_shortner.git
   cd url_shortner
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Configure environment variables:**
   - Create a `.env.local` file in the root directory.
   - Add your MongoDB URI:
     ```
     MONGODB_URI=your_mongodb_connection_string
     ```

4. **Run the development server:**
   ```sh
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/` - Main application pages and routes
- `components/` - Reusable UI components (e.g., Navbar, Footer)
- `lib/` - Database connection logic
- `public/` - Static assets
- `app/api/` - API routes for backend logic

## API Endpoints

- `POST /api/generate`  
  Create a new short URL.  
  **Body:** `{ url: string, shorturl: string }`

## License

This project is licensed under the MIT License.
- Frontend:
  - HTML
  - CSS
  - JavaScript
  - Tailwind CSS


  
- Backend:
- Next JS
- Data Base-  Mongo DB and Mongoose
 