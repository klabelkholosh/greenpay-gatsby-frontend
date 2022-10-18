/* 
    This file configures Typography, which in turn determines the default font, font size and styling, across the entire site.
*/
import Typography from "typography";

const typography = new Typography(
    {
            baseFontSize: '18px',
            baseLineHeight: 1.666,
            headerFontFamily: ['Avenir Next', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
            headerWeight: 'normal',
            bodyFontFamily: ['Avenir Next', 'Georgia', 'serif'],
    }
);

export default typography;