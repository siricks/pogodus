import React from "react";

const AddCard = (props) => {
    return (
        <div className="add__card">
            <div className="header__container">
                <span className="card__title">Add city</span>
            </div>
            <div className="body__container">
                <svg className="add__icon" id="Plus_Icon" data-name="Plus Icon" viewBox="1454.4 326.4 209.1 209.1">
                    <defs>
                        <filter id="Ellipse_7" width="209.1" height="209.1" x="1454.4" y="326.4"
                                filterUnits="userSpaceOnUse">
                            <feOffset dy="3"/>
                            <feGaussianBlur result="blur" stdDeviation="3"/>
                            <feFlood floodColor="#333" floodOpacity=".1"/>
                            <feComposite in2="blur" operator="in"/>
                            <feComposite in="SourceGraphic"/>
                        </filter>
                    </defs>
                    <g filter="url(#Ellipse_7)">
                        <circle id="Ellipse_7-2" cx="95.6" cy="95.6" r="95.6" fill="#f5f8ff" data-name="Ellipse 7"
                                transform="translate(1463.4 332.4)"/>
                    </g>
                    <rect id="Rectangle_3" width="12.8" height="142.9" className="cls-299" data-name="Rectangle 3"
                          rx="5" transform="translate(1552.6 358.1)"/>
                    <rect id="Rectangle_4" width="12.8" height="142.9" className="cls-299" data-name="Rectangle 4"
                          rx="5" transform="rotate(90 603.6 1026.8)"/>
                </svg>
                <svg className="city__illustration" id="City_Illustration" data-name="City Illustration"
                     viewBox="1367.8 616.6 403.6 331.4">
                    <path id="City_grass" d="M1488.3 646.3v-30H1892v30z" className="cls-1" data-name="City grass"
                          transform="translate(-120.5 301.7)"/>
                    <g id="Buidings">
                        <g id="Buiding_Shadow" data-name="Buiding Shadow">
                            <path id="Path_23" d="M1488.3 777.8V616.3h26.6v161.5z" className="cls-2" data-name="Path 23"
                                  transform="translate(-120.5 48.4)"/>
                            <path id="Path_29" d="M1488.3 788.9V616.3h26.6V789z" className="cls-2" data-name="Path 29"
                                  transform="translate(-30.5 5.3)"/>
                            <path id="Path_21" d="M1488.3 783.8V616.3h96.8v167.5z" className="cls-2" data-name="Path 21"
                                  transform="translate(176.5 45.4)"/>
                            <path id="Path_30" d="M1488.3 735V616.3h34.3V735z" className="cls-2" data-name="Path 30"
                                  transform="translate(128.5 48.2)"/>
                            <path id="Path_31" d="M1488.3 811V616.3h34.3V811z" className="cls-2" data-name="Path 31"
                                  transform="translate(28.5 5.2)"/>
                        </g>
                        <g id="Core">
                            <path id="Path_8" d="M1488.3 771.2V616.3h59.7v154.9z" className="cls-3" data-name="Path 8"
                                  transform="translate(-112 54)"/>
                            <path id="Path_9" d="M1488.3 825V616.2h96.8V825z" className="cls-1" data-name="Path 9"
                                  transform="translate(-43.5 .3)"/>
                            <path id="Path_10" fill="#7affcb" d="M1488.3 660.7v-44.4h96.8v44.4z" data-name="Path 10"
                                  transform="translate(62.5 164.4)"/>
                            <path id="Path_11" d="M1488.3 771.2V616.3h96.8v154.9z" className="cls-3" data-name="Path 11"
                                  transform="translate(168.5 54)"/>
                        </g>
                    </g>
                    <path id="City_water" fill="#8091ff" d="M1488.3 692.6v-76.3H1892v76.3z" data-name="City water"
                          transform="translate(-120.5 217.2)"/>
                    <g id="Windows" transform="translate(8 40)">
                        <path id="Path_13" d="M1488.3 628.5v-12.2h36.6v12.2z" className="cls-6" data-name="Path 13"
                              transform="translate(-43.2 -19.8)"/>
                        <path id="Path_14" d="M1488.3 628.5v-12.2h36.6v12.2z" className="cls-7" data-name="Path 14"
                              transform="translate(-43.2 2.2)"/>
                        <path id="Path_25" d="M1488.3 628.5v-12.2h83.7v12.2z" className="cls-7" data-name="Path 25"
                              transform="translate(168.2 110.2)"/>
                        <path id="Path_26" d="M1488.3 628.5v-12.2h83.7v12.2z" className="cls-7" data-name="Path 26"
                              transform="translate(169.2 132.2)"/>
                        <path id="Path_18" fill="#a1feda" d="M1488.3 628.5v-12.2h36.6v12.2z" data-name="Path 18"
                              transform="translate(-108.2 26.2)"/>
                        <path id="Path_20" fill="#3564fb" d="M1488.3 628.5v-12.2h36.6v12.2z" data-name="Path 20"
                              transform="translate(-108.2 146.2)"/>
                        <path id="Path_19" fill="#a2b8ff" d="M1488.3 665.4v-49h36.6v49z" data-name="Path 19"
                              transform="translate(-108.2 54.3)"/>
                        <path id="Path_15" d="M1488.3 651v-34.7h36.6V651z" className="cls-11" data-name="Path 15"
                              transform="translate(-3.2 47.2)"/>
                        <path id="Path_16" fill="#3b5dca" d="M1488.3 651v-34.7h36.6V651z" data-name="Path 16"
                              transform="translate(-46.2 46.2)"/>
                        <path id="Path_17" fill="#597ff7" d="M1488.3 651v-34.7h36.6V651z" data-name="Path 17"
                              transform="translate(-12.2 117.2)"/>
                        <path id="Path_27" d="M1488.3 641.2v-24.9h62.9v24.9z" className="cls-6" data-name="Path 27"
                              transform="translate(169.1 28.2)"/>
                        <path id="Path_28" d="M1488.3 634.3v-18h17.5v18z" className="cls-14" data-name="Path 28"
                              transform="translate(194.4 56)"/>
                        <path id="Path_46" d="M1488.3 634.3v-18h17.5v18z" className="cls-14" data-name="Path 46"
                              transform="translate(194.4 82)"/>
                        <path id="Path_47" d="M1488.3 634.3v-18h17.5v18z" className="cls-14" data-name="Path 47"
                              transform="translate(169.4 82)"/>
                        <path id="Path_48" d="M1488.3 634.3v-18h17.5v18z" className="cls-7" data-name="Path 48"
                              transform="translate(169.4 56)"/>
                        <path id="Path_44" d="M1488.3 634.3v-18h17.5v18z" className="cls-11" data-name="Path 44"
                              transform="translate(232.4 56)"/>
                        <path id="Path_45" fill="#aebff7" d="M1488.3 634.3v-18h17.5v18z" data-name="Path 45"
                              transform="translate(232.4 84)"/>
                    </g>
                    <path id="Bridge" fill="#ccc8ff"
                          d="M1580.5 875.5c1-.3-17.9-39 .2-85.3h40s-11.4 42.6 5.5 85.3c-47.4-1.7-46.7.3-45.7 0z"
                          transform="translate(8 40)"/>
                    <g id="Water_Turbulence" data-name="Water Turbulence" transform="translate(8 40)">
                        <g id="Group_4" data-name="Group 4">
                            <path id="Path_42" d="M1386.3 831.3s18.2 3.5 21.8-5.2" className="cls-17"
                                  data-name="Path 42" transform="translate(11.8 2)"/>
                            <path id="Path_43" d="M1401.3 831.3a23 23 0 0 1-3.7.7c-3.8.3-9.7-.2-11.3-5.9"
                                  className="cls-17" data-name="Path 43" transform="translate(32.1 2)"/>
                        </g>
                        <g id="Group_5" data-name="Group 5" transform="translate(74 -14)">
                            <path id="Path_42-2" d="M1386.3 831.3s18.2 3.5 21.8-5.2" className="cls-17"
                                  data-name="Path 42" transform="translate(11.8 2)"/>
                            <path id="Path_43-2" d="M1401.3 831.3a23 23 0 0 1-3.7.7c-3.8.3-9.7-.2-11.3-5.9"
                                  className="cls-17" data-name="Path 43" transform="translate(32.1 2)"/>
                        </g>
                        <g id="Group_8" data-name="Group 8" transform="translate(85 17)">
                            <path id="Path_42-3" d="M1386.3 831.3s18.2 3.5 21.8-5.2" className="cls-17"
                                  data-name="Path 42" transform="translate(11.8 2)"/>
                            <path id="Path_43-3" d="M1401.3 831.3a23 23 0 0 1-3.7.7c-3.8.3-9.7-.2-11.3-5.9"
                                  className="cls-17" data-name="Path 43" transform="translate(32.1 2)"/>
                        </g>
                        <g id="Group_17" data-name="Group 17" transform="translate(315 14)">
                            <path id="Path_42-4" d="M1386.3 831.3s18.2 3.5 21.8-5.2" className="cls-17"
                                  data-name="Path 42" transform="translate(11.8 2)"/>
                            <path id="Path_43-4" d="M1401.3 831.3a23 23 0 0 1-3.7.7c-3.8.3-9.7-.2-11.3-5.9"
                                  className="cls-17" data-name="Path 43" transform="translate(32.1 2)"/>
                        </g>
                        <g id="Group_18" data-name="Group 18" transform="translate(245 -17)">
                            <path id="Path_42-5" d="M1386.3 831.3s18.2 3.5 21.8-5.2" className="cls-17"
                                  data-name="Path 42" transform="translate(11.8 2)"/>
                            <path id="Path_43-5" d="M1401.3 831.3a23 23 0 0 1-3.7.7c-3.8.3-9.7-.2-11.3-5.9"
                                  className="cls-17" data-name="Path 43" transform="translate(32.1 2)"/>
                        </g>
                    </g>
                    <g id="Fence" transform="translate(8 40)">
                        <g id="Poles">
                            <rect id="Rectangle_13" width="5" height="25" className="cls-18" data-name="Rectangle 13"
                                  rx="2" transform="translate(1375 858)"/>
                            <rect id="Rectangle_18" width="5" height="25" className="cls-18" data-name="Rectangle 18"
                                  rx="2" transform="translate(1450 858)"/>
                            <rect id="Rectangle_21" width="5" height="25" className="cls-18" data-name="Rectangle 21"
                                  rx="2" transform="translate(1525 858)"/>
                            <rect id="Rectangle_14" width="5" height="25" className="cls-18" data-name="Rectangle 14"
                                  rx="2" transform="translate(1400 858)"/>
                            <rect id="Rectangle_17" width="5" height="25" className="cls-18" data-name="Rectangle 17"
                                  rx="2" transform="translate(1475 858)"/>
                            <rect id="Rectangle_20" width="5" height="25" className="cls-18" data-name="Rectangle 20"
                                  rx="2" transform="translate(1550 858)"/>
                            <rect id="Rectangle_15" width="5" height="25" className="cls-18" data-name="Rectangle 15"
                                  rx="2" transform="translate(1425 858)"/>
                            <rect id="Rectangle_16" width="5" height="25" className="cls-18" data-name="Rectangle 16"
                                  rx="2" transform="translate(1500 858)"/>
                        </g>
                        <g id="Ropes">
                            <path id="Path_45-2" d="M1377.5 858c.4-1 14.2 17 25.4 0" className="cls-19"
                                  data-name="Path 45" transform="translate(0 4)"/>
                            <path id="Path_46-2" d="M1377.5 858c.4-1 14.2 17 25.4 0" className="cls-19"
                                  data-name="Path 46" transform="translate(25 5)"/>
                            <path id="Path_47-2" d="M1377.5 858c.4-1 14.2 17 25.4 0" className="cls-19"
                                  data-name="Path 47" transform="translate(50 3)"/>
                            <path id="Path_48-2" d="M1377.5 858c.4-1 14.2 17 25.4 0" className="cls-19"
                                  data-name="Path 48" transform="translate(75 5)"/>
                            <path id="Path_49" d="M1377.5 858c.4-1 14.2 17 25.4 0" className="cls-19"
                                  data-name="Path 49" transform="translate(101 3)"/>
                            <path id="Path_50" d="M1377.5 858c.4-1 14.2 17 25.4 0" className="cls-19"
                                  data-name="Path 50" transform="translate(125 7)"/>
                            <path id="Path_51" d="M1377.5 858c.4-1 14.2 17 25.4 0" className="cls-19"
                                  data-name="Path 51" transform="translate(150 5)"/>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default AddCard;
