import PostPreview from "./PostPreview";

const PostList = ({ posts }) => {

    return (
        <div className="post-list">
            {posts
                .sort((a, b) => a.id - b.id)
                .map(post => <PostPreview post={post} key={post.id} />)}

        </div>
    );
}

export default PostList;