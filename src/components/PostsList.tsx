const PostsSearch = (props: any) => {
  return (
    <div>
      <label htmlFor="search">Search post by title</label>
      <input
        type="text"
        value={props.inputValue}
        onChange={props.postsFilterOnChange}
      />
    </div>
  );
};

export default PostsSearch;
