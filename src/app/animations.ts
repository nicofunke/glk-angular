import { trigger, state, style, transition, animate, group, query, animateChild } from "@angular/animations";

/**
 * Slide out to right side animation
 */
const slideToRight = [
    style({ position: "relative", overflow: "hidden", height: "100vh", width: "100%" }),
    query(":enter, :leave", [
      style({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%"
      })
    ]),
    query(":enter", [
      style({ left: "-100%"})
    ]),
    query(":leave", animateChild()),
    group([
      query(":leave", [
        animate("400ms ease-out", style({ left: "100%"}))
      ]),
      query(":enter", [
        animate("400ms ease-out", style({ left: "0%"}))
      ])
    ]),
    query(":enter", animateChild()),
  ];

/**
 * Slide out to left side animation
 */
const slideToLeft = [
    style({ position: "relative", overflow: "hidden", height: "100vh", width: "100%" }),
    query(":enter, :leave", [
      style({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%"
      })
    ]),
    query(":enter", [
      style({ left: "100%"})
    ]),
    query(":leave", animateChild()),
    group([
      query(":leave", [
        animate("400ms ease-out", style({ left: "-100%"}))
      ]),
      query(":enter", [
        animate("400ms ease-out", style({ left: "0%"}))
      ])
    ]),
    query(":enter", animateChild()),
  ];

/**
 * Set Animations for route changes
 */
export const slideInAnimation =
  trigger("routeAnimations", [
    transition("Home => Goehc", slideToLeft),
    transition("Home => UndergroundRemains", slideToLeft),
    transition("Home => Chamaeleon", slideToLeft),

    transition("Goehc => Home", slideToRight),
    transition("Goehc => UndergroundRemains", slideToLeft),
    transition("Goehc => Chamaeleon", slideToLeft),

    transition("UndergroundRemains => Chamaeleon", slideToLeft),
    transition("UndergroundRemains => Goehc", slideToRight),
    transition("UndergroundRemains => Home", slideToRight),

    transition("Chamaeleon => Home", slideToRight),
    transition("Chamaeleon => Goehc", slideToRight),
    transition("Chamaeleon => UndergroundRemains", slideToRight),
]);
