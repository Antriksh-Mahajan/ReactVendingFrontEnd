import ReadMore from "./ReadMore";

export default function Blog({ data }) {
  return (
    <div className="flex flex-col lg:flex-row  w-full  lg:px-96  items-center justify-center">
      {data.map((data) => (
        <div className="flex flex-row" key={data.id}>
          {/* leftSideMain */}
          <div className="flex flex-col lg:flex-row">
            <div className=" flex flex-col">
              <div className="mt-16 ">
                {/* bottleimage */}
                <img src={data.acf.mainbottleimage} alt="" />
                {/* bottleimage */}
              </div>
              <div className="flex flex-row m-5 justify-center items-center">
                {/* first */}
                <div className="mx-3 text-center ">
                  <img className="" src={data.acf.bottleleftimg} alt="" />
                  <h1 className="mt-2 font-bold">
                    {data.acf.uvend_technology}
                  </h1>
                </div>
                {/* first */}
                {/* second */}
                <div className="mx-3 text-center  ">
                  <img className="w-40" src={data.acf.bottlemidimg} alt="" />
                  <h1 className="mt-2 font-bold">
                    {data.acf.manufactured_usa}
                  </h1>
                </div>
                {/* second */}
                {/* third */}
                <div className="mx-3 text-center ">
                  <img className="w-36" src={data.acf.bottlerightimg} alt="" />
                  <h1 className="mt-2 font-bold w-full">
                    {data.acf.ivend_guaranteed_delivery}
                  </h1>
                </div>
                {/* third */}
              </div>
            </div>
            <div className="lg:w-1/2 m-10 flex flex-col">
              {/* RightSideMain */}
              <h1 className="font-bold text-4xl my-5 ">{data.acf.blogtitle}</h1>
              <p className="py-3 text-justify">{data.acf.blogbody}</p>
              <ReadMore />
              {/* RightSideMain */}
            </div>
            {/* leftSideMainEnd */}
          </div>
        </div>
      ))}
    </div>
  );
}
