

const style = {
  width: 200,
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "grey",
  borderWidth: 1,
  margin: 10,
  padding: 20,
};

export function Post({ name, subtitle, time, image, description }) {
  return (
    <div style={style}>
      <div style={{ display: "flex" }}>
        <img src={image} style={{ width: 20, height: 20, borderRadius: 20 }} />
        <div style={{ lineHeight: 1.5 }}>
          <b>{name}</b>
          <div>{subtitle}</div>
          {time !== undefined && (
            <div style={{ display: "flex" }}>
              <div>{time}</div>
              <img
                src="https://media.istockphoto.com/id/931336618/vector/clock-vector-icon-isolated.jpg?s=612x612&w=0&k=20&c=I8EBJl8i6olqcrhAtKko74ydFEVbfCQ6s5Pbsx6vfas="
                style={{ width: 12, height: 12 }}
              ></img>
            </div>
          )}
        </div>
      </div>
      <div style={{ fontSize: 12, marginLeft: 10 }}>{description}</div>
    </div>
  );
}
