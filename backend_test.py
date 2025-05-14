import requests
import unittest
import os
import json
from datetime import datetime

class GmailChatAPITest(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(GmailChatAPITest, self).__init__(*args, **kwargs)
        # Get the backend URL from environment variable or use a default
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    self.base_url = line.strip().split('=')[1].strip('"\'')
                    break
        
        # Ensure the base URL doesn't have trailing slash
        if self.base_url.endswith('/'):
            self.base_url = self.base_url[:-1]
        
        print(f"Using backend URL: {self.base_url}")

    def test_root_endpoint(self):
        """Test the root API endpoint"""
        response = requests.get(f"{self.base_url}/api/")
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(data.get("message"), "Hello World")
        print("✅ Root endpoint test passed")

    def test_status_endpoint_post(self):
        """Test creating a status check"""
        client_name = f"test_client_{datetime.now().strftime('%Y%m%d%H%M%S')}"
        payload = {"client_name": client_name}
        
        response = requests.post(f"{self.base_url}/api/status", json=payload)
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(data.get("client_name"), client_name)
        self.assertIn("id", data)
        self.assertIn("timestamp", data)
        print("✅ Status POST endpoint test passed")

    def test_status_endpoint_get(self):
        """Test getting status checks"""
        response = requests.get(f"{self.base_url}/api/status")
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertIsInstance(data, list)
        if len(data) > 0:
            self.assertIn("client_name", data[0])
            self.assertIn("id", data[0])
            self.assertIn("timestamp", data[0])
        print("✅ Status GET endpoint test passed")

def run_tests():
    suite = unittest.TestSuite()
    suite.addTest(GmailChatAPITest('test_root_endpoint'))
    suite.addTest(GmailChatAPITest('test_status_endpoint_post'))
    suite.addTest(GmailChatAPITest('test_status_endpoint_get'))
    
    runner = unittest.TextTestRunner()
    result = runner.run(suite)
    
    return result.wasSuccessful()

if __name__ == "__main__":
    success = run_tests()
    exit(0 if success else 1)