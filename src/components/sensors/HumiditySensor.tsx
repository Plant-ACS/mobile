import React from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';

const humidity = `<svg width="37" height="88" viewBox="0 0 37 88" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_341_381)">
<path d="M1.08203 26.3461V22.2783H12.3123V26.3461V78.8345C12.3123 78.9808 12.2677 79.1237 12.1846 79.2442L7.29078 86.3349C7.00405 86.7503 6.39024 86.7503 6.10351 86.3349L1.20969 79.2442C1.12656 79.1237 1.08203 78.9808 1.08203 78.8345V26.3461Z" fill="#D9D9D9"/>
<path d="M34.983 26.3461V78.8345C34.983 78.9808 34.9385 79.1237 34.8553 79.2442L29.9615 86.3349C29.6748 86.7503 29.061 86.7503 28.7742 86.3349L23.8804 79.2442C23.7973 79.1237 23.7527 78.9808 23.7527 78.8345V26.3461V22.2783H34.983V26.3461Z" fill="#D9D9D9"/>
</g>
<g filter="url(#filter1_d_341_381)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.08203 6.38669C1.08203 4.60678 2.52494 3.16388 4.30485 3.16388H31.7602C33.5401 3.16388 34.983 4.60678 34.983 6.3867V22.2782H1.08203V6.38669ZM29.7536 10.2433C28.7577 10.2433 27.9503 9.45089 27.9503 8.47343C27.9503 7.49597 28.7577 6.70358 29.7536 6.70358C30.7495 6.70358 31.5568 7.49597 31.5568 8.47343C31.5568 9.45089 30.7495 10.2433 29.7536 10.2433ZM4.50819 8.47343C4.50819 9.45089 5.31553 10.2433 6.31143 10.2433C7.30734 10.2433 8.11468 9.45089 8.11468 8.47343C8.11468 7.49597 7.30734 6.70358 6.31143 6.70358C5.31553 6.70358 4.50819 7.49597 4.50819 8.47343Z" fill="#DD4545"/>
</g>
<rect x="27.9739" y="23.7208" width="2.11685" height="6.85232" fill="#F3BC7B"/>
<rect x="26.3274" y="25.5241" width="5.40973" height="3.60648" rx="1.80324" fill="#F3BC7B"/>
<rect x="27.9739" y="30.5732" width="2.11685" height="6.85232" fill="#F3BC7B"/>
<rect x="26.3274" y="32.3764" width="5.40973" height="3.60648" rx="1.80324" fill="#F3BC7B"/>
<rect x="27.9739" y="37.4255" width="2.11685" height="6.85232" fill="#F3BC7B"/>
<rect x="26.3274" y="39.2288" width="5.40973" height="3.60648" rx="1.80324" fill="#F3BC7B"/>
<rect x="27.9739" y="44.2778" width="2.11685" height="6.85232" fill="#F3BC7B"/>
<rect x="26.3274" y="46.0811" width="5.40973" height="3.60648" rx="1.80324" fill="#F3BC7B"/>
<rect x="27.9739" y="51.1301" width="2.11685" height="6.85232" fill="#F3BC7B"/>
<rect x="26.3274" y="52.9333" width="5.40973" height="3.60648" rx="1.80324" fill="#F3BC7B"/>
<rect x="27.9739" y="57.9825" width="2.11685" height="6.85232" fill="#F3BC7B"/>
<rect x="26.3274" y="59.7857" width="5.40973" height="3.60648" rx="1.80324" fill="#F3BC7B"/>
<rect x="27.9739" y="64.8348" width="2.11685" height="6.85232" fill="#F3BC7B"/>
<rect x="26.3274" y="66.638" width="5.40973" height="3.60648" rx="1.80324" fill="#F3BC7B"/>
<rect x="27.9739" y="71.6871" width="2.11685" height="6.85232" fill="#F3BC7B"/>
<rect x="26.3274" y="73.4904" width="5.40973" height="3.60648" rx="1.80324" fill="#F3BC7B"/>
<rect x="5.97412" y="23.7208" width="2.11685" height="6.85232" fill="#F3BC7B"/>
<rect x="4.32788" y="25.5241" width="5.40973" height="3.60648" rx="1.80324" fill="#F3BC7B"/>
<rect x="5.97412" y="30.5732" width="2.11685" height="6.85232" fill="#F3BC7B"/>
<rect x="4.32788" y="32.3764" width="5.40973" height="3.60648" rx="1.80324" fill="#F3BC7B"/>
<rect x="5.97412" y="37.4255" width="2.11685" height="6.85232" fill="#F3BC7B"/>
<rect x="4.32788" y="39.2288" width="5.40973" height="3.60648" rx="1.80324" fill="#F3BC7B"/>
<rect x="5.97412" y="44.2778" width="2.11685" height="6.85232" fill="#F3BC7B"/>
<rect x="4.32788" y="46.0811" width="5.40973" height="3.60648" rx="1.80324" fill="#F3BC7B"/>
<rect x="5.97412" y="51.1301" width="2.11685" height="6.85232" fill="#F3BC7B"/>
<rect x="4.32788" y="52.9333" width="5.40973" height="3.60648" rx="1.80324" fill="#F3BC7B"/>
<rect x="5.97412" y="57.9825" width="2.11685" height="6.85232" fill="#F3BC7B"/>
<rect x="4.32788" y="59.7857" width="5.40973" height="3.60648" rx="1.80324" fill="#F3BC7B"/>
<rect x="5.97412" y="64.8348" width="2.11685" height="6.85232" fill="#F3BC7B"/>
<rect x="4.32788" y="66.638" width="5.40973" height="3.60648" rx="1.80324" fill="#F3BC7B"/>
<rect x="5.97412" y="71.6871" width="2.11685" height="6.85232" fill="#F3BC7B"/>
<rect x="4.32788" y="73.4904" width="5.40973" height="3.60648" rx="1.80324" fill="#F3BC7B"/>
<path d="M13.344 3.16388H22.7209V7.13101C22.7209 7.52937 22.3979 7.85231 21.9996 7.85231H14.0653C13.6669 7.85231 13.344 7.52937 13.344 7.13101V3.16388Z" fill="#302C2C"/>
<path d="M16.2292 1C16.2292 0.701229 15.987 0.459027 15.6882 0.459027C15.3895 0.459027 15.1473 0.701229 15.1473 1H16.2292ZM15.1473 1V5.32778H16.2292V1H15.1473Z" fill="#C6C6C6"/>
<path d="M20.7373 1C20.7373 0.701229 20.4951 0.459027 20.1963 0.459027C19.8975 0.459027 19.6553 0.701229 19.6553 1H20.7373ZM19.6553 1V5.32778H20.7373V1H19.6553Z" fill="#C6C6C6"/>
<path d="M1.08203 22.2783H2.88527V23.1799H1.08203V22.2783Z" fill="#AA2A2A"/>
<rect x="6.4917" y="13.262" width="23.0815" height="4.68843" rx="1.44259" fill="#E75B5B"/>
<defs>
<filter id="filter0_d_341_381" x="1.08203" y="22.2783" width="34.8025" height="65.2698" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.901621" dy="0.901621"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.541667 0 0 0 0 0.541667 0 0 0 0 0.541667 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_341_381"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_341_381" result="shape"/>
</filter>
<filter id="filter1_d_341_381" x="1.08203" y="3.16388" width="34.8025" height="20.016" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.901621" dy="0.901621"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.666667 0 0 0 0 0.163889 0 0 0 0 0.163889 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_341_381"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_341_381" result="shape"/>
</filter>
</defs>
</svg>
`

export default function HumiditySensor() {
  return (
    <View>
      <SvgXml xml={humidity} width='37px' height="88px" />
    </View>
  );
}

