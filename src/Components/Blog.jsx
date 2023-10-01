import ReadMore from "./ReadMore";

export default function Blog({ data }) {
  return (
    <div className="flex flex-col lg:flex-row  w-full  lg:px-96  items-center justify-center">
      {data.map((data) => (
        <div key={data.id}>
          {/* leftSideMain */}
          <div className="mt-16 ">
            {/* bottleimage */}
            <img src={data.acf.mainbottleimage} alt="" />
            {/* bottleimage */}
          </div>

          <div className="flex flex-row m-5 justify-center items-center">
            {/* first */}
            <div className="mx-3 text-center ">
              <img className="" src={data.acf.bottleleftimg} alt="" />
              <h1 className="mt-2 font-bold">{data.acf.uvend_technology}</h1>
            </div>
            {/* first */}

            {/* second */}
            <div className="mx-3 text-center  ">
              <img className="w-40" src={data.acf.bottlemidimg} alt="" />
              <h1 className="mt-2 font-bold">{data.acf.manufactured_usa}</h1>
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

          {/* leftSideMainEnd */}
        </div>
      ))}
      <div className="w-1/2 m-10">
        {/* RightSideMain */}
        <h1 className="font-bold text-4xl my-5 ">
          Your one-stop source for vending machines!
        </h1>
        <p className="py-3 text-justify">
          Vending.com is the “factory direct supplier” of a full line of new and
          factory “Certified” re-manufactured combo, snack, and cold drink,
          coffee, cold and frozen food and custom vending machines manufactured
          in the U.S.A. Whether you are starting your own vending machine
          business or you would like to provide your customers and employees
          vending services, Vending.com’s combo, snack, and drink vending
          machines are a perfect solution! With our over 90 years of experience,
          we can provide for your vending needs. With our over 90 years of
          experience, we can provide for your vending needs. No need to “pay
          cash” for your equipment. Up to 100% financing can be provided by our
          company. Check out our short video to see why Vending.com is the #1
          choice for profitable vending!
        </p>
        <ReadMore />
        {/* RightSideMain */}
      </div>
    </div>
  );
}
