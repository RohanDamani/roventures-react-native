import { SCREEN_HEIGHT } from '../stylesheet';

export const resize = () => {
  return SCREEN_HEIGHT < 738;
};

export const resizeVertical = (xs, sm, md, lg, xl, xxl) => {
    // iPhone 5, iPhone 5S, iPhone 5C (4 Inch) - 640 x 1136
  if (SCREEN_HEIGHT < 570) {
    return xs;
    //  iPhone 6, iPhone 6S, iPhone 7, iPhone 8 (4.7 Inch) - 750 x 1334
    //  iPhone 6 Plus, iPhone 6S Plus, iPhone 7 Plus, iPhone 8 Plus (5.5 Inch) - 1242 x 2208
  } else if (SCREEN_HEIGHT < 738) {
    return sm;
    //  iPhone X, iPhone XS (5.8 Inch) - 1125 x 2436
  } else if (SCREEN_HEIGHT < 814) {
    return md;
    //  iPhone XR (6.1 Inch) - 828 x 1792
    //  iPhone XS Max (6.5 Inch) - 1242 x 2688
    //  iPad Mini 2, iPad Mini 3, iPad Mini 4 (7.9 Inch) - 1536 x 2048
  } else if (SCREEN_HEIGHT < 1022) {
    return lg;
    //  iPad 3, iPad 4, iPad Pro, iPad Air, iPad Air 2 (9.7 Inch) - 1536 x 2048
    //  iPad Pro (10.5 Inch) - 1668 x 2224
  } else if (SCREEN_HEIGHT < 1114) {
    return xl;
    //  iPad Pro (12.9 Inch)- 2048 x 2732
  } else if (SCREEN_HEIGHT > 1115) {
    return xxl || xl;
  }
};
