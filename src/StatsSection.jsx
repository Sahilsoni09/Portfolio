import React from "react";

const StatsSection = () => {
  return (
    <section className="bg-[#0B0B0B] text-[#C0F7D6] py-20 px-6 md:px-24">
      <div className="max-w-[1531px] mx-auto flex flex-col md:flex-row justify-between gap-[21px] rounded-[29px] border-[1px] border-[#646464] p-10 md:p-[82px]">
        {/* Each stat box */}
        <div className="flex flex-col items-center text-center gap-2">
          <h3 className="text-[120px] font-extrabold">90%</h3>
          <p className="text-[34px] font-semibold leading-5">
            Job Success
            <br />
            Score on Upwork
          </p>
        </div>

        <div className="hidden md:block text-8xl font-extrabold">✺</div>

        <div className="flex flex-col items-center text-center gap-2">
          <h3 className="text-[120px] font-extrabold">&gt;25.000</h3>
          <p className="text-sm">
            Duplicates on Figma
            <br />
            Community
          </p>
        </div>

        <div className="hidden md:block text-8xl font-extrabold">✺</div>

        <div className="flex flex-col items-center text-center gap-2">
          <h3 className="text-[120px] font-extrabold">&gt;2K</h3>
          <p className="text-sm">
            In Finished
            <br />
            Works
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
