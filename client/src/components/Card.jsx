import { Link } from "react-router-dom";

export const Card = ({ post }) => {
  return (
    <div className="card">
      <h3 className="title">{post.title}</h3>
      <img src={post.img} alt="" className="image" />
      <p className="desc">{post.desc}</p>
      <Link to={`/post/${post.id}`}>
        <button className="cardButton">Read more</button>
      </Link>
    </div>
  );
};
