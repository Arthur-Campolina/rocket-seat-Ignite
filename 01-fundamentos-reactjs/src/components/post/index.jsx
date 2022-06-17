const Post = (props) => {
    return <div>
        <h1>{props.author}</h1>
        <p>{props.description}</p>
    </div>
}
export default Post;