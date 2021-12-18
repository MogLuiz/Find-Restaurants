import 'styled-components'

declare module 'styled-components'{
    export interface DefaultTheme{
        colors: {
            primary: string;
            background: string;
            text: string;
            success: string;
            white: string;
        },
        fonts: {
            regular: string;
        }    
    } 
}