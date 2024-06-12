"use client"

import React from 'react';
import { TbLoader2 } from "react-icons/tb";
import { useState, useEffect } from 'react';
import { useTheme } from "next-themes";

interface SvgProps {
    width?: string;
    height?: string;
}

const Logo = ({width, height}: SvgProps) => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if(!mounted) return (
      <TbLoader2 className='h-10 w-10 animate-spin'/>
  )

  if (resolvedTheme === 'light') {
    return     <svg width={width || "400"} height={height || "182"} viewBox="0 0 1385 711" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_109_3)">
    <ellipse cx="415.5" cy="579" rx="36.5" ry="45" className="fill-steelPink"/>
    <ellipse cx="1153.5" cy="579" rx="36.5" ry="45" className="fill-fountainBlue"/>
    <path d="M24.1837 372C20.7309 372 17.1822 371.329 13.5376 369.986C9.89296 368.643 6.82381 366.821 4.33013 364.519C1.83645 362.217 0.5896 359.532 0.5896 356.462C0.5896 355.887 0.68551 354.928 0.877331 353.585L56.4097 172.601C57.7527 168.381 60.7259 165.215 65.3295 163.106C70.1252 160.996 75.2086 159.941 80.5793 159.941C86.1422 159.941 91.2256 160.996 95.8292 163.106C100.433 165.215 103.406 168.381 104.749 172.601L160.282 353.585C160.665 354.928 160.857 355.887 160.857 356.462C160.857 359.34 159.514 362.025 156.829 364.519C154.335 366.821 151.266 368.643 147.621 369.986C143.977 371.329 140.428 372 136.975 372C133.906 372 131.22 371.521 128.919 370.562C126.809 369.41 125.37 367.396 124.603 364.519L113.669 326.25H47.49L36.844 364.519C36.0768 367.396 34.5421 369.41 32.2403 370.562C29.9384 371.521 27.2529 372 24.1837 372ZM55.5466 296.902H105.612L80.5793 208.568L55.5466 296.902ZM245.226 374.59C235.635 374.59 226.811 373.439 218.754 371.137C210.89 368.643 204.655 365.478 200.052 361.642C195.64 357.805 193.434 353.873 193.434 349.845C193.434 347.735 193.914 345.433 194.873 342.939C196.023 340.445 197.462 338.239 199.189 336.321C201.107 334.403 203.313 333.444 205.807 333.444C208.492 333.444 211.274 334.595 214.151 336.896C217.22 339.007 220.96 341.117 225.372 343.227C229.976 345.337 236.306 346.392 244.363 346.392C252.995 346.392 258.653 345.049 261.339 342.363C264.216 339.678 265.655 336.896 265.655 334.019C265.655 329.799 263.929 326.538 260.476 324.236C257.215 321.934 252.995 320.112 247.816 318.769C242.636 317.235 237.073 315.604 231.127 313.878C225.372 312.151 219.905 309.945 214.726 307.26C209.547 304.383 205.327 300.546 202.066 295.751C198.805 290.763 197.174 284.337 197.174 276.472C197.174 269.567 198.805 262.853 202.066 256.331C205.327 249.809 210.698 244.438 218.179 240.218C225.66 235.806 235.827 233.6 248.679 233.6C256.544 233.6 263.929 234.463 270.834 236.19C277.932 237.724 283.686 239.93 288.098 242.808C292.51 245.685 294.716 248.85 294.716 252.303C294.716 254.029 294.141 256.331 292.99 259.209C291.839 261.894 290.208 264.388 288.098 266.69C286.18 268.992 283.782 270.142 280.905 270.142C278.795 270.142 276.205 269.471 273.136 268.128C270.259 266.594 266.902 265.155 263.065 263.812C259.229 262.47 254.625 261.798 249.254 261.798C244.459 261.798 240.622 262.47 237.745 263.812C234.867 265.155 232.758 266.785 231.415 268.704C230.072 270.622 229.401 272.636 229.401 274.746C229.401 278.199 231.031 280.885 234.292 282.803C237.553 284.721 241.773 286.352 246.952 287.694C252.323 289.037 257.886 290.571 263.641 292.298C269.587 293.832 275.15 296.134 280.329 299.204C285.7 302.273 290.017 306.493 293.277 311.864C296.538 317.043 298.169 323.853 298.169 332.293C298.169 345.145 293.565 355.407 284.358 363.08C275.342 370.753 262.298 374.59 245.226 374.59ZM362.042 204.827C356.48 204.827 351.685 203.005 347.657 199.36C343.629 195.523 341.614 191.303 341.614 186.7C341.614 181.712 343.629 177.492 347.657 174.039C351.685 170.395 356.48 168.573 362.042 168.573C367.799 168.573 372.594 170.395 376.43 174.039C380.266 177.492 382.184 181.712 382.184 186.7C382.184 191.303 380.266 195.523 376.43 199.36C372.594 203.005 367.799 204.827 362.042 204.827ZM362.042 372C356.673 372 352.259 370.753 348.809 368.26C345.355 365.766 343.628 362.984 343.628 359.915V246.836C343.628 243.383 345.355 240.602 348.809 238.492C352.259 236.382 356.673 235.327 362.042 235.327C367.222 235.327 371.635 236.382 375.279 238.492C378.922 240.602 380.746 243.383 380.746 246.836V359.915C380.746 362.984 378.922 365.766 375.279 368.26C371.635 370.753 367.222 372 362.042 372ZM461.466 374.59C451.299 374.59 442.475 371.521 434.996 365.382C427.706 359.052 424.062 349.365 424.062 336.321C424.062 325.387 426.841 316.851 432.406 310.713C438.16 304.575 446.024 300.258 455.999 297.765C466.167 295.271 477.867 294.024 491.104 294.024H502.899V290.284C502.899 286.063 502.038 281.939 500.309 277.911C498.776 273.883 496.186 270.526 492.543 267.84C489.089 265.155 484.101 263.812 477.58 263.812C470.29 263.812 464.63 264.579 460.602 266.114C456.766 267.457 453.794 268.896 451.684 270.43C449.573 271.965 447.27 272.732 444.778 272.732C440.75 272.732 437.586 270.718 435.283 266.69C433.172 262.661 432.119 258.537 432.119 254.317C432.119 250.289 434.516 246.74 439.311 243.671C444.299 240.41 450.34 237.916 457.438 236.19C464.536 234.463 471.441 233.6 478.154 233.6C493.117 233.6 505.104 236.286 514.12 241.657C523.136 247.028 529.66 253.933 533.689 262.374C537.906 270.814 540.017 279.925 540.017 289.708V359.915C540.017 363.368 538.292 366.245 534.837 368.547C531.386 370.849 527.07 372 521.89 372C517.095 372 513.067 370.849 509.805 368.547C506.735 366.245 505.202 363.368 505.202 359.915V351.859C500.022 357.805 493.883 363.08 486.785 367.684C479.88 372.288 471.441 374.59 461.466 374.59ZM476.429 346.967C480.457 346.967 484.486 345.624 488.514 342.939C492.543 340.253 495.899 336.801 498.584 332.581C501.461 328.361 502.899 323.949 502.899 319.345V313.303H498.584C492.252 313.303 486.211 313.686 480.457 314.453C474.703 315.221 470.003 316.947 466.359 319.633C462.905 322.126 461.18 326.059 461.18 331.43C461.18 336.801 462.618 340.733 465.495 343.227C468.564 345.72 472.208 346.967 476.429 346.967Z" className='fill-black'/>
    <path d="M347.657 199.36C351.685 203.005 356.48 204.827 362.042 204.827C367.799 204.827 372.594 203.005 376.43 199.36C380.266 195.523 382.184 191.303 382.184 186.7C382.184 181.712 380.266 177.492 376.43 174.039C372.594 170.395 367.799 168.573 362.042 168.573C356.48 168.573 351.685 170.395 347.657 174.039C343.629 177.492 341.614 181.712 341.614 186.7C341.614 191.303 343.629 195.523 347.657 199.36Z" className='fill-black'/>
    <path d="M73.3862 647.121C68.5905 647.121 64.2746 646.162 60.4383 644.244C56.6016 642.133 54.6835 639.064 54.6835 635.035V470.451H12.3867C8.74206 470.451 5.86471 468.726 3.75466 465.272C1.64462 461.821 0.5896 457.886 0.5896 453.476C0.5896 449.448 1.54872 445.706 3.46693 442.255C5.38514 438.608 8.35839 436.789 12.3867 436.789H134.098C138.318 436.789 141.291 438.608 143.018 442.255C144.936 445.706 145.895 449.448 145.895 453.476C145.895 457.886 144.84 461.821 142.73 465.272C140.812 468.726 137.934 470.451 134.098 470.451H92.0888V635.035C92.0888 639.064 90.0749 642.133 86.0463 644.244C82.21 646.162 77.9901 647.121 73.3862 647.121ZM204.718 647.121C199.347 647.121 194.936 645.875 191.483 643.38C188.03 640.888 186.303 638.105 186.303 635.035V442.255C186.303 438.801 188.03 436.019 191.483 433.908C194.936 431.801 199.347 430.744 204.718 430.744C209.898 430.744 214.309 431.801 217.954 433.908C221.599 436.019 223.421 438.801 223.421 442.255V530.589C226.298 525.027 230.806 520.04 236.945 515.626C243.083 511.024 250.66 508.721 259.675 508.721C268.691 508.721 276.94 511.405 284.421 516.777C291.902 521.957 297.848 528.957 302.26 537.781C306.864 546.604 309.166 556.387 309.166 567.132V635.035C309.166 639.064 307.247 642.133 303.411 644.244C299.575 646.162 295.259 647.121 290.463 647.121C286.243 647.121 282.119 646.162 278.09 644.244C274.062 642.133 272.048 639.064 272.048 635.035V567.132C272.048 562.718 270.897 558.595 268.595 554.759C266.294 550.92 263.224 547.756 259.388 545.264C255.743 542.576 251.619 541.235 247.015 541.235C243.179 541.235 239.438 542.289 235.794 544.4C232.149 546.51 229.176 549.481 226.874 553.317C224.572 557.157 223.421 561.759 223.421 567.132V635.035C223.421 638.105 221.599 640.888 217.954 643.38C214.309 645.875 209.898 647.121 204.718 647.121ZM416.897 649.711C405.771 649.711 395.509 647.023 386.108 641.654C376.711 636.089 369.133 628.802 363.379 619.786C357.625 610.77 354.748 601.082 354.748 590.725V567.132C354.748 556.772 357.527 547.182 363.092 538.359C368.654 529.343 376.137 522.146 385.534 516.777C395.124 511.405 405.578 508.721 416.897 508.721C428.213 508.721 438.573 511.405 447.974 516.777C457.564 521.957 465.142 528.957 470.703 537.781C476.457 546.604 479.334 556.387 479.334 567.132V590.725C479.334 600.889 476.457 610.483 470.703 619.499C464.949 628.515 457.277 635.802 447.684 641.367C438.286 646.929 428.024 649.711 416.897 649.711ZM416.897 617.196C421.5 617.196 425.721 615.95 429.557 613.454C433.393 610.962 436.462 607.701 438.766 603.672C441.065 599.451 442.216 595.135 442.216 590.725V567.132C442.216 562.718 441.065 558.595 438.766 554.759C436.462 550.92 433.393 547.756 429.557 545.264C425.914 542.576 421.693 541.235 416.897 541.235C412.295 541.235 408.074 542.482 404.238 544.974C400.402 547.469 397.332 550.731 395.029 554.759C392.919 558.595 391.866 562.718 391.866 567.132V590.725C391.866 595.135 392.919 599.451 395.029 603.672C397.332 607.701 400.402 610.962 404.238 613.454C408.074 615.95 412.295 617.196 416.897 617.196ZM544.381 647.121C539.013 647.121 534.599 645.875 531.148 643.38C527.694 640.888 525.968 638.105 525.968 635.035V521.958C525.968 518.503 527.694 515.72 531.148 513.613C534.599 511.503 539.013 510.446 544.381 510.446C548.987 510.446 552.823 511.503 555.893 513.613C559.155 515.72 560.782 518.503 560.782 521.958V530.589C564.044 525.027 568.84 520.04 575.171 515.626C581.503 511.024 589.462 508.721 599.052 508.721C607.301 508.721 614.592 511.405 620.92 516.777C627.251 522.146 631.951 529.052 635.021 537.494C640.005 527.711 646.336 520.519 654.008 515.913C661.873 511.118 669.93 508.721 678.18 508.721C687.003 508.721 695.253 511.024 702.924 515.626C710.789 520.04 717.12 526.654 721.915 535.478C726.903 544.112 729.395 554.661 729.395 567.132V635.035C729.395 638.105 727.575 640.888 723.928 643.38C720.285 645.875 715.871 647.121 710.695 647.121C705.707 647.121 701.392 645.875 697.745 643.38C694.101 640.888 692.278 638.105 692.278 635.035V567.132C692.278 561.374 691.126 556.58 688.826 552.744C686.716 548.908 683.839 546.031 680.192 544.113C676.549 542.002 672.807 540.945 668.971 540.945C665.328 540.945 661.779 542.002 658.324 544.113C654.873 546.031 651.996 548.908 649.693 552.744C647.393 556.58 646.242 561.28 646.242 566.842V635.323C646.242 639.544 644.226 642.613 640.198 644.531C636.362 646.256 632.141 647.121 627.538 647.121C623.317 647.121 619.194 646.256 615.165 644.531C611.137 642.613 609.125 639.544 609.125 635.323V567.132C609.125 561.759 607.973 557.157 605.67 553.317C603.56 549.481 600.683 546.51 597.039 544.4C593.585 542.289 589.846 541.235 585.818 541.235C581.982 541.235 578.335 542.195 574.884 544.113C571.43 546.031 568.552 548.908 566.25 552.744C564.143 556.58 563.086 561.374 563.086 567.132V635.035C563.086 638.105 561.262 640.888 557.619 643.38C553.975 645.875 549.561 647.121 544.381 647.121ZM798.377 710.709C793.197 710.709 788.881 709.463 785.427 706.967C781.976 704.475 780.246 701.791 780.246 698.91V521.958C780.246 518.503 781.976 515.72 785.427 513.613C788.881 511.503 793.102 510.446 798.086 510.446C803.073 510.446 807.102 511.503 810.172 513.613C813.433 515.72 815.065 518.503 815.065 521.958V530.589C818.327 525.027 823.314 520.04 830.027 515.626C836.74 511.024 844.699 508.721 853.907 508.721C863.69 508.721 872.419 511.405 880.091 516.777C887.956 521.957 894.094 528.957 898.508 537.781C903.11 546.604 905.413 556.387 905.413 567.132V590.725C905.413 600.889 903.11 610.483 898.508 619.499C893.902 628.515 887.763 635.802 880.091 641.367C872.612 646.929 864.267 649.711 855.059 649.711C846.617 649.711 838.945 647.408 832.039 642.806C825.134 638.2 820.245 632.925 817.367 626.978V698.91C817.367 701.791 815.544 704.475 811.901 706.967C808.253 709.463 803.745 710.709 798.377 710.709ZM842.974 617.196C847.58 617.196 851.703 615.95 855.346 613.454C859.182 610.77 862.252 607.413 864.555 603.385C867.047 599.357 868.296 595.135 868.296 590.725V567.132C868.296 562.718 867.145 558.595 864.842 554.759C862.539 550.92 859.375 547.756 855.346 545.264C851.51 542.576 847.195 541.235 842.4 541.235C838.179 541.235 834.15 542.289 830.314 544.4C826.671 546.51 823.601 549.481 821.106 553.317C818.614 557.157 817.367 561.759 817.367 567.132V595.902C817.367 597.824 818.421 600.508 820.531 603.959C822.831 607.221 825.901 610.29 829.74 613.167C833.576 615.852 837.986 617.196 842.974 617.196ZM996.784 649.711C987.191 649.711 978.367 648.559 970.31 646.256C962.446 643.764 956.212 640.597 951.61 636.761C947.196 632.925 944.991 628.995 944.991 624.966C944.991 622.855 945.471 620.552 946.43 618.06C947.581 615.565 949.02 613.36 950.745 611.442C952.664 609.524 954.868 608.565 957.364 608.565C960.048 608.565 962.831 609.717 965.708 612.016C968.777 614.127 972.519 616.237 976.929 618.347C981.535 620.458 987.863 621.512 995.92 621.512C1004.55 621.512 1010.21 620.167 1012.89 617.483C1015.77 614.799 1017.21 612.016 1017.21 609.139C1017.21 604.918 1015.48 601.66 1012.03 599.357C1008.77 597.053 1004.55 595.234 999.374 593.89C994.194 592.357 988.63 590.725 982.683 588.996C976.929 587.271 971.462 585.066 966.282 582.381C961.105 579.504 956.884 575.665 953.622 570.87C950.364 565.883 948.733 559.456 948.733 551.592C948.733 544.686 950.364 537.973 953.622 531.453C956.884 524.929 962.257 519.56 969.736 515.339C977.216 510.926 987.383 508.721 1000.24 508.721C1008.1 508.721 1015.48 509.585 1022.39 511.311C1029.49 512.844 1035.24 515.052 1039.66 517.929C1044.07 520.806 1046.27 523.97 1046.27 527.424C1046.27 529.15 1045.7 531.453 1044.55 534.33C1043.4 537.015 1041.77 539.506 1039.66 541.809C1037.74 544.112 1035.34 545.264 1032.46 545.264C1030.35 545.264 1027.76 544.592 1024.69 543.248C1021.82 541.715 1018.46 540.277 1014.62 538.933C1010.79 537.589 1006.18 536.92 1000.81 536.92C996.014 536.92 992.178 537.589 989.301 538.933C986.424 540.277 984.314 541.904 982.973 543.826C981.629 545.744 980.957 547.756 980.957 549.867C980.957 553.317 982.589 556.006 985.85 557.924C989.109 559.842 993.33 561.473 998.51 562.813C1003.88 564.157 1009.44 565.69 1015.2 567.419C1021.14 568.952 1026.71 571.255 1031.89 574.325C1037.26 577.394 1041.57 581.611 1044.84 586.984C1048.09 592.164 1049.73 598.972 1049.73 607.414C1049.73 620.266 1045.12 630.528 1035.91 638.2C1026.9 645.875 1013.85 649.711 996.784 649.711ZM1152.16 649.711C1141.03 649.711 1130.77 647.023 1121.37 641.654C1111.97 636.089 1104.39 628.802 1098.64 619.786C1092.88 610.77 1090.01 601.082 1090.01 590.725V567.132C1090.01 556.772 1092.79 547.182 1098.35 538.359C1103.91 529.343 1111.4 522.146 1120.79 516.777C1130.39 511.405 1140.84 508.721 1152.16 508.721C1163.48 508.721 1173.83 511.405 1183.23 516.777C1192.82 521.957 1200.4 528.957 1205.96 537.781C1211.72 546.604 1214.6 556.387 1214.6 567.132V590.725C1214.6 600.889 1211.72 610.483 1205.96 619.499C1200.21 628.515 1192.54 635.802 1182.95 641.367C1173.54 646.929 1163.28 649.711 1152.16 649.711ZM1152.16 617.196C1156.76 617.196 1160.98 615.95 1164.82 613.454C1168.65 610.962 1171.72 607.701 1174.02 603.672C1176.33 599.451 1177.48 595.135 1177.48 590.725V567.132C1177.48 562.718 1176.33 558.595 1174.02 554.759C1171.72 550.92 1168.65 547.756 1164.82 545.264C1161.17 542.576 1156.95 541.235 1152.16 541.235C1147.55 541.235 1143.33 542.482 1139.5 544.974C1135.66 547.469 1132.59 550.731 1130.29 554.759C1128.18 558.595 1127.12 562.718 1127.12 567.132V590.725C1127.12 595.135 1128.18 599.451 1130.29 603.672C1132.59 607.701 1135.66 610.962 1139.5 613.454C1143.33 615.95 1147.55 617.196 1152.16 617.196ZM1279.64 647.121C1274.27 647.121 1269.86 645.875 1266.41 643.38C1262.96 640.888 1261.23 638.105 1261.23 635.035V521.958C1261.23 518.503 1262.96 515.72 1266.41 513.613C1269.86 511.503 1274.27 510.446 1279.64 510.446C1284.25 510.446 1288.08 511.503 1291.15 513.613C1294.41 515.72 1296.04 518.503 1296.04 521.958V530.589C1298.92 525.027 1303.62 520.04 1310.14 515.626C1316.86 511.024 1325.01 508.721 1334.6 508.721C1343.62 508.721 1351.86 511.405 1359.35 516.777C1366.83 521.957 1372.77 528.957 1377.19 537.781C1381.79 546.604 1384.09 556.387 1384.09 567.132V635.035C1384.09 639.064 1382.17 642.133 1378.34 644.244C1374.5 646.162 1370.18 647.121 1365.39 647.121C1361.17 647.121 1357.04 646.162 1353.01 644.244C1348.99 642.133 1346.97 639.064 1346.97 635.035V567.132C1346.97 562.718 1345.82 558.595 1343.52 554.759C1341.41 550.92 1338.44 547.756 1334.6 545.264C1330.76 542.576 1326.54 541.235 1321.94 541.235C1318.1 541.235 1314.36 542.289 1310.72 544.4C1307.07 546.51 1304.1 549.481 1301.8 553.317C1299.5 557.157 1298.34 561.759 1298.34 567.132V635.035C1298.34 638.105 1296.52 640.888 1292.88 643.38C1289.23 645.875 1284.82 647.121 1279.64 647.121Z" className='fill-black'/>
    <path d="M371.373 179.627C370.095 185.809 370.148 192.302 371.521 198.503C365.319 197.131 358.828 197.077 352.626 198.374C353.925 192.176 353.89 185.701 352.499 179.482C358.719 180.872 365.192 180.909 371.373 179.627Z" className='fill-black'/>
    <path d="M377.934 184.079C377.934 192.857 370.811 200 362.031 200C353.189 200 346.066 192.857 346.066 184.079C346.066 148.432 313.581 115.979 277.965 115.979C269.184 115.979 262 108.836 262 100C262 91.2223 269.184 84.0795 277.965 84.0795C313.581 84.0795 346.066 51.6357 346.066 15.9818C346.066 7.14456 353.189 0 362.031 0C370.811 0 377.934 7.14205 377.934 15.9818C377.934 51.634 410.419 84.0795 446.035 84.0795C454.877 84.0795 462 91.2223 462 100C462 108.836 454.877 115.979 446.035 115.979C410.419 115.988 377.934 148.432 377.934 184.079ZM362.028 131.481C370.135 118.947 380.942 108.115 393.47 100C380.944 91.893 370.135 81.1201 362.028 68.5279C353.922 81.1201 343.115 91.893 330.526 100C343.115 108.115 353.922 118.947 362.028 131.481Z" className='fill-black'/>
    </g>
    <defs>
    <clipPath id="clip0_109_3">
    <rect width="1385" height="711" fill="none"/>
    </clipPath>
    </defs>
    </svg>
  }
  
  if (resolvedTheme === 'dark') {
    return     <svg width={width || "400"} height={height || "182"} viewBox="0 0 1385 711" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_109_3)">
    <ellipse cx="415.5" cy="579" rx="36.5" ry="45" fill="#C554B9"/>
    <ellipse cx="1153.5" cy="579" rx="36.5" ry="45" fill="#32B6BE"/>
    <path d="M24.1837 372C20.7309 372 17.1822 371.329 13.5376 369.986C9.89296 368.643 6.82381 366.821 4.33013 364.519C1.83645 362.217 0.5896 359.532 0.5896 356.462C0.5896 355.887 0.68551 354.928 0.877331 353.585L56.4097 172.601C57.7527 168.381 60.7259 165.215 65.3295 163.106C70.1252 160.996 75.2086 159.941 80.5793 159.941C86.1422 159.941 91.2256 160.996 95.8292 163.106C100.433 165.215 103.406 168.381 104.749 172.601L160.282 353.585C160.665 354.928 160.857 355.887 160.857 356.462C160.857 359.34 159.514 362.025 156.829 364.519C154.335 366.821 151.266 368.643 147.621 369.986C143.977 371.329 140.428 372 136.975 372C133.906 372 131.22 371.521 128.919 370.562C126.809 369.41 125.37 367.396 124.603 364.519L113.669 326.25H47.49L36.844 364.519C36.0768 367.396 34.5421 369.41 32.2403 370.562C29.9384 371.521 27.2529 372 24.1837 372ZM55.5466 296.902H105.612L80.5793 208.568L55.5466 296.902ZM245.226 374.59C235.635 374.59 226.811 373.439 218.754 371.137C210.89 368.643 204.655 365.478 200.052 361.642C195.64 357.805 193.434 353.873 193.434 349.845C193.434 347.735 193.914 345.433 194.873 342.939C196.023 340.445 197.462 338.239 199.189 336.321C201.107 334.403 203.313 333.444 205.807 333.444C208.492 333.444 211.274 334.595 214.151 336.896C217.22 339.007 220.96 341.117 225.372 343.227C229.976 345.337 236.306 346.392 244.363 346.392C252.995 346.392 258.653 345.049 261.339 342.363C264.216 339.678 265.655 336.896 265.655 334.019C265.655 329.799 263.929 326.538 260.476 324.236C257.215 321.934 252.995 320.112 247.816 318.769C242.636 317.235 237.073 315.604 231.127 313.878C225.372 312.151 219.905 309.945 214.726 307.26C209.547 304.383 205.327 300.546 202.066 295.751C198.805 290.763 197.174 284.337 197.174 276.472C197.174 269.567 198.805 262.853 202.066 256.331C205.327 249.809 210.698 244.438 218.179 240.218C225.66 235.806 235.827 233.6 248.679 233.6C256.544 233.6 263.929 234.463 270.834 236.19C277.932 237.724 283.686 239.93 288.098 242.808C292.51 245.685 294.716 248.85 294.716 252.303C294.716 254.029 294.141 256.331 292.99 259.209C291.839 261.894 290.208 264.388 288.098 266.69C286.18 268.992 283.782 270.142 280.905 270.142C278.795 270.142 276.205 269.471 273.136 268.128C270.259 266.594 266.902 265.155 263.065 263.812C259.229 262.47 254.625 261.798 249.254 261.798C244.459 261.798 240.622 262.47 237.745 263.812C234.867 265.155 232.758 266.785 231.415 268.704C230.072 270.622 229.401 272.636 229.401 274.746C229.401 278.199 231.031 280.885 234.292 282.803C237.553 284.721 241.773 286.352 246.952 287.694C252.323 289.037 257.886 290.571 263.641 292.298C269.587 293.832 275.15 296.134 280.329 299.204C285.7 302.273 290.017 306.493 293.277 311.864C296.538 317.043 298.169 323.853 298.169 332.293C298.169 345.145 293.565 355.407 284.358 363.08C275.342 370.753 262.298 374.59 245.226 374.59ZM362.042 204.827C356.48 204.827 351.685 203.005 347.657 199.36C343.629 195.523 341.614 191.303 341.614 186.7C341.614 181.712 343.629 177.492 347.657 174.039C351.685 170.395 356.48 168.573 362.042 168.573C367.799 168.573 372.594 170.395 376.43 174.039C380.266 177.492 382.184 181.712 382.184 186.7C382.184 191.303 380.266 195.523 376.43 199.36C372.594 203.005 367.799 204.827 362.042 204.827ZM362.042 372C356.673 372 352.259 370.753 348.809 368.26C345.355 365.766 343.628 362.984 343.628 359.915V246.836C343.628 243.383 345.355 240.602 348.809 238.492C352.259 236.382 356.673 235.327 362.042 235.327C367.222 235.327 371.635 236.382 375.279 238.492C378.922 240.602 380.746 243.383 380.746 246.836V359.915C380.746 362.984 378.922 365.766 375.279 368.26C371.635 370.753 367.222 372 362.042 372ZM461.466 374.59C451.299 374.59 442.475 371.521 434.996 365.382C427.706 359.052 424.062 349.365 424.062 336.321C424.062 325.387 426.841 316.851 432.406 310.713C438.16 304.575 446.024 300.258 455.999 297.765C466.167 295.271 477.867 294.024 491.104 294.024H502.899V290.284C502.899 286.063 502.038 281.939 500.309 277.911C498.776 273.883 496.186 270.526 492.543 267.84C489.089 265.155 484.101 263.812 477.58 263.812C470.29 263.812 464.63 264.579 460.602 266.114C456.766 267.457 453.794 268.896 451.684 270.43C449.573 271.965 447.27 272.732 444.778 272.732C440.75 272.732 437.586 270.718 435.283 266.69C433.172 262.661 432.119 258.537 432.119 254.317C432.119 250.289 434.516 246.74 439.311 243.671C444.299 240.41 450.34 237.916 457.438 236.19C464.536 234.463 471.441 233.6 478.154 233.6C493.117 233.6 505.104 236.286 514.12 241.657C523.136 247.028 529.66 253.933 533.689 262.374C537.906 270.814 540.017 279.925 540.017 289.708V359.915C540.017 363.368 538.292 366.245 534.837 368.547C531.386 370.849 527.07 372 521.89 372C517.095 372 513.067 370.849 509.805 368.547C506.735 366.245 505.202 363.368 505.202 359.915V351.859C500.022 357.805 493.883 363.08 486.785 367.684C479.88 372.288 471.441 374.59 461.466 374.59ZM476.429 346.967C480.457 346.967 484.486 345.624 488.514 342.939C492.543 340.253 495.899 336.801 498.584 332.581C501.461 328.361 502.899 323.949 502.899 319.345V313.303H498.584C492.252 313.303 486.211 313.686 480.457 314.453C474.703 315.221 470.003 316.947 466.359 319.633C462.905 322.126 461.18 326.059 461.18 331.43C461.18 336.801 462.618 340.733 465.495 343.227C468.564 345.72 472.208 346.967 476.429 346.967Z" className='fill-white'/>
    <path d="M347.657 199.36C351.685 203.005 356.48 204.827 362.042 204.827C367.799 204.827 372.594 203.005 376.43 199.36C380.266 195.523 382.184 191.303 382.184 186.7C382.184 181.712 380.266 177.492 376.43 174.039C372.594 170.395 367.799 168.573 362.042 168.573C356.48 168.573 351.685 170.395 347.657 174.039C343.629 177.492 341.614 181.712 341.614 186.7C341.614 191.303 343.629 195.523 347.657 199.36Z" className='fill-white'/>
    <path d="M73.3862 647.121C68.5905 647.121 64.2746 646.162 60.4383 644.244C56.6016 642.133 54.6835 639.064 54.6835 635.035V470.451H12.3867C8.74206 470.451 5.86471 468.726 3.75466 465.272C1.64462 461.821 0.5896 457.886 0.5896 453.476C0.5896 449.448 1.54872 445.706 3.46693 442.255C5.38514 438.608 8.35839 436.789 12.3867 436.789H134.098C138.318 436.789 141.291 438.608 143.018 442.255C144.936 445.706 145.895 449.448 145.895 453.476C145.895 457.886 144.84 461.821 142.73 465.272C140.812 468.726 137.934 470.451 134.098 470.451H92.0888V635.035C92.0888 639.064 90.0749 642.133 86.0463 644.244C82.21 646.162 77.9901 647.121 73.3862 647.121ZM204.718 647.121C199.347 647.121 194.936 645.875 191.483 643.38C188.03 640.888 186.303 638.105 186.303 635.035V442.255C186.303 438.801 188.03 436.019 191.483 433.908C194.936 431.801 199.347 430.744 204.718 430.744C209.898 430.744 214.309 431.801 217.954 433.908C221.599 436.019 223.421 438.801 223.421 442.255V530.589C226.298 525.027 230.806 520.04 236.945 515.626C243.083 511.024 250.66 508.721 259.675 508.721C268.691 508.721 276.94 511.405 284.421 516.777C291.902 521.957 297.848 528.957 302.26 537.781C306.864 546.604 309.166 556.387 309.166 567.132V635.035C309.166 639.064 307.247 642.133 303.411 644.244C299.575 646.162 295.259 647.121 290.463 647.121C286.243 647.121 282.119 646.162 278.09 644.244C274.062 642.133 272.048 639.064 272.048 635.035V567.132C272.048 562.718 270.897 558.595 268.595 554.759C266.294 550.92 263.224 547.756 259.388 545.264C255.743 542.576 251.619 541.235 247.015 541.235C243.179 541.235 239.438 542.289 235.794 544.4C232.149 546.51 229.176 549.481 226.874 553.317C224.572 557.157 223.421 561.759 223.421 567.132V635.035C223.421 638.105 221.599 640.888 217.954 643.38C214.309 645.875 209.898 647.121 204.718 647.121ZM416.897 649.711C405.771 649.711 395.509 647.023 386.108 641.654C376.711 636.089 369.133 628.802 363.379 619.786C357.625 610.77 354.748 601.082 354.748 590.725V567.132C354.748 556.772 357.527 547.182 363.092 538.359C368.654 529.343 376.137 522.146 385.534 516.777C395.124 511.405 405.578 508.721 416.897 508.721C428.213 508.721 438.573 511.405 447.974 516.777C457.564 521.957 465.142 528.957 470.703 537.781C476.457 546.604 479.334 556.387 479.334 567.132V590.725C479.334 600.889 476.457 610.483 470.703 619.499C464.949 628.515 457.277 635.802 447.684 641.367C438.286 646.929 428.024 649.711 416.897 649.711ZM416.897 617.196C421.5 617.196 425.721 615.95 429.557 613.454C433.393 610.962 436.462 607.701 438.766 603.672C441.065 599.451 442.216 595.135 442.216 590.725V567.132C442.216 562.718 441.065 558.595 438.766 554.759C436.462 550.92 433.393 547.756 429.557 545.264C425.914 542.576 421.693 541.235 416.897 541.235C412.295 541.235 408.074 542.482 404.238 544.974C400.402 547.469 397.332 550.731 395.029 554.759C392.919 558.595 391.866 562.718 391.866 567.132V590.725C391.866 595.135 392.919 599.451 395.029 603.672C397.332 607.701 400.402 610.962 404.238 613.454C408.074 615.95 412.295 617.196 416.897 617.196ZM544.381 647.121C539.013 647.121 534.599 645.875 531.148 643.38C527.694 640.888 525.968 638.105 525.968 635.035V521.958C525.968 518.503 527.694 515.72 531.148 513.613C534.599 511.503 539.013 510.446 544.381 510.446C548.987 510.446 552.823 511.503 555.893 513.613C559.155 515.72 560.782 518.503 560.782 521.958V530.589C564.044 525.027 568.84 520.04 575.171 515.626C581.503 511.024 589.462 508.721 599.052 508.721C607.301 508.721 614.592 511.405 620.92 516.777C627.251 522.146 631.951 529.052 635.021 537.494C640.005 527.711 646.336 520.519 654.008 515.913C661.873 511.118 669.93 508.721 678.18 508.721C687.003 508.721 695.253 511.024 702.924 515.626C710.789 520.04 717.12 526.654 721.915 535.478C726.903 544.112 729.395 554.661 729.395 567.132V635.035C729.395 638.105 727.575 640.888 723.928 643.38C720.285 645.875 715.871 647.121 710.695 647.121C705.707 647.121 701.392 645.875 697.745 643.38C694.101 640.888 692.278 638.105 692.278 635.035V567.132C692.278 561.374 691.126 556.58 688.826 552.744C686.716 548.908 683.839 546.031 680.192 544.113C676.549 542.002 672.807 540.945 668.971 540.945C665.328 540.945 661.779 542.002 658.324 544.113C654.873 546.031 651.996 548.908 649.693 552.744C647.393 556.58 646.242 561.28 646.242 566.842V635.323C646.242 639.544 644.226 642.613 640.198 644.531C636.362 646.256 632.141 647.121 627.538 647.121C623.317 647.121 619.194 646.256 615.165 644.531C611.137 642.613 609.125 639.544 609.125 635.323V567.132C609.125 561.759 607.973 557.157 605.67 553.317C603.56 549.481 600.683 546.51 597.039 544.4C593.585 542.289 589.846 541.235 585.818 541.235C581.982 541.235 578.335 542.195 574.884 544.113C571.43 546.031 568.552 548.908 566.25 552.744C564.143 556.58 563.086 561.374 563.086 567.132V635.035C563.086 638.105 561.262 640.888 557.619 643.38C553.975 645.875 549.561 647.121 544.381 647.121ZM798.377 710.709C793.197 710.709 788.881 709.463 785.427 706.967C781.976 704.475 780.246 701.791 780.246 698.91V521.958C780.246 518.503 781.976 515.72 785.427 513.613C788.881 511.503 793.102 510.446 798.086 510.446C803.073 510.446 807.102 511.503 810.172 513.613C813.433 515.72 815.065 518.503 815.065 521.958V530.589C818.327 525.027 823.314 520.04 830.027 515.626C836.74 511.024 844.699 508.721 853.907 508.721C863.69 508.721 872.419 511.405 880.091 516.777C887.956 521.957 894.094 528.957 898.508 537.781C903.11 546.604 905.413 556.387 905.413 567.132V590.725C905.413 600.889 903.11 610.483 898.508 619.499C893.902 628.515 887.763 635.802 880.091 641.367C872.612 646.929 864.267 649.711 855.059 649.711C846.617 649.711 838.945 647.408 832.039 642.806C825.134 638.2 820.245 632.925 817.367 626.978V698.91C817.367 701.791 815.544 704.475 811.901 706.967C808.253 709.463 803.745 710.709 798.377 710.709ZM842.974 617.196C847.58 617.196 851.703 615.95 855.346 613.454C859.182 610.77 862.252 607.413 864.555 603.385C867.047 599.357 868.296 595.135 868.296 590.725V567.132C868.296 562.718 867.145 558.595 864.842 554.759C862.539 550.92 859.375 547.756 855.346 545.264C851.51 542.576 847.195 541.235 842.4 541.235C838.179 541.235 834.15 542.289 830.314 544.4C826.671 546.51 823.601 549.481 821.106 553.317C818.614 557.157 817.367 561.759 817.367 567.132V595.902C817.367 597.824 818.421 600.508 820.531 603.959C822.831 607.221 825.901 610.29 829.74 613.167C833.576 615.852 837.986 617.196 842.974 617.196ZM996.784 649.711C987.191 649.711 978.367 648.559 970.31 646.256C962.446 643.764 956.212 640.597 951.61 636.761C947.196 632.925 944.991 628.995 944.991 624.966C944.991 622.855 945.471 620.552 946.43 618.06C947.581 615.565 949.02 613.36 950.745 611.442C952.664 609.524 954.868 608.565 957.364 608.565C960.048 608.565 962.831 609.717 965.708 612.016C968.777 614.127 972.519 616.237 976.929 618.347C981.535 620.458 987.863 621.512 995.92 621.512C1004.55 621.512 1010.21 620.167 1012.89 617.483C1015.77 614.799 1017.21 612.016 1017.21 609.139C1017.21 604.918 1015.48 601.66 1012.03 599.357C1008.77 597.053 1004.55 595.234 999.374 593.89C994.194 592.357 988.63 590.725 982.683 588.996C976.929 587.271 971.462 585.066 966.282 582.381C961.105 579.504 956.884 575.665 953.622 570.87C950.364 565.883 948.733 559.456 948.733 551.592C948.733 544.686 950.364 537.973 953.622 531.453C956.884 524.929 962.257 519.56 969.736 515.339C977.216 510.926 987.383 508.721 1000.24 508.721C1008.1 508.721 1015.48 509.585 1022.39 511.311C1029.49 512.844 1035.24 515.052 1039.66 517.929C1044.07 520.806 1046.27 523.97 1046.27 527.424C1046.27 529.15 1045.7 531.453 1044.55 534.33C1043.4 537.015 1041.77 539.506 1039.66 541.809C1037.74 544.112 1035.34 545.264 1032.46 545.264C1030.35 545.264 1027.76 544.592 1024.69 543.248C1021.82 541.715 1018.46 540.277 1014.62 538.933C1010.79 537.589 1006.18 536.92 1000.81 536.92C996.014 536.92 992.178 537.589 989.301 538.933C986.424 540.277 984.314 541.904 982.973 543.826C981.629 545.744 980.957 547.756 980.957 549.867C980.957 553.317 982.589 556.006 985.85 557.924C989.109 559.842 993.33 561.473 998.51 562.813C1003.88 564.157 1009.44 565.69 1015.2 567.419C1021.14 568.952 1026.71 571.255 1031.89 574.325C1037.26 577.394 1041.57 581.611 1044.84 586.984C1048.09 592.164 1049.73 598.972 1049.73 607.414C1049.73 620.266 1045.12 630.528 1035.91 638.2C1026.9 645.875 1013.85 649.711 996.784 649.711ZM1152.16 649.711C1141.03 649.711 1130.77 647.023 1121.37 641.654C1111.97 636.089 1104.39 628.802 1098.64 619.786C1092.88 610.77 1090.01 601.082 1090.01 590.725V567.132C1090.01 556.772 1092.79 547.182 1098.35 538.359C1103.91 529.343 1111.4 522.146 1120.79 516.777C1130.39 511.405 1140.84 508.721 1152.16 508.721C1163.48 508.721 1173.83 511.405 1183.23 516.777C1192.82 521.957 1200.4 528.957 1205.96 537.781C1211.72 546.604 1214.6 556.387 1214.6 567.132V590.725C1214.6 600.889 1211.72 610.483 1205.96 619.499C1200.21 628.515 1192.54 635.802 1182.95 641.367C1173.54 646.929 1163.28 649.711 1152.16 649.711ZM1152.16 617.196C1156.76 617.196 1160.98 615.95 1164.82 613.454C1168.65 610.962 1171.72 607.701 1174.02 603.672C1176.33 599.451 1177.48 595.135 1177.48 590.725V567.132C1177.48 562.718 1176.33 558.595 1174.02 554.759C1171.72 550.92 1168.65 547.756 1164.82 545.264C1161.17 542.576 1156.95 541.235 1152.16 541.235C1147.55 541.235 1143.33 542.482 1139.5 544.974C1135.66 547.469 1132.59 550.731 1130.29 554.759C1128.18 558.595 1127.12 562.718 1127.12 567.132V590.725C1127.12 595.135 1128.18 599.451 1130.29 603.672C1132.59 607.701 1135.66 610.962 1139.5 613.454C1143.33 615.95 1147.55 617.196 1152.16 617.196ZM1279.64 647.121C1274.27 647.121 1269.86 645.875 1266.41 643.38C1262.96 640.888 1261.23 638.105 1261.23 635.035V521.958C1261.23 518.503 1262.96 515.72 1266.41 513.613C1269.86 511.503 1274.27 510.446 1279.64 510.446C1284.25 510.446 1288.08 511.503 1291.15 513.613C1294.41 515.72 1296.04 518.503 1296.04 521.958V530.589C1298.92 525.027 1303.62 520.04 1310.14 515.626C1316.86 511.024 1325.01 508.721 1334.6 508.721C1343.62 508.721 1351.86 511.405 1359.35 516.777C1366.83 521.957 1372.77 528.957 1377.19 537.781C1381.79 546.604 1384.09 556.387 1384.09 567.132V635.035C1384.09 639.064 1382.17 642.133 1378.34 644.244C1374.5 646.162 1370.18 647.121 1365.39 647.121C1361.17 647.121 1357.04 646.162 1353.01 644.244C1348.99 642.133 1346.97 639.064 1346.97 635.035V567.132C1346.97 562.718 1345.82 558.595 1343.52 554.759C1341.41 550.92 1338.44 547.756 1334.6 545.264C1330.76 542.576 1326.54 541.235 1321.94 541.235C1318.1 541.235 1314.36 542.289 1310.72 544.4C1307.07 546.51 1304.1 549.481 1301.8 553.317C1299.5 557.157 1298.34 561.759 1298.34 567.132V635.035C1298.34 638.105 1296.52 640.888 1292.88 643.38C1289.23 645.875 1284.82 647.121 1279.64 647.121Z" className='fill-white'/>
    <path d="M371.373 179.627C370.095 185.809 370.148 192.302 371.521 198.503C365.319 197.131 358.828 197.077 352.626 198.374C353.925 192.176 353.89 185.701 352.499 179.482C358.719 180.872 365.192 180.909 371.373 179.627Z" className='fill-white'/>
    <path d="M377.934 184.079C377.934 192.857 370.811 200 362.031 200C353.189 200 346.066 192.857 346.066 184.079C346.066 148.432 313.581 115.979 277.965 115.979C269.184 115.979 262 108.836 262 100C262 91.2223 269.184 84.0795 277.965 84.0795C313.581 84.0795 346.066 51.6357 346.066 15.9818C346.066 7.14456 353.189 0 362.031 0C370.811 0 377.934 7.14205 377.934 15.9818C377.934 51.634 410.419 84.0795 446.035 84.0795C454.877 84.0795 462 91.2223 462 100C462 108.836 454.877 115.979 446.035 115.979C410.419 115.988 377.934 148.432 377.934 184.079ZM362.028 131.481C370.135 118.947 380.942 108.115 393.47 100C380.944 91.893 370.135 81.1201 362.028 68.5279C353.922 81.1201 343.115 91.893 330.526 100C343.115 108.115 353.922 118.947 362.028 131.481Z" className='fill-white'/>
    </g>
    <defs>
    <clipPath id="clip0_109_3">
    <rect width="1385" height="711" fill="none"/>
    </clipPath>
    </defs>
    </svg>
  }
}

export default Logo