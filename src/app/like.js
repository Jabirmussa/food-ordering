'use client';
import { useState } from "react";

export default function ClickEvent() {
    function click(){
        alert('hello');
    }
    return <button onClick={click}>Like</button>
  }