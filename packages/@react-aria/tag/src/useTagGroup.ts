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

import {DOMProps} from '@react-types/shared';
import {filterDOMProps, mergeProps} from '@react-aria/utils';
import {HTMLAttributes, useState} from 'react';
import {useFocusWithin} from '@react-aria/interactions';

interface AriaTagGroupProps extends DOMProps {
  isDisabled?: boolean,
  isReadOnly?: boolean, // removes close button
  validationState?: 'valid' | 'invalid'
}

interface TagGroupAria {
  tagGroupProps: HTMLAttributes<HTMLElement>
}

export function useTagGroup(props: AriaTagGroupProps): TagGroupAria {
  const {isDisabled} = props;
  let [isFocusWithin, setFocusWithin] = useState(false);
  let {focusWithinProps} = useFocusWithin({
    onFocusWithinChange: setFocusWithin
  });

  let domProps = filterDOMProps(props);
  return {
    tagGroupProps: mergeProps(domProps, {
      role: 'grid',
      'aria-atomic': false,
      'aria-relevant': 'additions',
      'aria-live': isFocusWithin ? 'polite' : 'off',
      'aria-disabled': isDisabled,
      ...focusWithinProps
    } as HTMLAttributes<HTMLElement>)
  };
}
