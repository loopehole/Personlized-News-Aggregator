#!/bin/bash

echo "Testing endpoints..."

# Test GET /latest
echo "Testing GET /latest"
curl -X GET "http://127.0.0.1:8000/latest"
echo "--- End of /latest ---"

# Test GET /api/news/1
echo "Testing GET /api/news/1"
curl -X GET "http://127.0.0.1:8000/api/news/1"
echo "--- End of /api/news/1 ---"

# Test POST /api/news
echo "Testing POST /api/news"
curl -X POST "http://127.0.0.1:8000/api/news" -H "Content-Type: application/json" -d '{"content": "Sample news content"}'
echo "--- End of /api/news POST ---"

# Test POST /api/news/analyze
echo "Testing POST /api/news/analyze"
curl -X POST "http://127.0.0.1:8000/api/news/analyze" -H "Content-Type: application/json" -d '{"text": "example text"}'
echo "--- End of /api/news/analyze POST ---"

# Test GET /api/news/search?query=AI
echo "Testing GET /api/news/search?query=AI"
curl -X GET "http://127.0.0.1:8000/api/news/search?query=AI"
echo "--- End of /api/news/search ---"

# Test DELETE /api/news/1
echo "Testing DELETE /api/news/1"
curl -X DELETE "http://127.0.0.1:8000/api/news/1"
echo "--- End of /api/news DELETE ---"

echo "All tests completed."
