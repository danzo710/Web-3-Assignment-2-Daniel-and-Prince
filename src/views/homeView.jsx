const mainImage =
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
export const HomeView = () => {
  return (
    <main className="flex flex-col">
      <div className="flex flex-col flex-row bg-gray-50">
        <section className="flex-none basis-[55%] bg-white flex items-center justify-center px-6 py-16 py-0">
          <div className="w-full max-w-lg flex flex-col gap-12">
            <h1 className="flex flex-col font-serif text-6xl font-bold leading-[0.95] text-black tracking-tight">
              <span className={`block text-[#EFBE4F]`}>Shop</span>
              <span className="block">Name</span>
            </h1>

            <div className="flex flex-col justify-between items-start gap-6">
              <span
                className={`text-[0.7rem] font-medium tracking-[0.12em] text-gray-500 uppercase`}
              >
                Find your person here..
              </span>
            </div>
          </div>
        </section>

        <section className="flex-none basis-[45%] relative overflow-hidden">
          <img
            src={mainImage}
            alt="Model Posing"
            className="w-full h-full object-cover object-center block"
          />
        </section>
      </div>
    </main>
  );
};
