# Personalized News Aggregator

## Overview

The Personalized News Aggregator is a web application designed to collect, analyze, and display news articles based on user preferences. The application incorporates sentiment analysis to provide insights into the emotional tone of news articles, enhancing user engagement with personalized content. 

## Features

- **Personalized News Feed**: Aggregates and displays news articles tailored to user interests.
- **Sentiment Analysis**: Analyzes the sentiment of news articles to provide users with insights into the emotional tone of the content.
- **User Authentication**: Allows users to register, log in, and manage their profiles.
- **Interest Management**: Enables users to send and receive interest requests to connect with others and exchange news.

## Setup

### Backend

1. Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2. Create a virtual environment and install dependencies:
    ```bash
    python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
    ```
3. Run the backend server:
    ```bash
    uvicorn app.main:app --reload
    ```

### Frontend

1. Navigate to the `frontend/myapp` directory:
    ```bash
    cd frontend/myapp
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Run the frontend server:
    ```bash
    npm start
    ```

## How It Works

### Backend

- **API Endpoints**: The backend provides API endpoints for user registration, authentication, news aggregation, sentiment analysis, and interest management.
- **Database**: Stores user data, news articles, and interest interactions.
- **Sentiment Analysis**: Utilizes sentiment analysis libraries to process and analyze news content, providing sentiment scores.

### Frontend

- **User Interface**: Built with React, providing a dynamic and interactive user experience.
- **News Display**: Fetches and displays personalized news articles from the backend.
- **Sentiment Insights**: Visualizes sentiment analysis results for each news article.

## Deployment

Deploy the backend and frontend on a platform like Heroku, AWS, or another cloud service. Ensure that both the backend and frontend are properly configured to communicate with each other.

## Testing

1. Run backend tests with `pytest` to ensure the correctness of API endpoints and functionality.
2. Verify that the frontend interacts correctly with the backend by checking data flow and user interactions.

## Contributing

Feel free to submit issues or pull requests. Contributions are welcome to enhance the functionality and improve the user experience.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please contact Jai Srivastava at [your-email@example.com](mailto:your-email@example.com).
