import {Component, cloneElement} from 'react';
import {TCssTemplate} from '../types/index';
import decoratorCssComponent from './decorator/cssComponent';
import decoratorClass from './decorator/class';
import decoratorMethod from './decorator/method';
import {styleit} from './styleit';

export type TCssDecorator = any;

const isReactComponent = f => !!(f && f.prototype && f.prototype.render);

const css: TCssDecorator = (a?: TCssTemplate | any, b?) => {
    // If component decorator without arguments.
    if (isReactComponent(a)) {
        decoratorCssComponent(a);
        return;
    }

    return (instanceOrComp, key, descriptor) =>
        typeof key === 'string'
            ? decoratorMethod(a, b)(instanceOrComp, key, descriptor)
            : decoratorClass(a)(instanceOrComp);
};

export default css;
