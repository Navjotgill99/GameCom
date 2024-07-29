## Video Games and Comics Info

Welcome to the Video Games and Comics Info project! This project is a web application that provides the latest news, reviews, and insights from the worlds of video games and comics. It uses the Giant Bomb and Marvel APIs to fetch data about games, platforms, franchises, reviews, comics, characters, series, and events. The application is built using Node.js, Express, and Pug for templating.

### Features

- **Home Page**: Overview of the site with featured content and latest news.
- **Games Page**: Information on video games, platforms, franchises, and reviews.
- **Marvel Page**: Details about Marvel comics, characters, series, and events.
- **About Us Page**: Information about the site and its mission.
- **Contact Us Page**: Form to get in touch with the site administrators.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Navjotgill99/GameCom.git
   cd GameCom
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   In the `.env` file that is in root directory add your API keys:
   ```plaintext
   MARVEL_API_PUBLIC_KEY=your_marvel_public_key
   MARVEL_API_PRIVATE_KEY=your_marvel_private_key
   GIANT_BOMB_API_KEY=your_giant_bomb_api_key
   ```

4. **Run the application**:
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:8888`.

### Project Structure

- **index.js**: Main entry point of the application. Sets up the server and routes.
- **modules/giantbomb/api.js**: Contains functions to fetch data from the Giant Bomb API.
- **modules/marvel/api.js**: Contains functions to fetch data from the Marvel API.
- **views/**: Contains Pug templates for rendering the HTML pages.
- **public/**: Static assets(CSS)

### Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.
