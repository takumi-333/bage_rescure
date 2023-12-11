import { useEffect ,useState} from "react";
import Post from "./postlayout";
import { getNewPosts,getPopularPosts } from "./getposts";
import { useNavigate } from 'react-router-dom';

function RecievePosts() {
    const [postsample, setPostsample] =  useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        get_new_post_data();
    }, []);

    const get_new_post_data = async() => {
        const test = await getNewPosts(5);
        setPostsample(test);
    }

    return (
        <>
            <>
                <ul className="flex flex-col items-center mt-5">
                    {postsample.map((post) => (
                        <div className="mt-5 w-5/12">
                        
                            <li key={post.post_id} className="flex flex-col items-center mt-5"> 
                                <Post post={post} />
                            </li>
                        </div>
                    ))}
                </ul>
            </>

        
        
        
        
        
        
        
        
        
        
        
        </>










    )












}
export default RecievePosts;








