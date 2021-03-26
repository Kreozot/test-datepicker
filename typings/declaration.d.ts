declare const Liferay: any;

declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}
