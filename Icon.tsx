import React from 'react'
import { View, Text } from 'react-native'
import Svg, {Path} from 'react-native-svg';

interface IconProps{
    color?: string,
    width?: number,
    height?: number,
}

const Icon = ({color = '#000000', width = 10, height = 18} : IconProps) => {
  return (
    <Svg  width={width} height={height} viewBox="0 0 1080 1080">
        <Path fill = {color} 
            fill-rule = "nonzero; opacity: 1;"  
            d="M 41.66797 0 L 208.33203 0 C 231.34375 0 250 18.65625 250 41.66797 L 250 208.33203 C 250 231.34375 231.34375 250 208.33203 250 L 41.66797 250 C 18.656249999999996 250 0 231.34375 0 208.33203 L 0 41.66797 C 0 18.656249999999996 18.65625 0 41.66797 0 z M 41.66797 0" stroke-linecap="round" />
    </Svg>
  );
};

export default Icon



{/*            
    <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(78,98,39); fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke"  transform=" translate(-125, -75)" d="M 216.66797 122.91797 C 215.00781 122.91797 213.41797 122.25780999999999 212.24609999999998 121.08594 L 134.80859999999998 43.64452999999999 C 132.19922999999997 41.05468999999999 128.67578999999998 39.593749999999986 125.00000999999999 39.58202999999999 C 121.32032 39.57421999999999 117.78907 41.03515999999999 115.19142 43.64452999999999 L 37.753919999999994 121.08594 C 35.312509999999996 123.52735 31.355479999999993 123.52735 28.91407999999999 121.08594 C 26.47266999999999 118.64452999999999 26.47266999999999 114.6875 28.91407999999999 112.2461 L 106.35549 34.8086 C 116.65237 24.50782 133.34768 24.50782 143.64455 34.8086 L 221.08596 112.2461 C 222.87502 114.03516 223.41018 116.72266 222.44533 119.0586 C 221.47658 121.39453999999999 219.19533 122.91798 216.66799 122.91798 z M 216.66797 122.91797" stroke-linecap="round" />
    </g>
            <g transform="matrix(1 0 0 1 0 12.5)"  >
    <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(160,102,91); fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke"  transform=" translate(-125, -137.5)" d="M 125 58.33203 L 58.33203 125 L 58.33203 216.66797 L 100 216.66797 L 100 175 C 100 161.19141 111.19141 150 125 150 C 138.80859 150 150 161.19141 150 175 L 150 216.66797 L 191.66797 216.66797 L 191.66797 125 z M 125 58.33203" stroke-linecap="round" />
    </g>
            <g transform="matrix(1 0 0 1 0 12.5)"  >
    <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(78,98,39); fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke"  transform=" translate(-125, -137.5)" d="M 191.66797 222.91797 L 150 222.91797 C 146.54688 222.91797 143.75 220.11719 143.75 216.66797 L 143.75 175 C 143.75 164.64453 135.35547 156.25 125 156.25 C 114.64453 156.25 106.25 164.64453 106.25 175 L 106.25 216.66797 C 106.25 220.11719 103.45313 222.91797 100 222.91797 L 58.33203 222.91797 C 54.882810000000006 222.91797 52.08203 220.11719 52.08203 216.66797 L 52.08203 125 C 52.08203 123.34375 52.74219 121.75 53.914060000000006 120.57813 L 120.57812000000001 53.914069999999995 C 123.01953000000002 51.468759999999996 126.98046000000001 51.468759999999996 129.42187 53.914069999999995 L 196.08593000000002 120.57813 C 197.25780000000003 121.75001 197.91796000000002 123.34376 197.91796000000002 125.00001 L 197.91796000000002 216.66798 C 197.91796000000002 220.1172 195.11718000000002 222.91798 191.66796000000002 222.91798 z M 156.25 210.41797 L 185.41797 210.41797 L 185.41797 127.58594 L 125 67.17187999999999 L 64.58203 127.58594 L 64.58203 210.41797 L 93.75 210.41797 L 93.75 175 C 93.75 157.74219 107.74219 143.75 125 143.75 C 142.25781 143.75 156.25 157.74219 156.25 175 z M 156.25 210.41797" stroke-linecap="round" />
    </g>
            <g transform="matrix(1 0 0 1 0 58.33)"  >
    <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(78,98,39); fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke"  transform=" translate(-125, -183.33)" d="M 150 222.91797 C 146.54688 222.91797 143.75 220.11719 143.75 216.66797 L 143.75 175 C 143.75 164.64453 135.35547 156.25 125 156.25 C 114.64453 156.25 106.25 164.64453 106.25 175 L 106.25 216.66797 C 106.25 220.11719 103.45313 222.91797 100 222.91797 C 96.54688 222.91797 93.75 220.11719 93.75 216.66797 L 93.75 175 C 93.75 157.74219 107.74219 143.75 125 143.75 C 142.25781 143.75 156.25 157.74219 156.25 175 L 156.25 216.66797 C 156.25 220.11719 153.45313 222.91797 150 222.91797 z M 150 222.91797" stroke-linecap="round" />
    </g>
    </g>
    </g>
    <g transform="matrix(1 0 0 1 540.5 539.93)" style="filter: url(#SVGID_328);" id="a40350fb-ee46-4abd-87c3-00dae6086f0a"  >
    <filter id="SVGID_328" y="-25%" height="150%" x="-20%" width="140%" >
        <feGaussianBlur in="SourceAlpha" stdDeviation="0"></feGaussianBlur>
        <feOffset dx="2" dy="2" result="oBlur" ></feOffset>
        <feFlood flood-color="rgb(0,0,0)" flood-opacity="1"/>
        <feComposite in2="oBlur" operator="in" />
        <feMerge>
            <feMergeNode></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
        </feMerge> */}




    {/* <rect x="0" y="0" width="100%" height="100%" fill="transparent"></rect>
    <g transform="matrix(1 0 0 1 540 540)" id="65963d3a-fcf3-4382-bcb3-42d193ada64d"  >
    <rect style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1; visibility: hidden;" vector-effect="non-scaling-stroke"  x="-540" y="-540" rx="0" ry="0" width="1080" height="1080" />
    </g>
    <g transform="matrix(1 0 0 1 540 540)" id="b19a65d1-c316-4f40-bec7-3f02a49fa496"  >
    </g>
    <g transform="matrix(1 0 0 1 540 540)"  >
    <g style="" vector-effect="non-scaling-stroke"   >
    <g transform="matrix(1 0 0 1 0 0)"  > */}