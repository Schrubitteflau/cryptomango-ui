import { createTheme } from "@mui/material/styles";
import Icon from "@mui/material/Icon";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    bold: true;
  }
}

const CustomTheme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "bold" },
          style: {
            fontWeight: "bold",
            border: `4px solid black`,
            color: "orange"
          }
        }
      ],
      defaultProps: {
        disableElevation: true,
        disableFocusRipple: true,
        disableRipple: true,
        endIcon: <Icon>star</Icon>
      }
    }
  }
});

export { CustomTheme };


/*import { makeStyles } from '@mui/styles';

// https://youtu.be/NY7aBE5xHGA

// créer un thème

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    },
    icon: {
        marginRight: '20px'
    },
    button: {
        marginTop: '40px'
    },
    cardGrid: {
        padding: '20px 0'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%' // 16:9
    },
    cardContent: {
        flexGrow: 1
    },
    footer: {
        backgroundColor: theme.palette.background.paper, 
        padding: '50px 0'
    }
}));

export default useStyles;*/