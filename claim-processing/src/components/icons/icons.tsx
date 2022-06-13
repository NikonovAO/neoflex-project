import React from "react";
import LogoBig from "../../assets/svg/logo/logo-big.svg";
import LogoSmall from "../../assets/svg/logo/logo-small.svg";
import ArrowDown from "../../assets/svg/icons/icon-arrow-down.svg";
import ArrowUp from "../../assets/svg/icons/icon-arrow-up.svg";
import ChevronDown from "../../assets/svg/icons/icon-chevron-down.svg";
import Bell from "../../assets/svg/icons/icon-bell.svg";
import Left from "../../assets/svg/icons/icon-left.svg";
import Lock from "../../assets/svg/icons/icon-lock.svg";
import LogOut from "../../assets/svg/icons/icon-log-out.svg";
import Mail from "../../assets/svg/icons/icon-mail.svg";
import Right from "../../assets/svg/icons/icon-right.svg";
import Search from "../../assets/svg/icons/icon-search.svg";
import Archive from "../../assets/svg/nav-bar/icon-archive.svg";
import Database from "../../assets/svg/nav-bar/icon-database.svg";
import DollarSign from "../../assets/svg/nav-bar/icon-dollar-sign.svg";
import Globe from "../../assets/svg/nav-bar/icon-globe.svg";
import Home from "../../assets/svg/nav-bar/icon-home.svg";
import Navigation from "../../assets/svg/nav-bar/icon-navigation.svg";
import PieChart from "../../assets/svg/nav-bar/icon-pie-chart.svg";

type IconsProps = {
  iconName: string;
}

const Icons: React.FC<IconsProps> = (props: IconsProps) => {
  const { iconName } = props;
  switch (iconName) {
    case 'logo-big':
      return <img src={LogoBig} alt={iconName} className={`icon icon-${iconName}`}/>;
    case 'logo-small':
      return <img src={LogoSmall} alt={iconName} className={`icon icon-${iconName}`}/>;
    case 'arrow-down':
      return <img src={ArrowDown} alt={iconName} className={`icon icon-${iconName}`}/>;
    case 'arrow-up':
      return <img src={ArrowUp} alt={iconName} className={`icon icon-${iconName}`}/>;
    case 'chevron-down':
      return <img src={ChevronDown} alt={iconName} className={`icon icon-${iconName}`}/>;
    case 'bell':
      return <img src={Bell} alt={iconName} className={`icon icon-${iconName}`}/>;
    case 'left':
      return <img src={Left} alt={iconName} className={`icon icon-${iconName}`}/>;
    case 'lock':
      return <img src={Lock} alt={iconName} className={`icon icon-${iconName}`}/>;
    case 'log-out':
      return <img src={LogOut} alt={iconName} className={`icon icon-${iconName}`}/>;
    case 'mail':
      return <img src={Mail} alt={iconName} className={`icon icon-${iconName}`}/>;
    case 'right':
      return <img src={Right} alt={iconName} className={`icon icon-${iconName}`}/>;
    case 'search':
      return <img src={Search} alt={iconName} className={`icon icon-${iconName}`}/>;
    case 'archive':
      return <img src={Archive} alt={iconName} className={`icon icon-${iconName}`}/>;
    case 'database':
      return <img src={Database} alt={iconName} className={`icon icon-${iconName}`}/>;
    case 'dollar-sign':
      return <img src={DollarSign} alt={iconName} className={`icon icon-${iconName}`}/>;
    case 'globe':
      return <img src={Globe} alt={iconName} className={`icon icon-${iconName}`}/>;
    case 'home':
      return <img src={Home} alt={iconName} className={`icon icon-${iconName}`}/>;
    case 'navigation':
      return <img src={Navigation} alt={iconName} className={`icon icon-${iconName}`}/>;
    case 'pie-chart':
      return <img src={PieChart} alt={iconName} className={`icon icon-${iconName}`}/>;
    default: return <></>;
  }
};

export default Icons;