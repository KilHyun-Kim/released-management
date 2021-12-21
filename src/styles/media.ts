export const breakPoints = {
    IPHONE5: '320px',
    MOBILE: '480px',
    TABLET: '768px',
    DESKTOP: '1600px',
    LARGE_DESKTOP: '1920px',
};

export const OVER_IPHONE5 : any = `@media (min-width: calc(${breakPoints.IPHONE5}))`;
export const OVER_MOBILE : any = `@media (min-width: calc(${breakPoints.MOBILE} + 1px))`;
export const OVER_TABLET : any = `@media (min-width: calc(${breakPoints.TABLET} + 1px))`;
export const OVER_DESKTOP : any = `@media (min-width: calc(${breakPoints.DESKTOP} + 1px))`;
export const UNDER_LARGE_DESKTOP : any = `@media (max-width: ${breakPoints.LARGE_DESKTOP})`;
export const UNDER_DESKTOP : any = `@media (max-width: ${breakPoints.DESKTOP})`;
export const UNDER_TABLET : any = `@media (max-width: ${breakPoints.TABLET});`
export const UNDER_IPHONE5 : any = `@media (max-width: ${breakPoints.IPHONE5})`

const media = {
    OVER_IPHONE5,
    OVER_MOBILE,
    OVER_TABLET,
    OVER_DESKTOP,

    UNDER_LARGE_DESKTOP,
    UNDER_DESKTOP,
    UNDER_TABLET,
    UNDER_IPHONE5
}

export default media