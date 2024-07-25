import React from "react";
import { HomeinfConf } from "@constants/HomeinfConf";

const HomeInf = () => {
  return (
    <section class="section">
      <div className="container mx-auto mt-5">
        {HomeinfConf.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <div className="overflow-hidden flex flex-col justify-center items-center">
              {item.icon && <item.icon className="inline-block mr-1" />}
              {item.label}
              <p className="text-xs text-center mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeInf;
