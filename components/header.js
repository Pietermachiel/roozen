import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <Fragment>
      <header className={`max-w-screen-lg m-auto flex z-10 pb-10 relative`}>
        <div className="mx-21 mt-18 text-24 fira-400">
          <Link aria-label="" href="/">
            <a>
              <h6 className="">studio roozen /</h6>
            </a>
          </Link>
          <Link aria-label="Pieter Roozen" href="/pieterroozen">
            <a className="text-red-500 ">
              <h6 className="">
                <span className="spatie-pieter">pieter&nbsp;</span>
                roozen
              </h6>
            </a>
          </Link>
        </div>
        <div className="flex flex-row justify-between fixed top-0 right-0 z-10">
         <div className="w-150 pt-30">
            <Link href="/projects">
              <a className="mono">projecten</a>
            </Link>	
           </div> 	
           <div className="unvisable slide work-grid-item">
             {typeof window !== 'undefined' && window.location.pathname === "/" && (
             <div className="w-350 ml-28 h-350 mr-72 mt-72 relative z-0 hidden md:block">
             	<Image
								src="/img/pieter_logo.png"
								alt=""
								layout="fill"
							/>
            </div>
           )}           
           {typeof window !== 'undefined' && window.location.pathname.includes("/projects") && (
             <div className="w-450 hidden md:block">
             <Image
							// loader={myLoader}
							src="/img/studiointerieur.jpg"
							alt="Projects"
							// layout="fill"
							width={2680}
							height={870}
						/>
            </div>
           )}
           {typeof window !== 'undefined' && window.location.pathname === "/pieterroozen" && (
             <div className="w-450 hidden md:block">
             <Image
							// loader={myLoader}
							src="/img/klaprozen.jpg"
							alt="Pieter Roozen"
							// layout="fill"
							width={2680}
							height={870}
						/>
            </div>
           )}
           {typeof window !== 'undefined' && window.location.pathname === "/colofon" && (
             <div className="w-450 hidden md:block">
              <Image
                // loader={myLoader}
                src="/img/studioroozen.jpg"
                alt="Studio Roozen"
              // layout="fill"
              width={2680}
              height={870}
            />
            </div>
            )}
           {typeof window !== 'undefined' && window.location.pathname === "/proclaimer" && (
             <div className="w-450 hidden md:block"></div>
            )}
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
