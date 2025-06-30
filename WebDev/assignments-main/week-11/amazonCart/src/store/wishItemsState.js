import { atom } from "recoil";


export const wishItemState = atom({
  default: [
    {
      id: "1",
      imageUrl: `https://m.media-amazon.com/images/I/71FSIp+tDNL._AC_SL1500_.jpg`,
      name: "Redragon K552 Mechanical Gaming Keyboard, 87-Key Compact, LED Gaming Keyboard with Red Switches, Anti-Ghosting, Metal Frame for PC Gaming & Typing, Beginner-Friendly (Black)",
      price: "₹3249",
    },
    {
      id: "2",
      imageUrl: `https://m.media-amazon.com/images/I/710HmaQgX3L.__AC_SX300_SY300_QL70_FMwebp_.jpg`,
      name: "Dell S2425HS Monitor - 23.8 Inch, FHD (1920x1080) Display, 100Hz Refresh Rate 1500:1 Contrast Ratio, TÜV Rheinland Eye Comfort 4 Star, Integrated 2x5W Speaker, Height/Tilt/Swivel/Pivot - Ash White",
      price: "₹12560",
    },
    {
      id: "3",
      imageUrl: `https://m.media-amazon.com/images/I/715bJHtMLmL._AC_SL1500_.jpg`,
      name: "Huuger 55 x 28 Large Electric Standing Desk, Height Adjustable Computer Desk, 27.6 Deep Desktop, Stand up Gaming Office Table with 2",
      price: "₹17500",
    },
  ],
  key: "wishList",
});

