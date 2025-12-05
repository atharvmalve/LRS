import React, { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Reveal } from "./Reveal";

export const FinalCTA: React.FC = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "atharvCTA" });

      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#ff3333" },
          dark: { "cal-brand": "#ff3333" },
        },
        hideEventTypeDetails: true,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section className="flex flex-col items-center text-center w-full pb-0 ">
      <Reveal>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8 leading-tight">
          Ready to See How This Works for Your Business?
        </h2>
      </Reveal>

      <Reveal delay={200}>
        <div
          className="
            md:w-screen
             w-full     /* ← MUCH wider on desktop */
            mx-auto 
            rounded-xl 
            
            
            backdrop-blur-sm 
            overflow-hidden 
            md:p-2
            p-0
          "
        >
          <Cal
            namespace="atharvCTA"
            calLink="atharvmalve/30min"
            config={{ layout: "month_view", theme: "dark" }}
            style={{
              width: "100%",
              height: "600px", // increased height for bigger layout
              overflow: "auto",
            }}
          />
        </div>
      </Reveal>
    </section>
  );
};
