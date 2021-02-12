import { formatDateToDisplay } from '../helpers';

import { Link } from "react-router-dom";

const PostPreview = ({ post }) => {

    const isAvailable = post.acf.available === "yes";


    return (
        <>
            <div className={isAvailable ? "post-preview-enabled" : "post-preview-disabled"} key={post.id}>
                <h2>{post.title.rendered}</h2>
                <p>Posted on {formatDateToDisplay(post.date)}</p>
                <Link to={`posts/${post.id}`}>
                    <button disabled={!isAvailable}>{isAvailable ? 'Read' : "Not Available"}</button>
                </Link>
            </div>
        </>
    );
}

export default PostPreview;