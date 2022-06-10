import logoBig from "../../assets/svg/logo/logo-big.svg";

export default function Icons (iconName: string | undefined) {
  switch(iconName) {
    case 'logo-big':
      return logoBig;
  }
}