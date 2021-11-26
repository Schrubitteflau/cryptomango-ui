import React, { useState } from 'react';
import { Typography, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Container, Button, Slide, List, ListSubheader, ListItemText, ListItemIcon, Collapse, ListItemButton, SlideProps, Theme } from '@mui/material';
import HeadToolbar from "./Components/HeadToolbar";
import NavMenu from './Components/NavMenu';

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
      // extends React's HTMLAttributes
      sx?: any//SxProps<Theme>;
    }
}