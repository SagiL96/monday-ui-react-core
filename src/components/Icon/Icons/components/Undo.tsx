/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface UndoProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Undo: React.FC<UndoProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M6.62888 4.48408C6.91364 4.76883 6.91364 5.23052 6.62888 5.51527L4.54033 7.60386V9.06219L6.62888 11.1507C6.91364 11.4355 6.91364 11.8972 6.62888 12.1819C6.34412 12.4667 5.88244 12.4667 5.59768 12.1819L2.26435 8.84861C1.97959 8.56385 1.97959 8.10217 2.26435 7.81741L5.59768 4.48408C5.88244 4.19932 6.34412 4.19932 6.62888 4.48408Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
    <path d="M4.54033 7.60386H12.7799C14.1521 7.60386 15.468 8.14893 16.4382 9.11917C17.4085 10.0894 17.9536 11.4053 17.9536 12.7775V14.9997C17.9536 15.4024 17.6271 15.7289 17.2244 15.7289C16.8217 15.7289 16.4952 15.4024 16.4952 14.9997V12.7775C16.4952 11.7921 16.1038 10.8471 15.407 10.1504C14.7103 9.45362 13.7653 9.06219 12.7799 9.06219H4.54033V7.60386Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Undo.displayName = 'Undo';
export default Undo;
/* tslint:enable */
/* eslint-enable */
