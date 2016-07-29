/**
 * Created by ZRZn1 on 16/7/11.
 */
import React,{Component,PropTypes} from 'react'


import {
    View,
    Text,
    Animated,
    ScrollView,
    Image,
} from 'react-native'

import {
    Layouts,
    Texts,
    Avatars,
    Icons,
    Margins,
    Paddings,
    Backgrounds,
} from './Styles'
import Dimensions from ‘./Dimensions'


class SwiperComp extends Component {
    constructor(props) {
        super(props);
        this.length = this.props.length;
        this.windowWidth = Dimensions.WindowWidth;
        this.jsList = new Array();
        this.state = {
            current: this.props.loop ? 1 : 0,
        }
        this.dotList = new Array();
        if (this.props.loop) {
            this.jsList.push(<View key={0}>
                {this.props.renderContent(this.length-1)}
            </View>);
            for (var i = 0; i < this.length; i++) {
                this.dotList.push(<View key={i}
                                        style={{backgroundColor:this.props.dot,width: this.props.dotDiameter,height: this.props.dotDiameter,borderRadius: this.props.dotDiameter / 2,}}/>)
                this.jsList.push(<View key={i+1}>
                    {this.props.renderContent(i)}
                </View>);
            }
            this.jsList.push(<View key={this.length+1}>
                {this.props.renderContent(0)}
            </View>);
            this.length = this.jsList.length;
        }else{
            for (var i = 0; i < this.length; i++) {
                this.dotList.push(<View key={i}
                                        style={{backgroundColor:this.props.dot,width: this.props.dotDiameter,height: this.props.dotDiameter,borderRadius: this.props.dotDiameter / 2,}}/>)
                this.jsList.push(<View key={i}>
                    {this.props.renderContent(i)}
                    </View>);
            }
        }
    }

    _onScroll(event) {
        var x = event.nativeEvent.contentOffset.x;
        var index = x / this.windowWidth;
        if (this.props.loop) {
            if (index - parseInt(index) < 0.03 && this.state.current != parseInt(index)) {
                this.setState({current: parseInt(index) == 0 ? 1 : parseInt(index)});
            } else if (index - parseInt(index) > 0.97 && this.state.current != parseInt(index) + 1) {
                this.setState({current: parseInt(index) == this.length - 2 ? this.length - 2 : parseInt(index) + 1});
            }
            if (index - 0 < 0.03 && index >= 0) {
                this.xscrollView.scrollTo({x: (this.length - 2) * this.windowWidth, y: 0, animated: false});
                this.setState({current: this.length - 2});
            } else if (this.length - 1 - index < 0.1) {
                this.xscrollView.scrollTo({x: this.windowWidth, y: 0, animated: false});
                this.setState({current: 1});
            }
        }else {
            if (index - parseInt(index) < 0.03 && this.state.current != parseInt(index)) {
                this.setState({current: parseInt(index)});
            } else if (index - parseInt(index) > 0.97 && this.state.current != parseInt(index) + 1) {
                this.setState({current: parseInt(index) + 1});
            }
        }
    }

    _onMomentEnd(event) {
        //console.log("_onMomentEnd == "+event.nativeEvent.contentOffset.x);
    }

    componentDidMount() {
        if (this.props.loop) {
            setTimeout(() => {
                this.xscrollView.scrollTo({x: this.windowWidth, y: 0, animated: false});
            }, 0);
        }
        if (this.props.loop && this.props.autoPlay) {
            setInterval(() => {
                this.xscrollView.scrollTo({x: this.windowWidth * (1 + this.state.current), y: 0, animated: true});
            }, this.props.autoPlayTime)
        }

    }

    render() {
        return (
            <View style={[Layouts.vertical.top.center,this.props.style]}>
                <View
                    style={[Layouts.vertical.top.center,{position:'absolute',top:0,left:0,width:this.windowWidth}]}>
                    <ScrollView ref={(scrollView) => { this.xscrollView = scrollView; }}
                                horizontal={true}
                                pagingEnabled={true}
                                showsHorizontalScrollIndicator={false}
                                onMomentumScrollEnd={this._onMomentEnd}
                                scrollEventThrottle={10}
                                onScroll={this._onScroll.bind(this)}>
                        {this.jsList}
                    </ScrollView>
                </View>
                <View
                    style={[{position:'absolute',bottom:8,left:this.windowWidth/2-((this.props.length-1)*(this.props.dotDiameter+this.props.dotSpacing)+this.props.dotDiameter)/2,width:(this.props.length-1)*(this.props.length-1)*(this.props.dotDiameter+this.props.dotSpacing)+this.props.dotDiameter,height:this.props.dotDiameter}]}>
                    <View
                        style={[Layouts.horizontal.spaceBetween.center,{position:'absolute',top:0,left:0,width:(this.props.length-1)*(this.props.dotDiameter+this.props.dotSpacing)+this.props.dotDiameter}]}>
                        {this.dotList}
                    </View>
                    <View
                        style={{backgroundColor:this.props.onDot,position:'absolute',left:this.props.loop ? (this.props.dotDiameter+this.props.dotSpacing)*(this.state.current-1) : (this.props.dotDiameter+this.props.dotSpacing)*this.state.current,top:0,
                        width: this.props.dotDiameter,height: this.props.dotDiameter,borderRadius: this.props.dotDiameter / 2}}/>
                </View>
            </View>
        )
    }
}
SwiperComp.propTypes= {
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
}

SwiperComp.defaultProps= {
    loop: true,
    autoPlay: false,
    autoPlayTime: 3000,
    style: {height:200},
    dot: '#00000070',
    onDot: '#FCB800',
    dotDiameter: 10,
    dotSpacing: 7,
}
export default SwiperComp;