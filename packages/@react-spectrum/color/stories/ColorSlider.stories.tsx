/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import {action} from '@storybook/addon-actions';
import {ColorSlider} from '../';
import {Flex} from '@react-spectrum/layout';
import {parseColor} from '@react-stately/color';
import React, {useState} from 'react';
import {storiesOf} from '@storybook/react';
import {Text} from '@react-spectrum/text';

storiesOf('ColorSlider', module)
  .add(
    'default',
    () => <ColorSlider defaultValue="#7f0000" channel={'red'} onChange={action('change')} onChangeEnd={action('changeEnd')} />
  )
  .add(
    'no label, default aria-label',
    () => <ColorSlider defaultValue="#7f0000" channel={'red'} label={null} onChange={action('change')} onChangeEnd={action('changeEnd')} />
  )
  .add(
    'no value label',
    () => <ColorSlider defaultValue="#7f0000" channel={'red'} showValueLabel={false} onChange={action('change')} onChangeEnd={action('changeEnd')} />
  )
  .add(
    'custom aria-label',
    () => <ColorSlider defaultValue="#7f0000" channel={'red'} aria-label="Color Picker Channel: Red" onChange={action('change')} onChangeEnd={action('changeEnd')} />
  )
  .add(
    'step',
    () => <ColorSlider defaultValue="hsl(0, 100%, 50%)" channel={'hue'} step={72} onChange={action('change')} onChangeEnd={action('changeEnd')} />
  )
  .add(
    'disabled',
    () => <ColorSlider defaultValue="#333333" channel={'red'} isDisabled onChange={action('change')} onChangeEnd={action('changeEnd')} />
  )
  .add(
    'vertical',
    () => <ColorSlider defaultValue="#ff0000" channel={'red'} orientation="vertical" onChange={action('change')} onChangeEnd={action('changeEnd')} />
  )
  .add(
    'controlled',
    () => <ColorSlider value="#ff0000" channel={'red'} onChange={action('change')} onChangeEnd={action('changeEnd')} />
  )
  .add(
    'custom width',
    () => <ColorSlider defaultValue="#7f0000" channel={'red'} width={300} onChange={action('change')} onChangeEnd={action('changeEnd')} />
  )
  .add(
    'custom height',
    () => <ColorSlider defaultValue="#7f0000" channel={'red'} orientation="vertical" height={300} onChange={action('change')} onChangeEnd={action('changeEnd')} />
  )
  .add(
    'rgba',
    () => {
      let [color, setColor] = useState(parseColor('#ff00ff'));
      function onChange(c) {
        setColor(c);
        action('change')(c);
      }
      function onChangeEnd(c) {
        setColor(c);
        action('changeEnd')(c);
      }
      return (<div role="group" aria-label="RGBA Color Picker">
        <Flex gap="size-500" alignItems="center">
          <Flex direction="column">
            <ColorSlider value={color} onChange={onChange} onChangeEnd={onChangeEnd} channel={'red'} />
            <ColorSlider value={color} onChange={onChange} onChangeEnd={onChangeEnd} channel={'green'} />
            <ColorSlider value={color} onChange={onChange} onChangeEnd={onChangeEnd} channel={'blue'} />
            <ColorSlider value={color} onChange={onChange} onChangeEnd={onChangeEnd} channel={'alpha'} />
          </Flex>
          <Flex direction="column" alignItems="center"gap="size-100">
            <div style={{width: '100px', height: '100px', background: color.toString('css')}} />
            <Text>{color.toString('hexa')}</Text>
          </Flex>
        </Flex>
      </div>);
    }
  )
  .add(
    'hsla',
    () => {
      let [color, setColor] = useState(parseColor('hsla(0, 100%, 50%, 0.5)'));
      function onChange(c) {
        setColor(c);
        action('change')(c);
      }
      function onChangeEnd(c) {
        setColor(c);
        action('changeEnd')(c);
      }
      return (<div role="group" aria-label="HSLA Color Picker">
        <Flex gap="size-500" alignItems="center">
          <Flex direction="column">
            <ColorSlider value={color} onChange={onChange} onChangeEnd={onChangeEnd} channel={'hue'} />
            <ColorSlider value={color} onChange={onChange} onChangeEnd={onChangeEnd} channel={'saturation'} />
            <ColorSlider value={color} onChange={onChange} onChangeEnd={onChangeEnd} channel={'lightness'} />
            <ColorSlider value={color} onChange={onChange} onChangeEnd={onChangeEnd} channel={'alpha'} />
          </Flex>
          <Flex direction="column" alignItems="center" gap="size-100">
            <div style={{width: '100px', height: '100px', background: color.toString('css')}} />
          </Flex>
        </Flex>
      </div>);
    }
  )
  .add(
    'hsba',
    () => {
      let [color, setColor] = useState(parseColor('hsba(0, 100%, 50%, 0.5)'));
      function onChange(c) {
        setColor(c);
        action('change')(c);
      }
      function onChangeEnd(c) {
        setColor(c);
        action('changeEnd')(c);
      }
      return (<div role="group" aria-label="HSBA Color Picker">
        <Flex gap="size-500" alignItems="center">
          <Flex direction="column">
            <ColorSlider value={color} onChange={onChange} onChangeEnd={onChangeEnd} channel={'hue'} />
            <ColorSlider value={color} onChange={onChange} onChangeEnd={onChangeEnd} channel={'saturation'} />
            <ColorSlider value={color} onChange={onChange} onChangeEnd={onChangeEnd} channel={'brightness'} />
            <ColorSlider value={color} onChange={onChange} onChangeEnd={onChangeEnd} channel={'alpha'} />
          </Flex>
          <Flex direction="column" alignItems="center" gap="size-100">
            <div style={{width: '100px', height: '100px', background: color.toString('css')}} />
          </Flex>
        </Flex>
      </div>);
    }
  );
