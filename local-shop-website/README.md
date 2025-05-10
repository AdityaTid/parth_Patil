# Local Shop Website

This project is a complete end-to-end website for a local shop that specializes in selling and repairing air conditioners. The website features a modern design with light and dark theme options, animations, and a user-friendly interface.

## Project Structure

```
local-shop-website
├── public
│   ├── index.html          # Main HTML document
│   ├── favicon.ico         # Favicon for the website
│   └── assets
│       ├── css
│       │   ├── light-theme.css  # Styles for light theme
│       │   ├── dark-theme.css   # Styles for dark theme
│       │   └── animations.css    # CSS animations
│       ├── js
│       │   └── scripts.js        # JavaScript for interactivity
│       └── images               # Directory for images
├── src
│   ├── components
│   │   ├── header.js           # Header component
│   │   ├── footer.js           # Footer component
│   │   ├── product-list.js     # Product list component
│   │   └── repair-form.js      # Repair request form component
│   ├── pages
│   │   ├── home.js             # Home page
│   │   ├── about.js            # About page
│   │   └── contact.js          # Contact page
│   └── utils
│       └── theme-switcher.js    # Theme switching utility
├── package.json                 # NPM configuration
├── webpack.config.js            # Webpack configuration
├── .gitignore                   # Git ignore file
└── README.md                    # Project documentation
```

## Features

- **Responsive Design**: The website is designed to be responsive and user-friendly on all devices.
- **Light and Dark Themes**: Users can switch between light and dark themes for better accessibility.
- **Animations**: Smooth animations enhance user experience throughout the website.
- **Product Listings**: A dedicated section for displaying available air conditioning products.
- **Repair Request Form**: Customers can easily request repairs through a simple form.

## Getting Started

1. **Clone the repository**:
   ```
   git clone <repository-url>
   ```

2. **Navigate to the project directory**:
   ```
   cd local-shop-website
   ```

3. **Install dependencies**:
   ```
   npm install
   ```

4. **Run the development server**:
   ```
   npm start
   ```

5. **Open your browser** and go to `http://localhost:3000` to view the website.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.