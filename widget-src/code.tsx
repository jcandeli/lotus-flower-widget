const { widget } = figma;
const { SVG, Input, Frame, useSyncedState } = widget;

const lotusSvgSource = `<svg width="1048" height="546" viewBox="0 0 1048 546" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M406.581 166.48C406.581 186.178 421.71 233.776 406.581 243.599C398.21 249.035 359.514 232.556 348.868 232.556C318.979 232.556 295.829 197.077 295.829 166.48C301.223 120.834 294.92 117.119 294.75 111.079C302.772 114.378 301.942 118.441 348.868 111.079C384.646 111.079 406.581 135.883 406.581 166.48Z"
    fill="url(#paint0_linear_39_2)" />
  <path
    d="M331.068 148.259L354.082 184.702M406.581 166.48C406.581 135.883 384.646 111.079 348.868 111.079C301.942 118.441 302.772 114.378 294.75 111.079C294.92 117.119 301.223 120.834 295.829 166.48C295.829 197.077 318.979 232.556 348.868 232.556C359.514 232.556 398.21 249.035 406.581 243.599C421.71 233.776 406.581 186.178 406.581 166.48Z"
    stroke="black" stroke-width="2" stroke-linecap="round" />
  <path
    d="M640.906 171.233C640.906 192.62 626.195 244.301 640.906 254.967C649.046 260.869 686.673 242.977 697.025 242.977C726.088 242.977 748.599 204.454 748.599 171.233C743.354 121.671 749.483 117.637 749.648 111.079C741.848 114.661 742.655 119.073 697.025 111.079C662.235 111.079 640.906 138.011 640.906 171.233Z"
    fill="url(#paint1_linear_39_2)" />
  <path
    d="M714.333 151.448L691.955 191.017M640.906 171.233C640.906 138.011 662.235 111.079 697.025 111.079C742.655 119.073 741.848 114.661 749.648 111.079C749.483 117.637 743.354 121.671 748.599 171.233C748.599 204.454 726.088 242.977 697.025 242.977C686.673 242.977 649.046 260.869 640.906 254.967C626.195 244.301 640.906 192.62 640.906 171.233Z"
    stroke="black" stroke-width="2" stroke-linecap="round" />
  <path
    d="M406.581 379.632C406.581 359.838 421.71 312.006 406.581 302.135C398.21 296.673 359.514 313.232 348.868 313.232C318.979 313.232 295.829 348.885 295.829 379.632C301.223 425.502 294.92 429.235 294.75 435.305C302.772 431.99 301.942 427.906 348.868 435.305C384.646 435.305 406.581 410.379 406.581 379.632Z"
    fill="url(#paint2_linear_39_2)" />
  <path
    d="M331.068 397.943L354.082 361.321M406.581 379.632C406.581 410.379 384.646 435.305 348.868 435.305C301.942 427.906 302.772 431.99 294.75 435.305C294.92 429.235 301.223 425.502 295.829 379.632C295.829 348.885 318.979 313.232 348.868 313.232C359.514 313.232 398.21 296.673 406.581 302.135C421.71 312.006 406.581 359.838 406.581 379.632Z"
    stroke="black" stroke-width="2" stroke-linecap="round" />
  <path
    d="M641.111 379.632C641.111 359.838 625.94 312.006 641.111 302.135C649.505 296.673 688.307 313.232 698.983 313.232C728.954 313.232 752.169 348.885 752.169 379.632C746.76 425.502 753.08 429.235 753.25 435.305C745.206 431.99 746.039 427.906 698.983 435.305C663.106 435.305 641.111 410.379 641.111 379.632Z"
    fill="url(#paint3_linear_39_2)" />
  <path
    d="M716.832 397.943L693.755 361.321M641.111 379.632C641.111 410.379 663.106 435.305 698.983 435.305C746.039 427.906 745.206 431.99 753.25 435.305C753.08 429.235 746.76 425.502 752.169 379.632C752.169 348.885 728.954 313.232 698.983 313.232C688.307 313.232 649.505 296.673 641.111 302.135C625.94 312.006 641.111 359.838 641.111 379.632Z"
    stroke="black" stroke-width="2" stroke-linecap="round" />
  <path
    d="M284.283 376.337L128.523 376.337C90.8359 376.337 57.2918 352.448 44.9694 316.832L41.9414 308.08C38.6954 298.699 33.0191 290.346 25.4914 283.874C22.7025 281.476 19.6847 279.359 16.4815 277.551L2.29859 269.549L19.7363 263.453C20.6727 263.125 21.5744 262.706 22.4283 262.201L24.5094 260.971C32.5438 256.222 38.6347 248.779 41.7 239.964L46.8378 225.188C58.0447 192.959 88.4265 171.357 122.549 171.357L278.117 171.357C298.22 171.357 316.398 181.637 333.955 194.824C340.857 200.009 347.631 205.616 354.376 211.2C356.204 212.714 358.03 214.225 359.855 215.726C368.404 222.754 376.94 229.54 385.598 235.094C392.197 239.328 400.039 243.68 409.33 248.252C418.609 252.819 424.75 262.106 424.749 272.398C424.75 284.843 416.234 295.535 404.388 299.693C393.401 303.55 384.345 307.893 377.079 313.247C369.285 318.99 361.942 325.835 354.734 332.841C353.011 334.516 351.297 336.199 349.586 337.878C344.124 343.241 338.694 348.571 333.125 353.494C318.499 366.423 303.123 376.337 284.283 376.337Z"
    fill="url(#paint4_linear_39_2)" stroke="black" stroke-width="2" />
  <path
    d="M763.717 376.337L917.851 376.337C955.922 376.337 989.9 352.452 1002.79 316.629L1005.92 307.915C1009.26 298.631 1014.95 290.371 1022.43 283.938C1025.27 281.498 1028.34 279.342 1031.6 277.503L1045.7 269.549L1028.26 263.453C1027.33 263.125 1026.43 262.706 1025.57 262.201L1023.44 260.942C1015.43 256.209 1009.32 248.835 1006.16 240.088L1000.82 225.313C989.109 192.932 958.366 171.357 923.932 171.357H769.884C749.78 171.357 731.602 181.637 714.046 194.824C707.144 200.009 700.37 205.616 693.624 211.201C691.797 212.714 689.971 214.225 688.145 215.726C679.597 222.754 671.06 229.54 662.403 235.094C655.804 239.328 647.962 243.68 638.671 248.252C629.391 252.819 623.251 262.106 623.251 272.398C623.251 284.843 631.766 295.535 643.612 299.693C654.6 303.55 663.655 307.893 670.922 313.247C678.716 318.99 686.059 325.835 693.267 332.841C694.989 334.516 696.703 336.198 698.414 337.878C703.877 343.241 709.306 348.571 714.876 353.494C729.502 366.423 744.877 376.337 763.717 376.337Z"
    fill="url(#paint5_linear_39_2)" stroke="black" stroke-width="2" />
  <path
    d="M549.537 30.4996L549.556 30.5056L549.575 30.5108L610.385 47.4497C653.201 59.3759 682.82 98.3737 682.82 142.819V172.949C680.218 195.035 674.412 207.748 664.447 215.587C654.423 223.473 640.011 226.585 619.736 228.962H520.07H433.86C425.933 228.962 418.021 228.101 410.433 225.952C396.594 222.033 386.088 217.701 378.015 211.22C369.969 204.76 364.266 196.103 360.156 183.395C357.938 176.537 357.32 169.247 357.32 161.939V142.751C357.32 98.3373 386.898 59.3592 429.673 47.4045L490.12 30.5106L490.144 30.5041L490.167 30.4964L495.937 28.5775C505.957 25.2452 513.984 17.6401 517.852 7.81359L519.988 2.38705L521.554 6.94781C525.093 17.2498 533.285 25.2787 543.656 28.6102L549.537 30.4996Z"
    fill="url(#paint6_linear_39_2)" stroke="black" stroke-width="2" />
  <path
    d="M494.534 516.171L494.511 516.164L494.489 516.158L434.363 499.869C391.212 488.179 361.25 449.02 361.25 404.314L361.25 373.516C363.853 351.398 369.659 338.667 379.624 330.816C389.648 322.92 404.06 319.803 424.335 317.423L524 317.422L610.194 317.422C618.131 317.422 626.055 318.286 633.652 320.441C647.491 324.366 657.997 328.707 666.068 335.201C674.113 341.674 679.815 350.348 683.924 363.083C686.134 369.934 686.75 377.214 686.75 384.511L686.75 404.381C686.75 449.056 656.829 488.196 613.718 499.914L553.957 516.158L553.93 516.166L553.903 516.174L548.153 518.089C538.12 521.431 530.085 529.05 526.217 538.892L524.083 544.323L522.517 539.759C518.978 529.441 510.778 521.397 500.394 518.056L494.534 516.171Z"
    fill="url(#paint7_linear_39_2)" stroke="black" stroke-width="2" />
  <rect x="393.672" y="208.037" width="260" height="129" rx="64.5" fill="white" stroke="black"
    stroke-width="2" />
  <path d="M363.689 273.192H389.398" stroke="black" stroke-width="2" stroke-linecap="round" />
  <path d="M657.948 272.864H683.657" stroke="black" stroke-width="2" stroke-linecap="round" />
  <defs>
    <linearGradient id="paint0_linear_39_2" x1="294.75" y1="111.079" x2="394.062" y2="242.479"
      gradientUnits="userSpaceOnUse">
      <stop stop-color="#ECF5FF" />
      <stop offset="1" stop-color="#D7CFE3" />
    </linearGradient>
    <linearGradient id="paint1_linear_39_2" x1="749.648" y1="111.079" x2="639.157" y2="242.001"
      gradientUnits="userSpaceOnUse">
      <stop stop-color="#ECF5FF" />
      <stop offset="1" stop-color="#D7CFE3" />
    </linearGradient>
    <linearGradient id="paint2_linear_39_2" x1="294.75" y1="435.305" x2="394.681" y2="303.731"
      gradientUnits="userSpaceOnUse">
      <stop stop-color="#ECF5FF" />
      <stop offset="1" stop-color="#D7CFE3" />
    </linearGradient>
    <linearGradient id="paint3_linear_39_2" x1="753.25" y1="435.305" x2="653.394" y2="303.465"
      gradientUnits="userSpaceOnUse">
      <stop stop-color="#ECF5FF" />
      <stop offset="1" stop-color="#D7CFE3" />
    </linearGradient>
    <linearGradient id="paint4_linear_39_2" x1="2.22616e-05" y1="273.847" x2="425.75"
      y2="273.847" gradientUnits="userSpaceOnUse">
      <stop offset="0.498533" stop-color="white" />
      <stop offset="1" stop-color="#EAF2FD" />
    </linearGradient>
    <linearGradient id="paint5_linear_39_2" x1="1048" y1="273.847" x2="622.25" y2="273.847"
      gradientUnits="userSpaceOnUse">
      <stop offset="0.499017" stop-color="white" />
      <stop offset="1" stop-color="#EAF2FD" />
    </linearGradient>
    <linearGradient id="paint6_linear_39_2" x1="520.07" y1="0.711914" x2="520.07" y2="229.962"
      gradientUnits="userSpaceOnUse">
      <stop offset="0.496343" stop-color="white" />
      <stop offset="1" stop-color="#EAF2FD" />
    </linearGradient>
    <linearGradient id="paint7_linear_39_2" x1="524" y1="546" x2="524" y2="316.423"
      gradientUnits="userSpaceOnUse">
      <stop offset="0.502846" stop-color="white" />
      <stop offset="1" stop-color="#EAF2FD" />
    </linearGradient>
  </defs>
</svg>`;

function LotusFlower() {
  const [texts, setTexts] = useSyncedState("texts", ["", "", "", "", ""]); // Four petals + center

  const handlePlusClick = (index: number) => {
    console.log(`Plus ${index} clicked`);
    // Add your callback logic here
  };

  return (
    <Frame minWidth={1048} minHeight={546} width={1048} height={546}>
      {/* Render your SVG */}
      <SVG src={lotusSvgSource}></SVG>

      {/* Add editable text areas */}
      {texts.map((text: string, index: number) => (
        <>
          <Input
            fontSize={24}
            x={getPetalX(index)}
            y={getPetalY(index)}
            key={`input-${index}`}
            value={text}
            placeholder={index === 4 ? "Main Idea" : "Supporting Idea"}
            onTextEditEnd={(text) =>
              setTexts(texts.map((_, i) => (i === index ? text.characters : _)))
            }
            horizontalAlignText="center"
          />
          {/* Only show plus icons for the first 4 petals */}
          {index < 4 && (
            <SVG
              src={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="11" stroke="black" stroke-width="2"/>
                <path d="M12 6V18" stroke="black" stroke-width="2"/>
                <path d="M18 12L6 12" stroke="black" stroke-width="2"/>
              </svg>`}
              x={getPetalX(index) + (index === 0 ? -55 : index === 1 ? 100 : 0)}
              y={getPetalY(index) + (index === 2 ? -65 : index === 3 ? 100 : 0)}
              onClick={() => handlePlusClick(index)}
              key={`plus-${index}`}
            />
          )}
        </>
      ))}
    </Frame>
  );
}

widget.register(LotusFlower);

// Helper functions to position text areas in a cross formation
function getPetalX(index: number): number {
  // Center X position
  const centerX = 424; // Center of the SVG (1048/2)
  const offset = 300; // Horizontal offset from center

  switch (index) {
    case 0:
      return centerX - offset; // Left
    case 1:
      return centerX + offset; // Right
    case 2:
      return centerX; // Top
    case 3:
      return centerX; // Bottom
    case 4:
      return centerX; // Center
    default:
      return centerX;
  }
}

function getPetalY(index: number): number {
  // Center Y position
  const centerY = 273; // Center of the SVG (546/2)
  const offset = 150; // Vertical offset from center

  switch (index) {
    case 0:
      return centerY; // Left
    case 1:
      return centerY; // Right
    case 2:
      return centerY - offset; // Top
    case 3:
      return centerY + offset; // Bottom
    case 4:
      return centerY; // Center
    default:
      return centerY;
  }
}
