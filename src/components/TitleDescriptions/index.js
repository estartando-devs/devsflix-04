import "./style.css";

const TitleDescriptions = ({ onClick, title }) => {
  return (
    <div className="container-descriptions">
      <h2 className="title-descriptions">{title}</h2>
      <img src="/assets/svg/close.svg" alt="close" onClick={onClick} />
    </div>
  );
};

export { TitleDescriptions };
