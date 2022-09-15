/// <reference types="react-scripts" />
declare module "*.ttf";
declare module "*.otf";
declare module "*.woff";
declare module "*.woff2";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
