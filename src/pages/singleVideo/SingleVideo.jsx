import RelatedVideo from "./RelatedVideo";
import SingleWatchVideo from "./SingleWatchVideo";

const SingleVideo = () => {
  return (
    <>
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <SingleWatchVideo />
            <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
              <RelatedVideo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleVideo;
