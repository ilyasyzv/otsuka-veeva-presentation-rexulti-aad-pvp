import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

import { STORAGE_KEYS } from '@/storage/storage';

import './AnimationStudyGraphic.scss';

const AnimationStudyGraphic = () => {
  const [animationPlay, setAnimationPlay] = useState(true);

  const lineGray = useRef(null);
  const lineOrange = useRef(null);
  const lineGreen = useRef(null);

  useEffect(() => {
    const ls = sessionStorage.getItem(STORAGE_KEYS.animationR332);
    if (ls === '1') {
      setAnimationPlay(false);
    } else {
      startAnimate();
    }
  }, []);

  const startAnimate = () => {
    gsap
      .timeline({})
      .addLabel('startLine1', 0)
      .addLabel('startLine2', 1)
      .addLabel('startLine3', 2)

      // Line 1
      .to(lineGray.current, { strokeDashoffset: '0', duration: 1.9 }, 'startLine1')
      .to(
        '#circle-1',
        { opacity: 1, duration: 0.5 },
        'startLine1+=1.35',
      )
      .to(
        '#circle-2',
        { opacity: 1, duration: 0.5 },
        'startLine1+=1.6',
      )
      .to(
        '#circle-3',
        { opacity: 1, duration: 0.5 },
        'startLine1+=1.75',
      )
      .to(
        '#circle-4',
        { opacity: 1, duration: 0.5 },
        'startLine1+=1.9',
      )
      .to(
        '#circle-5',
        { opacity: 1, duration: 0.5 },
        'startLine1+=2.15',
      )
      .to(
        '#circle-6',
        { opacity: 1, duration: 0.5 },
        'startLine1+=2.21',
      )
      .to(
        '#circle-7',
        { opacity: 1, duration: 0.5 },
        'startLine1+=2.27',
      )

      // Line 2
      .to(lineOrange.current, { strokeDashoffset: '0', duration: 1.9 }, 'startLine2')
      .to(
        '#triangle-orange-1',
        { opacity: 1, duration: 0.5 },
        'startLine2+=1.35',
      )
      .to(
        '#triangle-orange-2',
        { opacity: 1, duration: 0.5 },
        'startLine2+=1.6',
      )
      .to(
        '#triangle-orange-3',
        { opacity: 1, duration: 0.5 },
        'startLine2+=1.75',
      )
      .to(
        '#triangle-orange-4',
        { opacity: 1, duration: 0.5 },
        'startLine2+=1.9',
      )
      .to(
        '#triangle-orange-5',
        { opacity: 1, duration: 0.5 },
        'startLine2+=2.15',
      )
      .to(
        '#triangle-orange-6',
        { opacity: 1, duration: 0.5 },
        'startLine2+=2.21',
      )
      .to(
        '#triangle-orange-7',
        { opacity: 1, duration: 0.5 },
        'startLine2+=2.27',
      )

      // Line 3
      .to(lineGreen.current, { strokeDashoffset: '0', duration: 1.9 }, 'startLine3')
      .to(
        '#triangle-green-1',
        { opacity: 1, duration: 0.5 },
        'startLine3+=1.35',
      )
      .to(
        '#triangle-green-2',
        { opacity: 1, duration: 0.5 },
        'startLine3+=1.6',
      )
      .to(
        '#triangle-green-3',
        { opacity: 1, duration: 0.5 },
        'startLine3+=1.75',
      )
      .to(
        '#triangle-green-4',
        { opacity: 1, duration: 0.5 },
        'startLine3+=1.9',
      )
      .to(
        '#triangle-green-5',
        { opacity: 1, duration: 0.5 },
        'startLine3+=2.15',
      )
      .to(
        '#triangle-green-6',
        { opacity: 1, duration: 0.5 },
        'startLine3+=2.21',
      )
      .to(
        '#triangle-green-7',
        { opacity: 1, duration: 0.5 },
        'startLine3+=2.27',
      )

    sessionStorage.setItem(STORAGE_KEYS.animationR332, '1');
  };

  return (
    <div className={animationPlay ? '' : 'disable-animation'}>
      <div className='click-area'/>
      <div className='chart-wrapper study-graphic'>
        <svg width="500" height="304.4" viewBox="0 0 1000 608.834">
          <defs>
            <linearGradient id="linear-gradient" x1="1" y1="1" x2="0.29" y2="0.5" gradientUnits="objectBoundingBox">
              <stop offset="0" stop-color="#fada40"/>
              <stop offset="1" stop-color="#ffa05e"/>
            </linearGradient>
            <radialGradient id="radial-gradient" cx="0.176" cy="0.5" r="0.878" gradientTransform="matrix(0.608, 0.794, -0.749, 0.573, 0.444, 0.073)" gradientUnits="objectBoundingBox">
              <stop offset="0" stop-color="#3b6e17"/>
              <stop offset="1" stop-color="#294339"/>
            </radialGradient>
            <linearGradient id="linear-gradient-8" x1="0.5" y1="0.5" x2="0" y2="0.5" gradientUnits="objectBoundingBox">
              <stop offset="0" stop-color="#fdcf00"/>
              <stop offset="1" stop-color="#ffa05e"/>
            </linearGradient>
          </defs>
          <path id="line-orange" ref={lineOrange} d="M133.635,146.062,283.084,279.615,422.03,333.921l144.617,48.785,143.5,65.529L851.2,471.691,996.962,483.7" transform="translate(-28.725 -90.062)" fill="none" stroke="#fdcf00" stroke-miterlimit="10" stroke-width="5"/>
          <g id="Group_10781" data-name="Group 10781" transform="translate(-270 -482.645)">
            <g id="Group_10780" data-name="Group 10780" transform="translate(310 523.164)">
              <g id="Rectangle_670" data-name="Rectangle 670" transform="translate(895 309.15)" fill="rgba(253,207,0,0.2)" stroke="#fdcf00" stroke-width="3" stroke-dasharray="10 7" opacity="0.995">
                <rect width="65" height="176" rx="11" stroke="none"/>
                <rect x="1.5" y="1.5" width="62" height="173" rx="9.5" fill="none"/>
              </g>
              <g id="Group_10778" data-name="Group 10778" transform="translate(0 0)">
                <path id="triangle-orange-1" data-name="Path 2785" d="M281.293,214.319,269.939,235.8a1.415,1.415,0,0,0,1.159,2.074l26.733,1.741a1.416,1.416,0,0,0,1.272-2.194L283.725,214.2A1.416,1.416,0,0,0,281.293,214.319Z" transform="translate(-212.173 -216.297)" stroke="#fff" stroke-miterlimit="10" stroke-width="2" fill="url(#linear-gradient)"/>
                <line id="Line_828" data-name="Line 828" x2="868.532" transform="translate(64.91 492.1)" fill="none" stroke="#9d9d9d" stroke-miterlimit="10" stroke-width="3"/>
                <line id="Line_829" data-name="Line 829" x2="868.532" transform="translate(64.91 396.035)" fill="none" stroke="#9d9d9d" stroke-miterlimit="10" stroke-width="1"/>
                <line id="Line_830" data-name="Line 830" x2="868.532" transform="translate(64.91 300.659)" fill="none" stroke="#9d9d9d" stroke-miterlimit="10" stroke-width="1"/>
                <line id="Line_831" data-name="Line 831" x2="868.532" transform="translate(64.91 205.409)" fill="none" stroke="#9d9d9d" stroke-miterlimit="10" stroke-width="1"/>
                <line id="Line_832" data-name="Line 832" x2="868.532" transform="translate(64.91 112.822)" fill="none" stroke="#9d9d9d" stroke-miterlimit="10" stroke-width="1"/>
                <line id="Line_833" data-name="Line 833" y2="481.524" transform="translate(64.91 11.296)" fill="none" stroke="#9d9d9d" stroke-miterlimit="10" stroke-width="1"/>
                <line id="Line_834" data-name="Line 834" x2="868.532" transform="translate(64.91 15.48)" fill="none" stroke="#9d9d9d" stroke-miterlimit="10" stroke-width="1"/>
                <text id="_0" data-name="0" transform="translate(57.6 532.315)" fill="#393939" font-size="25" font-family="Whitney-Book, Whitney"><tspan x="0" y="0">0</tspan></text>
                <text id="_2" data-name="2" transform="translate(201.048 532.315)" fill="#474747" font-size="25" font-family="Whitney-Book, Whitney"><tspan x="0" y="0">2</tspan></text>
                <text id="_-25" data-name="-25" transform="translate(3 492.821)" fill="#414042" font-size="25" font-family="Whitney-Book, Whitney"><tspan x="0" y="0">-25</tspan></text>
                <text id="_-20" data-name="-20" transform="translate(0 393.311)" fill="#414042" font-size="25" font-family="Whitney-Book, Whitney"><tspan x="0" y="0">-20</tspan></text>
                <text id="_-15" data-name="-15" transform="translate(9 300.726)" fill="#414042" font-size="25" font-family="Whitney-Book, Whitney"><tspan x="0" y="0">-15</tspan></text>
                <text id="_-10" data-name="-10" transform="translate(6 213.446)" fill="#414042" font-size="25" font-family="Whitney-Book, Whitney"><tspan x="0" y="0">-10</tspan></text>
                <text id="_-5" data-name="-5" transform="translate(18 119.386)" fill="#414042" font-size="25" font-family="Whitney-Book, Whitney"><tspan x="0" y="0">-5</tspan></text>
                <text id="_0-2" data-name="0" transform="translate(27 25.671)" fill="#414042" font-size="25" font-family="Whitney-Book, Whitney"><tspan x="0" y="0">0</tspan></text>
                <text id="_4" data-name="4" transform="translate(346.284 532.315)" fill="#393939" font-size="25" font-family="Whitney-Book, Whitney"><tspan x="0" y="0">4</tspan></text>
                <text id="_6" data-name="6" transform="translate(489.466 532.315)" fill="#474747" font-size="25" font-family="Whitney-Book, Whitney"><tspan x="0" y="0">6</tspan></text>
                <text id="_8" data-name="8" transform="translate(633.959 532.315)" fill="#393939" font-size="25" font-family="Whitney-Book, Whitney"><tspan x="0" y="0">8</tspan></text>
                <text id="_10" data-name="10" transform="translate(770.807 532.315)" fill="#474747" font-size="25" font-family="Whitney-Book, Whitney"><tspan x="0" y="0">10</tspan></text>
                <text id="_12" data-name="12" transform="translate(915.423 532.315)" fill="#393939" font-size="25" font-family="Whitney-Book, Whitney"><tspan x="0" y="0">12</tspan></text>
                <path id="line-gray" ref={lineGray} data-name="Path 2475" d="M133.635,146.062,277.619,304.32,425.01,354.648,567.7,413.367l142.352,37.027,144.91,21.23,142.066,11.793" transform="translate(-68.725 -130.582)" fill="none" stroke="#9d9d9d" stroke-miterlimit="10" stroke-width="5"/>
                <circle id="circle-1" data-name="Ellipse 42" cx="12.6" cy="12.6" r="12.6" transform="translate(54.47 0)" fill="#9d9d9d" stroke="#fff" stroke-miterlimit="10" stroke-width="2"/>
                <path id="triangle-orange-4" data-name="Path 2779" d="M281.293,214.319,269.939,235.8a1.415,1.415,0,0,0,1.159,2.074l26.733,1.741a1.416,1.416,0,0,0,1.272-2.194L283.725,214.2A1.416,1.416,0,0,0,281.293,214.319Z" transform="translate(70.727 -25.175)" stroke="#fff" stroke-miterlimit="10" stroke-width="2" fill="url(#linear-gradient)"/>
                <circle id="circle-2" data-name="Ellipse 43" cx="12.6" cy="12.6" r="12.6" transform="translate(196.975 156.812)" fill="#9d9d9d" stroke="#fff" stroke-miterlimit="10" stroke-width="2"/>
                <circle id="circle-3" data-name="Ellipse 44" cx="12.6" cy="12.6" r="12.6" transform="translate(343.774 210.435)" fill="#9d9d9d" stroke="#fff" stroke-miterlimit="10" stroke-width="2"/>
                <circle id="circle-4" data-name="Ellipse 45" cx="12.6" cy="12.6" r="12.6" transform="translate(486.577 269.059)" fill="#9d9d9d" stroke="#fff" stroke-miterlimit="10" stroke-width="2"/>
                <path id="triangle-orange-5" data-name="Path 2781" d="M281.293,214.319,269.939,235.8a1.415,1.415,0,0,0,1.159,2.074l26.733,1.741a1.416,1.416,0,0,0,1.272-2.194L283.725,214.2A1.416,1.416,0,0,0,281.293,214.319Z" transform="translate(358.592 88.591)" stroke="#fff" stroke-miterlimit="10" stroke-width="2" fill="url(#linear-gradient)"/>
                <path id="triangle-orange-6" data-name="Path 2782" d="M281.293,214.319,269.939,235.8a1.415,1.415,0,0,0,1.159,2.074l26.733,1.741a1.416,1.416,0,0,0,1.272-2.194L283.725,214.2A1.416,1.416,0,0,0,281.293,214.319Z" transform="translate(501.034 107.345)" stroke="#fff" stroke-miterlimit="10" stroke-width="2" fill="url(#linear-gradient)"/>
                <circle id="circle-5" data-name="Ellipse 46" cx="12.6" cy="12.6" r="12.6" transform="translate(629.549 305.738)" fill="#9d9d9d" stroke="#fff" stroke-miterlimit="10" stroke-width="2"/>
                <path id="triangle-orange-7" data-name="Path 2783" d="M281.293,214.319,269.939,235.8a1.415,1.415,0,0,0,1.159,2.074l26.733,1.741a1.416,1.416,0,0,0,1.272-2.194L283.725,214.2A1.416,1.416,0,0,0,281.293,214.319Z" transform="translate(644.561 120.374)" stroke="#fff" stroke-miterlimit="10" stroke-width="2" fill="url(#linear-gradient)"/>
                <circle id="circle-6" data-name="Ellipse 47" cx="12.6" cy="12.6" r="12.6" transform="translate(770.966 328.212)" fill="#9d9d9d" stroke="#fff" stroke-miterlimit="10" stroke-width="2"/>
                <circle id="circle-7" data-name="Ellipse 48" cx="12.6" cy="12.6" r="12.6" transform="translate(915.582 340.812)" fill="#9d9d9d" stroke="#fff" stroke-miterlimit="10" stroke-width="2"/>
                <path id="line-green" ref={lineGreen} data-name="Path 2476" d="M997.615,559.238l-144.9-28.047L712.24,500.816,566.647,450.14l-144.617-58.7-136.051-91.8L133.635,146.062" transform="translate(-68.725 -130.582)" fill="none" stroke="#07412c" stroke-miterlimit="10" stroke-width="5"/>
                <path id="triangle-green-1" data-name="Path 2477" d="M130.6,132.837l-11.354,21.484a1.416,1.416,0,0,0,1.16,2.074l26.732,1.741a1.417,1.417,0,0,0,1.273-2.2l-15.379-23.224A1.416,1.416,0,0,0,130.6,132.837Z" transform="translate(-68.725 -130.582)" fill="#42711e" stroke="#fff" stroke-miterlimit="10" stroke-width="2"/>
                <path id="triangle-orange-3" data-name="Path 2780" d="M281.293,214.319,269.939,235.8a1.415,1.415,0,0,0,1.159,2.074l26.733,1.741a1.416,1.416,0,0,0,1.272-2.194L283.725,214.2A1.416,1.416,0,0,0,281.293,214.319Z" transform="translate(214.62 20.762)" stroke="#fff" stroke-miterlimit="10" stroke-width="2" fill="url(#linear-gradient)"/>
                <path id="triangle-orange-2" data-name="Path 2778" d="M281.293,214.319,269.939,235.8a1.415,1.415,0,0,0,1.159,2.074l26.733,1.741a1.416,1.416,0,0,0,1.272-2.194L283.725,214.2A1.416,1.416,0,0,0,281.293,214.319Z" transform="translate(-68.725 -82.809)" stroke="#fff" stroke-miterlimit="10" stroke-width="2" fill="url(#linear-gradient)"/>
                <path id="triangle-green-2" data-name="Path 2478" d="M281.293,214.319,269.939,235.8a1.415,1.415,0,0,0,1.159,2.074l26.733,1.741a1.416,1.416,0,0,0,1.272-2.194L283.725,214.2A1.416,1.416,0,0,0,281.293,214.319Z" transform="translate(-68.725 -68.854)" fill="#42711e" stroke="#fff" stroke-miterlimit="10" stroke-width="2"/>
                <text id="P_0.040_vs_placebo_" data-name="P=0.040 vs placebo*" transform="translate(721.307 469.886)" fill="#07412c" font-size="25" font-family="Whitney-Bold, Whitney" font-weight="700"><tspan x="0" y="0">P=0.040 vs placebo*</tspan></text>
                <path id="triangle-green-3" data-name="Path 2479" d="M420.06,305.12l-8.811,22.645a1.417,1.417,0,0,0,1.391,1.928l26.755-1.341a1.417,1.417,0,0,0,1.012-2.327l-17.944-21.3A1.416,1.416,0,0,0,420.06,305.12Z" transform="translate(-68.725 -58.969)" fill="#42711e" stroke="#fff" stroke-miterlimit="10" stroke-width="2"/>
                <path id="triangle-green-4" data-name="Path 2480" d="M561.269,362.812l-6.55,23.4a1.415,1.415,0,0,0,1.572,1.782l26.495-3.955a1.416,1.416,0,0,0,.78-2.414L563.621,362.18A1.416,1.416,0,0,0,561.269,362.812Z" transform="translate(-68.725 -57.597)" stroke="#fff" stroke-miterlimit="10" stroke-width="2" fill="url(#radial-gradient)"/>
                <path id="triangle-green-5" data-name="Path 2481" d="M706.4,405.82l-6.551,23.4A1.415,1.415,0,0,0,701.42,431l26.5-3.955a1.416,1.416,0,0,0,.779-2.414L708.75,405.188A1.415,1.415,0,0,0,706.4,405.82Z" transform="translate(-68.725 -52.358)" fill="#07412c" stroke="#fff" stroke-miterlimit="10" stroke-width="2"/>
                <path id="triangle-green-6" data-name="Path 2482" d="M844.528,443.594l-.857,24.284a1.416,1.416,0,0,0,1.948,1.362l24.819-10.082a1.416,1.416,0,0,0,.189-2.53l-23.962-14.2A1.416,1.416,0,0,0,844.528,443.594Z" transform="translate(13.133 -185.006) rotate(9)" fill="#07412c" stroke="#fff" stroke-miterlimit="10" stroke-width="2"/>
                <path id="triangle-green-7" data-name="Path 2483" d="M985.876,449.548l-.857,24.284a1.416,1.416,0,0,0,1.948,1.362l24.819-10.083a1.416,1.416,0,0,0,.189-2.529l-23.962-14.2A1.416,1.416,0,0,0,985.876,449.548Z" transform="translate(-68.725 -34.168)" fill="#07412c" stroke="#fff" stroke-miterlimit="10" stroke-width="2"/>
              </g>
              <g id="Group_10779" data-name="Group 10779" transform="translate(319.317 46.112)">
                <text id="Placebo_n_131_" data-name="Placebo (n=131)" transform="translate(53.796 11)" fill="#414042" font-size="25" font-family="Whitney-Bold, Whitney" font-weight="700"><tspan x="0" y="0">Pla</tspan><tspan y="0" letter-spacing="-0.009em">c</tspan><tspan y="0">ebo </tspan><tspan y="0" font-family="Whitney-Medium, Whitney" font-weight="500">(n=131)</tspan></text>
                <text id="REXULTI_2_mg_n_138_" data-name="REXULTI 2 mg (n=138)" transform="translate(331.683 10.192)" fill="#07412c" font-size="25" font-family="Whitney-Bold, Whitney" font-weight="700"><tspan x="0" y="0">RE</tspan><tspan y="0" letter-spacing="-0.009em">X</tspan><tspan y="0">U</tspan><tspan y="0" letter-spacing="-0.094em">L</tspan><tspan y="0">TI 2 mg </tspan><tspan y="0" font-family="Whitney-Book, Whitney" font-weight="400">(n=138)</tspan></text>
                <text id="REXULTI_1_mg_n_134_" data-name="REXULTI 1 mg (n=134)" transform="translate(331.683 48.192)" fill="#07412c" font-size="25" font-family="Whitney-Bold, Whitney" font-weight="700"><tspan x="0" y="0">RE</tspan><tspan y="0" letter-spacing="-0.009em">X</tspan><tspan y="0">U</tspan><tspan y="0" letter-spacing="-0.094em">L</tspan><tspan y="0">TI 1 mg </tspan><tspan y="0" font-family="Whitney-Book, Whitney" font-weight="400">(n=134)</tspan></text>
                <line id="Line_835" data-name="Line 835" x2="55.072" transform="translate(-10 3.383)" fill="none" stroke="#9c9fa1" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2.248"/>
                <line id="Line_836" data-name="Line 836" x2="55.072" transform="translate(263.885 3.486)" fill="none" stroke="#0f3321" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2.248"/>
                <line id="Line_839" data-name="Line 839" x2="55.072" transform="translate(263.885 41.486)" fill="none" stroke="#d9b200" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2.248"/>
                <path id="Path_2485" data-name="Path 2485" d="M258.929,234.127a1.946,1.946,0,0,1-1.943-1.943V213.1a1.946,1.946,0,0,1,1.943-1.946,1.926,1.926,0,0,1,.886.219l18.556,9.542a1.942,1.942,0,0,1,0,3.454l-18.556,9.542a1.923,1.923,0,0,1-.886.216" transform="translate(24.215 -219.155)" fill="#07412c" stroke="#fff" stroke-width="2"/>
                <path id="Path_2777" data-name="Path 2777" d="M258.929,234.127a1.946,1.946,0,0,1-1.943-1.943V213.1a1.946,1.946,0,0,1,1.943-1.946,1.926,1.926,0,0,1,.886.219l18.556,9.542a1.942,1.942,0,0,1,0,3.454l-18.556,9.542a1.923,1.923,0,0,1-.886.216" transform="translate(24.215 -181.155)" stroke="#fff" stroke-width="2" fill="url(#linear-gradient-8)"/>
                <path id="Path_2486" data-name="Path 2486" d="M172.629,233.35a10.956,10.956,0,1,1,10.956-10.956,10.968,10.968,0,0,1-10.956,10.956" transform="translate(-155.831 -219.35)" fill="#9c9fa1" stroke="#fff" stroke-width="2"/>
              </g>
            </g>
          </g>
          <text id="Adjusted_mean_change_" data-name="Adjusted mean change " transform="translate(0 558.293) rotate(-90)" fill="#07412c" font-size="26" font-family="Whitney-Bold, Whitney" font-weight="700"><tspan x="149.065" y="25">Adjusted mean change </tspan></text>
          <text id="Mean_change_from_baseline_in_CMAI_score" data-name="Mean change from baseline in CMAI score" transform="translate(104.91)" fill="#42711e" font-size="32" font-family="Whitney-Bold, Whitney" font-weight="700"><tspan x="143.855" y="31">Mean change from baseline in CMAI score</tspan></text>
          <text id="Weeks" transform="translate(501.074 602.834)" fill="#07412c" font-size="25" font-family="Whitney-Bold, Whitney" font-weight="700"><tspan x="0" y="0" letter-spacing="-0.056em">W</tspan><tspan y="0">ee</tspan><tspan y="0" letter-spacing="-0.008em">k</tspan><tspan y="0">s</tspan></text>
        </svg>
      </div>
    </div>
  );
};

export default AnimationStudyGraphic;
