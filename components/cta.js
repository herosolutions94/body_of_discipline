import React from 'react'
import Link from "next/link";

export default function Cta() {
  return (
    <div>    <section id="cta">
    <div className="contain">
      <div className="outer">
        <div className="col1">
          <h2>Ready to Start Your Health Journey?</h2>
          <p>
            Get in touch with us today to schedule a free consultation and
            start achieving your health goals.
          </p>
        </div>
        <div className="col2">
          {" "}
          <div className="btn_blk">
            <Link href="" className="site_btn color">
              Request a Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}
