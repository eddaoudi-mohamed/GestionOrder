import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useAppSelector } from "../hooks";
import { selectAuth } from "./AuthSlice";
import { useEffect } from "react";

const RequireAuth = () => {
  const isAuthenticated = useAppSelector(selectAuth);
  const location = useLocation();
  useEffect(() => {
  //   function getCookie(name: string) {
  //     var dc = document.cookie;
  //     var prefix = name + "=";
  //     var begin = dc.indexOf("; " + prefix);
  //     if (begin == -1) {
  //         begin = dc.indexOf(prefix);
  //         if (begin != 0) return null;
  //     }
  //     else
  //     {
  //         begin += 2;
  //         var end = document.cookie.indexOf(";", begin);
  //         if (end == -1) {
  //         end = dc.length;
  //         }
  //     }
  //     // because unescape has been deprecated, replaced with decodeURI
  //     //return unescape(dc.substring(begin + prefix.length, end));
  //     return decodeURI(dc.substring(begin + prefix.length, end));
  // } 
  function getCookie(cname:string) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
  
    return `the ${decodedCookie}`;
  }
    const Cokies = getCookie("access_token");
    
    // const Cokies = document.cookie;
    console.log("the access_token => ", Cokies);
  });

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} />
  );
};

export default RequireAuth;
