import like from "../../assets/like.svg";
import unlike from "../../assets/unlike.svg";

const SingleWatchVideo = () => {
  return (
    <>
      <div className="w-full space-y-8 col-span-full lg:col-span-2">
        <iframe
          width="100%"
          className="aspect-video"
          src="https://www.youtube-nocookie.com/embed/6O4s7v28nlw"
          title="Some video title"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <div>
          <h1 className="text-lg font-semibold tracking-tight text-slate-800">
            Some video title
          </h1>
          <div className="flex items-center pb-4 border-b space-between">
            <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
              Uploaded on 23 Nov 2022
            </h2>

            <div className="flex w-48 gap-10">
              <div className="flex gap-1">
                <div className="shrink-0 cursor-pointer">
                  <img className="block w-5" src={like} alt="Like" />
                </div>
                <div className="text-sm leading-[1.7142857] text-slate-600">
                  100K
                </div>
              </div>
              <div className="flex gap-1">
                <div className="shrink-0 cursor-pointer">
                  <img className="block w-5" src={unlike} alt="Unlike" />
                </div>
                <div className="text-sm leading-[1.7142857] text-slate-600">
                  100K
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
            Some video description here
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleWatchVideo;
