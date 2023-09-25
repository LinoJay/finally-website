<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lino Jay Martinez - STEM Timeline</title>
    <style>
        /* Reset some default styles */
        body {
            font-family: Arial, sans-serif;
            background-image: url('sunset.JPG'); /* Add your background image URL here */
            background-size: cover;
            background-repeat: no-repeat;
            margin: 0;
            padding: 0;
            line-height: 1.6;
            color: #333;
        }

        /* ... Your existing CSS styles ... */

        /* Comment section styles */
        .comment-section {
            margin-top: 20px;
            padding: 20px;
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }

        .comments {
            list-style: none;
            padding: 0;
        }

        .comment {
            background-color: rgba(255, 255, 255, 0.9);
            border-radius: 5px;
            margin: 10px 0;
            padding: 10px;
        }
    </style>
</head>
<body>
    <h1>Lino Jay Martinez - STEM Timeline</h1>
    <div class="container">
        <!-- Your timeline content as before -->
    </div>

    <!-- Comment section -->
    <div class="container comment-section">
        <h2>Comments</h2>
        <ul class="comments" id="comments-list">
            <!-- Comments will be added here using JavaScript -->
        </ul>
        <div>
            <textarea id="comment-text" rows="4" placeholder="Add your comment"></textarea>
            <button onclick="addComment()">Add Comment</button>
        </div>
    </div>

    <!-- Share buttons as before -->

    <script>
        // Function to add a comment
        function addComment() {
            const commentText = document.getElementById('comment-text').value;
            if (!commentText) return;

            // Create a new comment element
            const commentElement = document.createElement('li');
            commentElement.className = 'comment';
            commentElement.textContent = commentText;

            // Append the comment to the comments list
            const commentsList = document.getElementById('comments-list');
            commentsList.appendChild(commentElement);

            // Clear the input field
            document.getElementById('comment-text').value = '';
        }
    </script>
</body>
</html>
