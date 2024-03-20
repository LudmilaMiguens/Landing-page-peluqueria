import "./Background.css";

function Background({ img }) {
  return (
    <div className="bck-pic">
      <figure>
        <img src={img} />
      </figure>
    </div>
  );
}

export default Background;
