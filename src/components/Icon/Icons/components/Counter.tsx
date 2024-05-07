/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface CounterProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Counter: React.FC<CounterProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <g fill="currentColor" clipPath="url(#clip0)">
      <path d="M4.86947 8.59888H3.56146V3.55694L2 4.04122V2.97761L4.72917 2H4.86947V8.59888zM11.7107 13.3678H7.19375V12.4717L9.32549 10.1997C9.61817 9.87983 9.83391 9.60072 9.97271 9.36236 10.1145 9.12399 10.1854 8.89769 10.1854 8.68346 10.1854 8.39078 10.1115 8.16146 9.96365 7.99551 9.81581 7.82654 9.60459 7.74205 9.33002 7.74205 9.03432 7.74205 8.80048 7.84464 8.62849 8.04982 8.45952 8.25198 8.37503 8.51901 8.37503 8.85092H7.0625C7.0625 8.44962 7.15755 8.08301 7.34764 7.75111 7.54075 7.4192 7.8123 7.15971 8.16231 6.97264 8.51232 6.78255 8.9091 6.6875 9.35265 6.6875 10.0315 6.6875 10.5581 6.85044 10.9322 7.17631 11.3094 7.50218 11.498 7.96232 11.498 8.55673 11.498 8.8826 11.4135 9.21451 11.2445 9.55245 11.0755 9.89039 10.7859 10.2841 10.3755 10.7337L8.87742 12.3133H11.7107V13.3678zM14.9265 14.0561H15.6235C15.9555 14.0561 16.2014 13.9731 16.3613 13.8072 16.5212 13.6412 16.6012 13.421 16.6012 13.1464 16.6012 12.8809 16.5212 12.6742 16.3613 12.5263 16.2044 12.3785 15.9871 12.3046 15.7095 12.3046 15.4591 12.3046 15.2494 12.374 15.0804 12.5127 14.9115 12.6485 14.827 12.8266 14.827 13.0468H13.519C13.519 12.7028 13.611 12.3951 13.7951 12.1235 13.9821 11.8489 14.2416 11.6347 14.5735 11.4808 14.9084 11.3269 15.2766 11.25 15.6779 11.25 16.3749 11.25 16.921 11.4175 17.3163 11.7524 17.7115 12.0843 17.9092 12.5429 17.9092 13.1283 17.9092 13.43 17.8171 13.7076 17.6331 13.9611 17.449 14.2145 17.2076 14.4091 16.9089 14.5449 17.2801 14.6777 17.5561 14.8768 17.7372 15.1423 17.9212 15.4079 18.0133 15.7217 18.0133 16.0837 18.0133 16.6691 17.799 17.1383 17.3706 17.4913 16.9451 17.8444 16.3809 18.0209 15.6779 18.0209 15.0201 18.0209 14.4815 17.8474 14.0621 17.5004 13.6457 17.1534 13.4375 16.6948 13.4375 16.1245H14.7455C14.7455 16.3719 14.8375 16.5741 15.0216 16.731 15.2087 16.8879 15.438 16.9663 15.7095 16.9663 16.0203 16.9663 16.2632 16.8848 16.4382 16.7219 16.6162 16.556 16.7053 16.3372 16.7053 16.0656 16.7053 15.4079 16.3432 15.079 15.619 15.079H14.9265V14.0561z"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <path transform="translate(2 2)" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);
Counter.displayName = 'Counter';
export default Counter;
/* tslint:enable */
/* eslint-enable */
