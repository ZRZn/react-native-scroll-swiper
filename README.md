# react-native-scroll-swiper
A swiper which uses scrollView in react-native,both fit in Android and iOS.
It supports loop and autoPlay,there are some props below:

  length: PropTypes.number.isRequired,
    loop: PropTypes.bool,
    autoPlay: PropTypes.bool,
    autoPlayTime: PropTypes.number,
    renderContent: PropTypes.func.isRequired,
    style: View.propTypes.style,
    dot: PropTypes.string,
    onDot: PropTypes.string,
    dotDiameter: PropTypes.number,
    dotSpacing: PropTypes.number,
