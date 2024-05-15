const Pagination = () => {
  return (
    <>
      <section className="pt-12">
        <div className="flex justify-end gap-2 px-5 py-6 mx-auto max-w-7xl lg:px-0">
          <div className="px-4 py-1 text-white bg-blue-600 rounded-full cursor-pointer">
            1
          </div>
          <div className="px-4 py-1 text-blue-600 bg-blue-100 rounded-full cursor-pointer">
            2
          </div>
          <div className="px-4 py-1 text-blue-600 bg-blue-100 rounded-full cursor-pointer">
            3
          </div>
          <div className="px-4 py-1 text-blue-600 bg-blue-100 rounded-full cursor-pointer">
            4
          </div>
        </div>
      </section>
    </>
  );
};

export default Pagination;
