type StyleMap = Partial<CSSStyleDeclaration>;

export function hoverHandlers(enter: StyleMap, leave: StyleMap) {
  return {
    onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
      Object.assign((e.currentTarget as HTMLElement).style, enter);
    },
    onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
      Object.assign((e.currentTarget as HTMLElement).style, leave);
    },
  };
}
