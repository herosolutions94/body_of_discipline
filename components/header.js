import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Header() {
  const router = useRouter();
  const path = router.pathname;
  const pagesWithClass = [
    "/testosterone-therapy",
    "/advanced-peptides",
    "/weight-loss",
    "/ed-medications",
    "/supplements",
    "/checkout",
    "/contact",
    "/faq",
    "/health-guide",
    "/how-it-works",
    "/plans-pricing",
    "/privacy-policy",
    "/providers",
    "/science",
    "/story",
    "/supplements",
    "/team",
    "/testimonials",
    "/testosetrone",
    "/weight-loss",
    "/terms-condition",
    "/reviews",

  ];

  const [toggle, setToggle] = useState(false);
  const ToggleAction = () => {
    setToggle(!toggle);
  };
  const [userDrop, setUserDrop] = useState(false);
  const ToggleUserDrop = () => {
    setUserDrop(!userDrop);
  };
  return (
    <div>
      <div className="topbar">
        <div className="contain">
          <div className="flex">
            <p>
              Free Consultation for New Clients! Call us at
              <a href="">(123) 456-7890 </a>
            </p>
            <div className="coll">
              <Link href="/science">Science</Link>
              <Link href="/health-guide">Health Guide</Link>
              <Link href="/contact">Contact us</Link>
            </div>
          </div>
        </div>
      </div>
      <header className={pagesWithClass.includes(path) ? "header-fix" : ""}>
        <div className="contain">
          <div className="logo">
            <Link href="/">
            {
              pagesWithClass.includes(path) ?
              <img src="/images/logo2.png" alt="" />
              :
              <img src="/images/logo.png" alt="" />
            }
              
            </Link>
          </div>
          <div
            className={toggle ? "toggle active" : "toggle"}
            onClick={ToggleAction}
          >
            <span></span>
          </div>
          <nav id="nav" className={toggle ? "active" : ""}>
            <ul>
              <li>
                <Link href="/testosterone-therapy" onClick={ToggleAction}>
                  Testosterone Therapy
                </Link>
              </li>
              <li>
                <Link href="/advanced-peptides" onClick={ToggleAction}>
                  Advanced Peptides
                </Link>
              </li>
              <li>
                <Link href="/weight-loss" onClick={ToggleAction}>
                  Weight Loss
                </Link>
              </li>
              <li>
                <Link href="/ed-medications" onClick={ToggleAction}>
                  ED Medications
                </Link>
              </li>
              <li>
                <Link href="/supplements" onClick={ToggleAction}>
                  Supplementsides
                </Link>
              </li>
            </ul>
          </nav>
          <div className="clearfix"></div>
        </div>
      </header>
    </div>
  );
}
