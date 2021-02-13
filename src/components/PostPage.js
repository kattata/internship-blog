import { Link, useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import {formatDateToDisplay } from '../helpers';

const PostPage = () => {

    const { id } = useParams();
    const { data:post, isLoading } = useFetch('https://blog.kasialaniecka.com/wp-json/wp/v2/posts/' + id);

    return (
        <div className="post-page">
                    {isLoading && <p className="loading">Post is coming!</p>}
            {post && (
                <>
                <article>
                    <div className="intro">
                        <h1>{post.title.rendered}</h1>
                        <p>Posted on {formatDateToDisplay(post.date)}</p>
                    </div>
                    <p dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
                </article>
                </>
            )}
        </div>
    );
}

export default PostPage;