"use client";
import React, { useEffect, useState } from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../features/auth/authSlice";
import { useRouter, usePathname } from "next/navigation";
import translations from "../../../i18";
import Link from "next/link";

function Sidebar({ showModal, showRegisterModal, darkModeHandle }) {
  const [darkThemeMode, setDarkThemeMode] = useState(false);
  const { user, token, isAuthenticated } = useSelector((state) => state.auth);
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const t = translations[selectedLanguage];
  useEffect(() => {
    // Check user's saved theme preference in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkThemeMode(savedTheme === "dark");
    } else {
      // Fallback to system preference if no theme is saved
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkThemeMode(systemPrefersDark);
    }
  }, []);
  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
    router.push("/landing-page");
  };
  const isActive = (path) => {
    console.log("Active path", path, "Active path name", pathname);

    return pathname === path ? "active" : ""; // Add 'active' class if the path matches
  };
  const popover = (
    <Popover id="popover-basic" rootClose="false">
      <Popover.Body className="p-1">
        <ul className="list-unstyled">
          <li>
            <a
              href="/my-profile"
              className="d-flex align-items-center gap-2 p-2 text-dark text-decoration-none rounded-5"
            >
              <span className="icon">
                <svg
                  height="15"
                  className="inline-block text-light-600 dark:text-dark-400 [.active-button_&amp;]:text-light-900 md:[.group-button:hover_&amp;]:text-light-900 dark:[.active-button_&amp;]:text-dark-100 dark:md:[.group-button:hover_&amp;]:text-light-100"
                  width="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                  stroke-width="1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Settings">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.6562 20.897L20.8733 18.6798L20.0925 15.843L20.4327 15.0305L23 13.5818V10.4464L20.44 8.99173L20.1055 8.18067L20.8961 5.34235L18.6774 3.12683L15.8403 3.90748L15.0296 3.56758L13.5808 1H10.4454L8.99072 3.56004L8.17985 3.89446L5.34198 3.10281L3.1267 5.31809L3.90748 8.15567L3.56758 8.96634L1 10.4151V13.5496L3.55774 15.0076L3.89252 15.8193L3.10197 18.6572L5.31809 20.8733L8.15567 20.0925L8.96644 20.4325L10.4153 22.999H13.5498L15.0067 20.4412L15.8183 20.1065L18.6562 20.897ZM18.8527 13.6256L17.9809 15.7078L18.6362 18.0886L18.0678 18.657L15.692 17.9951L13.609 18.8542L12.3873 20.999H11.5829L10.3714 18.8529L8.29155 17.9808L5.90947 18.6362L5.34203 18.0688L6.00385 15.693L5.14482 13.6101L3 12.3876V11.583L5.1471 10.3715L6.0192 8.29155L5.36375 5.90947L5.93001 5.34321L8.30576 6.00595L10.3895 5.14655L11.6093 3H12.4129L13.6245 5.1471L15.7044 6.0192L18.087 5.36362L18.6558 5.93166L17.9941 8.30696L18.8534 10.3906L21 11.6103V12.4139L18.8527 13.6256ZM12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
                    ></path>
                  </g>
                </svg>
              </span>
              <span className="link-name">Manage Profile</span>
            </a>
          </li>
          <li>
            <a
              href="/subscription"
              className="d-flex align-items-center gap-2 p-2 text-dark text-decoration-none rounded-5"
            >
              <span className="icon">
                <svg
                  height="15"
                  width="15"
                  className="inline-block aspect-square w-full shrink-0 rounded-full h-auto"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                  stroke-width="1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="UserCircleIcon">
                    <path
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      fill="none"
                      stroke="currentColor"
                    ></path>
                  </g>
                </svg>
              </span>
              <span className="link-name">Manage Subscription</span>
            </a>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );
  const popoverTheme = (
    <Popover id="popover-basic" rootClose="false">
      <Popover.Body className="p-2">
        <ul className="list-unstyled">
          <li>
            <a
              onClick={darkModeHandle}
              className="d-flex align-items-center gap-2 p-2 text-dark text-decoration-none rounded-5"
            >
              <span className="icon">
                <svg
                  height="15"
                  className="inline-block text-light-600 dark:text-dark-400 [.active-button_&amp;]:text-light-900 md:[.group-button:hover_&amp;]:text-light-900 dark:[.active-button_&amp;]:text-dark-100 dark:md:[.group-button:hover_&amp;]:text-light-100"
                  width="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                  stroke-width="1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Settings">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.6562 20.897L20.8733 18.6798L20.0925 15.843L20.4327 15.0305L23 13.5818V10.4464L20.44 8.99173L20.1055 8.18067L20.8961 5.34235L18.6774 3.12683L15.8403 3.90748L15.0296 3.56758L13.5808 1H10.4454L8.99072 3.56004L8.17985 3.89446L5.34198 3.10281L3.1267 5.31809L3.90748 8.15567L3.56758 8.96634L1 10.4151V13.5496L3.55774 15.0076L3.89252 15.8193L3.10197 18.6572L5.31809 20.8733L8.15567 20.0925L8.96644 20.4325L10.4153 22.999H13.5498L15.0067 20.4412L15.8183 20.1065L18.6562 20.897ZM18.8527 13.6256L17.9809 15.7078L18.6362 18.0886L18.0678 18.657L15.692 17.9951L13.609 18.8542L12.3873 20.999H11.5829L10.3714 18.8529L8.29155 17.9808L5.90947 18.6362L5.34203 18.0688L6.00385 15.693L5.14482 13.6101L3 12.3876V11.583L5.1471 10.3715L6.0192 8.29155L5.36375 5.90947L5.93001 5.34321L8.30576 6.00595L10.3895 5.14655L11.6093 3H12.4129L13.6245 5.1471L15.7044 6.0192L18.087 5.36362L18.6558 5.93166L17.9941 8.30696L18.8534 10.3906L21 11.6103V12.4139L18.8527 13.6256ZM12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
                    ></path>
                  </g>
                </svg>
              </span>
              <span className="link-name">{t?.Mode_1 || "Light Mode"}</span>
            </a>
          </li>
          <li>
            <a
              onClick={darkModeHandle}
              className="d-flex align-items-center gap-2 p-2 text-dark text-decoration-none rounded-5"
            >
              <span className="icon">
                <svg
                  height="15"
                  width="15"
                  className="inline-block aspect-square w-full shrink-0 rounded-full h-auto"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                  stroke-width="1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="UserCircleIcon">
                    <path
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      fill="none"
                      stroke="currentColor"
                    ></path>
                  </g>
                </svg>
              </span>
              <span className="link-name">{t?.Mode_2 || "Dark Mode"}</span>
            </a>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );
  const logoutPopover = (
    <Popover id="popover-basic" rootClose="false">
      <Popover.Body className="p-2">
        <ul className="list-unstyled">
          {isAuthenticated && (
            <>
              <li>
                <a
                  href="/my-subscription"
                  className="d-flex align-items-center gap-2 p-2 text-dark text-decoration-none rounded-5"
                >
                  <span className="icon">
                    <svg
                      height="15"
                      width="15"
                      className="inline-block text-light-600 dark:text-dark-400 [.active-button_&amp;]:text-light-900 md:[.group-button:hover_&amp;]:text-light-900 dark:[.active-button_&amp;]:text-dark-100 dark:md:[.group-button:hover_&amp;]:text-light-100"
                      width="22"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none"
                      stroke-width="1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Avatar">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM19.3995 17.1246C20.4086 15.6703 21 13.9042 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.9042 3.59138 15.6703 4.6005 17.1246C5.72595 15.6381 8.3706 15 12 15C15.6294 15 18.274 15.6381 19.3995 17.1246ZM17.9647 18.7398C17.672 17.6874 15.5694 17 12 17C8.43062 17 6.328 17.6874 6.03532 18.7398C7.6233 20.1462 9.71194 21 12 21C14.2881 21 16.3767 20.1462 17.9647 18.7398ZM12 15C9.76086 15 8 13.4274 8 10C8 7.75576 9.5791 6 12 6C14.4142 6 16 7.92158 16 10.2C16 13.4796 14.2181 15 12 15ZM10 10C10 12.2693 10.8182 13 12 13C13.1777 13 14 12.2984 14 10.2C14 8.95042 13.2157 8 12 8C10.7337 8 10 8.81582 10 10Z"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span className="link-name">{"My Subscription"}</span>
                </a>
              </li>
              <li>
                <a
                  href="/my-profile"
                  className="d-flex align-items-center gap-2 p-2 text-dark text-decoration-none rounded-5"
                >
                  <span className="icon">
                    <svg
                      height="15"
                      width="15"
                      className="inline-block text-light-600 dark:text-dark-400 [.active-button_&amp;]:text-light-900 md:[.group-button:hover_&amp;]:text-light-900 dark:[.active-button_&amp;]:text-dark-100 dark:md:[.group-button:hover_&amp;]:text-light-100"
                      width="22"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none"
                      stroke-width="1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Avatar">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM19.3995 17.1246C20.4086 15.6703 21 13.9042 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.9042 3.59138 15.6703 4.6005 17.1246C5.72595 15.6381 8.3706 15 12 15C15.6294 15 18.274 15.6381 19.3995 17.1246ZM17.9647 18.7398C17.672 17.6874 15.5694 17 12 17C8.43062 17 6.328 17.6874 6.03532 18.7398C7.6233 20.1462 9.71194 21 12 21C14.2881 21 16.3767 20.1462 17.9647 18.7398ZM12 15C9.76086 15 8 13.4274 8 10C8 7.75576 9.5791 6 12 6C14.4142 6 16 7.92158 16 10.2C16 13.4796 14.2181 15 12 15ZM10 10C10 12.2693 10.8182 13 12 13C13.1777 13 14 12.2984 14 10.2C14 8.95042 13.2157 8 12 8C10.7337 8 10 8.81582 10 10Z"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span className="link-name">{t?.Tb_2 || "My Profile"}</span>
                </a>
              </li>
            </>
          )}
        </ul>
      </Popover.Body>
    </Popover>
  );
  return (
    <>
      <section className="sidebar pt-3 flex-column position-fixed d-flex">
        <div className="top-nav grow d-flex flex-column gap-3">
          <div className="logo d-flex align-items-center pl-1">
            <a href="/" className="text-decoration-none text-dark d-flex gap-1">
              <p
                className="desktop-view"
                style={{ color: "#F77E21", fontWeight: "bold" }}
              >
                Footo.
              </p>
              <p style={{ color: "#ccc", fontWeight: "bold" }}>ai</p>
            </a>
            <p className="mobile-view">Footo.ai</p>
          </div>
          <ul className="list-unstyled d-flex flex-column gap-2">
            <li>
              <a
                href="/"
                className={`d-flex align-items-center gap-2 p-2 rounded-5 ${isActive(
                  "/"
                )}`}
              >
                <span className="icon">
                  <svg
                    height="22"
                    class="inline-block relative"
                    width="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                    stroke-width="1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Compass">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16.9471 7.05269C17.2149 7.32052 17.3085 7.71669 17.1887 8.07602L15.0687 14.436C14.9692 14.7346 14.7348 14.9689 14.4362 15.0685L8.07623 17.1885C7.7169 17.3083 7.32073 17.2147 7.0529 16.9469C6.78507 16.6791 6.69154 16.2829 6.81132 15.9236L8.93132 9.56356C9.03086 9.26496 9.26517 9.03064 9.56378 8.93111L15.9238 6.81111C16.2831 6.69133 16.6793 6.78485 16.9471 7.05269ZM10.6706 10.6704L9.34115 14.6587L13.3294 13.3292L14.6589 9.34093L10.6706 10.6704Z"
                      ></path>
                    </g>
                  </svg>
                </span>
                <span className="link-name">
                  {t?.NavigationTitle_2 || "Discover"}
                </span>
              </a>
            </li>
            {isAuthenticated && (
              <li>
                <Link
                  href="/account/my-images"
                  className="d-flex align-items-center gap-2 p-2 rounded-5"
                >
                  <span className="icon custom-icon">
                    <svg
                      version="1.0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="22px"
                      height="22px"
                      viewBox="0 0 300.000000 300.000000"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      {" "}
                      <g
                        transform="translate(0.000000,300.000000) scale(0.050000,-0.050000)"
                        fill="#000000"
                        stroke="none"
                      >
                        {" "}
                        <path d="M230 5187 c-245 -129 -229 24 -230 -2183 0 -2200 -14 -2064 224 -2186 116 -59 5436 -59 5552 0 238 122 224 -13 224 2182 0 2195 14 2060 -224 2182 -105 54 -5444 59 -5546 5z m5310 -2187 l0 -1760 -155 0 -155 1 -470 754 c-258 415 -494 780 -523 810 -66 67 -206 77 -275 20 -46 -39 -502 -761 -501 -794 0 -12 107 -192 236 -401 l236 -380 -89 -6 c-116 -8 -51 -97 -735 996 -327 523 -625 1000 -664 1060 -84 134 -144 181 -245 195 -144 19 -187 -28 -501 -541 -156 -255 -456 -745 -667 -1089 l-382 -625 -95 0 -95 0 0 1760 0 1760 2540 0 2540 0 0 -1760z" />{" "}
                        <path d="M4068 4369 c-287 -106 -435 -459 -310 -739 205 -462 889 -424 1032 57 129 435 -298 838 -722 682z" />{" "}
                      </g>{" "}
                    </svg>
                  </span>
                  <span className="link-name">
                    {t?.NavigationTitle_3 || "My Images"}
                  </span>
                </Link>
              </li>
            )}
            {isAuthenticated && (
              <li>
                <a className="d-flex align-items-center gap-2 p-2 rounded-5">
                  <span className="icon custom-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      shape-rendering="geometricPrecision"
                      text-rendering="geometricPrecision"
                      image-rendering="optimizeQuality"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill-rule="nonzero"
                        d="M255.99 0c70.68 0 134.7 28.66 181.02 74.98C483.33 121.3 512 185.31 512 256c0 70.68-28.67 134.69-74.99 181.01C390.69 483.33 326.67 512 255.99 512S121.3 483.33 74.98 437.01C28.66 390.69 0 326.68 0 256c0-70.67 28.66-134.7 74.98-181.02C121.3 28.66 185.31 0 255.99 0zm77.4 269.81c13.75-8.88 13.7-18.77 0-26.63l-110.27-76.77c-11.19-7.04-22.89-2.9-22.58 11.72l.44 154.47c.96 15.86 10.02 20.21 23.37 12.87l109.04-75.66zm79.35-170.56c-40.1-40.1-95.54-64.92-156.75-64.92-61.21 0-116.63 24.82-156.74 64.92-40.1 40.11-64.92 95.54-64.92 156.75 0 61.22 24.82 116.64 64.92 156.74 40.11 40.11 95.53 64.93 156.74 64.93 61.21 0 116.65-24.82 156.75-64.93 40.11-40.1 64.93-95.52 64.93-156.74 0-61.22-24.82-116.64-64.93-156.75z"
                      />
                    </svg>
                  </span>
                  <span className="link-name">
                    {t?.NavigationTitle_4 || "My Videos"}
                  </span>
                </a>
              </li>
            )}
            <li>
              <a
                href={`https://docs.footo.ai/${selectedLanguage}`}
                className={`d-flex align-items-center gap-2 p-2 rounded-5 ${isActive(
                  "/update"
                )}`}
              >
                <span className="icon">
                  <svg
                    height="22"
                    class="inline-block relative"
                    width="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                    stroke-width="1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="ColorSwatchIcon">
                      <path
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"
                        fill="none"
                        stroke="currentColor"
                      ></path>
                    </g>
                  </svg>
                </span>
                <span className="link-name">
                  {t?.NavigationTitle_5 || "Use Cases"}
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="bottom-nav grow d-flex flex-column gap-3 justify-content-end">
          <ul className="list-unstyled d-flex flex-column gap-2">
            {isAuthenticated && (
              <li>
                <a
                  href="/subscription"
                  className={`d-flex align-items-center gap-2 p-2 rounded-5 ${isActive(
                    "/update"
                  )}`}
                >
                  <span className="icon">
                    <svg
                      height="22"
                      class="inline-block relative"
                      width="22"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none"
                      stroke-width="1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Avatar">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM19.3995 17.1246C20.4086 15.6703 21 13.9042 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.9042 3.59138 15.6703 4.6005 17.1246C5.72595 15.6381 8.3706 15 12 15C15.6294 15 18.274 15.6381 19.3995 17.1246ZM17.9647 18.7398C17.672 17.6874 15.5694 17 12 17C8.43062 17 6.328 17.6874 6.03532 18.7398C7.6233 20.1462 9.71194 21 12 21C14.2881 21 16.3767 20.1462 17.9647 18.7398ZM12 15C9.76086 15 8 13.4274 8 10C8 7.75576 9.5791 6 12 6C14.4142 6 16 7.92158 16 10.2C16 13.4796 14.2181 15 12 15ZM10 10C10 12.2693 10.8182 13 12 13C13.1777 13 14 12.2984 14 10.2C14 8.95042 13.2157 8 12 8C10.7337 8 10 8.81582 10 10Z"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span className="link-name">{t?.Tb_1 || "Subscription"}</span>
                </a>
              </li>
            )}
            <li>
              <a
                href="/help"
                className={`d-flex align-items-center gap-2 p-2 rounded-5 ${isActive(
                  "/help"
                )}`}
              >
                <span className="icon">
                  <svg
                    height="24"
                    class="inline-block "
                    width="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                    stroke-width="1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="CircleQuestion">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12.0003 16.9983C12.5528 16.9983 13.0007 16.5506 13.0007 15.9983C13.0007 15.4461 12.5528 14.9983 12.0003 14.9983C11.4479 14.9983 11 15.4461 11 15.9983C11 16.5506 11.4479 16.9983 12.0003 16.9983ZM11 14H13C13 13.2016 13.1254 13.0553 13.9472 12.6444C15.3754 11.9303 16 11.2016 16 9.5C16 7.32063 14.2843 6 12 6C9.79086 6 8 7.79086 8 10H10C10 8.89543 10.8954 8 12 8C13.2772 8 14 8.55641 14 9.5C14 10.2984 13.8746 10.4447 13.0528 10.8556C11.6246 11.5697 11 12.2984 11 14Z"
                      ></path>
                    </g>
                  </svg>
                </span>
                <span className="link-name">
                  {t?.NavigationTitle_6 || "FAQ"}
                </span>
              </a>
            </li>
            <li>
              <OverlayTrigger
                trigger="click"
                rootClose
                placement="right"
                overlay={popoverTheme}
              >
                <a className="d-flex align-items-center gap-2 p-2 rounded-5">
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      height="24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      ></path>
                    </svg>
                  </span>
                  <span className="link-name">
                    {darkThemeMode
                      ? `${t?.Mode_2 || "Dark Mode"}`
                      : `${t?.Mode_1 || "Light Mode"}`}
                  </span>
                </a>
              </OverlayTrigger>
            </li>

            {isAuthenticated ? (
              <>
                {/* <li>
                                    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                                        <a className="d-flex align-items-center gap-2 p-2 rounded-5">
                                            <span className="icon">
                                            </span>
                                            <span className="link-name">My Profile</span>
                                        </a>
                                    </OverlayTrigger>
                                </li> */}
                <li>
                  <a className="d-flex align-items-center gap-2 p-2 rounded-5">
                    <div onClick={handleLogout}>
                      <span className="icon">
                        <svg
                          height="22"
                          width="22"
                          class="inline-block aspect-square w-full shrink-0 rounded-full h-auto"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="none"
                          stroke-width="1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="UserCircleIcon">
                            <path
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              fill="none"
                              stroke="currentColor"
                            ></path>
                          </g>
                        </svg>
                      </span>
                      <span className=" ml-2 link-name">
                        {t?.NavigationTitle_9 || "Logout"}
                      </span>
                    </div>
                    <OverlayTrigger
                      trigger="click"
                      rootClose
                      placement="right"
                      overlay={logoutPopover}
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          height="16"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                          ></path>
                        </svg>
                      </span>
                    </OverlayTrigger>
                  </a>

                  {/* <a
                                        onClick={handleLogout}
                                        className="d-flex align-items-center gap-2 p-2 rounded-5"
                                    >
                                        <span className="icon">
                                        </span>
                                        <span className="link-name">Logout</span>
                                    </a> */}
                </li>
              </>
            ) : (
              <>
                <li>
                  <a
                    onClick={showModal}
                    className="d-flex align-items-center gap-2 p-2 rounded-5"
                  >
                    <span className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        height="22"
                        width="22"
                        class="aspect-square w-full shrink-0 rounded-full h-auto"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </span>
                    <span className="link-name">Sign In</span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={showRegisterModal}
                    className="d-flex align-items-center gap-2 p-2 rounded-5"
                  >
                    <span className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        height="22"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        ></path>
                      </svg>
                    </span>
                    <span className="link-name">Sign Up</span>
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </section>
    </>
  );
}
export default Sidebar;
