# Country List Viewer

This project is a Next.js application that fetches and displays a list of countries from the REST Countries API. It provides features such as searching, detailed country pages, country comparison, pagination, dark mode, and error handling.

## Features

### 1. Fetch and Display Country List

- Uses Apollo Client to fetch country data.
- Displays the data in a paginated table.
- Supports light and dark mode.

### 2. Country Details Page

- Implements dynamic routing to show details about a selected country.
- The route follows the format: `/country/[name]`, where `[name]` is the country's name.

### 3. Search Functionality

- A search bar allows users to filter countries in real-time as they type.

### 4. Country Comparison

- Users can select two countries to compare their population, area, and "GDP".
- Displays the comparison in a Chart.

### 5. Pagination

- Allows users to navigate through the list of countries easily.

### 6. Dark Mode

- Users can toggle between light and dark mode.

### 7. Error Handling and Loading States

- Displays friendly messages and loaders during data fetching or errors.

## Technologies Used

- **Next.js** – React framework for server-side rendering and routing.
- **Apollo Client** – Handles GraphQL queries and caching.
- **GraphQL** – Fetches structured country data.
- **Tailwind CSS** – Styles the application efficiently.
- **TypeScript** – Adds type safety to the project.

## Installation

### Prerequisites

Make sure you have the following installed:

- Node.js (v16 or later)
- yarn

### Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/Bright-Abel/country-search.git
   cd country-search
   ```

2. Install dependencies:

   ```sh
   yarn install
   ```

3. Start the development server:

   ```sh
   yarn dev
   ```

4. Open the app in your browser at `http://localhost:3000`.

## Usage

### Viewing Country List

- Navigate to the homepage to see a list of countries.
- Use the search bar to filter countries.

### Viewing Country Details

- Click on a country to view detailed information.

### Comparing Countries

- Select two countries to compare population, area, and "GDP".

### Dark Mode

- Toggle the dark mode switch to change themes.

## API Information

- The project uses the **REST Countries API**: [https://restcountries.com/v3.1/all](https://restcountries.com/v3.1/all)
- Note: The API does not return GDP data, so additional sources may be required.

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`.
3. Commit your changes: `git commit -m "Add new feature"`.
4. Push to the branch: `git push origin feature-branch`.
5. Submit a pull request.
