const Posts = () => {
  return (
    <div className="posts-container">
      <div className="post">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/43/AnOnYmUs.jpg"
          alt="About Me"
        />
        <div className="post-description">About me</div>
      </div>
      <div className="post">
        <img
          src="https://cdn.cloudflare.steamstatic.com/steam/apps/1597080/capsule_616x353.jpg?t=1633326975"
          alt="Killer Bean"
        />
        <div className="post-description">
          Why Killer Bean is cooler than John Wick?
        </div>
      </div>
      <div className="post">
        <img
          src="https://blog.docsapp.in/content/images/2018/02/Social-Media-Addiction.jpg"
          alt="Negative impact of social media"
        />
        <div className="post-description">Negative impact of social media</div>
      </div>
      <div className="post">
        <img
          src="https://domf5oio6qrcr.cloudfront.net/medialibrary/7909/b8a1309a-ba53-48c7-bca3-9c36aab2338a.jpg"
          alt="Water"
        />
        <div className="post-description">
          Why it's important to drink water
        </div>
      </div>
      <div className="post">
        <img
          src="https://pbs.twimg.com/media/EeNMNKcWsAIvB2s.png:large"
          alt="Sleep"
        />
        <div className="post-description">Sleep & mental health</div>
      </div>
    </div>
  );
};

export default Posts;
