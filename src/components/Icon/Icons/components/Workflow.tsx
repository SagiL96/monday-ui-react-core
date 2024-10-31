/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface WorkflowProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Workflow: React.FC<WorkflowProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M2.88125 13.6703V16.2203H6.49375V13.6703H2.88125zM2.03125 12.2891C1.73785 12.2891 1.5 12.5269 1.5 12.8203V17.0703C1.5 17.3637 1.73785 17.6016 2.03125 17.6016H7.34375C7.63715 17.6016 7.875 17.3637 7.875 17.0703V12.8203C7.875 12.5269 7.63715 12.2891 7.34375 12.2891H5.37793 3.99668 2.03125zM10.0588 4.35284L7.62811 6.78356 10.0588 9.21429 12.4896 6.78356 10.0588 4.35284zM10.4345 2.7751C10.227 2.56764 9.89065 2.56764 9.68319 2.7751L6.17309 6.2852 6.51646 7.62529 9.68319 10.792C9.89065 10.9994 10.227 10.9994 10.4345 10.792L13.5751 7.65145 13.9446 6.2852 10.4345 2.7751z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
    <path d="M6.51646 7.62529C6.44299 7.65193 6.36372 7.66645 6.28105 7.66645H5.37793V12.2891H3.99668V7.50707C3.99668 6.83225 4.54373 6.2852 5.21855 6.2852H6.17309L6.51646 7.62529zM17.1188 13.6703V16.2203H13.5063V13.6703H17.1188zM17.9688 12.2891C18.2622 12.2891 18.5 12.5269 18.5 12.8203V17.0703C18.5 17.3637 18.2622 17.6016 17.9688 17.6016H12.6562C12.3628 17.6016 12.125 17.3637 12.125 17.0703V12.8203C12.125 12.5269 12.3628 12.2891 12.6562 12.2891H14.6221 16.0033 17.9688zM13.9446 6.2852L13.5751 7.65145C13.6215 7.66128 13.6696 7.66645 13.7189 7.66645H14.6221V12.2891H16.0033V7.50707C16.0033 6.83225 15.4563 6.2852 14.7814 6.2852H13.9446z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Workflow.displayName = 'Workflow';
export default Workflow;
/* tslint:enable */
/* eslint-enable */
