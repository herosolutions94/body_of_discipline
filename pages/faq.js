import React from "react";
import Cta from "@/components/cta";
import FAQ from "@/components/faq";

export default function Faq_pg() {
  return (
    <>
      <main>
        <section id="faq">
          <div className="contain">
            <div className="outer">
              <div className="content_center">
                <h2>Frequently Asked Question</h2>
              </div>
       
            <FAQ />
            </div>
          </div>
        </section>
        <Cta />
      </main>
    </>
  );
}
