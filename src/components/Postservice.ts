import axios from 'axios'

export class PostService{
    private static URL:string= "https://jsonplaceholder.typicode.com"

    public static getAllPosts(){
        let PostURL:string = `${this.URL}/posts`
        return axios.get(PostURL)
    }
}