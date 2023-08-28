# Givememovies


Give me movies is a website that uses AI, more specifically Natural Language Processing, to suggest movies to users using prompts, according to 4 different criteria: Genre, Actor, Director, and Maximum watchtime. 

# Get started

1. Clone repository 
  
  ```
    git clone https://github.com/ismaiilov-atai/Givememovies2
  ```

2. Obtain API keys
    
    -  [OpenAI API key](https://chat.openai.com/)
    
    -  [TMDB API key](https://www.themoviedb.org/)


4. Navigate to  **./client**    |   **./server**  and run next command:

  ```
    npm install
  ```

5. Create **.env** file and create variables:
    
    - OPENAI_API_KEY=[your openAI API key]
  
    - TMDB_API_KEY=[your TMDB API key]
  

# Technologies Used

    - React
    - Koa

# Input Example:
  
  The prompts from the user are sent to the OpenAI API, which handles the prompt and returns an array of the form [Lenght(in minutes), Actor, Director, Genre]. Then this array is used to fetch movies from the TMDB API.
    provide input similar to followed format:
    
    ```
      I want to watch a rom-com which is less than 2 hours long and with Tom Hanks in it" in the box!
    ```




