import React from "react";
import Link from "next/link";
import Cta from "@/components/cta";

export default function Health_guide() {
  return (
    <>
      <main>
        <section id="health_guide">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <h2>The Ultimate Men’s Health Guide</h2>
                <p>
                  In general, men have poorer health habits and a shorter life
                  expectancy than women. This may be because they are more
                  likely to engage in unhealthy behavior, and are less likely
                  than women to adopt preventive health measures.
                </p>
                <div className="btn_blk">
                  <Link href="" className="site_btn">
                    Request a Consultation
                  </Link>
                </div>
              </div>
              <div className="col2">
                <div className="image">
                  <img src="/images/guide.png" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="popular_blog">
          <div className="contain">
            <h2>Our Popular Blog:</h2>
            <div className="flex">
              <div className="coll">
                <div className="inner">
                  <div className="image">
                    <img src="/images/pb1.png" />
                  </div>
                  <div className="text">
                    <div className="date">January 22. 2023</div>
                    <h4>The Truth About TRT and Hair Loss</h4>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium,.
                    </p>
                  </div>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="image">
                    <img src="/images/pb2.png" />
                  </div>
                  <div className="text">
                    <div className="date">January 22. 2023</div>
                    <h4>The Truth About TRT and Hair Loss</h4>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium,.
                    </p>
                  </div>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="image">
                    <img src="/images/pb3.png" />
                  </div>
                  <div className="text">
                    <div className="date">January 22. 2023</div>
                    <h4>The Truth About TRT and Hair Loss</h4>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium,.
                    </p>
                  </div>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="image">
                    <img src="/images/pb4.png" />
                  </div>
                  <div className="text">
                    <div className="date">January 22. 2023</div>
                    <h4>The Truth About TRT and Hair Loss</h4>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium,.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="heart_health">
          <div className="contain">
            <div className="head_text">
              <h2>Heart Health</h2>
            </div>
            <div className="flex">
              <div className="coll">
                <div className="image">
                  <img src="/images/s1.png" />
                  <div className="text">
                    <h4>What a 'Normal' Resting Heart Rate Should Be</h4>
                  </div>
                </div>
              </div>
              <div className="coll">
                <div className="image">
                  <img src="/images/s2.png" />
                  <div className="text">
                    <h4>Why Milk Could Make Heartburn Worse</h4>
                
                  </div>
                </div>
              </div>
              <div className="coll">
                <div className="image">
                  <img src="/images/s3.png" />
                  <div className="text">
                    <h4>Why Supplements Matter</h4>
                    <p>
                      Customized supplements to target specific health needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Cta />
      </main>
    </>
  );
}
