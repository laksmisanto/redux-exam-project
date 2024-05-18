import { Link } from "react-router-dom";

const Videos = () => {
  return (
    <>
      <section className="pt-12">
        <section className="pt-12">
          <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
            <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
              <div className="flex flex-col w-full">
                <div className="relative">
                  <Link to={"/single-video"}>
                    <img
                      src="https://i3.ytimg.com/vi/6O4s7v28nlw/maxresdefault.jpg"
                      className="w-full h-auto"
                      alt="Some video title"
                    />
                  </Link>

                  <p className="absolute px-1 text-xs text-gray-100 bg-gray-900 right-2 bottom-2 py">
                    12:10
                  </p>
                </div>

                <div className="flex flex-row gap-2 mt-2">
                  <a href="#" className="shrink-0">
                    <img
                      src="https://avatars.githubusercontent.com/u/73503432?v=4"
                      className="w-6 h-6 rounded-full"
                      alt="Learn with Sumit"
                    />
                  </a>

                  <div className="flex flex-col">
                    <Link to={"/single-video"}>
                      <p className="text-sm font-semibold text-slate-900">
                        Video title
                      </p>
                    </Link>
                    <a
                      className="mt-2 text-xs text-gray-400 hover:text-gray-600"
                      href="#"
                    >
                      Learn with Sumit
                    </a>
                    <p className="mt-1 text-xs text-gray-400">
                      200 views . May 3, 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Videos;
