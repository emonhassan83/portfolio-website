const Skill = ({ singleSkill }) => {
  const { image, name } = singleSkill;
  return (
    <div className="skill__section">
      <div className="skill__img">
      <img src={image} alt="" />
      </div>
      <h2 className="skill__description">{name}</h2>
    </div>
  );
};

export default Skill;
