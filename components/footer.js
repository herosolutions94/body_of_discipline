import Link from "next/link";
import React from "react";

export default function Footer() {
  const data = {
    list_02: [
      {
        id: 1,
        text: "Home",
        link: "/",
      },
      {
        id: 2,
        text: "How it Works",
        link: "/how-it-works",
      },
      {
        id: 3,
        text: "Our Story",
        link: "/story",
      },
      {
        id: 4,
        text: "The Team",
        link: "/team",
      },
      {
        id: 5,
        text: "Science",
        link: "/science",
      },
      {
        id: 6,
        text: "Health Guide",
        link: "/health-guide",
      },
    ],
    list_03: [
      {
        id: 1,
        text: "FAQ’s",
        link: "/faq",
      },
      {
        id: 2,
        text: "Plans and Pricing",
        link: "/plans-pricing",
      },
      {
        id: 3,
        text: "Contact",
        link: "/contact",
      },
      {
        id: 4,
        text: "Privacy policies ",
        link: "/privacy-policy",
      },
      {
        id: 5,
        text: "Terms & Conditions",
        link: "/terms-conditions",
      },
    ],
  };
  return (
    <footer>
      <div className="contain">
        <div className="flex_row main_row row">
          <div className="col  col-lg">
            <p>
              Stay informed with expert health tips, lifestyle advice, and
              wellness guides tailored for you.
            </p>
            <ul class="social flex">
              <h4>Follow Us |</h4>
              <li>
                <a href="?" >
                  <img src="images/socialicons1.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="?" >
                  <img src="images/socialicons2.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="?">
                  <img src="images/socialicons3.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="?" >
                  <img src="images/socialicons4.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col mid_col">
            <div className="in_col">
              <h4>Quick Links</h4>
              <ul className="list">
                {data.list_02.map((val) => {
                  return (
                    <li key={val.id}>
                      <Link href={val.link}>{val.text}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col mid_col">
            <div className="in_col">
              <ul className="list">
                {data.list_03.map((val) => {
                  return (
                    <li key={val.id}>
                      <Link href={val.link}>{val.text}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col col-lg">
            <div className="in_col">
              <h4>Signup for Newsletters</h4>
              <div className="subscribe">
                <p>
                  Copy these components directly into your favorite's platforms.{" "}
                </p>
                <form>
                  <input
                    type="text"
                    className="input"
                    name=""
                    placeholder={"Enter your email address"}
                  />
                  <button type="submit">
                    <img src="/images/plain.svg" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p className="text-center">Copyright © 2024, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
