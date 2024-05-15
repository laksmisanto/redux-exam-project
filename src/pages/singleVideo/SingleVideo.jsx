const SingleVideo = () => {
  return (
    <>
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
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
                      <div className="shrink-0">
                        <img
                          className="block w-5"
                          src="./assets/like.svg"
                          alt="Like"
                        />
                      </div>
                      <div className="text-sm leading-[1.7142857] text-slate-600">
                        100K
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <div className="shrink-0">
                        <img
                          className="block w-5"
                          src="./assets/unlike.svg"
                          alt="Unlike"
                        />
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

            <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
              <div className="flex flex-row w-full gap-2 mb-4">
                <div className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
                  <a href="video.html">
                    <img
                      src="https://i3.ytimg.com/vi/6O4s7v28nlw/maxresdefault.jpg"
                      className="object-cover"
                      alt="Some video title"
                    />
                  </a>
                  <p className="absolute px-1 text-xs text-gray-100 bg-gray-900 right-2 bottom-2 py">
                    12:10
                  </p>
                </div>

                <div className="flex flex-col w-full">
                  <a href="#">
                    <p className="text-sm font-semibold text-slate-900">
                      Some video title
                    </p>
                  </a>
                  <a
                    className="mt-2 text-xs text-gray-400 hover:text-gray-600"
                    href="#"
                  >
                    Learn with Sumit
                  </a>
                  <p className="mt-1 text-xs text-gray-400">
                    100K views . 23 Oct 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleVideo;
