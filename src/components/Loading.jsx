import loadingGIF from "../assets/images/loading-gif.gif";

const Loading = () => {
  return (
    <div className="loading-component text-center py-12">
      <img src={loadingGIF} alt="Loading..." className="w-40 mx-auto block" />
    </div>
  );
};

export default Loading;
