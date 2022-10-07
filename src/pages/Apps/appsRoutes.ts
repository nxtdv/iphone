import React, { ComponentType, LazyExoticComponent } from "react";
import notesIcon from "/img/apps/Notes.png";
import calculatorIcon from "/img/apps/Calculator.png";
import photosIcon from "/img/apps/Photos.png";

type PhoneApp<T extends ComponentType> = {
  id: string;
  element: LazyExoticComponent<T>;
  title: string;
  iconPath: string;
  route: string;
  destination: string;
};

const appsRoutes: PhoneApp<any>[] = [
  {
    id: "notes",
    element: React.lazy(() => import("./Notes/Notes")),
    iconPath: notesIcon,
    title: "Notes",
    route: "notes/*",
    destination: "notes",
  },
  {
    id: "calculator",
    element: React.lazy(() => import("./Calculator/Calculator")),
    iconPath: calculatorIcon,
    title: "Calculette",
    route: "calculator/*",
    destination: "calculator",
  },
  {
    id: "photos",
    element: React.lazy(() => import("./Photos/Photos")),
    iconPath: photosIcon,
    title: "Photos",
    route: "photos/*",
    destination: "photos",
  },
];

export default appsRoutes;
