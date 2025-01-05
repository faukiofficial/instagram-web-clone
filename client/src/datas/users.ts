export const users = [
    {
      "id": 1,
      "fullName": "John Doe",
      "userName": "john_doe",
      "email": "john.doe@example.com",
      "bio": "Travel enthusiast 🌍 | Photographer 📸 | Nature lover 🌲",
      "profilePicture": "https://via.placeholder.com/150",
      "posts": [
        {
          "id": 101,
          "imageUrl": "https://via.placeholder.com/500",
          "caption": "Enjoying the beauty of nature!",
          "likes": 120,
          "comments": [
            {
              "id": 1,
              "userName": "user1",
              "text": "Amazing view!",
              "likes": 5
            },
            {
              "id": 2,
              "userName": "user2",
              "text": "Wish I was there!",
              "likes": 3
            }
          ],
          "createdAt": "2025-01-01T08:30:00Z"
        },
        {
          "id": 102,
          "imageUrl": "https://via.placeholder.com/400",
          "caption": "Sunset vibes 🌅",
          "likes": 90,
          "comments": [],
          "createdAt": "2025-01-02T14:45:00Z"
        }
      ],
      "notifications": [
        {
          "id": 1,
          "type": "like",
          "message": "user1 liked your post",
          "createdAt": "2025-01-03T10:00:00Z"
        },
        {
          "id": 2,
          "type": "follow",
          "message": "user2 started following you",
          "createdAt": "2025-01-02T12:15:00Z"
        }
      ],
      "messages": [
        {
          "id": 1,
          "from": "user3",
          "text": "Hey! Love your photos.",
          "createdAt": "2025-01-02T18:20:00Z"
        },
        {
          "id": 2,
          "from": "user4",
          "text": "Do you want to collaborate?",
          "createdAt": "2025-01-01T16:45:00Z"
        }
      ],
      "savedPosts": [101],
      "following": ["jane_smith", "travel_guru"],
      "followers": ["user1", "user2", "user3"],
      "createdAt": "2025-01-01T07:00:00Z"
    },
    {
      "id": 2,
      "fullName": "Jane Smith",
      "userName": "jane_smith",
      "email": "jane.smith@example.com",
      "bio": "Fashion designer 👗 | Foodie 🍣 | World traveler ✈️",
      "profilePicture": "https://via.placeholder.com/150",
      "posts": [
        {
          "id": 201,
          "imageUrl": "https://via.placeholder.com/600",
          "caption": "Exploring the streets of Paris!",
          "likes": 150,
          "comments": [],
          "createdAt": "2025-01-03T10:00:00Z"
        }
      ],
      "notifications": [
        {
          "id": 1,
          "type": "comment",
          "message": "user4 commented on your post",
          "createdAt": "2025-01-02T10:15:00Z"
        }
      ],
      "messages": [],
      "savedPosts": [],
      "following": ["john_doe"],
      "followers": ["travel_guru"],
      "createdAt": "2025-01-02T09:30:00Z"
    }
  ]
  