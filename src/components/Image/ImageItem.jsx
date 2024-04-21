export default function ImageItem({ image, handleClick, index, currentIndex }) {
  return (
    <img
      src={image}
      alt="image"
      onClick={() => handleClick(index)}
      className={`w-40 cursor-pointer`}
      style={index === currentIndex ? { border: "3px solid #222" } : {}}
    />
  );
}
