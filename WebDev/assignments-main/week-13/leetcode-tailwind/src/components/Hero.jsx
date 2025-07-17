export function Hero(){
    return (
      <>
        <section className="grid md:grid-cols-12  gap-10 flex-wrap bg-pink-200 w-full">
          <div className="bg-blue-200 h-96 mx-5   md:col-span-5 rounded-lg shadow-lg">
            Features
          </div>
          <div className="bg-yellow-300 mx-5  md:col-span-7 h-96  rounded-lg shadow-lg">
            <div>List</div>
          </div>
        </section>
      </>
    );
}