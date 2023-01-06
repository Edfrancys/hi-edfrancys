import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            redLight: string;     
            blueLight: string; 
            blueSuperLight: string; 
        };
    }
}