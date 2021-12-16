import * as React from 'react';
import './loading.css'
export default function loding(props:any) {
  return (
    <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  );
}