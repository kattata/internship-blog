import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { formatDate } from '../helpers';

const PostPage = () => {

    const { id } = useParams();
    const { data, isLoading } = useFetch('http://blog.kasialaniecka.com/wp-json/wp/v2/posts/' + id)
    return (
        <div className="post-page">
                    {isLoading && <p className="loading">Post is coming!</p>}
            {data && (
                <article>
                    <div className="intro">
                        <h1>{data.title.rendered}</h1>
                        <p>Posted on {formatDate(data.date)}</p>
                    </div>
                    <p dangerouslySetInnerHTML={{ __html: data.content.rendered }}></p>
                </article>
            )}
        </div>
    );
}

export default PostPage;