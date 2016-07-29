/**
 * The UI Components Specification.
 * We should obey the SPEC as creating UI Component.
 *
 * The SPEC is protocol for communicating with UX.
 *
 * Style定义规范：
 *  对于一个元素设定Style的时候先定义自身的位置（Margin，Layouts.inVertical|Layouts.inHorizontal），自身的属性（Size, Backgrounds, Paddings）
 *  再定义子元素的布局（Layouts.vertical|Layouts.horizontal）。-> 方向->主轴空间->辅轴空间
 *  本着从外向内的设计原则。
 *
 *
 * Created by yuekong on 16/7/7.
 */

import {
    StyleSheet,
} from 'react-native'

import Dimensions from './Dimensions'
import Colors from './Colors'

const BlockPadding = {
    padding: Dimensions.BlockPadding,
}
const BlockPaddingHorizontal = {
    paddingHorizontal: Dimensions.BlockPadding,
}
const BlockPaddingCalendar = {
    padding: Dimensions.BlockPaddingCalendar,
}

const createStyles = (styleMetas, baseStyles) => {
        for (let metaKey in styleMetas) {
    let meta = styleMetas[metaKey]
    styleMetas[metaKey] = {
        ...baseStyles,
        ...meta,
    }
}

//return StyleSheet.create(styleMetas)
return {
    ...styleMetas
}
}

const HorizontalAligns = {
    top: {
        alignItems: 'flex-start',
    },
    center: {
        alignItems: 'center',
    },
    bottom: {
        alignItems: 'flex-end',
    },
    stretch: {
        alignItems: 'stretch',
    },
}

const VerticalAligns = {
    left: {
        alignItems: 'flex-start',
    },
    center: {
        alignItems: 'center',
    },
    right: {
        alignItems: 'flex-end',
    },
    stretch: {
        alignItems: 'stretch',
    }
}

const LayoutHorizontal = {
    flexDirection: 'row',
}

const LayoutVertical = {
    flexDirection: 'column',
}

export const Layouts = {
    horizontal: {
        left: createStyles({...HorizontalAligns}, {
            ...LayoutHorizontal,
            justifyContent: 'flex-start',
        }),
        center: createStyles({...HorizontalAligns}, {
            ...LayoutHorizontal,
            justifyContent: 'center',
        }),
        right: createStyles({...HorizontalAligns}, {
            ...LayoutHorizontal,
            justifyContent: 'flex-end',
        }),
        spaceBetween: createStyles({...HorizontalAligns}, {
            ...LayoutHorizontal,
            justifyContent: 'space-between',
        }),
        spaceAround: createStyles({...HorizontalAligns}, {
            ...LayoutHorizontal,
            justifyContent: 'space-around',
        }),
    },
    vertical: {
        top: createStyles({...VerticalAligns}, {
            ...LayoutVertical,
            justifyContent: 'flex-start',
        }),
        center: createStyles({...VerticalAligns}, {
            ...LayoutVertical,
            justifyContent: 'center',
        }),
        bottom: createStyles({...VerticalAligns}, {
            ...LayoutVertical,
            justifyContent: 'flex-end',
        }),
        spaceBetween: createStyles({...VerticalAligns}, {
            ...LayoutVertical,
            justifyContent: 'space-between',
        }),
        spaceAround: createStyles({...HorizontalAligns}, {
            ...LayoutVertical,
            justifyContent: 'space-around',
        }),
    },
    inHorizontal: {
        fillHorizontal: {
            flex: 1,
        },
        fillVertical: {
            alignSelf: 'stretch',
        },
    },
    inVertical: {
        fillVertical: {
            flex: 1,
        },
        fillHorizontal: {
            alignSelf: 'stretch'
        }
    },
    overflow: {
        hidden: {
            overflow: 'hidden',
        },
        visible: {
            overflow: 'visible',
        },
    }
}

export const Backgrounds = {
    clear: {
        backgroundColor: Colors.clear,
    },
    white5p: {
        backgroundColor: Colors.white5p,
    },
    white10p: {
        backgroundColor: Colors.white10p,
    },
    black: {
        backgroundColor: Colors.black,
    },
    white: {
        backgroundColor: Colors.white,
    },
    red: {
        backgroundColor: Colors.red,
    },
    green: {
        backgroundColor: Colors.green,
    },
    grey: {
        backgroundColor: Colors.grey,
    },
    transparent: {
        backgroundColor: Colors.transparent,
    },
    dot: {
        backgroundColor: Colors.dot,
    },
    onDot: {
        backgroundColor: Colors.onDot,
    },
}

export const Paddings = {
    block: {
        ...BlockPadding,
    },
    blockHorizontal: {
        ...BlockPaddingHorizontal,
    },
    blockCalendar: {
        ...BlockPaddingCalendar,
    },
}

export const Margins = {
    blockTop: {
        marginTop: Dimensions.Margin16,
    },
    spacingTop: {
        marginTop: Dimensions.Margin10,
    },
    spacingLeft: {
        marginLeft: Dimensions.Margin10,
    },
    commentLeft: {
        marginLeft: Dimensions.Margin42,
    },
    imageTop: {
        marginTop: Dimensions.Margin5,
    },
    imageLeft: {
        marginLeft: Dimensions.Margin5,
    },
    calendarLeft: {
        marginLeft: Dimensions.Margin20,
    },

}

const AvatarSizes = {
    large: {
        width: Dimensions.Avatar64,
        height: Dimensions.Avatar64,
    },
    middle: {
        width: Dimensions.Avatar32,
        height: Dimensions.Avatar32,
    },
    small: {
        width: Dimensions.Avatar24,
        height: Dimensions.Avatar24,
    },
}

export const Avatars = {
    box: {
        large: {
            width: Dimensions.Avatar64,
            height: Dimensions.Avatar64,
        },
        middle: {
            width: Dimensions.Avatar32,
            height: Dimensions.Avatar32,
        },
        small: {
            width: Dimensions.Avatar24,
            height: Dimensions.Avatar24,
        },
    },
    circle: {
        large: {
            width: Dimensions.Avatar64,
            height: Dimensions.Avatar64,
            borderRadius: Dimensions.Avatar64 / 2,
        },
        middle: {
            width: Dimensions.Avatar32,
            height: Dimensions.Avatar32,
            borderRadius: Dimensions.Avatar32 / 2,
        },
        small: {
            width: Dimensions.Avatar24,
            height: Dimensions.Avatar24,
            borderRadius: Dimensions.Avatar24 / 2,
        },
        dot: {
            width: Dimensions.Avatar10,
            height: Dimensions.Avatar10,
            borderRadius: Dimensions.Avatar10 / 2,
        },
    }
}

export const Icons = {
    large: {
        width: Dimensions.Avatar64,
        height: Dimensions.Avatar64,
    },
    middle: {
        width: Dimensions.Avatar32,
        height: Dimensions.Avatar32,
    },
    small: {
        width: Dimensions.Avatar24,
        height: Dimensions.Avatar24,
    },
}

export const Separators = {

}

const TextColors = {
    white: {
        color: Colors.white,
    },
    white70p: {
        color: Colors.white70p,
    },
    brand: {
        color: Colors.uniBrandColor,
    }
}

export const Texts = {
    huge: createStyles({...TextColors}, {
        fontSize: 30,
    }),
    large: createStyles({...TextColors}, {
        fontSize: 16,
    }),
    normal: createStyles({...TextColors}, {
        fontSize: 14,
    }),
    small: createStyles({...TextColors}, {
        fontSize: 12,
    }),
    bold: {
        fontWeight: 'bold',
    },
    normalWeight: {
        fontWeight: 'normal',
    }
}