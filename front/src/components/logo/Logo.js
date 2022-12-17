import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Link } from '@mui/material';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
  const theme = useTheme();

  const PRIMARY_LIGHT = theme.palette.primary.light;

  const PRIMARY_MAIN = theme.palette.primary.main;

  const PRIMARY_DARK = theme.palette.primary.dark;

  // OR using local (public folder)
  // -------------------------------------------------------
  // const logo = (
  //   <Box
  //     component="img"
  //     src="/logo/logo_single.svg" => your path
  //     sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
  //   />
  // );

  const logo = (
    <Box
      ref={ref}
      component="div"
      sx={{
        width: 40,
        height: 40,
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="100%" height="100%" viewBox="0 0 500.000000 500.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M4555 4720 c-4 -6 9 -29 29 -50 45 -50 47 -87 8 -131 -21 -24 -39
-32 -73 -36 -57 -7 -86 8 -105 53 -12 29 -12 39 1 76 15 46 14 54 -10 44 -18
-7 -35 -47 -35 -83 0 -65 68 -133 133 -133 97 0 187 85 187 175 0 50 -44 95
-94 95 -19 0 -38 -5 -41 -10z"/>
<path d="M2061 3669 c-76 -13 -211 -62 -287 -104 -165 -92 -493 -399 -642
-600 -87 -118 -193 -291 -290 -475 -160 -303 -290 -654 -462 -1245 -17 -60
-54 -184 -82 -275 -121 -396 -129 -436 -104 -475 20 -31 56 -33 81 -5 14 16
16 23 7 32 -18 18 -15 48 12 135 13 43 59 195 101 338 164 561 283 915 381
1135 139 314 309 610 462 805 92 116 154 180 347 354 242 219 545 324 716 248
154 -69 287 -300 359 -626 49 -222 70 -414 70 -631 l0 -162 -42 7 c-254 44
-529 -51 -725 -250 -247 -251 -395 -587 -394 -895 2 -240 67 -448 175 -555
269 -266 688 3 883 568 19 56 39 118 44 137 45 176 83 386 99 545 16 164 31
279 35 284 8 8 100 -32 260 -112 185 -92 259 -119 402 -147 187 -36 308 -21
382 46 39 35 57 69 40 79 -4 3 -45 -2 -91 -11 -140 -28 -332 -5 -493 59 -33
14 -130 59 -215 100 -85 42 -184 87 -220 99 l-65 23 -7 225 c-13 408 -47 662
-119 882 -70 210 -158 334 -304 425 -80 51 -180 64 -314 42z m626 -1670 l45
-12 -7 -71 c-67 -695 -210 -1130 -444 -1353 -95 -90 -257 -148 -348 -124 -100
27 -173 124 -218 291 -83 307 -11 622 210 918 141 189 308 309 483 348 74 16
220 17 279 3z"/>
</g>
</svg>
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return (
    <Link to="/" component={RouterLink} sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  sx: PropTypes.object,
  disabledLink: PropTypes.bool,
};

export default Logo;